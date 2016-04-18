/**
* @fileOverview 收银台提交接口
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name cashSubmit
*/

var FlowUnitClass = require('../class/flowUnitClass');
var QueryData = require('./queryData');
var AddData = require('./addData');
var ModData = require('./modData');
var DataClass = require('../class/dataClass');
var _Cache = require('../class/cacheClass');

module.exports = class CashSubmit extends FlowUnitClass {
  * execute(){
    var param = this.param;
    //卡状态校验
    if(param.cashData.card_no){
      var cardRes = yield new QueryData({
        _Param: {
          alias: 'card',
          filterFields: [{
            keyField: 'no'
          }],
          filterParam: {
            no: param.cashData.card_no
          }
        }
      }).execute();
      if(!cardRes.data || !cardRes.data.listData || !cardRes.data.listData[0]){
        return this.execEnd(-1, '此卡号不存在');
      }
      var cardInfo = cardRes.data.listData[0];
      if(cardInfo.status != 1){
        return this.execEnd(-2, '卡状态异常');
      }
      if(cardInfo.amount < param.cashData.real_amount){
        return this.execEnd(-3, '卡余额不足');
      }
    }
    //添加收银记录
    var cashRecRes = yield new AddData({
      _Chain: this.chain,
      _Param: {
        alias: 'cash_record',
        keyValue: param.cashData
      }
    }).execute();
    //添加收银明细记录
    var batchOutData = [];
    var inventoryData = [];
    var cash_id = cashRecRes.data.insertId;
    var cashDetailData = param.cashDetailData;
    cashDetailData.forEach(function(item){
      item.cash_record_id = cash_id;
      if(item.item_type=='goods'){
        batchOutData.push({
          goods_id: item.item_id,
          quantity: item.quantity,
          type: 1
        })
        inventoryData.push({
          item_id: item.item_id,
          quantity: item.quantity
        })
      }
    });
    yield new AddData({
      _Chain: this.chain,
      _Param: {
        alias: 'cash_detail',
        keyValue: cashDetailData
      }
    }).execute();
    //增加出库记录
    if(batchOutData.length){
      yield new AddData({
        _Chain: this.chain,
        _Param: {
          alias: 'batch_out',
          keyValue: batchOutData
        }
      }).execute();
    }
    //增加积分记录
    if(param.scoreRecordData){
      yield new AddData({
        _Chain: this.chain,
        _Param: {
          alias: 'score_record',
          keyValue: param.scoreRecordData
        }
      }).execute();
      //更新卡积分，卡余额
      var updateScoreSql = `update nw_card set score = score + ${param.scoreRecordData.score}, amount = amount-${param.cashData.real_amount} where no = ${param.scoreRecordData.card_no}  and status = 1`;
      var res = yield DataClass.execsql(updateScoreSql);
      _Cache.clearDataCache('card');  //清楚查询缓存
    }
    //更新商品库存
    for (var i = 0; i < inventoryData.length; i++) {
      var one = inventoryData[i];
      var updateInventorySql = `update nw_goods set inventory = inventory - ${one.quantity} where id = ${one.item_id}`;
      yield DataClass.execsql(updateInventorySql);
      _Cache.clearDataCache('goods');  //清楚查询缓存
    };
    return this.execEnd(1, '收银成功');
  }
}