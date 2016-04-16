/*
 * mojing - common/mysql.js
 * Copyright(c) 2014 ju.taobao.com
 * Author: jianhui.fjh <jianhui.fjh@alibaba-inc.com>
 */

'use strict';

/**
 * Module dependencies.
 */

var SysConfig = require('../global/config');
var mysql = require('mysql');
var transaction = require('node-mysql-transaction');  //事务库
var thunkify = require('thunkify-wrap');
var MysqlClass = require('../class/mysqlClass');
var pool = mysql.createPool(SysConfig.mysql);
var trans = transaction({
  connection: [mysql.createConnection, SysConfig.mysql],
  dynamicConnection: 32,
  idleConnectionCutoffTime: 1000,
  timeout: 600
});
var conn = new MysqlClass(pool, trans); // 创建链接实例
thunkify(conn, ['query', 'queryOne', 'trans']);
module.exports = conn;

