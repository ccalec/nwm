/**
* @fileOverview 数据库数据操作类
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name DataClass
* @param {string} tableName 数据的表名
* @param {object} keyValue 表各字段对应的key:value
* @description
*/



var debug = require('debug')('class:dataClass');
var Mysql = require('../lib/mysql');

module.exports = class DataClass {
  /**
  * @name sql
  * @memberOf dataClass
  * @param {string} tableName 数据的表名
  * @param {object} keyValue 表各字段对应的key:value
  * @param {object} chain 事务链，如果为空，则mysql操作
  * @description 新增数据
  */
  static * execsql(sql, chain){
    if(chain) return yield chain.do(sql);
    return yield Mysql.query(sql);
  }
  /**
  * @name addData
  * @memberOf dataClass
  * @param {string} tableName 数据的表名
  * @param {object} keyValue 表各字段对应的key:value
  * @param {object} chain 事务链，如果为空，则mysql操作
  * @description 新增数据
  */
  static * addData(tableName, keyValue, chain){
    var SQL = `INSERT INTO ${tableName} SET ? `;
    if(chain) return yield chain.do(SQL, [keyValue]);
    return yield Mysql.query(SQL, [keyValue]);
  }
  /**
  * @name batchAddData
  * @memberOf dataClass
  * @param {string} tableName 数据的表名
  * @param {Array=>object} keyValue 表各字段对应的key:value
  * @param {object} chain 事务链，如果为空，则mysql操作
  * @description 批量新增数据
  */
  static * batchAddData(tableName, keyValue, chain){
    var fieldArr = Object.keys(keyValue[0]);
    var fieldstr = fieldArr.join(',');
    var SQL = `INSERT INTO ${tableName} (${fieldstr}) VALUES`;
    var valueArr = [];
    keyValue.forEach(function(KV) {
      var vStr = [];
      for(var f in KV){
        if(KV[f]===null){
          vStr.push(`${KV[f]}`);
        }else{
          vStr.push(`'${KV[f]}'`);
        }
      }
      vStr = vStr.join(',');
      valueArr.push(`(${vStr})`);
    });
    SQL += valueArr.join(',');
    debug('batchAddData sql: s%',SQL);
    if(chain) return yield chain.do(SQL);
    return yield Mysql.query(SQL);
  }
  /**
  * @name delData
  * @memberOf dataClass
  * @param {string} tableName 数据的表名
  * @param {number} id 需要删除的数据id
  * @param {object} chain 事务链，如果为空，则mysql操作
  * @description 删除数据
  */
  static * delData(tableName, id, chain){
    var SQL = `DELETE FROM ${tableName} WHERE id = ${parseInt(id)} `;
    if(chain) return yield chain.do(SQL);
    return yield Mysql.query(SQL);
  }
  /**
  * @name batchDelData
  * @memberOf dataClass
  * @param {string} tableName 数据的表名
  * @param {string} ids 需要删除的数据ids，用‘,’隔开
  * @param {object} chain 事务链，如果为空，则mysql操作
  * @description 批量删除数据
  */
  static * batchDelData(tableName, ids, chain){
    var SQL = `DELETE FROM ${tableName} WHERE id in ( ${ids} ) `;
    if(chain) return yield chain.do(SQL);
    return yield Mysql.query(SQL);
  }
  /**
  * @name modData
  * @memberOf dataClass
  * @param {string} tableName 数据的表名
  * @param {number} id 需要修改的数据id
  * @param {object} keyValue 表各字段对应的key:value
  * @param {object} chain 事务链，如果为空，则mysql操作
  * @description 修改数据
  */
  static * modData(tableName, id, keyValue, chain){
    var SQL = `UPDATE ${tableName} SET ? WHERE id = ${parseInt(id)} `;
    if(chain) return yield chain.do(SQL, [keyValue]);
    return yield Mysql.query(SQL, [keyValue]);
  }
  /**
  * @name batchUpdateData
  * @memberOf dataClass
  * @param {string} tableName 数据的表名
  * @param {string} ids 需要修改的数据ids，用‘,’隔开
  * @param {object} keyValue 表各字段对应的key:value
  * @param {object} chain 事务链，如果为空，则mysql操作
  * @description 批量修改数据
  */
  static * batchModData(tableName, ids, keyValue, chain){
    var SQL = `UPDATE ${tableName} SET ? WHERE id in ( ${ids} ) `;
    if(chain) return yield chain.do(SQL, [keyValue]);
    return yield Mysql.query(SQL, [keyValue]);
  }
  /**
    * @name queryData
    * @memberOf dataClass
    * @param {obj} config 查询所需的数据描述对象
    * @param {obj} filterParams 查询所需的过滤字段值对象
    * @description config配置参数说明：
        * tableName {String}：指定给那张表配置数据过滤器
        * selFields {Array->String} 指定需要查询的表内字段，默认为全部(*)
        * filterFields {Array->String||Object} 指定选定该哪些字段作为过滤字段
        * tableWhere {String}: 指定该表查询的附加条件。eg 可以指定id在某个集合返回内，该表数据过滤条件
        * paramName 过滤字段对应传入参数的参数名。［可选］默认等于keyField
        * keyField：过滤字段的字段名
        * joinField：过滤字段的字段外链的字段名，默认id
        * otherFields：{Array->Object||String} [可选] 作为附带查询的字段，可外联表。使用场景：数据列表、过滤select的option-text
        * valRange：过滤字段本身是另外一张表的主键，自身可依赖其他条件，深度递归规则，该对象等同主配置
        * limit: {Number(length)||String(start,length)}过滤字段数据列表的取值区间。使用场景：数据列表、过滤select的选项最大值
        * type: 该过滤字段对应传入参数的类型，[int, string, like, section]  默认string全匹配， section区间类型，格式为上下线数组[1,5]
        * orderBy {Array->Object: {fieldName, isDesc}}过滤字段数据列表的排序方式, 默认isDesc = true;
        * groupByField {String:字段名} 结果按照什么字段分组，只支持最外层，不能递归
        * aggrModel: {Object: fields{Array->Object{fieldName, type, asName}, groupByField, orderBy} 聚合类型：sum，max, min, count, avg, first, last等
        * isshow 指定是否需要查询当前过滤字段的数据列表。默认[false]

        ## 功能目标：
        1. 根据各种传入参数，查询对应的数据列表
        2. 生成过滤器select，并数据联动
        3. 支持业务数据列表的count统计
        4. 支持业务查询带入where语句

        * example: 获取业务数据列表sql
        var config = {
          tableName: 'all_errors',
          otherFields: [{
            keyField: 'taskid',
            joinField: 'id',
            tableName: 'all_tasks',
            fields: ['title','addtime']  || {key:value,...}
          }],
          limit: 30,
          tableWhere: "all_errors.id NOT IN (2,3,4)",
          groupByField: 'taskid',
          orderBy: [{
              fieldName: 'id',
              isDesc: false
            }]
        };
  */
  static * queryData(config, filterParams){
    filterParams = filterParams || {};
    var queryDataSQL = createQueryDataSQL(config, filterParams);
    if(config.aggrModel){ //是否是聚合统计
      queryDataSQL =  createAggrSQL(config.aggrModel, queryDataSQL);
    }
    debug('queryDataSQL:\n%s', queryDataSQL);
    return yield Mysql.query(queryDataSQL);
  };
  /**
    * @name queryDataCount
    * @memberOf dataClass
    * @param {obj} config 查询所需的数据描述对象
    * @param {obj} filterParams 查询所需的过滤字段值对象
    * @description 查询数据总数
  */
  static * queryDataCount(config, filterParams){
    filterParams = filterParams || {};
    var queryDataCountSQL = createQueryDataCountSQL(config, filterParams);
    debug('queryDataCountSQL:\n%s', queryDataCountSQL);
    var res = yield Mysql.queryOne(queryDataCountSQL);
    return res ? res.count : 0;
  };
  /**
    * @name queryDataPageLink
    * @memberOf dataClass
    * @param {obj} config 查询所需的数据描述对象
    * @param {obj} filterParams 查询所需的过滤字段值对象
    * @description 获取分页链接字符串
  */
  static * queryDataPageLink(config, filterParams){
    filterParams = filterParams || {};
    return getValidParams(config, filterParams);
  };
  /**
    * @name queryDataPageLink
    * @memberOf dataClass
    * @param {obj} config 查询所需的数据描述对象
    * @param {obj} filterParams 查询所需的过滤字段值对象
    * @description 获取各个下拉select数据
  */
  static * queryDataFilterData(config, filterParams){
    filterParams = filterParams || {};
    var filterData = {};
    var objFilterSql = getFilterSQL(config, filterParams);
    if(config.tableName!='sys_model' && config.tableName!='sys_service' && config.tableName!='sys_workflow'){
      debug('FilterSql: %j', objFilterSql);
    }
    for(var field in objFilterSql){
      if(!objFilterSql.hasOwnProperty(field)) continue;
      filterData[field] = yield Mysql.query(objFilterSql[field]);
    }
    return filterData;
  };
};

