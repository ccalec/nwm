/**
* @fileOverview cms数据模型操作通用工作流单元
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name OperModel
* @description  根据server配置（增删改查），实现cms系统数据模型操作
*/
var FlowUnitClass = require('../class/flowUnitClass');

module.exports = class OperModel extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var targetFlowUnit = this.getConfig('targetFlowUnit');
    //数据权限校验
    if(this.session.admin.role_alias!='superAdmin' && targetFlowUnit!='queryModel'){
      return this.execEnd(-101, '没有操作权限');
    }
    var flowunit = require('./'+targetFlowUnit);
    var res = yield new flowunit(this.context).execute();
    return this.execEnd(res.code, res.message, res.data); // 单元操作结果码
  }
  // 配置参数的数据描述
  static unitParamModel(){
    return {
      targetFlowUnit: {
        title:"模型操作类型",
        type:"Select",
        valueRange:[{"查询":"queryModel","增加":"addModel","修改":"modModel","删除":"delModel"}],
        desc:""
      }
    }
  }
}





