/**
* @fileOverview 系统对工作流所有工作单元入参的数据描述进行操作
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name QueryFlowModel
* @param {obj} param 数据模型参数，包含alias, target
* @return {obj} 数据描述对象
* @description 通过alias查询数据模型
* example: 入参配置
    var param = {
      alias: 'test1',
      target: 'self|parent|son'
    };
*/

var QueryData = require('./queryData');
var FlowUnitClass = require('../class/flowUnitClass');

module.exports = class QueryFlowModel extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var param = this.param;
    var flowUnits = yield new QueryData({
      _Param: {
        alias: 'workflow',
        filterParam: {
          id: param.flowId
        }
      }
    }).execute();
    try{
      flowUnits = flowUnits.data.listData[0];
      flowUnits = JSON.parse(flowUnits.flow_units);
    }catch(err){
      return this.execEnd(-1,'查询的工作单元不存在或单元配置为空');
    }
    var data = {};
    for (var fobj of flowUnits) {
      var FlowUnit = require('./'+fobj.unit_name);
      var unitParamModel = FlowUnit.unitParamModel();
      for(var field in unitParamModel){
        data[fobj.unit_name+'.'+field] = unitParamModel[field];
      }
    }
    return this.execEnd(1,'服务模型查询成功',data);
  }
}