define(function(require, exports, module) {
  module.exports = {
    alias: 'sms_record',
    target: 'self',
    filterFields:  [{
      keyField: 'phones',
      type: 'like'
    },{
      keyField: 'gmt_create',
      type: 'section'
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