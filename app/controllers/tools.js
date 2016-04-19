/**
* @fileOverview 系统工具集合
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/

'use strict';


var mysql = require('mysql');
var thunkify = require('thunkify-wrap');
var util = require("util");
var fs = require('fs');
var path = require('path');

exports.createDB = function* (params) {
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

exports.saveFiles = function* (files) {
  var file = files[0];
  var readS = fs.createReadStream(file.path);
  var fileurl = path.join(__dirname, '../assets/images', new Date().getTime()+'.'+file.name.split('.')[1]);
  var writeS = fs.createWriteStream(fileurl);
  yield writeFun(readS,writeS);
  return fileurl;
}

function writeFun(readS, writeS){
  return function(cb){
    readS.pipe(writeS);
    readS.on("end", function(){
      cb && cb();
    })
  }
}