/**
* @fileOverview 表操作类
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/

'use strict';

/**
* @namespace
* @name TableClass
* @description cms系统对表的增删改查操作

  ## 功能点：
    * 创建系统字段
*/

var debug = require('debug')('class:tableClass');
var Mysql = require('../lib/mysql');
var SysConfig = require('../global/config');

module.exports = class TableClass {
  /**
  * @name showTable
  * @memberOf TableClass
  * @param {string} tableName 表名
  * @description 展示表中的列
  */
  static * showTableColumns(tableName){
    var res = yield Mysql.query(`SHOW COLUMNS FROM ${tableName}`);
    var fieldHash = {};
    for (var fobj of res){
      fieldHash[fobj.Field] = fobj;
    }
    return fieldHash;
  }
  /**
  * @name createTable
  * @memberOf TableClass
  * @param {string} tableName 表名
  * @param {object} modelDesc 表字段数据描述
  * @description 创建表
  */
  static * createTable(tableName, modelDesc){
    var sqlArr = [];
    sqlArr.push(`CREATE TABLE IF NOT EXISTS ${tableName} (`);
    //从modelDesc中过滤掉系统字段、外联字段
    for(var field in modelDesc){
      if(!SysConfig.sysFields[field]) continue;
      if(modelDesc[field].fieldType!=='outerField') continue;
      delete modelDesc[field];
    }
    //添加系统字段
    var sysf = fieldUnit(SysConfig.sysFields);
    //添加数据描述自定义字段
    var diyf = fieldUnit(modelDesc);
    //将构建好的字段字符串添加进sql
    sqlArr.push(sysf.concat(diyf).join(','));
    //添加
    sqlArr.push(') ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8');
    //执行sql语句
    return yield Mysql.query(sqlArr.join(' '));
  }
  /**
  * @name delTable
  * @memberOf TableClass
  * @param {string} tableName 表名, 支持批量，用“,”隔开
  * @description 删除表
  */
  static * delTable(tableName){
    return yield Mysql.query(`DROP TABLE IF EXISTS ${tableName}`);
  }
  /**
  * @name truncateData
  * @memberOf dataClass
  * @param {string} tableName 截断数据表
  * @description 删除内容、释放空间但不删除定义
  */
  static * truncateTable(tableName){
    var SQL = `TRUNCATE TABLE ${tableName}`;
    return yield Mysql.query(SQL);
  }
  /**
  * @name alterTable
  * @memberOf TableClass
  * @param {string} tableName 表名
  * @param {string} operation 对表字段的操作['ADD','CHANGE','DROP']
  * @param {string} fieldName 修改字段
  * @param {object} fieldValue 修改字段的值
  * @param {object} chain 事务链，如果为空，则mysql操作
  * @description 更改表
  */
  static * alterTable(tableName, operation, fieldName, fieldValue){
    //从modelDesc中过滤掉系统字段、外联字段
    if(SysConfig.sysFields[fieldName]) return;
    if(fieldValue && fieldValue.fieldType==='outerField') return;
    var sql = "";
    var operation = operation.toUpperCase();
    if(fieldValue){
      var type = fieldValue.fieldType;
      var length = fieldValue.fieldLen || (type=='varchar'?128:0);
      var ext = fieldValue.fieldExt || '';
      var oldFieldName = fieldValue['old_fieldname'];
    }
    if(operation == 'ADD'){
      sql = `ALTER TABLE ${tableName} ${operation} ${fieldName} ${type}(${length}) ${ext}`;
    }else if(operation == 'CHANGE'){
      sql = `ALTER TABLE ${tableName} ${operation} ${oldFieldName} ${fieldName} ${type}(${length}) ${ext}`;
    }else if(operation == 'DROP'){
      sql = `ALTER TABLE ${tableName} ${operation} ${fieldName}`;
    }
    return yield Mysql.query(sql);
  }
}
/*
  description: 单个字段剪标sql构建函数
*/
function fieldUnit(fieldObj){
  var sqlArr = [];
  for(var field in fieldObj){
    var fobj = fieldObj[field];
    if(!fobj.fieldLen){
      if(fobj.fieldType=='varchar'){
        fobj.fieldLen = 128;
      }else{
        fobj.fieldLen = 0;
      }
    }
    sqlArr.push(`${field} ${fobj.fieldType}(${parseInt(fobj.fieldLen)}) ${fobj.fieldExt||''}`);
    if(fobj.isKey) sqlArr.push(`PRIMARY KEY (${field})`);
    if(fobj.isUnique) sqlArr.push(`UNIQUE KEY ${field} (${field})`);
  }
  return sqlArr;
}