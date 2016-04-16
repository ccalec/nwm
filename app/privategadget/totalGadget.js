/**
 * @fileOverview 统计
 * @author <a href="http://ju.taobao.com">jianhui.fjh</a>
 * @version 0.1
 */

/**
 * @namespace
 * @author jianhui.fjh
 * @name totalGadget
 */

define(function(require, exports, module) {
  var FW = require("../breeze/framework/js/BreezeFW");
  require("../breeze/framework/js/tools/Widget")(FW);
  require("../breeze/framework/js/tools/DateTime")(FW);
  FW.register({
    param: {
      // 统计描述 totalDesc {Array->object: groupByField, aggrFields}
    },
    name: "totalGadget",
    onCreate: function() {
      //获取url中参数alias
      this.MY.alias = this.param.alias || FW.use().getParameter("alias") || "";
      this.API.private('showDefault');
    },
    private: {
      showDefault: function(param){
        var self = this;
        param = param || {
          alias: self.MY.alias,
          target: 'self'
        };
        param.resultSet = ''; //默认值
        this.API.initPost();
        var totalDesc = this.param.totalDesc;
        var totalData = [];
        for (var i = 0; i < totalDesc.length; i++) {
          (function(ii){
            var one = totalDesc[ii];
            var oneparam = $.extend({}, param, one);
            self.API.addPost('queryData','cms', oneparam, function(code,data){
              if(code>0 && data){
                totalData[ii] = data;
              }
            })
          })(i)
        }
        self.API.doPost(function(){
          self.API.show('viewTotal', {"totalData": totalData});
        })
      }
    },
    FireEvent: {

    },
    TrigerEvent: {
      trigerUpdatefilterParam: function(param){
        this.API.private("showDefault", FW.clone(param));
      }
    }
  });
  return FW;
});