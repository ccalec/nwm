/**
* @fileOverview 缓存类===动态类===
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/

'use strict';


var DataClass = require('./dataClass');
var path = require('path');
var fs = require('co-fs');

/**
* @namespace
* @name model
* @description 将模型描述缓存到内存当中
*/
exports.model = function* (alias){
  var res = yield DataClass.queryData({
    tableName: 'sys_model',
    filterFields:[{
      keyField: 'model_alias' // 对应数据表的字段
    }]
  },{
    model_alias: alias
  });
  if(res.length){
    res[0]['model_desc'] = JSON.parse(res[0]['model_desc']);
    return res[0];
  }
}
/**
* @namespace
* @name sonModels
* @description 将子内容模型缓存到内存当中
*/
exports.sonModels = function* (alias){
  var sonModels = [];
  var res = yield DataClass.queryData({
    tableName: 'sys_model',
    filterFields:[{
      keyField: 'parent_alias' // 对应数据表的字段
    }]
  },{
    parent_alias: alias
  });
  res.forEach(function(model){
    sonModels.push({
      alias: model['model_alias'],
      model_name: model['model_name']
    });
  })
  return sonModels;
}
/**
* @namespace
* @name service
* @description 将service配置缓存到内存当中
*/
exports.service = function* (serviceName){
  var res = yield DataClass.queryData({
    tableName: 'sys_service',
    filterFields:[{
      keyField: 'service_name' // 对应数据表的字段
    }]
  },{
    service_name: serviceName
  });
  return res[0];
}
/**
* @namespace
* @name workflow
* @description 将service配置缓存到内存当中
*/
exports.workflow = function* (flowId){
  var res = yield DataClass.queryData({
    tableName: 'sys_workflow',
    filterFields:[{
      keyField: 'id' // 对应数据表的字段
    }]
  },{
    id: flowId
  });
  return res[0];
}




