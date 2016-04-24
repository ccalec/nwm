define(function(require, exports, module) {
  module.exports = {
    alias: 'card',
    target: 'self',
    filterFields:  [{
      keyField: 'user_id',
      valRange: {
        tableName: 'nw_user',
        filterFields: [{
          keyField: 'name',
          paramName: 'user_name',
          type: 'like'
        },{
          keyField: 'phone',
          paramName: 'user_phone',
          type: 'like'
        }]
      }
    },{
      keyField: 'gmt_create',
      type: 'section'
    },{
      keyField: 'status',
      isshow: true
    },{
      keyField: 'store_id', // 店铺
      isshow: true,
      otherFields: [{
        tableName: 'nw_store',
        fields: ['name']
      }]
    },{
      keyField: 'card_rank_id', //卡等级
      isshow: true,
      otherFields: [{
        tableName: 'nw_card_rank',
        fields: ['name']
      }]
    }],
    filterParam: {}
  }
})