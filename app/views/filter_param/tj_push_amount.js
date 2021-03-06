define(function(require, exports, module) {
  module.exports = {
    alias: 'cash_detail',
    target: 'self',
    filterFields:  [{
      keyField: 'technician_name',
      type: 'like'
    },{
      keyField: 'store_id', // 店铺
      paramName: 'c_store_id',
      isshow: true,
      otherFields: [{
        tableName: 'nw_store',
        fields: ['name']
      }]
    },{
      keyField: 'technician_id',
      valRange: {
        tableName: 'nw_technician',
        filterFields: [{
          keyField: 'rank_id',
          isshow: true,
          otherFields: [{
            tableName: 'nw_technician_rank',
            fields: ['name']
          }]
        },{
          keyField: 'no',
          paramName: 'technician_no',
          type: 'like'
        }]
      }
    }],
    filterParam: {}
  }
})