<form id="J_filterForm" class="serarea" style="min-height:0;">
  <label>
    所属店铺：
    <select id="id" name="id">
      <option value="">全部</option>
      {@each filterData.id as item}
        <option value="${item.id}">${item.name}</option>
      {@/each}
    </select>
  </label>
  <button type="submit" style="display:none;"></button>
</form>