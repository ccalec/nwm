<form id="J_filterForm" class="serarea">
  <input name="status" value="1" type="hidden">
  <label>商品名称：<input name="name" type="text"></label>
  <label>商品编号：<input name="no" type="text"></label>
  <label>所属品牌：<input name="brand" type="text"></label>
  <label>
    商品分类：
    <select id="category_id" name="category_id">
      <option value="">全部</option>
      {@each filterData.category_id as item}
        <option value="${item.category_id}">${item.name}</option>
      {@/each}
    </select>
  </label>
  <label>
    商品状态：
    <select id="status" name="status">
      <option value="">全部</option>
      {@each filterData.status as item}
        <option value="${item.status}">
          {@if item.status==1}正常售卖
          {@else}已下架
          {@/if}
        </option>
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
  <label>
    库存区间：
    <div class="row-fluid input-append" style="margin-bottom:0; width:60px">
      <input class="span10" type="text" data-filter-type="start" name="inventory_start">
    </div>
    <span>到</span>
    <div class="row-fluid input-append" style="margin-bottom:0; width:60px">
      <input class="span10" type="text" data-filter-type="end"  name="inventory_end">
    </div>
  </label>
  <label>现价区间：
    <div class="row-fluid input-append" style="margin-bottom:0; width:80px">
      <input class="span10" type="text" data-filter-type="price start" name="active_price_start">
    </div>
    <span>到</span>
    <div class="row-fluid input-append" style="margin-bottom:0; width:80px">
      <input class="span10" type="text" data-filter-type="price end"  name="active_price_end">
    </div>
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