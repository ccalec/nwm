
/**
* @fileOverview 修改管理员密码
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name ModAdminPassword
* @description 修改管理员密码
*/

var DataClass = require('../class/dataClass');
var AddData = require('./addData');
var FlowUnitClass = require('../class/flowUnitClass');
var crypto = require('crypto');

module.exports = class ModAdminPassword extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var param = this.param;
    if(!param.id || !param.newPassword){
      return this.execEnd(-1,'请输入新密码');
    }
    var md5 = crypto.createHash('md5');
    var password = md5.update(param.newPassword).digest('hex');
    var sql = `UPDATE sys_administrator SET password = '${password}' WHERE id = ${param.id}`;
    var res = yield DataClass.execsql(sql);
    if(res.affectedRows==1){
      return this.execEnd(1,'密码修改成功',res);
    }else{
      return this.execEnd(-1,'密码修改失败');
    }
  }
}