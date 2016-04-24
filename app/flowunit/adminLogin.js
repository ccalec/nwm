/**
* @fileOverview 验证管理员登录
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name AdminLogin
* @description 验证管理员登录
*/

var DataClass = require('../class/dataClass');
var AddData = require('./addData');
var FlowUnitClass = require('../class/flowUnitClass');
var crypto = require('crypto');

module.exports = class AdminLogin extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var param = this.param;
    if(!param.account || !param.password){
      return this.execEnd(-1,'请输入账号和密码');
    }
    var md5 = crypto.createHash('md5');
    var password = md5.update(param.password).digest('hex');
    var sql = `SELECT * FROM sys_administrator WHERE account = '${param.account}' AND password = '${password}'`;
    var res = yield DataClass.execsql(sql);
    if(!res || !res.length){
      return this.execEnd(-2,'账号密码不正确');
    }
    //将登录信息，放入到session.admin命名空间下
    this.session.admin = res[0];
    //将当前用户所有权限放到当前session.admin.roleaction下
    var roleActionSql = `SELECT * FROM sys_role_action WHERE role_alias = '${res[0].role_alias}'`;
    var roleActionRes = yield DataClass.execsql(roleActionSql);
    var roles = []; //权限表识集合
    for(var roleaction of roleActionRes){
      roles.push(roleaction.action_alias);
    }
    this.session.admin.roles = roles;
    return this.execEnd(1,'登录成功');
  }
}