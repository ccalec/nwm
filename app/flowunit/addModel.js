/**
* @fileOverview 添加数据模型工作单元
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name AddModel
* @param {obj} param 模型各字段的keyValue
* @description 功能目标：增加数据模型
  ## 工作单元配置：
    * 参数校验
    * 判断是否表名已存在，如果存在，则合并model_desc
    * 是否引用其他alias，如引用，则合并model_desc
    * 将数据添加进入model表
    * 根据model_desc创建表
    * 更新model缓存
    * 是否设置权限，做权限记录操作
*/

var copy = require('copy-to');
var _Cache = require('../class/cacheClass');
var UtilsClass = require('../class/utilsClass');
var DataClass = require('../class/dataClass');
var TableClass = require('../class/tableClass');
var FlowUnitClass = require('../class/flowUnitClass');
var QueryModel = require('./queryModel');
var AddData = require('./addData');

module.exports = class AddModel extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var param = this.param;
    param['model_desc'] = param['model_desc'] || {};
    // 是否引用其他alias，如引用，则合并model_desc
    if(param['extend_alias']){ // 根据参数获取extend_alias对应的数据描述
      var newContext = {_Param: {alias: param['extend_alias']}};
      var extendModel = (yield new QueryModel(newContext).execute()).data;
      if(!extendModel) return this.execEnd(-1,'引用的别名模型不存在');
      copy(param['model_desc']).toCover(extendModel['model_desc']);
      param['model_desc'] = extendModel['model_desc'];
    }
    delete param['extend_alias'];
    // 处理掉old_fieldname
    for (var field in param['model_desc']){
      delete param['model_desc'][field]['old_fieldname'];
    }
    // 将数据添加进入model表
    param['model_desc'] = JSON.stringify(param['model_desc']);
    var res = yield new AddData({
      _Chain: this.chain,
      _Param: {
        alias: 'model',
        keyValue: param
      }
    }).execute();
    // 根据model_desc创建表
    yield TableClass.createTable(param['table_name'], JSON.parse(param['model_desc']), this.chain);
    //默认給表设置权限
    var roleKeyValue =[{
      action_name: param.model_name+'查询权限',
      action_alias: param.model_alias+'.queryData'
    },{
      action_name: param.model_name+'增加权限',
      action_alias: param.model_alias+'.addData'
    },{
      action_name: param.model_name+'修改权限',
      action_alias: param.model_alias+'.modData'
    },{
      action_name: param.model_name+'删除权限',
      action_alias: param.model_alias+'.delData'
    }];
    yield new AddData({
      _Chain: this.chain,
      _Param: {
        alias: 'action',
        keyValue: roleKeyValue
      }
    }).execute();
    return this.execEnd(1,'模型添加成功', res.data);
  }
}