define(function(require, exports, module) {
  module.exports = {
    alias: 'score_record',
    target: 'self',
    filterFields:  [{
      keyField: 'user_name',
      type: 'like'
    },{
      keyField: 'comment',
      type: 'like'
    },{
      keyField: 'gmt_create',
      type: 'section'
    },{
      keyField: 'type',
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