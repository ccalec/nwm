/**
* @fileOverview 会员卡挂失解挂
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name CardStatus
*/

var FlowUnitClass = require('../class/flowUnitClass');
var DataClass = require('../class/dataClass');
var _Cache = require('../class/cacheClass');

module.exports = class CardStatus extends FlowUnitClass {
  * execute(){
    var param = this.param;
    var sql = `update nw_card set status = ${param.status}, comment = '${param.comment}' where no = ${param.card_no}`;
    var res = yield DataClass.execsql(sql);
    if(res.affectedRows == 1){
      _Cache.clearDataCache('card');  //清楚查询缓存
      return this.execEnd(1, '操作成功');
    }else{
      return this.execEnd(0, '操作失败');
    }
  }
}