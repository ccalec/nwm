/**
* @fileOverview CMS后台内容操作视图的扩展函数Gadget
* @author <a href="http://ju.taobao.com">jianhui.fjh</a>
* @version 0.1
*/

/**
* @namespace
* @author jianhui.fjh
* @name cashGadget
* @description  CMS后台内容操作视图的扩展函数Gadget
*/

define(function(require, exports, module) {
  var FW = require("../breeze/framework/js/BreezeFW");
  require("../breeze/framework/js/tools/Widget")(FW);
  require("../breeze/framework/js/tools/DateTime")(FW);
  require("../gadget/cmsMgrGadget"); //引入扩展函数
  FW.register(
    {
      param:{
      },
      name:"cashGadget",
      extends:['cmsMgrGadget'],
      onCreate:function(){
        $(".cateName",window.parent.document).text('会员消费');
        $(".aliasName",window.parent.document).text('收银台');
        //继承权局设置
        this.API.private('privateSetGlobalVar');
        this.API.private('showDefault');
      },
      private:{
        showDefault: function(){
          this.MY.cashdata = {
            cash_no: 'GS'+(FW.use('DateTime').format(new Date(),'yyyyMMddhhmmss').substr(2))+((new Date().getTime()+'').substr(-2)),
            cash_time: FW.use('DateTime').format(new Date(),'yyyy-MM-dd hh:mm:ss')
          };
          this.API.show('viewCashGadget', this.MY.cashdata);
          //判断是否制定card_no
          var card_no = FW.use().getParameter("card_no") || "";  //获取userid
          if(card_no){
            $('#J_inpSerVal').val(card_no);
            this.API.private('searchUserInfo');
          }else{
            this.API.private('updateUserInfo', false);
          }
        },
        updateUserInfo: function(serBoxStatus, item){
          var self = this;
          var attr = ['user_name','card_rank_name','discount','amount','score','user_phone','no'];
          var cashInfo = {
            serBoxStatus: serBoxStatus,
            cash_no: self.MY.cashdata.cash_no,
            cash_type: (self.MY.isSanhu ? 0 : 1),
            cash_time: self.MY.cashdata.cash_time,
            card_no: '--',
            user_id: '000000',
            user_name: '散户',
            discount: 100,
            score_ratio: 10000000000
          };
          if(item){
            $('#J_inpSerVal').val(item.no);
            item.discount = (item.discount / 10).toFixed(1);
            item.amount = (item.amount / 100).toFixed(2);
            for (var i = 0; i < attr.length; i++) {
              var html = '<b>'+item[attr[i]]+'</b>';
              this.API.find('#'+attr[i]).html(html);
            }
            cashInfo.card_no = item.no;
            cashInfo.user_id = item.user_id;
            cashInfo.user_name = item.user_name;
            cashInfo.discount = item.discount*10;
            cashInfo.score_ratio = item.score_ratio;
          }else{
            $('#J_inpSerVal').val('');
            for (var i = 0; i < attr.length; i++) {
              this.API.find('#'+attr[i]).html('--');
            }
          }
          FW.trigerEvent('setCashInfo', cashInfo);
        },
        outerBox: function(title, param, callback){
          var self = this;
          $("body").append('<div id="J_outBoxWrap" style="width:0;height:0;overflow:hidden;"><form id="J_outBox" class="form-horizontal clearfix modal-body"></form></div>');
          var conListDom = $("#J_outBox");
          //显示分页列表
          self.API.private("privateBindFormListPage", conListDom, param, 2, function(data){
            FW.use('Widget').prompt(conListDom, title, function(){
              var selData = conListDom[0].batchEdit();
              if(!selData.length) return;
              callback && callback(selData);
            }, true);
            $('#J_outBoxWrap').remove();
            //绑定一行点击事件
            $("#J_outBox").delegate('tbody>tr', 'click', function(e){
              $(this).find('input[name="rowRadio"]').attr('checked','checked');
            })
          })
        },
        searchUserInfo: function(){
          if(this.MY.isSanhu) return;
          var key = FW.use().toJSONString($('#J_inpSerVal').val());
          if(this.MY.userKey && this.MY.userKey == key) return;
          this.MY.userKey = key;
          var _param = {
            alias: 'card',
            target: 'self',
            tableWhere: '(nw_card.no = '+key+' or nw_user.phone = '+key+') and nw_card.status = 1'
          };
          this.API.doServer('queryData', 'cms', _param, function(code,data){
            if(code>0 && data.listData && data.listData[0]){
              var item = data.listData[0];
              this.API.private('updateUserInfo',true, item);
            }else{
              FW.use('Widget').alert('查无数据!','danger',1200);
            }
          })
        }
      },
      FireEvent:{
        fireSearchUser: function(){
          this.API.private('searchUserInfo');
        },
        fireSerBoxUser: function(){
          var self = this;
          var param = {
            alias: 'card',
            filterParam: {},
            orderBy:[{
              fieldName:"id",
              isDesc: true
            }]
          };
          this.API.private('outerBox','快速选择会员', param, function(userData){
            self.API.private('updateUserInfo', true, userData[0]);
            $.unblockUI();
          });
        },
        fireIsSanhu: function(){
          $('#J_inpSerVal').val('');
          var isChecked = this.API.find('#cashtype').attr('checked');
          if(isChecked=='checked'){
            this.MY.isSanhu = true;
            this.API.find('#J_inpSerVal').attr('disabled','true');
            this.API.private('updateUserInfo', true);
          }else{
            this.MY.isSanhu = false;
            this.API.find('#J_inpSerVal').removeAttr('disabled');
            this.API.private('updateUserInfo', false);
          }
        }
      },
      TrigerEvent:{
        reShowDefault: function(){
          this.MY.isSanhu = false;
          this.MY.userKey = '';
          this.API.private('showDefault');
        }
      }
    }
  );
  return FW;
});

