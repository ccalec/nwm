/**
* @fileOverview 会员积分变更
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name scoreOper
*/

var FlowUnitClass = require('../class/flowUnitClass');
var AddData = require('./addData');
var DataClass = require('../class/dataClass');
var _Cache = require('../class/cacheClass');

module.exports = class scoreOper extends FlowUnitClass {
  * execute(){
    var param = this.param;
    //增加积分变更记录
    yield new AddData({
      _Chain: this.chain,
      _Param: {
        alias: 'score_record',
        keyValue: param
      }
    }).execute();
    //变更卡积分
    if(param.type==1){
      var updateScoreSql = `update nw_card set score = score + ${param.score} where no = ${param.card_no} and status = 1`;
    }else{
      var updateScoreSql = `update nw_card set score = score - ${param.score} where no = ${param.card_no} and status = 1`;
    }
    var res = yield DataClass.execsql(updateScoreSql);
    if(res.affectedRows == 1){
      _Cache.clearDataCache('card'); //清楚查询缓存
      return this.execEnd(1, '操作成功');
    }else{
      return this.execEnd(0, '操作失败');
    }
  }
}