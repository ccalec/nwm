/**
* @fileOverview 注销
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name getRoles
*/
var Session = require('../class/sessionClass')();

module.exports = function* () {
  Session.admin = null;
  return;
}