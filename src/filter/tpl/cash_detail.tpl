<form id="J_filterForm" class="serarea">
  <label>收费项名称：<input name="item_name" type="text"></label>
  <label>会员姓名：<input name="user_name" type="text"></label>
  <label>消费日期：
    <div class="row-fluid input-append J_rksj" style="margin-bottom:0; width:150px" onClick='WdatePicker({el:"gmt_create_start"})'>
      <input class="span10" type="text" data-filter-type="datetime start" id="gmt_create_start" name="gmt_create_start">
      <span class="add-on">
        <i class="icon-calendar"></i>
      </span>
    </div>
    <span>到</span>
    <div class="row-fluid input-append J_rksj" style="margin-bottom:0; width:150px" onClick='WdatePicker({el:"gmt_create_end"})'>
      <input class="span10" type="text" data-filter-type="datetime end"  id="gmt_create_end" name="gmt_create_end">
      <span class="add-on">
        <i class="icon-calendar"></i>
      </span>
    </div>
  </label>
  <label>
    消费店铺：
    <select id="c_store_id" name="c_store_id">
      <option value="">全部</option>
      {@each filterData.c_store_id as item}
        <option value="${item.store_id}">${item.name}</option>
      {@/each}
    </select>
  </label>
  <label>
    收费项类型:
    <select id="item_type" name="item_type">
      <option value="">全部</option>
      {@each filterData.item_type as item}
        <option value="${item.item_type}">{@if item.item_type == 'goods'} 普通商品 {@else} 服务项目 {@/if}</option>
      {@/each}
    </select>
  </label>
  <label>
    会员卡等级：
    <select id="card_rank_id" name="card_rank_id">
      <option value="">全部</option>
      {@each filterData.card_rank_id as item}
        <option value="${item.card_rank_id}">${item.name}</option>
      {@/each}
    </select>
  </label>
  <div class="btndiv">
    <button type="button" class="btn btn-app btn-primary btn-mini J_submitBtn">
      <i class="icon-search bigger-200"></i> 查询
    </button>
    <button type="button" class="btn btn-app btn-light btn-mini J_resetBtn">
      <i class="icon-undo bigger-200"></i> 清空
    </button>
  </div>
  <button type="submit" style="display:none;"></button>
</form>