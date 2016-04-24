<form id="J_filterForm" class="serarea">
  <label>手机号码：<input name="nw_user.phone" data-ftype="like" type="text"></label>
  <label>会员姓名：<input name="nw_user.name" data-ftype="like" type="text"></label>
  <label>登记日期：
    <div class="row-fluid input-append J_rksj" style="margin-bottom:0; width:150px" onClick='WdatePicker({el:"gmt_create_start"})'>
      <input class="span10" type="text" data-ftype="datetime start" id="gmt_create_start" name="nw_user.gmt_create_start">
      <span class="add-on">
        <i class="icon-calendar"></i>
      </span>
    </div>
    <span>到</span>
    <div class="row-fluid input-append J_rksj" style="margin-bottom:0; width:150px" onClick='WdatePicker({el:"gmt_create_end"})'>
      <input class="span10" type="text" data-ftype="datetime end"  id="gmt_create_end" name="nw_user.gmt_create_end">
      <span class="add-on">
        <i class="icon-calendar"></i>
      </span>
    </div>
  </label>
  <label>
    所属店铺：
    <select id="store_id" name="nw_user.store_id">
      <option value="">全部</option>
      {@each filterData.store_id as item}
        <option value="${item.store_id}">${item.name}</option>
      {@/each}
    </select>
  </label>
  <label>
    会员卡等级：
    <select id="card_rank_id" name="nw_user.card_rank_id" data-ftype="outlink">
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