/**
* @fileOverview 常用函数类
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/

'use strict';

/**
* @namespace
* @name UtilsClass
* @description cms相关通用类

var config = {
      tableName: 'all_errors',
      filterFields:[{
        keyField: 'statusid', // 对应数据表的字段
        joinField: 'id',
        otherFields: [{
          tableName: 'all_status',
          fields: ['addtime','errornum']
        }],
        valRange: {
          tableName: 'all_status',
          filterFields: [{
            keyField: 'taskid',
            otherFields: ['tasktitle'],
            valRange: {
              tableName: 'all_tasks',
              filterFields: [{
                  keyField: 'type',
                  isshow: false
                },{
                  keyField: 'siteid',
                  otherFields: [{
                    tableName: 'all_sites',
                    fields: ['title']
                  }],
                  type: 'int',
                  isshow: false
                },{
                keyField: 'uid',
                otherFields: ['cname'],
                isshow: false
              }]
            },
            type: 'int'
          }]
        },
        limit: 30,
        type: 'int'
      },{
        keyField: 'caseid',
        otherFields: ['casetitle'],
        type: 'int'
      },{
        paramName: 'runneruid', // 请求参数名称
        keyField: 'uid',  // 对应数据表的字段
        otherFields: ['cname'],
        orderby: [{
          fieldName: 'id',
          isDesc: false
        }]
      }]
    };
*/

var debug = require('debug')('class:utilsClass');
var _Cache = require('../class/cacheClass');

module.exports = class UtilsClass {
  /**
    *@name getQueryCfgByModel
    *@memberOf UtilsClass
    *param {string} desc 数据描述
    *return {obj} 查询配置对象
    *@description 将数据描述转化为查询配置
  */
  static * getQueryCfgByModel(model){
    var config = {
      alias: model['model_alias'],
      tableName: model['table_name']
    };
    // otherFields外联字断处理：
    config.otherFields = [];
    var oAliasMap = {};
    for(var field in model['model_desc']){
      var fobj = model['model_desc'][field];
      if(!fobj.outerLink) continue;
      var outerLinkArr = fobj.outerLink.split('.');
      if(outerLinkArr.length!=2) continue;
      var oAlias = outerLinkArr[0];
      var oField = outerLinkArr[1];
      oAliasMap[oAlias] = oAliasMap[oAlias] || {};
      if(fobj.fieldType==='outerField'){ // 添加进fields
        oAliasMap[oAlias]['fields'] = oAliasMap[oAlias]['fields'] || {};
        oAliasMap[oAlias]['fields'][oField] = field;
      }else{ // 设置为keyField, 设置tableName
        var oModel = yield _Cache.model(oAlias);
        if(oModel){
          oAliasMap[oAlias]['keyField'] = field;
          oAliasMap[oAlias]['tableName'] = oModel.table_name;
        }
      }
    }
    for(var alias in oAliasMap){
      var sobj = oAliasMap[alias];
      if(sobj.tableName && sobj.keyField && sobj.fields){
        config.otherFields.push(sobj);
      }
    }
    // filterFields字段处理
    config.filterFields = [{
      keyField: 'id', // 对应数据表的字段
      isshow: false
    },{
      keyField: 'nodeid', // 对应数据表的字段
      isshow: false
    }];
    return config;
  }
}



































