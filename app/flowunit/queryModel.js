/**
* @fileOverview 查询数据模型工作单元
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name QueryModel
* @param {obj} param 数据模型参数，包含alias, target
* @return {obj} 数据描述对象
* @description 通过alias查询数据模型
* example: 入参配置
    var param = {
      alias: 'test1',
      target: 'self|parent|son'
    };
*/

var _Cache = require('../class/cacheClass');
var FlowUnitClass = require('../class/flowUnitClass');

module.exports = class QueryModel extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var param = this.param;
    var model = yield _Cache.model(param.alias);
    if(!model) return this.execEnd(-1,'查询的模型不存在');
    var data;
    if(param.target=='parent'){
      var nodeAlias = model['parent_alias'];
      if(nodeAlias) data = yield _Cache.model(nodeAlias);
    }else if(param.target=='son'){
      data = yield _Cache.sonModels(param.alias);
    }else{
      data = model;
    }
    return this.execEnd(1,'模型查询成功',data);
  }
}