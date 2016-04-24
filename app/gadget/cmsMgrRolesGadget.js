define(function(require, exports, module) {
	var FW = require("../breeze/framework/js/BreezeFW");
	require("../breeze/framework/js/tools/Widget")(FW);
	FW.register(
		{
			name:"cmsMgrRolesGadget",
			onCreate:function(){
				var self = this;
				//视图ID
				self.viewID = "viewCmsRoles";
				//存储组合对象
				var newData = {};
				//根据url的role_alias获取角色标识
				self.MY.roleAlias = FW.use().getParameter("role_alias") || "";
				if(!self.MY.roleAlias) return;
				var roleParam = {
					alias: 'role',
					filterFields: [{
						keyField: 'role_alias'
					}],
					filterParam: {
						role_alias: self.MY.roleAlias
					}
				}
				self.API.doServer('queryData','cms',roleParam,function(code, data){
					if(code>0 && data){
						newData.role_name = data.listData[0].role_name;
						newData.role_alias = data.listData[0].role_alias;
						//从cmsmatedata表循环出表内容，获取alias
						self.API.doServer('queryData', 'cms', {alias: 'action'}, function(code,data){
							if(code>0 && data){
								if(!data.listData || !data.listData.length) return;
								//重组查询出的权限结果，并分类
								var cmsData= {};
								var zdyData = [];
								var arrService = ['queryData','addData','modData','delData'];
								var sysModel = ['model','model_class','workflow','workflow_class','service','service_class','role','action','roleaction','administrator'];
								for (var i = 0; i < data.listData.length; i++) {
									var oneAction = data.listData[i];
									var name = oneAction.action_name;
									var alias = oneAction.action_alias;
									var arr = alias.split('.');
									if(arr.length==2 && ~$.inArray(arr[1], arrService)){
										if(self.MY.roleAlias!='superAdmin'){
											if(~$.inArray(arr[0], sysModel)) continue;
										}
										var cnname = name.substr(0, name.length-4);
										if(!cnname) continue;
										var idx = $.inArray(arr[1], arrService);
										cmsData[cnname] = cmsData[cnname] || [];
										cmsData[cnname][idx] = {
											alias : alias,
											name: name.substr(-4)
										}
									}else{
										zdyData.push(oneAction);
									}
								};
								newData.cmsData = cmsData;
								newData.zdyData = zdyData;
								//将已有权限actionCid存入newData
								newData.checkedArr = [];
								//给已有权限加上对勾
								var rolesActionParam = {
									alias: 'roleaction',
									filterFields: [{
										keyField: 'role_alias'
									}],
									filterParam: {
										role_alias: self.MY.roleAlias
									}
								}
								self.API.doServer('queryData','cms',rolesActionParam,function(code,data){
									if(code>0){
										if(data && data.listData && data.listData.length){
											for (var i = 0; i < data.listData.length; i++) {
												newData.checkedArr.push(data.listData[i].action_alias);
											}
										}
										//显示列表视图
										self.API.show(self.viewID, newData);

										//行鼠标经过事件
										self.API.find(".profile-info-row").hover(function(){
											$(this).css("background","#f7f7f7");
										},function(){
											$(this).css("background","none");
										});

										//cms全选，反选
										self.API.find(".cmsSelAll").click(function(){
											var cbox = self.API.find("#cmsList input[type='checkbox']");
											cbox.attr("checked","true");
										})
										self.API.find(".cmsCalAll").click(function(){
											var cbox = self.API.find("#cmsList input[type='checkbox']");
											cbox.each(function(){
												if($(this).attr("checked")){
												    $(this).removeAttr("checked");
												}else{
												   $(this).attr("checked","true");
												}
											})
										})

										//zdy全选，反选
										self.API.find(".zdySelAll").click(function(){
											var cbox = self.API.find("#zdyList input[type='checkbox']");
											cbox.attr("checked",'true');
										})
										self.API.find(".zdyCalAll").click(function(){
											var cbox = self.API.find("#zdyList input[type='checkbox']");
											cbox.each(function(){
												if($(this).attr("checked")){
												    $(this).removeAttr("checked");
												}else{
												   $(this).attr("checked","true");
												}
											})
										})

										//单行全选，反选
										self.API.find(".rowSelAll").click(function(){
											var cbox = $(this).parents(".profile-info-row").find("input[type='checkbox']");
											cbox.attr("checked",'true');
										})
										self.API.find(".rowCalAll").click(function(){
											var cbox = $(this).parents(".profile-info-row").find("input[type='checkbox']");
											cbox.each(function(){
												if($(this).attr("checked")){
												    $(this).removeAttr("checked");
												}else{
												   $(this).attr("checked","true");
												}
											})
										})
									}
								})
							}
						})
					}
				})
			},
			FireEvent:{
			},
			TrigerEvent:{
				eventSubmit:function(){
					var self = this;
					var resultArr = [];
					this.API.find("input[name='rolestatus']:checked").each(function(){
						resultArr.push($(this).val());
					});
					var param = {
						role_alias: self.MY.roleAlias,
						action_alias: resultArr
					};
					this.API.doServer('modRoleAction','cms',param,function(code,data){
						if(code>0){
							FW.use('Widget').alert('保存成功', 'success');
						}else{
							FW.use('Widget').alert('修改失败', 'danger');
						}
					})
				},
				resetBtn: function(){
					location.reload();
				}
			}
		}
	);
	return FW;
});