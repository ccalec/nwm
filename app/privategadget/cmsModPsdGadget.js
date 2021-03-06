/**
* @fileOverview 修改会员卡密码
* @author <a href="http://ju.taobao.com">jianhui.fjh</a>
* @version 0.1
*/

/**
* @namespace
* @author jianhui.fjh
* @name cmsModPsdGadget
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
      name:"cmsModPsdGadget",
      extends:['cmsMgrGadget'],
      onCreate:function(){
        //继承权局设置
        this.API.private("privateSetGlobalVar");
        this.API.show('viewMain');
        this.MY.formDom = this.API.find('#formDiy');
        $(".cateName",window.parent.document).text(this.param.navTxt[0]);
        $(".aliasName",window.parent.document).text(this.param.navTxt[1]);
        $(".aliasName").text(this.param.navTxt[1]);
        this.API.private('privateShowDefaultView');
        //判断是否制定card_no
        var card_no = FW.use().getParameter("card_no") || "";  //获取userid
        if(card_no){
          $('#J_inpSerVal').val(card_no);
          this.API.private('searchUserInfo');
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
        fireSubmit: function(){
          var self = this;
          if(!self.MY.cardInfo){
            FW.use('Widget').alert("请先选择会员");
            return;
          }
          var data = self.MY.formDom[0].getDataAndCheck();
          if(!data) return;
          var param = {
            id: self.MY.cardInfo.id,
            password: data.renewpsd,
            comment: data.comment
          }
          self.API.doServer('modPassword', 'cms', param, function(code,data){
            if(code>0){
              FW.use('Widget').alert("修改密码成功", "success");
              self.API.private('privateShowDefaultView');
            }else{
              FW.use('Widget').alert("修改密码失败！","danger");
            }
          })
        },
        fireReset: function(){
          this.API.private('updateUserInfo');
          this.API.private('privateShowDefaultView');
        }
      },
      private:{
        privateShowDefaultView: function(){
          var desc = {
            newpsd: {
              title: "新密码",
              type: "Text",
              valueRange: [{
                checkers: "\\S+",
                failTips: "新密码不能为空"
              }]
            },
            renewpsd: {
              title: "确认新密码",
              type: "Text",
              valueRange: [{
                checkers: function(_data,checkValue){
                  return _data.newpsd == checkValue;
                },
                failTips: "两次密码不一致"
              }]
            },
            comment: {
              title: "备注",
              type: "TextArea"
            }
          }
          FW.use().createForm(desc, this.MY.formDom);
          this.MY.formDom.find('input').attr('type','password');
        },
        updateUserInfo: function(item){
          var self = this;
          var attr = ['user_name','card_rank_name','discount','amount','score','user_phone','no'];
          if(item){
            $('#J_inpSerVal').val(item.no);
            item.discount = (item.discount / 10).toFixed(1);
            item.amount = (item.amount / 100).toFixed(2);
            for (var i = 0; i < attr.length; i++) {
              var html = '<b>'+item[attr[i]]+'</b>';
              this.API.find('#'+attr[i]).html(html);
            }
            this.MY.cardInfo = item;
          }else{
            $('#J_inpSerVal').val('');
            for (var i = 0; i < attr.length; i++) {
              this.API.find('#'+attr[i]).html('--');
            }
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
          var key = JSON.stringify($('#J_inpSerVal').val());
          if(this.MY.userKey && this.MY.userKey == key) return;
          this.MY.userKey = key;
          var _param = {
            alias: 'card',
            target: 'self',
            tableWhere: `(nw_card.no = ${key} or nw_user.phone = ${key}) and nw_card.status = 1`
          };
          this.API.doServer('queryData', 'cms', _param, function(code,data){
            if(code>0 && data.listData && data.listData[0]){
              var item = data.listData[0];
              this.API.private('updateUserInfo', item);
            }else{
              FW.use('Widget').alert('查无数据!','danger',1200);
            }
          })
        }
      },
      TrigerEvent:{
      }
    }
  );
  return FW;
});

