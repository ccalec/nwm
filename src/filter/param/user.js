define(function(require, exports, module) {
  module.exports = {
    alias: 'user',
    target: 'self',
    filterFields:  [{
      keyField: 'store_id', // 店铺
      otherFields: [{
        tableName: 'nw_store',
        fields: ['name']
      }],
      type: 'int',
      isshow: true
    },{
      keyField: 'id', //卡等级
      joinField: 'user_id',
      isshow: false,
      valRange: {
        tableName: 'nw_card',
        filterFields: [{
          keyField: 'card_rank_id',
          otherFields: [{
            tableName: 'nw_card_rank',
            fields: ['name']
          }],
          isshow: true
        }]
      }
    }],
    filterParam: {}
  }
})