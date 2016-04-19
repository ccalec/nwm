/**
* @fileOverview CMS后台内容操作视图的扩展函数Gadget
* @author
<a href="http://ju.taobao.com">jianhui.fjh</a>
* @version 0.1
*/

/**
* @namespace
* @author jianhui.fjh
* @name cmsMgrExtGadget
* @description  CMS后台内容操作视图的扩展函数Gadget
*/

define(function(require, exports, module) {
	var FW = require("../breeze/framework/js/BreezeFW");
	require("../breeze/framework/js/tools/DateTime")(FW);
	require("../gadget/cmsMgrGadget"); //引入扩展函数
	FW.register({
		param:{
			listType: {
				'cash_record':2,
				'cash_detail':2,
				'prepaid_record':2,
				'score_record':2,
				'case':2,
				'reservation': 2,
				'sms_record':2,
				'tj_store':2,
				'batch_in':2,
				'batch_out':2
			}
		},
		name:"cmsMgrExtGadget",
		extends:["cmsMgrGadget"],
		FireEvent:{
		},
		private:{
			/**
			*@function
			*@name privateMessOutLinkOk
			*@memberOf cmsMgrGadget
			*@param {Object} _modelDesc 当前数据描述
			*@param {JqueryContainer} _formDom 当前视图的form节点
			*@param {String} _fieldName 当前外联字段名
			*@param {String} _fieldValue 当前外联字段值
			*@param {Object} _newData 当前外联选择后的表单新数据
			*@description 定义外联字段的按钮事件完成后的消息函数, 用于可扩展
			*@sn 用于扩展选择工作流后，自动生成服务配置数据描述
			*/
			privateMessOutLinkOk: function(_modelDesc, _formDom, _fieldName, _fieldValue, _newData){
				var _this = this;
				if(_this.MY.alias=='service' && _fieldName=='flow_id' && _newData.flow_id != _fieldValue){
					var _param = {
						flowId: _newData[_fieldName]
					};
					_this.API.doServer('queryServiceModel', _this.MY.package, _param, function(code,data){
						if(code>0 && data){
							_modelDesc['unit_param'].valueRange = data;
							$('[name="data.unit_param"]').val('');
						}
					})
				}
			},
			/**
			*@function
			*@name privateMessConEditOk
			*@memberOf cmsMgrGadget
			*@description 内容编辑视图显示完后发送的内部消息，可根据alias及视图指针判断
			*@example
			*/
			privateMessConEditOk:function(_data){
				var _this = this;
				if(_this.MY.alias=='service'){
					var _param = {
						flowId: _data['flow_id']
					};
					_this.API.doServer('queryServiceModel', _this.MY.package, _param, function(code,data){
						if(code>0 && data){
							_this.MY.contentDesc['service']['unit_param'].valueRange = data;
						}
					})
				}
			},
			/**
			*@function
			*@name privateMessConAddOk
			*@memberOf cmsMgrGadget
			*@description 内容添加视图显示完毕通知函数
			*
			*@example
			*/
			privateMessConAddOk:function(){
				var user_id = FW.use().getParameter("user_id") || '';
				var user_name = FW.use().getParameter("user_name") || '';
				var card_no = FW.use().getParameter("card_no") || '';
				var phones = FW.use().getParameter("phones") || '';
				var arr = ['user_id','user_name','card_no','phones'];
				var valueArr = [user_id,user_name,card_no,phones];
				for (var i = 0; i < arr.length; i++) {
					var field = arr[i];
					var val = valueArr[i];
					if(val) this.API.find('._'+field+'_inp').val(val);
				}
				if(this.MY.alias=='sms_record'){
					this.API.find('._phone_num_inp').val(val.split(',').length);
				}
			},
			privateSetListParam: function(_param){
  			return this.MY.param || _param;
			}
		},
		TrigerEvent:{
			trigerUpdatefilterParam: function(param){
      	this.MY.param = param ? $.extend({}, param) : null;
	      this.API.private("privateShowConList");
	    }
		}
	});
	return FW;
});