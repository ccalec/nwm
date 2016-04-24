define(function(require, exports, module) {
  module.exports = {
    alias: 'cash_detail',
    target: 'self',
    filterFields:  [{
      keyField: 'item_name',
      type: 'like'
    },{
      keyField: 'user_name',
      type: 'like'
    },{
      keyField: 'gmt_create',
      type: 'section'
    },{
      keyField: 'item_type', // 项目类型
      isshow: true
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