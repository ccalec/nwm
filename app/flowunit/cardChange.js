/**
* @fileOverview 会员换卡
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name CardChange
*/

var FlowUnitClass = require('../class/flowUnitClass');
var DataClass = require('../class/dataClass');

module.exports = class CardChange extends FlowUnitClass {
  * execute(){
    var param = this.param;
    //新卡号是否已经正常使用，只允许未激活的卡
    var checksql = `select id as count from nw_card where no = ${param.new_no} and status != 0 `;
    var checkRes = yield DataClass.execsql(checksql);
    if(checkRes.length){
      return this.execEnd(-1, '新卡号已经正在使用中，请更换为未激活卡号');
    }
    var sql = `update nw_card set no = ${param.new_no}, comment = '${param.comment}' where no = ${param.no}`;
    var res = yield DataClass.execsql(sql);
    if(res.affectedRows == 1){
      return this.execEnd(1, '操作成功');
    }else{
      return this.execEnd(0, '操作失败');
    }
  }
}