/**
* @fileOverview 会员刷卡
* @author <a href="http://ju.taobao.com">jianhui.fjh</a>
* @version 0.1
*/

/**
* @namespace
* @author jianhui.fjh
* @name useCardGadget
* @description  会员刷卡
*/

define(function(require, exports, module) {
  var FW = require("../breeze/framework/js/BreezeFW");
  require("../breeze/framework/js/tools/Widget")(FW);
  require("../breeze/framework/js/tools/DateTime")(FW);
  require("../gadget/cmsMgrGadget"); //引入扩展函数
  FW.register(
    {
      param:{
        navTxt: {
          'card': ['会员管理','会员刷卡']
        }
      },
      name:"useCardGadget",
      extends:['cmsMgrGadget'],
      onCreate:function(){
        $(".cateName",window.parent.document).text('会员管理');
        $(".aliasName",window.parent.document).text('会员刷卡');
        //继承权局设置
        this.API.private("privateSetGlobalVar");
        this.API.show('viewUseCardGadget');
        //绑定tab切换事件
        this.API.private('bindTabEvent');
      },
      private:{
        updateUserInfo: function(item){
          var self = this;
          self.MY.userInfo = item; //保存进全局
          //处理会员头像
          if(item.user_head){
            $('#user_head').attr('src',item.user_head);
          }
          item.amount = (item.amount / 100).toFixed(2);
          item.discount = (item.discount / 10).toFixed(1);
          item.user_sex = item.user_sex==1 ? '男' : '女';
          switch(item.status) { //0-未激活 1-使用中 -1 挂失 -999销户
            case 0:
              item.status = '未激活';
              break;
            case 1:
              item.status = '正常使用';
              break;
            case -1:
              item.status = '已挂失';
              break;
            case -999:
              item.status = '已销户';
              break;
          }
          var attr = [
            'no',
            'amount',
            'score',
            'card_rank_name',
            'discount',
            'status',
            'store_name',
            'comment',
            'user_name',
            'user_phone',
            'user_mail',
            'user_sex',
            'user_birthday',
            'user_address'
          ];
          for (var i = 0; i < attr.length; i++) {
            var html = '<b>'+item[attr[i]]+'</b>';
            this.API.find('#'+attr[i]).html(html);
          }
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
          var key = FW.use().toJSONString($('#J_inpSerVal').val());
          if(this.MY.userKey && this.MY.userKey == key) return;
          this.MY.userKey = key;
          var _param = {
            alias: 'card',
            target: 'self',
            tableWhere: "(nw_card.no = "+key+" or nw_user.phone = "+key+") and nw_card.status = 1",
            otherFields: [{
              keyField: 'user_id',
              tableName: 'nw_user',
              fields: {
                name: 'user_name',
                head: 'user_head',
                sex: 'user_sex',
                birthday: 'user_birthday',
                address: 'user_address',
                phone: 'user_phone',
                mail: 'user_mail'
              }
            },{
              keyField: 'store_id',
              tableName: 'nw_store',
              fields: {
                name: 'store_name'
              }
            },{
              keyField: 'card_rank_id',
              tableName: 'nw_card_rank',
              fields: {
                discount: 'discount',
                name: 'card_rank_name'
              }
            }]
          };
          this.API.doServer('queryData', 'cms', _param, function(code,data){
            if(code>0 && data.listData && data.listData[0]){
              var item = data.listData[0];
              this.API.private('updateUserInfo', item);
              this.API.find('.nav-tabs li a').attr('data-toggle','tab');
            }else{
              FW.use('Widget').alert('查无数据!','danger',1200);
            }
          })
        },
        bindTabEvent: function(){
          var self = this;
          var tabLi = this.API.find('.nav-tabs li');
          tabLi.on('click', function(){
            if(!self.MY.userInfo){
              FW.use('Widget').alert('请先刷卡','warning');
              return;
            }
            var alias = $(this).find('a').attr('href').substring(1);
            if(!alias || alias=='user') return;
            if($(this).attr('data-status')=='true') return;
            $(this).attr('data-status','true');
            //显示分页列表
            var conListDom = $('<form class="form-horizontal clearfix modal-body hidden"></form>');
            conListDom.appendTo($('#'+alias));
            var tableWhere;
            if(alias=='cash_record' || alias=='prepaid_record'){
              tableWhere = "nw_"+alias+".card_no = "+self.MY.userInfo.no;
            }else{
              tableWhere = "nw_"+alias+".user_id = "+self.MY.userInfo.user_id;
            }
            var param = {
              alias: alias,
              tableWhere: tableWhere,
              filterParam: {},
              orderBy:[{
                fieldName: "id",
                isDesc: true
              }]
            };
            self.API.private("privateBindFormListPage", conListDom, param, 2, function(data){
              conListDom.removeClass('hidden');
            })
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
            $('#J_inpSerVal').val(userData[0].no);
            self.API.private('searchUserInfo');
            $.unblockUI();
          });
        },
        fireOpenPage: function(page){
          if(!this.MY.userInfo){
            FW.use('Widget').alert('请先输入卡号','warning');
            return;
          }
          if(page=='SPXF'){ //商品消费
            location.href = "cash.html?card_no="+this.MY.userInfo.no;
          }else if(page=='XZJZ'){ //新增就诊
            location.href = "cmsadd.html?alias=case&action=conAdd&user_id="+this.MY.userInfo.user_id+"&user_name="+this.MY.userInfo.user_name;
          }else if(page=='XZYY'){ //新增预约
            location.href = "cmsadd.html?alias=reservation&action=conAdd&user_id="+this.MY.userInfo.user_id+"&user_name="+this.MY.userInfo.user_name;
          }else if(page=='HYCZ'){ //会员充值
            location.href = "cmsadd.html?alias=prepaid_record&action=conAdd&card_no="+this.MY.userInfo.no+"&user_name="+this.MY.userInfo.user_name;
          }else if(page=='JFBD'){ //积分变动
            location.href = "scoreoper.html?alias=score_record&card_no="+this.MY.userInfo.no;
          }else if(page=='FSDX'){ //发送短信
            location.href = "sendsms.html?alias=sms_record&action=conAdd&phones="+this.MY.userInfo.user_phone;
          }else if(page=='MMXG'){ //密码修改
            location.href = "modpsd.html?card_no="+this.MY.userInfo.no;
          }else if(page=='GSJG'){ //挂失解挂
            location.href = "cardstatus.html?card_no="+this.MY.userInfo.no;
          }else if(page=='HYHK'){ //会员换卡
            location.href = "cardchange.html?card_no="+this.MY.userInfo.no;
          }
        }
      },
      TrigerEvent:{
      }
    }
  );
  return FW;
});

