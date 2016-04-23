/**
* @fileOverview 系统提供的restful api 接口单元
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name restfulApi
* @description
  ## 功能目标：
*/

var FlowUnitClass = require('../class/flowUnitClass');

module.exports = class RestfulApi extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var targetFlowUnit = this.getConfig('targetFlowUnit');
    var flowunit = require('./'+targetFlowUnit);
    var res = yield new flowunit(this.context).execute();
    return this.execEnd(res.code, res.message, res.data); // 单元操作结果码
  }
  // 配置参数的数据描述
  static unitParamModel(){
    return {
      targetFlowUnit: {
        title:"选择API单元",
        type:"Select",
        valueRange:[{
          "收银台提交接口":"cashSubmit",
          "修改卡密码接口":"modPassword",
          "会员卡充值接口":"cardPrepaid",
          "挂失解挂接口":"cardStatus",
          "会员换卡接口":"cardChange",
          "会员积分变更":"scoreOper",
          "统计会员消费":"tjUserCash",
          "导出xls接口":"jsonToXls",
          "发送短信接口":"sendSms",
          "首页系统信息查询":"queryHome"
        }]
      }
    }
  }
}






