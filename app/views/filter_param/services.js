define(function(require, exports, module) {
  module.exports = {
    alias: 'services',
    target: 'self',
    filterFields:  [{
      keyField: 'name',
      type: 'like'
    },{
      keyField: 'category_id',
      isshow: true,
      otherFields: [{
        tableName: 'nw_goods_category',
        fields: ['name']
      }]
    },{
      keyField: 'status',
      isshow: true
    },{
      keyField: 'active_price',
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