define(function(require, exports, module) {
  module.exports = {
    alias: 'store',
    target: 'self',
    filterFields:  [{
      keyField: 'id', // 店铺
      isshow: true,
      otherFields: ['name']
    }],
    filterParam: {}
  }
})