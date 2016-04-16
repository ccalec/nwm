define(function(require, exports, module) {
  module.exports = {
    alias: 'goods',
    target: 'self',
    filterFields:  [{
      keyField: 'name',
      type: 'like'
    },{
      keyField: 'no',
      type: 'like'
    },{
      keyField: 'brand',
      type: 'like'
    },{
      keyField: 'category_id', // 店铺
      isshow: true,
      otherFields: [{
        tableName: 'nw_goods_category',
        fields: ['name']
      }]
    },{
      keyField: 'status',
      isshow: true
    },{
      keyField: 'inventory',
      type: 'section'
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