define("",[],function(require,e,i){i.exports={alias:"cash_detail",target:"self",filterFields:[{keyField:"item_name",type:"like"},{keyField:"user_name",type:"like"},{keyField:"gmt_create",type:"section"},{keyField:"item_type",isshow:!0},{keyField:"store_id",paramName:"c_store_id",isshow:!0,otherFields:[{tableName:"nw_store",fields:["name"]}]},{keyField:"user_id",joinField:"user_id",valRange:{tableName:"nw_card",filterFields:[{keyField:"card_rank_id",isshow:!0,otherFields:[{tableName:"nw_card_rank",fields:["name"]}]}]}}],filterParam:{}}});