/**
  * @description 构建查询主数据sql语句
*/
function createQueryDataSQL(conf, filterParams) {
  // 定义sql容器
  var sqlArr = [];
  // SELECT 字段
  var selectArr = [];
  if(conf.selFields){
    conf.selFields.forEach(function(field) {
      selectArr.push(conf.tableName+'.'+field);
    })
  }else{
    selectArr.push(conf.tableName+'.*');
  }
  var leftJoinArr = [];
  // 默认otherFields和val一致
  conf.otherFields && conf.otherFields.length && conf.otherFields.forEach(function(fobj) {
    if(toString.apply(fobj.fields) === '[object Array]'){ // fields: ['title','addtime']
      fobj.fields.forEach(function(field) {
        selectArr.push(fobj.tableName+'.'+field);
      });
    }else{
      for(var field in fobj.fields){ // fields: {title: newtitle,  addtime: newaddtime}
        selectArr.push(fobj.tableName+'.'+field+' AS \''+fobj.fields[field]+'\'');
      }
    }
    leftJoinArr.push('LEFT JOIN '+fobj.tableName+' ON '+conf.tableName+'.'+fobj.keyField+' = '+fobj.tableName+'.'+(fobj.joinField || 'id'));
  });
  sqlArr.push('SELECT '+selectArr.join(','));
  // FROM 表名
  sqlArr.push('FROM '+conf.tableName);
  // LEFT JOIN 左链接
  leftJoinArr.length && sqlArr.push(leftJoinArr.join('\n'));
  // WHERE 子条件
  var whereArr = [];
  if(conf.tableWhere) whereArr.push(conf.tableWhere);
  conf.filterFields && conf.filterFields.forEach(function(fobj) {
    // 获取参数值
    var paramFiledName = conf.tableName+'.'+fobj.keyField;
    var paramSqlStr = paramSqlHandler(fobj, filterParams, paramFiledName);
    // 判断参数值是否存在
    if(paramSqlStr!==undefined){
      whereArr.push(paramSqlStr);
    }else{
      if(fobj.valRange && hasRangeParams(fobj.valRange, filterParams)){
        whereArr.push(conf.tableName+'.'+fobj.keyField+' in ('+createIdsSQL(fobj, filterParams)+')');
      }
    }
  });
  whereArr.length && sqlArr.push('WHERE ' + whereArr.join('\nAND '));
  // GROUP BY 分组
  if(conf.groupByField) sqlArr.push('GROUP BY '+conf.tableName+'.'+conf.groupByField);
  // ORDER BY 排序
  if(conf.orderBy && conf.orderBy.length){
    var orderByArr = [];
    conf.orderBy.forEach(function(item) {
      orderByArr.push(conf.tableName+'.'+item.fieldName+' '+((item.isDesc||item.isDesc===undefined)?'DESC':'ASC'));
    });
    sqlArr.push('ORDER BY '+orderByArr.join(','));
  }else{
    sqlArr.push('ORDER BY '+conf.tableName+'.id DESC');
  }
  // LIMIT 长度
  conf.limit && sqlArr.push('LIMIT '+conf.limit);

  // 返回SQL
  return sqlArr.join('\n');
}
/**
 * description 根据聚合模型拼接聚合查询sql
 */
