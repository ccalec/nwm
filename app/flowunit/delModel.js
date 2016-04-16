/**
* @fileOverview 删除数据模型工作单元
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name DelModel
* @param {obj} param 数据模型参数，包含alias, target_alias
* @return {obj} 数据描述对象
* @description 删除数据模型，支持批量
* example: 入参配置
    var param = {
      alias: 'model',
      target_alias: 'alias1'  // or 'alias1,alias2,alias3'
    };
  功能步骤：
  * 参数校验
  * 将数据从model表删除
  * 删除对应表
  * 删除model缓存
  * 删除所有表附属权限
*/

var _Cache = require('../class/cacheClass');
var DataClass = require('../class/dataClass');
var TableClass = require('../class/tableClass');
var FlowUnitClass = require('../class/flowUnitClass');
var DelData = require('./delData');

module.exports = class DelModel extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var param = this.param;
    // 删除对应表
    var tableArr = [];
    var idArr = [];
    var aliasArr = param.target_alias.split(',');
    for (var alias of aliasArr){
      var model = yield _Cache.model(alias);
      if(!model) continue;
      tableArr.push(model['table_name']);
      idArr.push(model.id);
    }
    yield TableClass.delTable(tableArr.join(','), this.chain);
    // 删除model表模型数据
    var newContext = {
      _Chain: this.chain,
      _Param: {
        alias: this.param.alias,
        target: this.param.target,
        id: idArr.join(',')
      }
    };
    var res = yield new DelData(newContext).execute();
    //TODO: 删除所有表附属权限
    return this.execEnd(1,'模型删除成功', res.data);
  }
};

