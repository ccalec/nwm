<form id="J_filterForm" class="serarea">
  <input name="status" value="1" type="hidden">
  <label>技师姓名：<input name="name" type="text"></label>
  <label>技师编号：<input name="no" type="text"></label>
  <label>
    技师等级：
    <select id="rank_id" name="rank_id">
      <option value="">全部</option>
      {@each filterData.rank_id as item}
        <option value="${item.rank_id}">${item.name}</option>
      {@/each}
    </select>
  </label>
  <label>
    所属店铺：
    <select id="c_store_id" name="c_store_id">
      <option value="">全部</option>
      {@each filterData.c_store_id as item}
        <option value="${item.store_id}">${item.name}</option>
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