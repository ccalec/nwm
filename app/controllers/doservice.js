'use strict';
/**
* @fileOverview 系统请求
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name doserviceController
* @description 所有系统service的请求控制器，根据serviceName驱动工作流
*/

var path = require('path');
var fs = require('co-fs');
var _Cache = require('../class/cacheClass');
var Mysql = require('../lib/mysql');
var copy = require('copy-to');

module.exports = function* (reqParam) {
  var res;
  var context = {};
  if(isArray(reqParam)){  //处理批量请求
    res = [];
    for(let oneReqParam of reqParam){
      var oneRes = yield oneServiceHandler(context, oneReqParam);
      res.push(oneRes);
    }
  }else{
    res = yield oneServiceHandler(context, reqParam);
  }
  return res;
};

/**
  * @name oneServiceHandler
  * @memberOf doserviceController
  * @param {object} context 上下文环境
  * @param {object} reqParam 系统请求参数
  * @description  单个请求处理逻辑
    ## 请求格式：
      explame: {
        serviceName: 'queryData',
        package: 'cms',
        param: {}
      }
    ## 逻辑步骤：
      0. 创建事务链
      1. 根据serviceName和package获取对应的service配置文件
      2. 定义工作单元共享的上下文环境
      3. 根据service配置文件，找到workflow名称，并获取workflow配置
      4. 获取开始flowunit标示，开始递归执行工作单元
      5. 提交事务
      6. 最终返回结果
  */
function* oneServiceHandler(context, reqParam){

  var serviceName = reqParam.name;
  var pkg = reqParam.package;  //package是关键字，注意
  // 0. 创建事务链
  var chain = yield Mysql.trans();
  // 1. 根据serviceName和package获取对应的service配置文件
  var serviceCfg = yield _Cache.service(serviceName);  // 获取service配置
  // 2. 定义工作单元共享的上下文环境
  var extendContext = {
    _Chain : chain,  //事物链
    _Param : reqParam.param,
    _Config : serviceCfg,
    _Result : {}
  };
  copy(extendContext).toCover(context);
  // 3. 根据service配置文件，找到workflow名称，并获取workflow配置
  var res = yield _Cache.workflow(serviceCfg.flow_id); // 获取workflow配置
  var flow_units = JSON.parse(res.flow_units);
  var flowUnitMap = {};
  for(var uObj of flow_units){
    flowUnitMap[uObj.unit_name] = uObj.result;
  }
  // 4. 获取开始工作单元，开始执行
  var begUnit = flow_units[0].unit_name;
  yield workUnitExec(context, flowUnitMap, begUnit);
  // 5. 提交事务
  yield chain.submit();
  // 6. 返回结果
  return context._Result;
}

/**
  * @name workUnitExec
  * @memberOf doserviceController
  * @param {object} context 工作单元共享的上下文环境
  * - {object} _Param 入参对象
  * - {object} _Config service配置的参数，供工作单元使用
  * - {object} _Result 结果对象
  * @param {object} flowUnitMap 工作流配置map
  * @param {string} unit_name 当前正在执行的单元
  * @description  根据工作流配置map依次执行工作单元（递归）
    ## 逻辑步骤：
      1. 将单元名称放入上下文
      2. 获取工作单元路径，并执行工作单元
      3. 将结果对象放入上下文环境对象中, 如果返回code等于-1 则直接跳出，并带上出错单元标示
      4. 获得当前unit对象
      5. 创建工作单元结果码map
      6. 根据工作单元结果码，获取下一个工作单元状态标示
      7. 如果next对象存在，递归执行下一个状态的功能单元，否则工作流处理完毕
  */
function* workUnitExec(context, flowUnitMap, unit_name){
  // 1. 将单元名称放入上下文
  context._UnitName = unit_name;
  // 2. 获取工作单元路径，并执行工作单元
  var flowUnitPath = path.join(__dirname, '../flowunit/'+unit_name+'.js');
  var FlowUnit = require(flowUnitPath);
  var result = yield new FlowUnit(context).execute();
  // 3. 将结果对象放入上下文环境对象中, 如果返回code等于-1 则直接跳出，并带上出错单元标示
  context._Result = result;
  if(result.code==-1){
    context._Result.unitName = unit_name;
    return;
  }
  // 4. 获得当前单元结果
  var unitResObj = flowUnitMap[unit_name];
  // 5. 创建工作单元结果码map
  var unitResMap = {};
  for(var aobj of unitResObj){
    unitResMap[aobj.code] = aobj.next;
  }
  // 6. 根据工作单元结果码，获取下一个工作单元状态标示
  var nextUint = unitResMap[result.code];
  // 7. 如果nextUint对象存在，递归执行下一个状态的功能单元，否则工作流处理完毕
  if(nextUint && flowUnitMap[nextUint]){
    yield workUnitExec(context, flowUnitMap, nextUint);
  }
}


function isArray(v){
  return toString.apply(v) === '[object Array]';
}









