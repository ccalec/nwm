/*!
 * mojing - common/mysqlClass.js
 * Copyright(c) 2014 ju.taobao.com
 * Author: jianhui.fjh <jianhui.fjh@alibaba-inc.com>
 */

'use strict';

/**
* @namespace
* @name MysqlClass
* @description  封装常用mysql函数
*/

module.exports = class MysqlClass {
  /**
    * @name constructor
    * @memberOf MysqlClass
    * @param {object} pool 数据库连接池
    * @param {object} trans 数据库事务连接池
    * @description 数据库实例构造函数
  */
  constructor(pool, trans){
    this.pool = pool;
    this.trcon = trans;
  }
  /**
    * @name init
    * @memberOf MysqlClass
    * @description 检查是否连接上了 mysql
  */
  init(){
    var self = this;
    this.pool.query('show tables',function(err, rows){
      if (err) {
        console.log('mysql init error');
        setTimeout(function(){
          self.init();
        }, 1000);
        return;
      }
      console.log('[%s] [worker:%s] mysql ready, got %d tables', Date(), process.pid, rows.length);
    });
  }
  /**
    * @name query
    * @memberOf MysqlClass
    * @param {string} sql  动态sql语句
    * @param {values} sql  sql语句参数
    * @description 执行sql语句，返回列表
  */
  query(sql, values, cb) {
    if (typeof values === 'function') {
      cb = values;
      values = null;
    }
    this.pool.query(sql, values, function(err, rows){
      cb(err, rows)
    });
  }
  /**
    * @name query
    * @memberOf MysqlClass
    * @param {string} sql  动态sql语句
    * @param {values} sql  sql语句参数
    * @description 执行sql语句，单条用途
  */
  queryOne(sql, values, cb){
    if (typeof values === 'function') {
      cb = values;
      values = null;
    }
    this.pool.query(sql, values, function(err, rows){
      if (rows) rows = rows[0];
      cb(err, rows);
    });
  }
  /**
    * @name escape
    * @memberOf MysqlClass
    * @param {string} str 对字符进行安全转译
    * @description 工作单元执行函数
  */
  escape(str) {
    return this.pool.escape(str);
  }
  /**
    * @name trans
    * @memberOf MysqlClass
    * @param {function} cb 事物回调函数
    * @description 创建事物函数
  */
  trans(cb) {
    var chain = this.trcon.chain();
    chain.on('rollback', function(err){
      console.log('rollback: %j',err);
    });
    chain.submit = function(){
      return function(fn){
        if(chain.commit){
          chain.commit();
          chain.on('commit', function(){
            fn(null,'OK');
          })
        }else{
          fn(null,'OK');
        }
      }
    }
    chain.do = function(sql, args){
      return function(fn){
        chain.query(sql, args, function(err, result){
          if(err)
            fn(err);
          else
            fn(null, result);
        }).autoCommit(false);
      }
    }
    cb(null, chain);
  }
}



