/**
* @fileOverview 发送短信操作
* @author
<a href="http://ju.taobao.com">jianhui.fjh</a>
* @version 0.1
*/

/**
* @namespace
* @author jianhui.fjh
* @name smsGadget
* @description  发送短信操作模版
*/

define(function(require, exports, module) {
  var FW = require("../breeze/framework/js/BreezeFW");
  require("../breeze/framework/js/tools/DateTime")(FW);
  require("../gadget/cmsMgrGadget"); //引入扩展函数
  FW.register({
    param:{
    },
    name:"smsGadget",
    extends:["cmsMgrGadget"],
    private:{
      privateMessConAddOk: function(){
        var phones = FW.use().getParameter("phones") || "";
        var temid = FW.use().getParameter("temid") || "";
        if(!phones) return;
        this.API.find('._phones_inp').val(phones);
      },
      privateSubmitConAdd: function(_callback){
        var self = this;
        //将表单转换成json
        var data = self.API.find("#"+self.param.formConAdd)[0].getDataAndCheck();
        if(!data) return;
        //判断当前视图是否存在self.MY.sonAlias，如果存在则为内容子alias操作
        //判断是否指定栏目
        if(self.MY.sonAlias){
          var curNodeid = self.MY.id;
          var curAlias = self.MY.sonAlias;
        }else{
          var curNodeid = self.MY.nodeid;
          var curAlias = self.MY.alias;
        }
        //转换data中有数组的情况为字符串
        self.API.private("privateFormToData",self.MY.contentDesc[curAlias],data);
        var _param = {
          alias: curAlias,
          keyValue: data
        };
        data.nodeid = curNodeid || "0";  //指定栏目nodeid
        self.API.doServer('sendSms','cms',_param,function(code,data){
          if(code>0){
            _callback && _callback(data);
          }else{
            FW.use('Widget').alert("发送失败！","danger", 5000);
          }
        })
      },
    },
    FireEvent:{

    },
    TrigerEvent:{
      trigerSubmit: function(){
        var self = this;
        self.API.private("privateSubmitConAdd",function(){
          FW.use('Widget').alert("短信发送成功！","success", 100*1000);
          self.API.private("privateShowDefaultView");
        });
      }
    }
  });
  return FW;
});