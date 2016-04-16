/**
* @fileOverview CMS后台内容操作视图的扩展函数Gadget
* @author <a href="http://ju.taobao.com">jianhui.fjh</a>
* @version 0.1
*/

/**
* @namespace
* @author jianhui.fjh
* @name cashDetailGadget
* @description  CMS后台内容操作视图的扩展函数Gadget
*/

define(function(require, exports, module) {
  var FW = require("../breeze/framework/js/BreezeFW");
  require("../breeze/framework/js/tools/DateTime")(FW);
  require("../breeze/framework/js/tools/Widget")(FW);
  require("../gadget/cmsMgrGadget"); //引入扩展函数
  FW.register(
    {
      param:{
        alias: 'cash_detail',
        formConList: 'formCashDetailList',
        action: 'conList',
        btnForList:{
          'cash_detail': [{
            title:"删除",
            class:"btn btn-mini btn-danger",
            html:" <i class='icon-trash bigger-120'> 删除</i>",
            onclick:"privateBtnConDel"
          }]
        }
      },
      name:"cashDetailGadget",
      extends:['cmsMgrGadget'],
      onCreate:function(){
        var self = this;
        this.API.private("privateSetGlobalVar");
        this.API.show('viewCashDetailGadget');
        this.MY.userDiscount = 100;
        this.MY.noClass = true;
        this.MY.formDom = $("#"+this.param.formConList);
        this.MY.itemMap = {}; //商品map
        //显示消费项目列表
        // self.API.private("showDetailView");
        //显示提交返回按钮
        setTimeout(function(){
          $("#submitBtn").fadeIn(150);
        },150);
        //绑定搜索事件
        this.API.private('bindSerBox');
        $(document).on('click',function(e){
          var target = e.target;
          if(!$(target).parents('#J_serBox').length && $(target).attr('id')!='J_serKey' && $(target).attr('id')!='btnSerKeyItem'){
            $('#J_serBox').slideUp(100);
          }
        });
      },
      private:{
        showDetailView: function(data){
          var self = this;
          this.API.private("privateContentDesc", self.MY.alias, function(_modelDesc){
            reShowOutLink(data);
            function reShowOutLink(_data){
              //表单生成前，对数据描述和数据的自定义接口
              //数据描述改造
              var curModelDesc = self.MY.contentDesc[self.MY.alias];
              curModelDesc.item_name.type = 'ReadOnly';
              curModelDesc.technician_name.type = 'ReadOnly';
              //处理提成金额
              if(_data && _data.length){
                for (var i = 0; i < _data.length; i++) {
                  var item = _data[i];
                  if(item.push_percent){
                    item.push_amount = parseInt(item.unit_price)*parseInt(item.push_percent)/100;
                  }
                }
              }
              FW.use().createFormList(curModelDesc,self.MY.formDom,_data,function(fieldName,fieldValue){
                self.API.private("privateOutLinkCB",curModelDesc, self.MY.formDom, fieldName, fieldValue,function(newdata){
                  reShowOutLink(newdata);
                })
              },0);
              self.API.private("privateShowConListCB",_data);
              self.API.private("updateTj"); //更新统计信息
              // 绑定事件
              self.API.find('._formlist_quantity_inp').each(function(){
                var t;
                $(this).ace_spinner({
                  value: parseInt(this.value),
                  min: 1,
                  max: 10000,
                  step: 1,
                  btn_up_class:'btn-info',
                  btn_down_class:'btn-info'
                }).on('change', function(){
                  var _this = this;
                  if(t) clearTimeout(t);
                  t = setTimeout(function(){
                    var idx = $('._formlist_quantity_inp').index($(_this));
                    var inventory = parseInt(self.MY.itemMap[_data[idx].item_id].inventory) || '-1';
                    if(inventory < _this.value && inventory != '-1'){
                      FW.use('Widget').alert('已达库存上限','warning',1200);
                      _this.value = inventory;
                    }
                    var newData = self.MY.formDom[0].getData().formList || [];
                    self.API.private("showDetailView", newData);
                  },300);
                })
              })
              self.API.find('._formlist_total_amount_inp').each(function(){
                var t;
                $(this).ace_spinner({
                  value: this.value,
                  min: 0,
                  max: 10000000,
                  step: 1,
                  btn_up_class: 'hidden',
                  btn_down_class: 'hidden'
                }).on('change', function(){
                  if(t) clearTimeout(t);
                  t = setTimeout(function(){
                    var newData = self.MY.formDom[0].getData().formList || [];
                    self.API.private("showDetailView", newData);
                  },300);
                });
              })
              self.API.find('._formlist_item_type_sel,._formlist_unit_price_inp,._formlist_push_amount_inp').attr('disabled','true');
            }
          })
        },
        updateTj: function(){  //统计函数
          var data = this.MY.formDom[0].getData().formList;
          var fids = {
            cTQuantity: 0,
            cTAmout: 0,
            daTAmout: 0,
            cScore: 0,
            cpTAmout: 0
          };
          for (var i = 0; i < data.length; i++) {
            var item = data[i];
            var quantity = parseInt(item.quantity);
            var active_price = this.MY.itemMap[item.item_id].active_price;
            var total_amount = parseInt(item.total_amount);
            var push_percent = parseInt(item.push_percent)/100;
            fids.cTQuantity += quantity;
            fids.cTAmout += active_price*quantity;
            fids.daTAmout += total_amount;
            fids.cScore += Math.floor(total_amount/this.MY.userScoreRatio/100);
            fids.cpTAmout += total_amount*push_percent;
          }
          fids.cTAmout = (fids.cTAmout/100).toFixed(2);
          fids.daTAmout = (fids.daTAmout/100).toFixed(2);
          fids.cpTAmout = (fids.cpTAmout/100).toFixed(2);
          this.MY.tjData = fids;
          for (var id in fids) {
            var html = '<b>'+fids[id]+'</b>';
            this.API.find('#'+id).html(html);
          }
        },
        bindSerBox: function(callback){
          var self = this;
          var t;
          var serDom = this.API.find('#J_serKey');
          serDom.on('keyup focus',function(e){
            if(t) clearTimeout(t);
            t = setTimeout(function(){
              //获取数据
              var alias = self.API.find('input[name="item_type"]:checked').val();
              var _param = {
                alias: alias,
                target: 'self',
                orderby: [{
                  fieldName: 'id',
                  isDesc: false
                }],
                limit: 10
              };
              if(serDom.val()){
                var key = JSON.stringify('%'+serDom.val()+'%');
                if(alias=='goods'){
                  var tableWhere = `(nw_goods.name like ${key} or nw_goods.no like ${key}) and nw_goods.status = 1`;
                }else{
                  var tableWhere = `nw_services.name like ${key} and nw_services.status = 1`;
                }
                _param.tableWhere = tableWhere;
              }
              var thArr = ['收费名称','销售单价','折后单价(元)','库存(件)'];
              var htmlArr = ['<table class="table table-bordered table-hover"><thead>'];
              htmlArr.push('<tr>');
              for (var i = 0; i < thArr.length; i++) {
                htmlArr.push('<th>'+thArr[i]+'</th>');
              }
              htmlArr.push('</tr></thead><tbody>');
              self.API.doServer('queryData', 'cms', _param, function(code,data){
                if(code>0 && data.listData && data.listData.length){
                  for (var i = 0; i < data.listData.length; i++) {
                    htmlArr.push('<tr class="J_itemTr" style="cursor: pointer;">');
                    var item = data.listData[i];
                    var tdField = [
                      item.name,
                      parseFloat(item.active_price/100).toFixed(2),
                      parseFloat(item.active_price*self.MY.userDiscount/10000).toFixed(2),
                      (item.inventory || '-')
                    ];
                    for (var j = 0; j < tdField.length; j++) {
                      var field = tdField[j];
                      htmlArr.push('<td>'+field+'</td>');
                    }
                    htmlArr.push('</tr>');
                  }
                }else{
                  htmlArr.push('<tr><td colspan="4"><div class="nodata">暂无数据</div></td></tr>');
                }
                htmlArr.push('</tbody></table>');
                if(!$('#J_serBox').length){
                  $('body').append('<div id="J_serBox" class="search-box"></div>');
                }
                var left = serDom.offset().left +serDom.outerWidth()+60;
                var top = serDom.offset().top;
                $('#J_serBox').html(htmlArr.join('\n')).css({
                  left: left,
                  top: top
                }).slideDown(100);
                $('#J_serBox .J_itemTr').click(function(e){
                  if(!self.MY.cashInfo || !self.MY.cashInfo.serBoxStatus){
                    FW.use('Widget').alert('请选择会员或勾选散户','danger');
                    return;
                  }
                  var idx = $('#J_serBox .J_itemTr').index($(this));
                  var oneData = data.listData[idx];
                  self.MY.itemMap[oneData.id] = oneData;
                  var unit_price = parseFloat(oneData.active_price*self.MY.userDiscount/100).toFixed(2);
                  var trData = {
                    item_type: alias,
                    item_id: oneData.id,
                    item_name: oneData.name,
                    quantity: 1,
                    technician_name: '',
                    cash_type: self.MY.cashInfo.cash_type,
                    push_percent: 0,
                    push_amount: 0,
                    unit_price: unit_price,
                    total_amount: unit_price,
                    card_no: self.MY.cashInfo.card_no,
                    user_id: self.MY.cashInfo.user_id,
                    user_name: self.MY.cashInfo.user_name
                  };
                  var newData = self.MY.formDom[0].getData().formList || [];
                  var inData = false;
                  for (var i = 0; i < newData.length; i++) {
                    var item = newData[i];
                    if(item.item_id == trData.item_id && item.item_type == trData.item_type){
                      item.quantity = parseInt(item.quantity) + 1;
                      if(item.quantity > oneData.inventory && oneData.inventory != '-1'){
                        item.quantity = oneData.inventory;
                        FW.use('Widget').alert('已达库存上限','warning',1200);
                      }
                      item.total_amount = item.quantity * parseFloat(item.unit_price);
                      inData = true;
                    }
                  }
                  if(!inData) newData.push(trData);
                  self.MY.detailData = newData;
                  self.API.private("showDetailView", newData);
                })
              })
            },200)
          })
        },
        privateBtnConDel: function(_dom,_data){
          var data = this.MY.detailData || [];
          var newData = [];
          for (var i = 0; i < data.length; i++) {
            var item = data[i];
            if(item.item_type == _data.item_type && item.item_id == _data.item_id) continue;
            newData.push(item);
          }
          this.MY.detailData = newData;
          this.API.private("showDetailView", newData);
        }
      },
      FireEvent:{
        submitJieSuan: function(){
          var cashDetailData = this.MY.formDom[0].getData().formList;
          var cashInfo = this.MY.cashInfo;
          if(!cashInfo || !cashDetailData.length){
            FW.use('Widget').alert('请选择消费的商品信息','danger');
          }
          var param = {
            cashData: {
              alias: 'cash_record',
              cash_no: cashInfo.cash_no,
              cash_type: cashInfo.cash_type,
              card_no: cashInfo.card_no,
              user_id: cashInfo.user_id,
              user_name: cashInfo.user_name,
              cash_time: cashInfo.cash_time,
              amount: this.MY.tjData.cTAmout*100,
              real_amount: this.MY.tjData.daTAmout*100,
              score: this.MY.tjData.cScore || 0,
              comment: this.API.find('#comment').val(),
              status: 1
            },
            cashDetailData: cashDetailData
          };
          if(this.MY.tjData.cScore && cashInfo.card_no){
            param.scoreRecordData = {
              type: 1,
              from_type: 1,
              score: this.MY.tjData.cScore,
              card_no: cashInfo.card_no,
              user_id: cashInfo.user_id,
              user_name: cashInfo.user_name,
              comment: "会员消费积分，消费总金额["+this.MY.tjData.daTAmout*100+"]，获得积分["+this.MY.tjData.cScore+"]"
            }
          }
          this.API.doServer('cashSubmit','cms', param, function(code, data){
            if(code==1){
              FW.use('Widget').alert('收银成功','success',1500);
              setTimeout(function(){
                FW.trigerEvent('reShowDefault');
              },1500)
            }
          })
        },
        fireCloseSerBox: function(){
          $('#J_serBox').slideToggle(100);
        },
        resetForm: function(){
          FW.trigerEvent('reShowDefault');
        }
      },
      TrigerEvent:{
        setCashInfo: function(cashInfo){
          this.MY.cashInfo = cashInfo;
          this.MY.userDiscount = cashInfo.discount;
          this.MY.userScoreRatio = cashInfo.score_ratio;
          this.API.private("showDetailView");
        }
      }
    }
  );
  return FW;
});

