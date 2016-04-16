/**
* @fileOverview 会员充值
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name CardPrepaid
*/

var FlowUnitClass = require('../class/flowUnitClass');
var AddData = require('./addData');
var DataClass = require('../class/dataClass');

module.exports = class CardPrepaid extends FlowUnitClass {
  * execute(){
    var param = this.param;
    //添加充值记录
    yield new AddData({
      _Chain: this.chain,
      _Param: {
        alias: 'prepaid_record',
        keyValue: param
      }
    }).execute();
    //卡余额增量
    var sql = `update nw_card set amount = amount + ${param.amount} where no = ${param.card_no} and status = 1`;
    var res = yield DataClass.execsql(sql);
    if(res.affectedRows == 1){
      return this.execEnd(1, '充值成功');
    }else{
      return this.execEnd(0, '充值失败');
    }
  }
}