define(function(require, exports, module){ module.exports = function(_, _method) {var __escapehtml = {escapehash: {'<': '&lt;','>': '&gt;','&': '&amp;','"': '&quot;',"'": '&#x27;','/': '&#x2f;'},escapereplace: function(k) {return __escapehtml.escapehash[k];},escaping: function(str) {return typeof(str) !== 'string' ? str : str.replace(/[&<>"]/igm, this.escapereplace);},detection: function(data) {return typeof(data) === 'undefined' ? '' : data;}};var __throw = function(error) {if(typeof(console) !== 'undefined') {if(console.warn) {console.warn(error);return;}if(console.log) {console.log(error);return;}}throw(error);};_method = _method || {};_method.__escapehtml = __escapehtml;_method.__throw = __throw;
'use strict';var _=_||{};var _out='';_out+=''; try { _out+=''; var filterData=_.filterData;var item=_.item;var form=_.form;var input=_.input;var label=_.label;var select=_.select;var option=_.option;var div=_.div;var fluid=_.fluid;var append=_.append;var bottom=_.bottom;var filter=_.filter;var type=_.type;var span=_.span;var button=_.button;var app=_.app;var primary=_.primary;var mini=_.mini;var i=_.i;var search=_.search;var light=_.light;var undo=_.undo; _out+='<form id="J_filterForm" class="serarea">   <input name="status" value="1" type="hidden">   <label>商品名称：<input name="name" type="text"></label>   <label>商品编号：<input name="no" type="text"></label>   <label>所属品牌：<input name="brand" type="text"></label>   <label>     商品分类：     <select id="category_id" name="category_id">       <option value="">全部</option>       '; ~function() {for(var i0 in filterData.category_id) {if(filterData.category_id.hasOwnProperty(i0)) {var item=filterData.category_id[i0]; _out+='         <option value="';_out+= _method.__escapehtml.escaping(_method.__escapehtml.detection(item.category_id)) ;_out+='">';_out+= _method.__escapehtml.escaping(_method.__escapehtml.detection(item.name)) ;_out+='</option>       '; }}}(); _out+='     </select>   </label>   <label>     商品状态：     <select id="status" name="status">       <option value="">全部</option>       '; ~function() {for(var i1 in filterData.status) {if(filterData.status.hasOwnProperty(i1)) {var item=filterData.status[i1]; _out+='         <option value="';_out+= _method.__escapehtml.escaping(_method.__escapehtml.detection(item.status)) ;_out+='">           '; if(item.status==1) { _out+='正常售卖           '; } else { _out+='已下架           '; } _out+='         </option>       '; }}}(); _out+='     </select>   </label>   <label>     所属店铺：     <select id="c_store_id" name="c_store_id">       <option value="">全部</option>       '; ~function() {for(var i2 in filterData.c_store_id) {if(filterData.c_store_id.hasOwnProperty(i2)) {var item=filterData.c_store_id[i2]; _out+='         <option value="';_out+= _method.__escapehtml.escaping(_method.__escapehtml.detection(item.store_id)) ;_out+='">';_out+= _method.__escapehtml.escaping(_method.__escapehtml.detection(item.name)) ;_out+='</option>       '; }}}(); _out+='     </select>   </label>   <label>     库存区间：     <div class="row-fluid input-append" style="margin-bottom:0; width:60px">       <input class="span10" type="text" data-filter-type="start" name="inventory_start">     </div>     <span>到</span>     <div class="row-fluid input-append" style="margin-bottom:0; width:60px">       <input class="span10" type="text" data-filter-type="end"  name="inventory_end">     </div>   </label>   <label>现价区间：     <div class="row-fluid input-append" style="margin-bottom:0; width:80px">       <input class="span10" type="text" data-filter-type="price start" name="active_price_start">     </div>     <span>到</span>     <div class="row-fluid input-append" style="margin-bottom:0; width:80px">       <input class="span10" type="text" data-filter-type="price end"  name="active_price_end">     </div>   </label>   <div class="btndiv">     <button type="button" class="btn btn-app btn-primary btn-mini J_submitBtn">       <i class="icon-search bigger-200"></i> 查询     </button>     <button type="button" class="btn btn-app btn-light btn-mini J_resetBtn">       <i class="icon-undo bigger-200"></i> 清空     </button>   </div>   <button type="submit" style="display:none;"></button> </form>'; } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} _out+='';return _out;
};
});