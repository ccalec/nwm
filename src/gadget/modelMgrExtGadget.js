
/**
* @namespace
* @author 月飞
* @emial jianhui.fjh@alibaba-inc.com
* @name modelMgrExtGadget
* @description  CMS后台模型操作视图Gadget
*/
define(function(require, exports, module) {
	var FW = require("../breeze/framework/js/BreezeFW");
	require("../breeze/framework/js/tools/DateTime")(FW);
	require("../breeze/framework/js/tools/Widget")(FW);
	require("../gadget/cmsMgrGadget"); //引入扩展函数
	FW.register(
		{
			name:"modelMgrExtGadget",
			extends:["cmsMgrGadget"],
			param:{
				/**
				*@name alias
				*@memberOf modelMgrExtGadget
				*@description 默认的alias
				*/
				alias: "model",
				nodeid: 2
			},
			private:{
				/**
				*@function
				*@name privateDataToForm
				*@memberOf cmsMgrGadget
				*@param {Object} _desc 当前数据描述
				*@param {Object} _arrData 从数据库获取到的多笔数据的一个数组
				*@description 将createForm函数执行参数的数据描述desc和数据data进行数据转换，主要实现如下
				* 1、model模型对数据的特殊转换
				*@example
				*/
				privateDataToForm: function(_desc,_arrData){
					// 当修改操作时，数据描述fieldname增加 old_fieldname字段(外联字段除外)，用于区分是否修改字段
					if(this.MY.action == this.MY.act.conEdit){  //模型修改的时候
						var descObj = _desc.model_desc.valueRange[0];
						descObj['old_fieldname'] = {
							islist: "0",
							title: "fieldname",
							type: "Hidden",
							width:"80px"
						};
						// 2. alias 不可修改
						_desc['model_alias']['type'] = 'ReadOnly';
						_desc['table_name']['type'] = 'ReadOnly';
					}
					if(_arrData && _arrData.length){
						for(var i = 0; i < _arrData.length; i++){
							var _modelDesc = [];
							if(_arrData[i].model_desc){
								if(typeof _arrData[i].model_desc === 'string'){
									_arrData[i].model_desc = FW.use().evalJSON(_arrData[i].model_desc);
								}
								for(var prop in _arrData[i].model_desc){
									var fieldObj = _arrData[i].model_desc[prop];
									//模型修改的时候, 将fieldname值复制到old_fieldname
									if(this.MY.action == this.MY.act.conEdit){
										if(fieldObj.fieldType!=='outerField'){  //如果是非外联字断，则增加old_fieldname
											fieldObj['old_fieldname'] = prop;
										}
									}
									//转换valueRang为字符串
									if(fieldObj.valueRange){
										//将校验的checkers数组里面的函数字符串转化为函数
										for (var nProp in fieldObj.valueRange){
											var vOne = fieldObj.valueRange[nProp];
											if(vOne.checkers && vOne.checkers.indexOf("function") == 0){
												vOne.checkers = FW.use().evalJSON(vOne.checkers);
											}
										}
										fieldObj.valueRange = FW.use().toJSONString(fieldObj.valueRange);
									}
									fieldObj.fieldname = prop;
									_modelDesc.push(fieldObj);
								}
								_arrData[i].model_desc = _modelDesc;
							}
						}
					}
				},
				/**
				*@function
				*@name privateFormToData
				*@memberOf cmsMgrGadget
				*@param {Object} _desc 当前数据描述
				*@param {Object} _data dom[0].getData()函数获取到的单条数据
				*@description 数据转换函数:将表单获取到的数据中的数组类型List,Pics等，转换成字符串类型保存至数据库，主要实现如下：
				* 1、将List和Pics等数组类型，由数组转成字符串
				*@example
				*/
				privateFormToData: function(_desc,_data){
					if(_data && _data.model_desc){
						var _modelDesc = {};
						for(var i=0; i<_data.model_desc.length;i++){
							//转换valueRang为对象
							if(_data.model_desc[i].valueRange){
								_data.model_desc[i].valueRange = FW.use().evalJSON(_data.model_desc[i].valueRange);
								//将校验的checkers数组里面的函数转化为字符串
								for (var nProp in _data.model_desc[i].valueRange){
									var vOne = _data.model_desc[i].valueRange[nProp];
									if(/function/i.test(typeof(vOne.checkers))){
										vOne.checkers = FW.use().toJSONString(vOne.checkers);
									}
								}
							}
							var fObj = _data.model_desc[i];
							_modelDesc[fObj.fieldname] = fObj;
							delete _modelDesc[fObj.fieldname].fieldname;
						}
						_data.model_desc = _modelDesc;
					}
				},
				/**
				*@function
				*@name privateBtnConDel
				*@memberOf cmsMgrGadget
				*@description 内容列表视图通用删除按钮函数
				* 需要完成的功能如下：
				* 1、判断当前视图是否存在_this.MY.sonAlias，如果存在则为内容子alias操作
				* 2、doServer从数据库删除该条数据
				* 3、删除成功后重新执行内容列表视图
				*@example
				*/
				privateBtnConDel: function(_dom,_data){
					var _this = this;
					//判断当前视图是否存在_this.MY.sonAlias，如果存在则为内容子alias操作
					var curAlias = _this.MY.sonAlias || _this.MY.alias;
					if(confirm("确认要删除该内容吗？")){
						var _param = {
							alias: curAlias,
							target_alias: _data.model_alias
						}
						var _serverName = curAlias=='model'
							? _this.MY.serverName.dModel
							: _this.MY.serverName.dCon;
						_this.API.doServer(_serverName, _this.MY.package, _param, function(code,data){
							if(code>0){
								_this.API.private("privateShowConList");
							}else{
								FW.use('Widget').alert("内容删除失败！","danger");
							}
						})
					}
				},
				/**
				*@function
				*@name privateBtnConPLDel
				*@memberOf cmsMgrGadget
				*@description 内容列表视图批量删除按钮
				* 需要完成的功能如下：
				* 1、获得表单的dom
				* 2、判断当前视图是否存在_this.MY.sonAlias，如果存在则为子集alias操作
				* 3、绑定按钮点击事件，doServer从数据库删除该条数据
				* 4、删除成功后重新执行内容列表视图
				*@example
				*/
				//
				privateBtnConPLDel: function(){
					var _this = this;
					//获得dom
					var formDom = _this.API.find("#"+_this.param.formConList);
					//判断当前视图是否存在_this.MY.sonAlias，如果存在则为内容子alias操作
					var curAlias = _this.MY.sonAlias || _this.MY.alias;
					if(confirm("确认要删除该内容吗？")){
						var arrCheckData = formDom[0].batchEdit();
						var target_alias = [];
						for (var i = 0; i < arrCheckData.length; i++) {
							target_alias.push(arrCheckData[i].model_alias);
						}
						var _param = {
							alias: curAlias,
							target_alias: target_alias.join(',')
						};
						var _serverName = curAlias=='model'
							? _this.MY.serverName.dModel
							: _this.MY.serverName.dCon;
						_this.API.doServer(_serverName, _this.MY.package, _param, function(code,data){
							if(code>0){
								_this.API.private("privateShowConList");
							}else{
								FW.use('Widget').alert("删除失败！","danger");
							}
						});
					}
				},
				/**
				*@function
				*@name privateSubmitConAdd
				*@memberOf cmsMgrGadget
				*@description 内容添加页面提交按钮函数
				* 需要完成的功能如下：
				* 1、getDataAndCheck方法将获取表单数据并进行校验，转换成json
				* 2、转换data中有List、Pics数组类型为字符串
				* 3、将数据doServer保存进数据库
				* 4、执行回调函数_callback
				*@example
				*/
				privateSubmitConAdd: function(_callback){
					var _this = this;
					//将表单转换成json
					var data = _this.API.find("#"+_this.param.formConAdd)[0].getDataAndCheck();
					if(!data) return;
					//判断当前视图是否存在_this.MY.sonAlias，如果存在则为内容子alias操作
					//判断是否指定栏目
					if(_this.MY.sonAlias){
						var curNodeid = _this.MY.id;
						var curAlias = _this.MY.sonAlias;
					}else{
						var curNodeid = _this.MY.nodeid;
						var curAlias = _this.MY.alias;
					}
					//按照排序大小重组data ,arr.sort改变原数组
					if(data.model_desc){
						data.model_desc.sort(function(a,b){return parseInt(a.order)>parseInt(b.order)?1:-1}); //从小到大排序
					}
					//转换data中有数组的情况为字符串
					_this.API.private("privateFormToData",_this.MY.contentDesc[curAlias],data);
					data.nodeid = curNodeid || "0";  //指定栏目nodeid
					_this.API.doServer(_this.MY.serverName.aModel, _this.MY.package, data, function(code,data){
						if(code>0 && data){
							_callback(data);
						}else{
							FW.use('Widget').alert("内容添加失败！","danger");
						}
					})
				},
				/**
				*@function
				*@name privateSubmitConEdit
				*@memberOf cmsMgrGadget
				*@description 内容编辑添加页面提交按钮函数
				* 需要完成的功能如下：
				* 1、getDataAndCheck方法将获取表单数据并进行校验，转换成json
				* 2、转换data中有List、Pics数组类型为字符串
				* 3、将数据doServer保存进数据库
				* 4、执行回调函数_callback
				*@example
				*/
				privateSubmitConEdit: function(_callback){
					var _this = this;
					//将表单转换成json
					var data = _this.API.find("#"+_this.param.formConEdit)[0].getDataAndCheck();
					if(!data) return;
					//判断当前视图是否存在__this.MY.sonAlias，如果存在则为内容子alias操作
					var curAlias = _this.MY.sonAlias || _this.MY.alias;
					//按照排序大小重组data ,arr.sort改变原数组
					if(data.model_desc){
						data.model_desc.sort(function(a,b){return parseInt(a.order)>parseInt(b.order)?1:-1}); //从小到大排序
					}
					//转换data中有数组的情况为字符串
					_this.API.private("privateFormToData", _this.MY.contentDesc[curAlias], data);
					_this.API.doServer(_this.MY.serverName.mModel, _this.MY.package, data, function(code,data){
						if(code>0 && data){
							_callback(data);
						}else{
							FW.use('Widget').alert("修改内容保存失败！","danger");
						}
					})
				}
			}
		}
	);
	return FW;
});

