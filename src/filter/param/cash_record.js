define(function(require, exports, module) {
  module.exports = {
    alias: 'cash_record',
    target: 'self',
    filterFields:  [{
      keyField: 'cash_no',
      type: 'like'
    },{
      keyField: 'user_name',
      type: 'like'
    },{
      keyField: 'comment',
      type: 'like'
    },{
      keyField: 'cash_time',
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
      keyField: 'card_no', //卡等级
      joinField: 'no',
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