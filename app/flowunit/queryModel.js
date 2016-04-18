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


var FlowUnitClass = require('../class/flowUnitClass');
var crypto = require('crypto');
var DataClass = require('../class/dataClass');
var _Cache = require('../class/cacheClass');

module.exports = class QueryModel extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var param = this.param;
    //判断是否走缓存
    var md5 = crypto.createHash('md5');
    var cachaKey = md5.update(JSON.stringify(param)).digest('hex');
    var cacheData = _Cache.getDataCache('model', cachaKey);
    if(cacheData!=='NOCACHE') return this.execEnd(1,'模型查询成功', cacheData);
    var data;
    //子模型查询
    if(param.target=='son'){
      var sonModels = [];
      var sonRes = yield DataClass.queryData({
        tableName: 'sys_model',
        filterFields:[{
          keyField: 'parent_alias' // 对应数据表的字段
        }]
      },{
        parent_alias: param.alias
      });
      if(sonRes && sonRes.length){
        sonRes.forEach(function(smodel){
          sonModels.push({
            alias: smodel['model_alias'],
            model_name: smodel['model_name']
          })
        })
      }
      data = sonModels;
    }else{
      var modelRes = yield DataClass.queryData({
        tableName: 'sys_model',
        filterFields:[{
          keyField: 'model_alias' // 对应数据表的字段
        }]
      },{
        model_alias: param.alias
      });
      if(!modelRes.length) return this.execEnd(-1,'查询的模型不存在');
      //如果查父类
      if(param.target=='parent'){
        if(modelRes[0]['parent_alias']){
          var parentModel = yield DataClass.queryData({
            tableName: 'sys_model',
            filterFields:[{
              keyField: 'model_alias' // 对应数据表的字段
            }]
          },{
            model_alias: modelRes[0]['parent_alias']
          });
          if(parentModel.length){
            data = parentModel[0];
            data['model_desc'] = JSON.parse(data['model_desc']);
          }
        }
      }else{
        data = modelRes[0];
        data['model_desc'] = JSON.parse(data['model_desc']);
      }
    }
    //存进缓存
    _Cache.setDataCache('model', cachaKey, data);
    return this.execEnd(1,'模型查询成功', data);
  }
}