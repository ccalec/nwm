/**
* @fileOverview 修改数据模型工作单元
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name ModModel
* @param {obj} param 模型各字段的keyValue
* @description 功能目标：修改数据模型
  ## 工作单元配置：
    * 参数校验
    * 是否引用其他alias，如引用，则合并model_desc
    * 修改表的设计,(注意先删除，后添加)
    * - 查询原表结构
    * - 删除：遍历原表中字段，如果字段在数据描述old_fieldname中存在 且 不是外联类型，则改字断不会删除，否则删除
    * - 添加：old_fieldname为空：
    * - 修改：old_fieldname不为空
    * 修改model表当前模型数据
    * 更新model缓存
    * 是否设置权限，做权限操作
*/

var copy = require('copy-to');
var _Cache = require('../class/cacheClass');
var UtilsClass = require('../class/utilsClass');
var DataClass = require('../class/dataClass');
var TableClass = require('../class/tableClass');
var SysConfig = require('../global/config').sysFields;
var ModData = require('./modData');
var FlowUnitClass = require('../class/flowUnitClass');
var QueryModel = require('./queryModel');


module.exports = class ModModel extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var param = this.param;
    param['model_desc'] = param['model_desc'] || {};
    // 是否引用其他alias，如引用，则合并model_desc
    if(param['extend_alias']){ // 根据参数获取extend_alias对应的数据描述
      var newContext = {_Param: {alias: param.extend_alias}};
      var extendModel = (yield new QueryModel(newContext).execute()).data;
      if(!extendModel) return this.execEnd(-1,'引用的别名模型不存在');
      copy(param['model_desc']).toCover(extendModel['model_desc']);
      param['model_desc'] = extendModel['model_desc'];
    }
    delete param['extend_alias'];
    // 查询原表结构
    var fieldMap = yield TableClass.showTableColumns(param['table_name']);
    // 删除：遍历原表中字断，如果字断在数据描述old_fieldname中存在 且 不是外联类型，则改字断不会删除，否则删除
    for (var key in fieldMap){
      if (SysConfig[key]) continue;
      var stat = false; // 默认为需要删除
      for(var field in param['model_desc']){
        if(param['model_desc'][field]['old_fieldname']===key && param['model_desc'][field].fieldType!=='outerField'){
          stat = true;
          break;
        }
      }
      if(!stat) yield TableClass.alterTable(param['table_name'], 'drop', key, null, this.chain);
    }
    // 修改：old_fieldname不为空, 添加：old_fieldname为空
    for (var key in param['model_desc']){
      if (SysConfig[key]) continue;
      if (param['model_desc'][key]['old_fieldname']){ //修改
        yield TableClass.alterTable(param['table_name'], 'change', key, param['model_desc'][key], this.chain);
      }else{ //添加
        yield TableClass.alterTable(param['table_name'], 'add', key, param['model_desc'][key], this.chain);
      }
    }
    // 处理掉old_fieldname
    for (var field in param['model_desc']){
      delete param['model_desc'][field]['old_fieldname'];
    }
    // 将数据添加进入model表
    param['model_desc'] = JSON.stringify(param['model_desc']);
    var res = yield new ModData({
      _Chain: this.chain,
      _Param: {
        alias: 'model',
        keyValue: param
      }
    }).execute();
    //TODO: 是否设置权限，做权限记录操作

    // 返回结果码
    return this.execEnd(1,'模型修改成功', res.data);
  }
}

