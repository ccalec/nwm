/**
* @fileOverview 工作单元父类
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/

'use strict';

/**
* @namespace
* @name FlowUnitClass
* @description 工作单元父类，工作单元均继承此类
*/
module.exports = class FlowUnitClass {
  /**
    * @name execute
    * @memberOf FlowUnitClass
    * @param {object} context 上下文环境 {_Param, _Cfg, _Result}
    * @description 工作单元执行函数
  */
  constructor(context){
    this.context = context; //上下文
    this.verifyParams = function(rule){
      context.verifyParams.call(context, rule, context._Param);
    }; //参数校验
    this.chain = context._Chain; //传递的事务链
    this.name = context._UnitName; //当前单元名称
    this.param = context._Param;  // 入参
    this.result = context._Result; // 返回结果对象
    this.config = context._Config; // service配置
    this.session = context.session; //session
  }
  /**
    * @name execute
    * @memberOf FlowUnitClass
    * @param {object} context 上下文环境 {_Param, _Cfg, _Result}
    * @description 工作单元执行函数
  */
  * execute(){

  }
  /**
    * @name unitParamModel
    * @memberOf FlowUnitClassd
    * @description 工作单元入参配置的数据描述函数, 静态方法
  */
  static unitParamModel(){

  }
  /**
    * @name execEnd
    * @memberOf FlowUnitClass
    * @param {number} code 工作单元执行结果码
    * @param {string} message 工作单元执行结果备注信息
    * @param {string} data 工作单元执行结果返回结果
    * @description 工作单元执行结束函数
  */
  execEnd(code, message, data){
    var res = {
      code: code,
      message: message
    };
    if(data!==undefined) res.data = data;
    return res;
  }
  /**
    * @name getConfig
    * @memberOf FlowUnitClass
    * @param {string} cfgName 工作单元配置参数字段名
    * @description 获取工作单元配置的参数
  */
  getConfig(cfgName){
    if(!this.config['unit_param']) return;
    this.config['unit_param'] = JSON.parse(this.config.unit_param);
    return this.config['unit_param'][this.name+'.'+cfgName];
  }
  /**
    * @name getCodeMap
    * @memberOf FlowUnitClass
    * @description 获取此工作单元的resultCodeMap
  */
  getCodeMap(){

  }
}