function createAggrSQL(conf, sql){
  //定义聚合sql
  var aggrSql = ['SELECT '];
  // 定义 聚合字段
  var afArr = [];
  conf.fields.forEach(function(aggr) {
    if(typeof aggr === 'object'){
      afArr.push('COALESCE('+aggr.type+'('+aggr.fieldName+'),0) AS '+aggr.asName);
    }else{
      afArr.push('COALESCE('+aggr+',0) AS '+aggr);
    }
  })
  aggrSql.push(afArr.join(','));
  // 补全
  aggrSql.push('FROM ('+sql+') as aggr');
  // GROUP BY 分组
  if(conf.groupByField){
    aggrSql.push('GROUP BY ' + conf.groupByField);
  }
  // ORDER BY
  if(conf.orderBy && conf.orderBy.length){
    var oByArr = [];
    conf.orderBy.forEach(function(item) {
      oByArr.push(item.fieldName+' '+((item.isDesc||item.isDesc===undefined)?'DESC':'ASC'));
    });
    aggrSql.push('ORDER BY '+oByArr.join(','));
  }
  // LIMIT 长度
  conf.limit && aggrSql.push('LIMIT '+conf.conf.limit);
  // 返回sql
  return aggrSql.join('\n');
}
/**
 * description 获取过滤器数据列表sql,递归调用自身获取
 */
