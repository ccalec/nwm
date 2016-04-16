/**
* @fileOverview cms删除数据工作单元
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name DelData
* @param {obj} param 参数条件
* @description 数据删除工作单元
* @example: 入参配置
    var param = {
      alias: 'test1',
      target: 'self|parent|son',
      id: 14  // or 14,15,16
    };
*/


var UtilsClass = require('../class/utilsClass');
var DataClass = require('../class/dataClass');
var FlowUnitClass = require('../class/flowUnitClass');
var QueryModel = require('./queryModel');

module.exports = class DelData extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var param = this.param;
    // 根据参数获取alias对应的数据描述
    var model = (yield new QueryModel(this.context).execute()).data;
    if(!model) return this.execEnd(-1,'alias对应的数据描述不存在');
    // 判断是否是批处理
    var len = param.id.toString().split(',').length;
    var methodName = len==1?'delData':'batchDelData';
    var data = yield DataClass[methodName](model['table_name'], param.id, this.chain);
    // 返回修改结果
    return this.execEnd(1,'数据删除成功', data);
  }
}

