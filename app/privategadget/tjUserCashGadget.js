/**
 * @fileOverview 数据统计页面通用gadget
 * @author <a href="http://ju.taobao.com">jianhui.fjh</a>
 * @version 0.1
 */

/**
 * @namespace
 * @author jianhui.fjh
 * @name tjUserCashGadget
 */

define(function(require, exports, module) {
	var FW = require("../breeze/framework/js/BreezeFW");
	require("../breeze/framework/js/tools/Widget")(FW);
	require("../breeze/framework/js/tools/DateTime")(FW);
	require("../gadget/cmsMgrGadget"); //引入扩展函数
	FW.register({
		param: {
			listType: 2
			// totalConListDesc  统计列表视图的入参描述
		},
		name: "tjUserCashGadget",
		extends: ['cmsMgrGadget'],
		onCreate: function() {
			this.API.private("privateSetGlobalVar");
			this.API.private("privateShowDefaultView");
		},
		private: {
			privateSetDescAndData: function(_alias,_data,_callback){
				var desc = this.MY.contentDesc[_alias];
				var newDesc = {};
				var conListDesc = this.param.totalConListDesc;
				for (var i = 0; i < conListDesc.fields.length; i++) {
					var field = conListDesc.fields[i];
					newDesc[field] = desc[field] || conListDesc.modelDesc[field];
				}
				this.MY.contentDesc[_alias] = newDesc;
				_callback && _callback();
			},
			privateSetListParam: function(param){
  			param = this.MY.param || param;
  			//分组查询，设置聚合函数支持查询总金额
  			$.extend(param, this.param.totalConListDesc);
  			return param;
			}
		},
		FireEvent: {
		},
		TrigerEvent: {
			trigerUpdatefilterParam: function(param){
	      this.MY.param = param && FW.clone(param);
	      this.API.private("privateShowConList");
	    }
		}
	});
	return FW;
});