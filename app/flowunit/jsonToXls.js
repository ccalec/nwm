/**
* @fileOverview 打印
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name JsonToXls
*/


var FlowUnitClass = require('../class/flowUnitClass');
var QueryData = require('./queryData');
var fs = require ('fs');
var moment = require ('moment');
var path = require ('path');
var NodeXls = require('node-xls');
var tool = new NodeXls();

module.exports = class JsonToXls extends FlowUnitClass {
  * execute(){
    var param = this.param;
    //增加积分变更记录
    var qdata = (yield new QueryData(this.context).execute()).data;
    var listData = qdata.listData;
    if(!listData.length) return this.execEnd(-1, '无任何数据');
    var model = qdata.model;
    var modelDesc = model['model_desc'];
    // 转换数据格式
    listData.forEach(function(item){
      for(var fieldName in item){
        if(fieldName=='id') continue;  //保留id
        if(!modelDesc[fieldName]){  //如果系统字段，过滤掉
          delete item[fieldName];
          continue;
        };
        var fieldType = modelDesc[fieldName].fieldType;
        if(fieldType=='datetime'){
          item[fieldName] = moment(item[fieldName]).format('YYYY-MM-DD HH:mm:ss');
        }
      }
    });
    //定义头
    var fieldMap = {};
    for(var field in modelDesc){
      fieldMap[field] = modelDesc[field].title;
    }
    var xls = tool.json2xls(listData, {fieldMap: fieldMap});
    var filename = param.alias+'_'+moment().format('YYYYMMDDHHmmss')+'.xlsx';
    var filepath = path.join(__dirname, '../../temp', filename);
    fs.writeFileSync(filepath, xls, 'binary');
    return this.execEnd(1, '导出成功', {
        filename: filename,
        filepath: filepath
    });
  }
}