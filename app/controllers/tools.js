/**
* @fileOverview 系统工具集合
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/

'use strict';


var mysql = require('mysql');
var thunkify = require('thunkify-wrap');
var fs = require('fs');
var path = require('path');

module.exports = function* (params) {
  //创建数据库链接
  var connection = mysql.createConnection({
    host     : params.host,
    user     : params.user,
    password : params.password,
    multipleStatements: true
  });
  thunkify(connection,['query']);
  connection.connect();
  //创建数据库
  yield connection.query(`CREATE DATABASE ${params.database}`);
  connection.query(`use ${params.database};`);
  //读取系统sql文件
  var sql = fs.readFileSync(path.join(__dirname, '../lib/sql.sql'),'utf8');
  //执行系统初始化sql语句
  yield connection.query(sql);
  return {
    code: 0,
    msg: '数据库创建成功！'
  }
}

