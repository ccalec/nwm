/**
* @fileOverview 收银台提交接口
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @version 0.1
*/
'use strict';
/**
* @namespace
* @name cashSubmit
*/

var FlowUnitClass = require('../class/flowUnitClass');
var AddData = require('./addData');
var ModData = require('./modData');
var DataClass = require('../class/dataClass');

module.exports = class CashSubmit extends FlowUnitClass {
  * execute(){
    var param = this.param;
    //添加收银记录
    var cashRecRes = yield new AddData({
      _Chain: this.chain,
      _Param: {
        alias: 'cash_record',
        keyValue: param.cashData
      }
    }).execute();
    //添加收银明细记录
    var batchOutData = [];
    var inventoryData = [];
    var cash_id = cashRecRes.data.insertId;
    var cashDetailData = param.cashDetailData;
    cashDetailData.forEach(function(item){
      item.cash_record_id = cash_id;
      if(item.item_type=='goods'){
        batchOutData.push({
          goods_id: item.item_id,
          quantity: item.quantity,
          type: 1
        })
        inventoryData.push({
          item_id: item.item_id,
          quantity: item.quantity
        })
      }
    });
    yield new AddData({
      _Chain: this.chain,
      _Param: {
        alias: 'cash_detail',
        keyValue: cashDetailData
      }
    }).execute();
    //增加出库记录
    if(batchOutData.length){
      yield new AddData({
        _Chain: this.chain,
        _Param: {
          alias: 'batch_out',
          keyValue: batchOutData
        }
      }).execute();
    }
    //增加积分记录
    if(param.scoreRecordData){
      yield new AddData({
        _Chain: this.chain,
        _Param: {
          alias: 'score_record',
          keyValue: param.scoreRecordData
        }
      }).execute();
      //更新卡积分
      var updateScoreSql = `update nw_card set score = score + ${param.scoreRecordData.score} where no = ${param.scoreRecordData.card_no}  and status = 1`;
      yield DataClass.execsql(updateScoreSql);
    }
    //更新商品库存
    for (var i = 0; i < inventoryData.length; i++) {
      var one = inventoryData[i];
      var updateInventorySql = `update nw_goods set inventory = inventory - ${one.quantity} where id = ${one.item_id}`;
      yield DataClass.execsql(updateInventorySql);
    };
    return this.execEnd(1, '收银成功');
  }
}