/**
* @fileOverview cms数据查询工作流单元
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name QueryData
* @description
  ## 功能目标：
  1. 根据各种传入参数，查询对应的数据列表
  2. 生成过滤器select，并数据联动
  3. 支持业务数据列表的count统计
  4. 支持业务查询带入where语句
* @example: context._Param入参配置
    var param = {
      alias: 'error',
      target: 'self'  //查询类型，self:查询本表(默认), parent:查询父表, son:查询子表
      resultSet: 'list',  //默认空-仅查询主列表数据，'list'-查询所有分页所需数据，
      otherFields: [{
        keyField: 'taskid',
        tableName: 'all_tasks',
        fields: ['title','addtime']
      }],
      limit: 30, // Number 10 or String "10,20"
      tableWhere: "all_errors.id NOT IN (2,3,4)",
      orderBy: [{
        fieldName: 'id',
        isDesc: false
      }],
      filterParam: {
        siteid: 1
      }
    };
*/

var copy = require('copy-to');
var UtilsClass = require('../class/utilsClass');
var DataClass = require('../class/dataClass');
var FlowUnitClass = require('../class/flowUnitClass');
var QueryModel = require('./queryModel');

module.exports = class QueryData extends FlowUnitClass {
  // 单元执行主逻辑
  * execute(){
    var param = this.param;
    // 根据参数获取alias对应的数据描述
    var model = (yield new QueryModel(this.context).execute()).data;
    if(!model) return this.execEnd(-1,'alias对应的数据描述不存在');
    // 将数据描述转成查询类配置
    var aliasConfig = yield UtilsClass.getQueryCfgByModel(model);
    //适配器：将入参转化成查询单元参数格式
    var filterParam = param.filterParam;
    var listParam = {};
    if(param.filterFields) listParam.filterFields = param.filterFields;
    if(param.selFields) listParam.selFields = param.selFields;
    if(param.tableWhere) listParam.tableWhere = param.tableWhere;
    if(param.orderBy) listParam.orderBy = param.orderBy;
    if(param.groupByField) listParam.groupByField = param.groupByField;
    if(param.aggrModel) listParam.aggrModel = param.aggrModel;
    if(param.otherFields) listParam.otherFields = param.otherFields;
    if(param.limit) listParam.limit = param.limit;
    copy(listParam).override(aliasConfig);
    // 定义临时返回对象
    var Data = {};
    // 将数据描述放入结果集中
    Data.model = model;
    // 结果类型
    if(param.resultSet=='list'){
      Data.listData = yield DataClass.queryData(aliasConfig, filterParam);  // 获取列表数据
      Data.listCount = yield DataClass.queryDataCount(aliasConfig, filterParam); //获取总数
      Data.pageLink = yield DataClass.queryDataPageLink(aliasConfig, filterParam); //分页linkstr
      Data.filterData = yield DataClass.queryDataFilterData(aliasConfig, filterParam); //过滤器数据
    }else if(param.resultSet=='count'){
      Data.listCount = yield DataClass.queryDataCount(aliasConfig, filterParam); //获取总数
    }else if(param.resultSet=='filter'){
      Data.filterData = yield DataClass.queryDataFilterData(aliasConfig, filterParam); //过滤器数据
    }else{
      Data.listData = yield DataClass.queryData(aliasConfig, filterParam);  // 获取列表数据
    }
    // 单元操作结果码
    return this.execEnd(1,'数据查询成功',Data);
  }
}






