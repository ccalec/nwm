/**
* @fileOverview 查询首页统计信息
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name QueryHome
*/

var FlowUnitClass = require('../class/flowUnitClass');
var QueryData = require('./queryData');
var moment = require('moment');

module.exports = class QueryHome extends FlowUnitClass {
  * execute(){
    var param = this.param;
    // mock store info
    var storeInfo = {
      store_id: 1,
      store_name: '总店',
      contacter: '李老板',
      phone: '13707897890',
      tel: '0740-57687892',
      address: '广东花都'
    };
    //mock user info
    var adminInfo = {
      name: '马云',
      roleName: '超级管理员'
    };
    // 查询条件
    var todayStart = moment().startOf('day').format('YYYY-MM-DD HH:mm:ss');
    var todayEnd = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
    var yestodayStart = moment().subtract(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss');

    //查询今天和昨天的新增会员
    var yesWhere = `nw_user.gmt_create > '${yestodayStart}' AND nw_user.gmt_create < '${todayStart}'`;
    var todayWhere = `nw_user.gmt_create > '${todayStart}' AND nw_user.gmt_create < '${todayEnd}'`;
    var count_yes_user = (yield new QueryData({
      _Param: {
        alias: 'user',
        resultSet: 'count',
        tableWhere: yesWhere
      }
    }).execute()).data.listCount;
    var count_today_user = (yield new QueryData({
      _Param: {
        alias: 'user',
        resultSet: 'count',
        tableWhere: todayWhere
      }
    }).execute()).data.listCount;
    //查询今天和昨天的营业总额
    var yesWhere = `nw_cash_record.gmt_create > '${yestodayStart}' AND nw_cash_record.gmt_create < '${todayStart}'`;
    var todayWhere = `nw_cash_record.gmt_create > '${todayStart}' AND nw_cash_record.gmt_create < '${todayEnd}'`;
    var sum_yes_amount = (yield new QueryData({
      _Param: {
        alias: 'cash_record',
        tableWhere: yesWhere,
        aggrModel: {
          fields: [{
            fieldName: 'real_amount',
            asName: 'sum_real_amount',
            type: 'sum'
          }]
        }
      }
    }).execute()).data.listData[0].sum_real_amount;

    var sum_today_amount = (yield new QueryData({
      _Param: {
        alias: 'cash_record',
        tableWhere: todayWhere,
        aggrModel: {
          fields: [{
            fieldName: 'real_amount',
            asName: 'sum_real_amount',
            type: 'sum'
          }]
        }
      }
    }).execute()).data.listData[0].sum_real_amount;
    //查寻今天和昨天的充值总金额
    var yesWhere = `nw_prepaid_record.gmt_create > '${yestodayStart}' AND nw_prepaid_record.gmt_create < '${todayStart}'`;
    var todayWhere = `nw_prepaid_record.gmt_create > '${todayStart}' AND nw_prepaid_record.gmt_create < '${todayEnd}'`;
    var sum_yes_prepaid = (yield new QueryData({
      _Param: {
        alias: 'prepaid_record',
        tableWhere: yesWhere,
        aggrModel: {
          fields: [{
            fieldName: 'amount',
            asName: 'sum_amount',
            type: 'sum'
          }]
        }
      }
    }).execute()).data.listData[0].sum_amount;
    var sum_today_prepaid = (yield new QueryData({
      _Param: {
        alias: 'prepaid_record',
        tableWhere: todayWhere,
        aggrModel: {
          fields: [{
            fieldName: 'amount',
            asName: 'sum_amount',
            type: 'sum'
          }]
        }
      }
    }).execute()).data.listData[0].sum_amount;
    return this.execEnd(1, '查询成功',{
      storeInfo: storeInfo,
      adminInfo: adminInfo,
      count_yes_user: count_yes_user,
      count_today_user: count_today_user,
      sum_yes_amount: sum_yes_amount/100,
      sum_today_amount: sum_today_amount/100,
      sum_yes_prepaid: sum_yes_prepaid/100,
      sum_today_prepaid: sum_today_prepaid/100
    });
  }
}