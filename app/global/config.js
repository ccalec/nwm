/**
* @fileOverview 系统配置中心
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/

'use strict';

/**
* @namespace
* @name config
* @description 系统核心配置文件
*/

exports.sysFields = {
  id:{
    fieldType: 'bigint',
    fieldLen: 20,
    fieldExt: 'NOT NULL AUTO_INCREMENT',
    isKey: true
  },
  alias:{
    fieldType: 'varchar',
    fieldLen: 255,
    fieldExt: 'NOT NULL'
  },
  nodeid:{
    fieldType: 'bigint',
    fieldLen: 20,
    fieldExt: 'DEFAULT 0 NOT NULL'
  },
  gmt_create:{
    fieldType: 'datetime',
    fieldLen: 0,
    fieldExt: 'NOT NULL'
  },
  gmt_modified:{
    fieldType: 'datetime',
    fieldLen: 0,
    fieldExt: 'NOT NULL'
  },
  data_owner:{
    fieldType: 'varchar',
    fieldLen: 255
  }
};

exports.mysql = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'nw',
  connectionLimit: 5,
  timeout: 5000,
  multipleStatements: true,
  debug: false
};