/**
* @fileOverview 获取系统权限
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
  if(Session.admin){
    return Session.admin.roles;
  }else{
    return false;
  }
}