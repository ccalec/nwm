define(function(require, exports, module) {
  module.exports = {
    alias: 'technician',
    target: 'self',
    filterFields:  [{
      keyField: 'name',
      type: 'like'
    },{
      keyField: 'no',
      type: 'like'
    },{
      keyField: 'rank_id',
      isshow: true,
      otherFields: [{
        tableName: 'nw_technician_rank',
        fields: ['name']
      }]
    },{
      keyField: 'store_id', // 店铺
      paramName: 'c_store_id',
      isshow: true,
      otherFields: [{
        tableName: 'nw_store',
        fields: ['name']
      }]
    }],
    filterParam: {}
  }
})