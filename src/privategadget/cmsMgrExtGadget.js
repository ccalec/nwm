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
			btnForList:{
				administrator:[{
					title: "设置密码",
					action: "modData",
					class:"btn btn-mini btn-pink",
					html:" <i class='icon-key bigger-120'> 设置密码</i>",
					onclick:"privateModPassword"
				},{
					title:"编辑",
					action:"modData",
					class:"btn btn-mini btn-info",
					style:"display:none",
					html:" <i class='icon-edit bigger-120'> 编辑</i>",
					onclick:"privateBtnConEdit"
				},{
					title:"删除",
					action:"delData",
					class:"btn btn-mini btn-danger",
					style:"display:none",
					html:" <i class='icon-trash bigger-120'> 删除</i>",
					onclick:"privateBtnConDel"
				}],
				global_announcement:[{
					title:"系统公告",
					class:"btn btn-mini btn-primary",
					html:" <i class='icon-bullhorn bigger-120'>查看详情</i>",
					onclick:"privateSeeMoreAA"
				}]
			},
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
				// 'global_announcement':2
			}
		},
		name:"cmsMgrExtGadget",
		extends:["cmsMgrGadget"],
		FireEvent:{
		},
		private:{
			// 修改密码
			privateModPassword:function(_dom,_data){
				var self = this;
				//定义当前状态指针
				self.MY.action = 'modPwd';
				//显示提交\返回按钮
				$("#submitBtn").show();
				//替换操作标题
				$("#actionName").text("密码修改");
				// 显示对应视图
				_data.password = _data.password || "密码尚未设置";
				self.API.show('viewModPassword',_data);
			},
			privateSubmit_modPwd: function(){
				var self = this;
				var aid = self.API.find('#adminId').val();
				var psd = self.API.find('#password').val();
				var repsd = self.API.find('#repassword').val();
				if(!psd || !repsd){
					FW.use('Widget').alert("密码输入不能为空");
					return;
				}
				if(psd!==repsd){
					FW.use('Widget').alert("两次密码输入不一致，请重新输入");
					self.API.find('#password').val('');
					self.API.find('#repassword').val('');
					return;
				}
				self.API.doServer("modAdminPassword",'cms',{id:aid, newPassword:psd},function(code,data){
					if(code>0 && data){
						FW.use('Widget').alert("密码修改成功",'success');
						self.API.private("privateShowConList");
					}else{
						FW.use('Widget').alert("密码修改失败",'danger');
					}
				})
			},
			privateSetRoles:function(_dom,_data){
				var curl = "/manager?path=roleaction&role_alias="+_data.role_alias;
				top.history.replaceState(null, document.title, curl);
				top.location.href = curl;
			},
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
			privateSetListParam: function(_param){ //设置列表参数
  			return this.MY.param || _param;
			},
			privateSeeMoreAA:function(dom, data){ //公告详情
				var html = [];
        html.push('<div class="aadiolag"><div class="tit">'+data.title+'</div>');
        html.push('<div class="pubtime">发表于：'+FW.use('DateTime').format(new Date(data.gmt_create),'yyyy-MM-dd hh:mm:ss')+'</div>');
        html.push('<div class="content">'+data.content+'</div></div>');
        FW.use('Widget').prompt($(html.join('')), '系统公告');
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