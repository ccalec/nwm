/**
* @fileOverview 统计会员消费
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name TjUserCash
*/

var FlowUnitClass = require('../class/flowUnitClass');
var AddData = require('./addData');
var DataClass = require('../class/dataClass');

module.exports = class TjUserCash extends FlowUnitClass {
  * execute(){
    var param = this.param;

    //消费汇总查询
    var sql = `
      select c.user_name, c.card_no, c.store_id, s.store_name, from nw_cash_detail as c
      left join nw_store as s on c.store_id = s.id
      where ${wheresql}
    `;
    var res = yield DataClass.execsql(sql);
    if(res.affectedRows == 1){
      return this.execEnd(1, '查询成功');
    }else{
      return this.execEnd(0, '查询失败');
    }
  }
}