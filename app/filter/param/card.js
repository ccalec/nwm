define("",[],function(require,e,a){a.exports={alias:"card",target:"self",filterFields:[{keyField:"user_id",valRange:{tableName:"nw_user",filterFields:[{keyField:"name",paramName:"user_name",type:"like"},{keyField:"phone",paramName:"user_phone",type:"like"}]}},{keyField:"gmt_create",type:"section"},{keyField:"status",isshow:!0},{keyField:"store_id",isshow:!0,otherFields:[{tableName:"nw_store",fields:["name"]}]},{keyField:"card_rank_id",isshow:!0,otherFields:[{tableName:"nw_card_rank",fields:["name"]}]}],filterParam:{}}});