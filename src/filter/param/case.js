define(function(require, exports, module) {
  module.exports = {
    alias: 'case',
    target: 'self',
    filterFields:  [{
      keyField: 'user_name',
      type: 'like'
    },{
      keyField: 'technician_name',
      type: 'like'
    },{
      keyField: 'comment',
      type: 'like'
    },{
      keyField: 'clinic_time',
      type: 'section'
    },{
      keyField: 'store_id', // 店铺
      paramName: 'c_store_id',
      isshow: true,
      otherFields: [{
        tableName: 'nw_store',
        fields: ['name']
      }]
    },{
      keyField: 'user_id', //卡等级
      joinField: 'user_id',
      valRange: {
        tableName: 'nw_card',
        filterFields: [{
          keyField: 'card_rank_id',
          isshow: true,
          otherFields: [{
            tableName: 'nw_card_rank',
            fields: ['name']
          }]
        }]
      }
    }],
    filterParam: {}
  }
})