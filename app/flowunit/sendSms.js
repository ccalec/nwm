/**
* @fileOverview 发送短信
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name SendSms
*/

var FlowUnitClass = require('../class/flowUnitClass');
var QueryData = require('./queryData');
var AddData = require('./addData');
var DataClass = require('../class/dataClass');
var _Cache = require('../class/cacheClass');
var sms = require('../lib/sms');
var moment = require('moment');

module.exports = class SendSms extends FlowUnitClass {
  * execute(){
    var param = this.param;
    //获取短信系统配置
    var storeRes = (yield new QueryData({
      _Param: {
        alias: 'store',
        filterFields: [{
          keyField: 'id'
        }],
        filterParam: {
          id: 1
        }
      }
    }).execute()).data;
    if(!storeRes.listData[0].syscfg){
      return this.execEnd(0, '操作失败');
    }
    var smscfg = JSON.parse(storeRes.listData[0].syscfg);
    var sign = smscfg.sms_sign;
    var key = smscfg.sms_key;
    var phones = param.keyValue.phones.split(',');
    var content = param.keyValue.template_content;
    var succNum = 0;
    var failNum = 0;
    for(var phone of phones){
      //查询用户／卡信息
      var cardRes = (yield new QueryData({
        _Param: {
          alias: 'card',
          filterFields: [{
            keyField: 'user_id',
            valRange: {
              tableName: 'nw_user',
              filterFields: [{
                keyField: 'phone',
                paramName: 'user_phone'
              }]
            },
          }],
          otherFields: [{
            keyField: 'user_id',
            tableName: 'nw_user',
            fields: ['birthday']
          }],
          limit: 1,
          filterParam: {
            user_phone: phone
          }
        }
      }).execute()).data;
      var cardInfo = cardRes.listData[0];
      if(!cardInfo) {
        failNum++;
        continue;
      }
      var smscon = content.replace(/\{(.*?)\}/g, function(a,b){
        if(b){
          if(b=='amount') return (cardInfo.amount/100).toFixed(2);
          if(b=='birthday') return (cardInfo.birthday ? moment(cardInfo.birthday).format('yyyy/MM/dd') : '');
          return cardInfo[b] || '';
        }
      })
      //发送短信
      var smsRes = yield sms.send(key, {
        mobile: phone,
        message: smscon+'【'+sign+'】'
      });
      if(smsRes.error==0){
        succNum++;
      }else{
        failNum++;
      }
    }
    //增加短信记录
    yield new AddData({
      _Chain: this.chain,
      _Param: {
        alias: 'sms_record',
        keyValue: {
          phones: phones,
          phone_num: phones.length,
          succ_num: succNum,
          fail_num: failNum,
          template_id: param.keyValue.template_id,
          template_content: param.keyValue.template_content,
          template_name: param.keyValue.template_name
        }
      }
    }).execute();
    return this.execEnd(1, '发送成功');
  }
}