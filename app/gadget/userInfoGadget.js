define("",["./../breeze/framework/js/BreezeFW"],function(require){var e=require("./../breeze/framework/js/BreezeFW");return e.register({param:{getinfoServicePackage:"customer",getinfoServiceName:"getCustomerInfo",loginServicePackage:"customer",loginServiceName:"loginUser",registerServicePackage:"customer",registerServiceName:"registerUser",getUserFailTips:"\u7528\u6237\u767b\u5f55\u5931\u8d25",getUserFailJumb:null,userNotLoginJumb:null,loginSuccTips:"\u7528\u6237\u767b\u5f55\u6210\u529f",loginSuccJumb:null,loginFailTips:"\u7528\u6237\u767b\u5f55\u5931\u8d25",loginFailJumb:null,registerSuccTips:"\u6ce8\u518c\u6210\u529f",registerSuccJumb:null,registerFailTips:"\u7528\u6237\u767b\u5f55\u5931\u8d25",registerFailJumb:null,directShowView:null},name:"userInfoGadget",onCreate:function(){return this.param.directShowView?(this.API.show(this.param.directShowView),void 0):(this.API.doServer(this.param.getinfoServiceName,this.param.getinfoServicePackage,{},function(e,i){if(e>0&&i)this.MY.userInfo=i,this.API.show("view_userLogin",this.MY.userInfo);else{if(this.param.userNotLoginJumb)return window.location.href=this.param.userNotLoginJumb,void 0;this.API.show("view_userNotLogin",this.MY.userInfo)}}),void 0)},FireEvent:{fireLogin:function(e,i){var r=this.API.find("#"+e).val(),t=this.API.find("#"+i).val();this.API.trigerMyEvent("trigerLogin",r,t)},fireRegister:function(e){var i={};for(var r in e){var t=this.API.find("[name='"+e[r]+"']");if(1==t.length){var a=t[0].value;i[r]=a}else if(t.length>1)for(var n=0;n<t.length;n++){var s=t[n];if(s.checked){i[r]=s.value;break}}}this.API.trigerMyEvent("trigerRegister",i)}},TrigerEvent:{trigerLogin:function(e,i){var r={account:e,password:i};this.API.doServer(this.param.loginServiceName,this.param.loginServicePackage,r,function(e,i){e>0?(this.param.loginSuccJumb&&(window.location.href=this.param.loginSuccJumb),this.API.show("view_userLogin",i[0]),this.MY.userInfo=i[0],this.API.trigerOtherEvent("trigerLoginSucc")):this.API.private("loginFail",e)})},trigerRegister:function(e){this.API.private("registerCheck",e)&&this.API.doServer(this.param.registerServiceName,this.param.registerServicePackage,e,function(e){e>0?(alert(this.param.registerSuccTips),this.param.registerSuccJumb&&(window.location.href=this.param.registerSuccJumb)):(alert(this.param.registerFailTips),this.param.registerFailJumb&&(window.location.href=this.param.registerFailJumb))})}},"private":{loginFail:function(){alert(this.param.loginFailTips),this.param.loginFailJumb&&(window.location.href=this.param.loginFailJumb)},registerCheck:function(e){for(var i in e)if(!e[i])return alert("\u8bf7\u586b\u5199\u5b8c\u6574\uff01"),!1;return!0}}}),e});