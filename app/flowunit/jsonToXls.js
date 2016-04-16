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
    var fieldMap = {};
    for(var field in modelDesc){
      fieldMap[field] = modelDesc[field].title;
    }
    var xls = tool.json2xls(listData, {order:["id"], fieldMap: fieldMap});
    fs.writeFileSync(path.join(__dirname, '../', 'output.xlsx'), xls, 'binary');

    return this.execEnd(1, '操作成功');
  }
}