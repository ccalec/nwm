<form id="J_filterForm" class="serarea">
  <input name="status" value="1" type="hidden">
  <label>商品名称：<input name="goods_name" type="text"></label>
  <label>商品编号：<input name="goods_no" type="text"></label>
  <label>所属品牌：<input name="goods_brand" type="text"></label>
  <label>
    出库方式：
    <select id="type" name="type">
      <option value="">全部</option>
      {@each filterData.type as item}
        <option value="${item.type}">
          {@if item.type==1}正常销售
          {@else}被其他分店调拨走
          {@/if}
        </option>
      {@/each}
    </select>
  </label>
  <label>
    商品分类：
    <select id="goods_category_id" name="goods_category_id">
      <option value="">全部</option>
      {@each filterData.goods_category_id as item}
        <option value="${item.category_id}">${item.name}</option>
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