function getFilterSQL(conf, filterParams, objFilterSql){
  objFilterSql = objFilterSql || {};
  conf.filterFields && conf.filterFields.forEach(function(fobj) {
    if(fobj.isshow){
      var paramName = fobj.paramName || fobj.keyField;  // 获取参数值
      var filterDataSQL = createFilterDataSQL(conf, fobj, filterParams);
      objFilterSql[paramName] = filterDataSQL;
    }
    if(fobj.valRange) getFilterSQL(fobj.valRange, filterParams, objFilterSql);
  });
  return objFilterSql;
}
/**
 * description 获取数据列表总数sql
 */
function createQueryDataCountSQL(conf, filterParams){
  // 定义sql容器
  var sqlArr = ['SELECT count(*) as count from ('];
  // SELECT
  sqlArr.push('SELECT '+conf.tableName+'.id');
  // FROM 表名
  sqlArr.push('FROM '+conf.tableName);
  // WHERE 子条件
  var whereArr = [];
  if(conf.tableWhere) whereArr.push(conf.tableWhere);
  conf.filterFields && conf.filterFields.forEach(function(fobj) {
    // 获取参数值
    var paramFiledName = conf.tableName+'.'+fobj.keyField;
    var paramSqlStr = paramSqlHandler(fobj, filterParams, paramFiledName);
    // 判断参数值是否存在
    if(paramSqlStr){
      whereArr.push(paramSqlStr);
    }else{
      if(fobj.valRange && hasRangeParams(fobj.valRange, filterParams)){
        whereArr.push(conf.tableName+'.'+fobj.keyField+' in ('+createIdsSQL(fobj, filterParams)+')');
      }
    }
  });
  whereArr.length && sqlArr.push('WHERE ' + whereArr.join('\nAND '));
  // GROUP BY 分组
  if(conf.groupByField) sqlArr.push('GROUP BY '+conf.tableName+'.'+conf.groupByField);
  //补全
  sqlArr.push(') c');
  // 返回SQL
  return sqlArr.join('\n');
}
/**
 * decription 获取当前传入的有效参数串，for分页链接使用, 递归调用自身
 */
