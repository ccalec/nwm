/**
* @fileOverview cms修改数据工作单元
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name ModData
* @param {obj} param 参数条件
* @description 修改数据工作单元
* @example: 入参配置
    var param = {
      alias: 'test1',
      id: 1,  // or  ids: '1,2,3'
      keyValue: {
        val: 123
      }
    };
*/

var copy = require('copy-to');
var UtilsClass = require('../class/utilsClass');
var DataClass = require('../class/dataClass');
var SysConfig = require('../global/config');
var FlowUnitClass = require('../class/flowUnitClass');
var QueryModel = require('./queryModel');
var moment = require('moment');
var _Cache = require('../class/cacheClass');

module.exports = class ModData extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var param = this.param;
    // 根据参数获取alias对应的数据描述
    var model = (yield new QueryModel(this.context).execute()).data;
    if(!model) return this.execEnd(-1,'alias对应的数据描述不存在');
    var modelDesc = model['model_desc'];
    // 系统字段与数据描述字段描述合并
    copy(SysConfig.sysFields).toCover(modelDesc);
    // keyValue字段校验, 非空字段判断
    var keyValue = param.keyValue;
    // 处理id
    param.id = param.id || keyValue.id;
    delete keyValue.id;
    // 存储进表的keyValue
    var _param = {};
    // 模型字段过滤，如果出现系统字段，则覆盖默认值
    for(var fieldName in modelDesc){
      if(keyValue[fieldName]===undefined) continue;
      var fieldType = modelDesc[fieldName].fieldType;
      // 如果出现外联字断，则过滤掉
      if(fieldType==='outerField') continue;
      if(fieldType=='datetime'){
        if(!keyValue[fieldName]) continue;
        _param[fieldName] = moment(keyValue[fieldName]).format('YYYY-MM-DD HH:mm:ss');
      }else if(fieldType=='int' || fieldType=='bigint'){
        _param[fieldName] = (keyValue[fieldName] || keyValue[fieldName]===0) ? parseInt(keyValue[fieldName]) : null;
      }else{
        _param[fieldName] = keyValue[fieldName];
      }
    }
    // 判断是否是批处理
    var len = param.id.toString().split(',').length;
    if(len==1){
      var data = yield DataClass.modData(model['table_name'], param.id, _param, this.chain);
    }else{
      var data = yield DataClass.batchModData(model['table_name'], param.id, _param, this.chain);
    }
    //清楚查询缓存
    _Cache.clearDataCache(param.alias);
    // 返回修改结果
    return this.execEnd(1,'数据修改成功', data);
  }
}

