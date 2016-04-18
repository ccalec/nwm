/**
* @fileOverview 缓存类===动态类===
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/

'use strict';


var path = require('path');
var DataClass = require('./dataClass');

var DataCache = {};
var cacheSwitch = true;

/**
* @namespace
* @name getDataCache
* @description get数据缓存
*/
exports.getDataCache = function (alias, hex){
  if(DataCache[alias] && DataCache[alias][hex] && cacheSwitch){
    return DataCache[alias][hex];
  }
  return 'NOCACHE';
}
/**
* @namespace
* @name setDataCache
* @description set数据缓存
*/
exports.setDataCache = function (alias,hex,data){
  DataCache[alias] = DataCache[alias] || {};
  DataCache[alias][hex] = data;
}
/**
* @namespace
* @name clearDataCache
* @description 清除数据数据缓存
*/
exports.clearDataCache = function (alias){
  if(alias){
    DataCache[alias] = {};
  }else{
    DataCache = {};
  }
}







