/**
* @fileOverview cms数据操作通用工作流单元
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name OperData
* @description  根据server配置（增删改查），实现cms系统数据操作
*/


var FlowUnitClass = require('../class/flowUnitClass');

module.exports = class OperData extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var param = this.param;
    var targetFlowUnit = this.getConfig('targetFlowUnit');
    //数据权限校验
    var action_alias = param.alias+'.'+targetFlowUnit;
    if(this.session.admin.roles.indexOf(action_alias)==-1){
      console.log(targetFlowUnit,this.param.alias);
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
        title:"数据操作类型",
        type:"Select",
        valueRange:[{"查询":"queryData","增加":"addData","修改":"modData","删除":"delData"}],
        desc:""
      }
    }
  }
}





