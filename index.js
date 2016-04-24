/**
* @fileOverview node入口文件
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/

"use strict"

var co = require('co');
var mysql = require('./app/lib/mysql');
var getRoles = require("./app/controllers/getroles");
var doService = require("./app/controllers/doservice");
var tools = require("./app/controllers/tools");
var logout = require("./app/controllers/logout");

// mysql连接状态检查
mysql.init();

function cothunk(controller){
  return function(params, callback){
    co(function* (){
      var res = yield controller(params);
      callback && callback(res);
    }).catch(function(err){
       console.error(err.stack);
    })
  }
}

module.exports = {
  getRoles : cothunk(getRoles),
  doService : cothunk(doService),
  createDB  : cothunk(tools.createDB),
  saveFiles  : cothunk(tools.saveFiles),
  logout: cothunk(logout)
}