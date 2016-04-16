define(function(require, exports, module){ module.exports = function(_, _method) {var __escapehtml = {escapehash: {'<': '&lt;','>': '&gt;','&': '&amp;','"': '&quot;',"'": '&#x27;','/': '&#x2f;'},escapereplace: function(k) {return __escapehtml.escapehash[k];},escaping: function(str) {return typeof(str) !== 'string' ? str : str.replace(/[&<>"]/igm, this.escapereplace);},detection: function(data) {return typeof(data) === 'undefined' ? '' : data;}};var __throw = function(error) {if(typeof(console) !== 'undefined') {if(console.warn) {console.warn(error);return;}if(console.log) {console.log(error);return;}}throw(error);};_method = _method || {};_method.__escapehtml = __escapehtml;_method.__throw = __throw;
'use strict';var _=_||{};var _out='';_out+=''; try { _out+=''; var filterData=_.filterData;var item=_.item;var form=_.form;var input=_.input;var label=_.label;var div=_.div;var fluid=_.fluid;var append=_.append;var bottom=_.bottom;var filter=_.filter;var type=_.type;var span=_.span;var on=_.on;var i=_.i;var calendar=_.calendar;var br=_.br;var select=_.select;var option=_.option;var button=_.button;var app=_.app;var primary=_.primary;var mini=_.mini;var search=_.search;var light=_.light;var undo=_.undo; _out+='<form id="J_filterForm" class="serarea">   <input name="status" value="1" type="hidden">   <label>发送号码：<input name="phones" type="text"></label>   <label>发送时间：     <div class="row-fluid input-append J_rksj" style="margin-bottom:0; width:150px" onClick=\'WdatePicker({el:"gmt_create_start"})\'>       <input class="span10" type="text" data-filter-type="datetime start" id="gmt_create_start" name="gmt_create_start">       <span class="add-on">         <i class="icon-calendar"></i>       </span>     </div>     <span>到</span>     <div class="row-fluid input-append J_rksj" style="margin-bottom:0; width:150px" onClick=\'WdatePicker({el:"gmt_create_end"})\'>       <input class="span10" type="text" data-filter-type="datetime end"  id="gmt_create_end" name="gmt_create_end">       <span class="add-on">         <i class="icon-calendar"></i>       </span>     </div>   </label>   <br>   <label>     所属店铺：     <select id="c_store_id" name="c_store_id">       <option value="">全部</option>       '; ~function() {for(var i0 in filterData.c_store_id) {if(filterData.c_store_id.hasOwnProperty(i0)) {var item=filterData.c_store_id[i0]; _out+='         <option value="';_out+= _method.__escapehtml.escaping(_method.__escapehtml.detection(item.store_id)) ;_out+='">';_out+= _method.__escapehtml.escaping(_method.__escapehtml.detection(item.name)) ;_out+='</option>       '; }}}(); _out+='     </select>   </label>   <div class="btndiv">     <button type="button" class="btn btn-app btn-primary btn-mini J_submitBtn">       <i class="icon-search bigger-200"></i> 查询     </button>     <button type="button" class="btn btn-app btn-light btn-mini J_resetBtn">       <i class="icon-undo bigger-200"></i> 清空     </button>   </div>   <button type="submit" style="display:none;"></button> </form>'; } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} _out+='';return _out;
};
});