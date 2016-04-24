/**
* @fileOverview 修改权限
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name ModRoleAction
* @description 修改权限
*/

var DataClass = require('../class/dataClass');
var AddData = require('./addData');
var FlowUnitClass = require('../class/flowUnitClass');
var _Cache = require('../class/cacheClass');

module.exports = class ModRoleAction extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var param = this.param;
    //先删除掉role_action表中所有当前角色的所有权限
    var delSql = `delete from sys_role_action where role_alias = '${param.role_alias}'`;
    yield DataClass.execsql(delSql, this.chain);
    //批量添加权限
    var keyValue = [];
    for (var actionAlias of param.action_alias) {
      keyValue.push({
        role_alias: param.role_alias,
        action_alias: actionAlias
      })
    }
    var res = yield new AddData({
      _Chain: this.chain,
      _Param: {
        alias: 'roleaction',
        keyValue: keyValue
      }
    }).execute();
    //清除权限缓存
    _Cache.clearDataCache(param.alias);
    //如果是更新的当前操作用的角色类型，则更新自己的权限
    if(this.session.admin.role_alias == param.role_alias){
      this.session.admin.roles = param.action_alias;
    }
    return this.execEnd(1,'服务模型查询成功',res);
  }
}