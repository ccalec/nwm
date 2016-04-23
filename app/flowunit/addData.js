/**
* @fileOverview 添加数据工作单元
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name AddData
* @param {obj} param 参数条件
* @description 数据添加工作单元
* @example: 入参配置
    var param = {
      alias: 'test1',
      target: 'self|parent|son'
      keyValue: {
        val: 123
      }
    };
*/
var UtilsClass = require('../class/utilsClass');
var DataClass = require('../class/dataClass');
var FlowUnitClass = require('../class/flowUnitClass');
var SysConfig = require('../global/config');
var QueryModel = require('./queryModel');
var copy = require('copy-to');
var moment = require('moment');
var _Cache = require('../class/cacheClass');

module.exports = class AddData extends FlowUnitClass {
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
    // 如果不是数组，转换为数组
    if(toString.apply(keyValue) !== '[object Array]'){
      keyValue = [keyValue];
    }
    var arrKV = [];
    for(var keyV of keyValue){
      delete keyV.id;
      // 存储进表的keyV
      var oneKV = {
        alias: model.model_alias,
        nodeid: "0",
        gmt_create: moment().format('YYYY-MM-DD HH:mm:ss'),
        gmt_modified: moment().format('YYYY-MM-DD HH:mm:ss'),
        data_owner: '' //后续完善
      };
      // 模型字段过滤，如果出现系统字段，则覆盖默认值，
      var hasStoreId = false; //判断是否有店铺id
      for(var fieldName in modelDesc){
        if(fieldName=='store_id') hasStoreId = true;
        if(keyV[fieldName]===undefined) continue;
        var fieldType = modelDesc[fieldName].fieldType;
        // 如果出现外联字断，则过滤掉
        if(fieldType==='outerField') continue;
        if(fieldType=='datetime'){
          if(!keyV[fieldName]) continue;
          oneKV[fieldName] = moment(keyV[fieldName]).format('YYYY-MM-DD HH:mm:ss');
        }else if(fieldType=='int' || fieldType=='bigint'){
          oneKV[fieldName] = (keyV[fieldName] || keyV[fieldName]===0) ? parseInt(keyV[fieldName]) : null;
          oneKV.nodeid = oneKV.nodeid?oneKV.nodeid:'0';
        }else{
          oneKV[fieldName] = keyV[fieldName];
        }
      }
      //临时处理，添加店铺默认值
      if(hasStoreId) oneKV['store_id'] = 1;
      arrKV.push(oneKV);
    }
    // 修改数据库数据
    if(arrKV.length==1){
      var data = yield DataClass.addData(model['table_name'], arrKV[0], this.chain);
    }else{ //批量添加
      var data = yield DataClass.batchAddData(model['table_name'], arrKV, this.chain);
    }
    //清楚查询缓存
    _Cache.clearDataCache(param.alias);
    // 返回修改结果
    return this.execEnd(1,'数据添加成功', data);
  }
}
