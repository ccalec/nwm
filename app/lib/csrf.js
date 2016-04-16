/*!
 * mojing - middlewares/csrf.js
 * Copyright(c) 2014 ju.taobao.com
 * Author: jianhui.fjh <jianhui.fjh@alibaba-inc.com>
 */

'use strict';

/**
 * Module dependencies.
 */

module.exports = function (app) {
  return function* (next) {
    //提供openapi接口 全部开放跨域
    if (/^\/service\.do$/.test(this.request.path)) {
      this.set('Access-Control-Allow-Origin', '*');
      this.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      this.set('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization, X-Requested-With');
    }
    yield *next;
  }
}