function getValidParams(conf, filterParams, strArr){
  strArr = strArr || [];
  conf.filterFields && conf.filterFields.forEach(function(fobj) {
    var paramName = fobj.paramName || fobj.keyField;
    var param_val = filterParams[paramName];
    if(param_val!==undefined) strArr.push(paramName+"="+param_val);
    if(fobj.valRange) getValidParams(fobj.valRange, filterParams, strArr);
  })
  return strArr.join('&');
}
/**
 * decription 获取当前字段取值范围valRange所在表的ids, 递归调用自身
 * example:
    select id
    from all_errors
    where one = ? and two = ? and statusid in (ids)
*/
function createIdsSQL(conf, filterParams){
  if(!hasRangeParams(conf.valRange, filterParams)) return;
  var sqlArr = [];
  // SELECT 表名
  sqlArr.push('SELECT '+conf.valRange.tableName+'.'+(conf.joinField || 'id'));
  // FROM 表名
  sqlArr.push('FROM '+conf.valRange.tableName);
  // WHERE 子条件
  var whereArr = [];
  if(conf.valRange.tableWhere) whereArr.push(conf.valRange.tableWhere);
  conf.valRange.filterFields && conf.valRange.filterFields.forEach(function(fobj) {
    // 获取参数值
    var paramFiledName = conf.valRange.tableName+'.'+fobj.keyField;
    var paramSqlStr = paramSqlHandler(fobj, filterParams, paramFiledName);
    // 判断参数值是否存在
    if(paramSqlStr!==undefined){
      whereArr.push(paramSqlStr);
    }else{
      if(fobj.valRange && hasRangeParams(fobj.valRange, filterParams)){
        whereArr.push(conf.valRange.tableName+'.'+fobj.keyField+' in ('+createIdsSQL(fobj, filterParams)+')');
      }
    }
  });
  whereArr.length && sqlArr.push('WHERE ' + whereArr.join('\nAND '));
  // 返回SQL
  return sqlArr.join('\n');
}
/**
 * param {object} conf 当前过滤字段上一级配置
 * param {object} curfobj 当前过滤字段自身配置
 * decription 获取filterFields指定字段对应的数据列表SQL 逻辑：
    1.根据兄弟级别参数和子级参数共同决定自身可选数据列表
    2.如果自身参数存在，忽略掉它
  example:
    select all_errors.statusid, all_status.addtime, all_status.errornum
    from all_errors
    left join all_status on all_errors.statusid = all_status.id
    left join all_status on all_errors.statusid = all_status.id
    where one = ? and two = ? and statusid in (ids)
    group by statusid
    order by statusid desc
    limit 30
*/
function createFilterDataSQL(conf, curfobj, filterParams){
  // 生成下拉列表数据结果
  var sqlArr = [];
  // SELECT 表名
  var selectArr = [conf.tableName+'.'+curfobj.keyField];
  var leftJoinArr = [];
  // 默认otherFields和val一致
  curfobj.otherFields && curfobj.otherFields.length && curfobj.otherFields.forEach(function(fobj) {
    if(typeof fobj === 'string'){
      selectArr.push(conf.tableName+'.'+fobj);
    }
    if(typeof fobj === 'object'){
      fobj.fields.forEach(function(field) {
        selectArr.push(fobj.tableName+'.'+field);
      });
      leftJoinArr.push('LEFT JOIN '+fobj.tableName+' ON '+conf.tableName+'.'+curfobj.keyField+' = '+fobj.tableName+'.'+(fobj.joinField || 'id'));
    }
  });
  sqlArr.push('SELECT '+selectArr.join(','));
  // FROM 表名
  sqlArr.push('FROM '+conf.tableName);
  // LEFT JOIN 左链接
  leftJoinArr.length && sqlArr.push(leftJoinArr.join('\n'));
  // WHERE 子条件
  var whereArr = [];
  if(conf.tableWhere) whereArr.push(conf.tableWhere);
  conf.filterFields && conf.filterFields.forEach(function(fobj) {
    // 获取参数值
    var paramFiledName = conf.tableName+'.'+fobj.keyField;
    var paramSqlStr = paramSqlHandler(fobj, filterParams, paramFiledName);
    // 判断参数值是否存在
    if(paramSqlStr!==undefined && fobj !== curfobj){  // 判断是否为curfobj, 如果是,则跳过
        whereArr.push(paramSqlStr);
    }else{
      if(fobj.valRange && hasRangeParams(fobj.valRange, filterParams)){
        whereArr.push(conf.tableName+'.'+fobj.keyField+' in ('+createIdsSQL(fobj, filterParams)+')');
      }
    }
  });
  whereArr.length && sqlArr.push('WHERE ' + whereArr.join('\nAND '));
  // GROUP BY 分组
  if(curfobj.keyField !== 'id'){
    sqlArr.push('GROUP BY '+conf.tableName+'.'+curfobj.keyField);
  }
  // ORDER BY 排序
  if(curfobj.orderBy && curfobj.orderBy.length){
    var orderByArr = [];
    curfobj.orderBy.forEach(function(item) {
      orderByArr.push(conf.tableName+'.'+item.fieldName+' '+((item.isDesc||item.isDesc===undefined)?'DESC':'ASC'));
    });
    sqlArr.push('ORDER BY '+orderByArr.join(','));
  }else{
    sqlArr.push('ORDER BY '+conf.tableName+'.id DESC');
  }
  // LIMIT 长度
  curfobj.limit && sqlArr.push('LIMIT '+curfobj.limit);
  // 返回SQL
  return sqlArr.join('\n');
}
/**
 * decription 判断valRange下的依赖字段，是否有传入值
 */
function hasRangeParams(valRangeObj, filterParams){
  var filterFields = valRangeObj.filterFields;
  return filterFields.some(function(fobj) {
    // 获取参数值
    var paramSqlStr = paramSqlHandler(fobj, filterParams);
    // 判断参数值是否存在
    if(paramSqlStr!==undefined){
      return true;
    }else{
      if(fobj.valRange){
        return hasRangeParams(fobj.valRange, filterParams);
      }
    }
  });
}
/**
 * decription 该过滤字段对应传入参数的类型，[string, int, like, section]  默认string全匹配， section区间类型，格式为上下线数组[1,5]
 */
function paramSqlHandler(fobj, filterParams, paramFiledName){
  var paramName = fobj.paramName || fobj.keyField;
  var param_val = filterParams[paramName];
  if(param_val===undefined || param_val===NaN || param_val===null || param_val==='') return;
  var sqlstr = '';
  switch(fobj.type){
    case 'int':
      sqlstr = `${paramFiledName} = ${param_val}`;
      break;
    case 'like':
      sqlstr = `${paramFiledName} like '%${param_val}%'`;
      break;
    case 'section':
      var arr = [];
      if(param_val[0]!==undefined){
        arr.push(`${paramFiledName} >= '${param_val[0]}'`);
      }
      if(param_val[1]!==undefined){
        arr.push(`${paramFiledName} <= '${param_val[1]}'`);
      }
      sqlstr = arr.join(' and ');
      break;
    default :
      sqlstr = `${paramFiledName} = '${param_val}'`;
  }
  return sqlstr;
}





