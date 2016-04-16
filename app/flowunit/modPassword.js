/**
* @fileOverview 修改会员卡密码
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name modPassword
*/

var FlowUnitClass = require('../class/flowUnitClass');
var ModData = require('./modData');
var crypto = require('crypto');

module.exports = class ModPassword extends FlowUnitClass {
  * execute(){
    var param = this.param;
    var md5 = crypto.createHash('md5');
    //添加收银记录
    var res = yield new ModData({
      _Chain: this.chain,
      _Param: {
        alias: 'card',
        id: param.id,
        keyValue: {
          password: md5.update(param.password).digest('hex'),
          comment: param.comment
        }
      }
    }).execute();
    if(res.data.affectedRows == 1){
      return this.execEnd(1, '修改密码成功');
    }else{
      return this.execEnd(0, '修改密码失败');
    }
  }
}