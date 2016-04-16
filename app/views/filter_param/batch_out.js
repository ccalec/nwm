define(function(require, exports, module) {
  module.exports = {
    alias: 'batch_out',
    target: 'self',
    filterFields:  [{
      keyField: 'goods_id',
      valRange: {
        tableName: 'nw_goods',
        filterFields: [{
          keyField: 'name',
          paramName: 'goods_name',
          type: 'like'
        },{
          keyField: 'no',
          paramName: 'goods_no',
          type: 'like'
        },{
          keyField: 'brand',
          paramName: 'goods_brand',
          type: 'like'
        },{
          keyField: 'category_id',
          paramName: 'goods_category_id',
          isshow: true,
          otherFields: [{
            tableName: 'nw_goods_category',
            fields: ['name']
          }]
        }]
      }
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
    }],
    filterParam: {}
  }
})