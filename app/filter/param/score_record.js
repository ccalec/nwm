define("",[],function(require,e,i){i.exports={alias:"score_record",target:"self",filterFields:[{keyField:"user_name",type:"like"},{keyField:"comment",type:"like"},{keyField:"gmt_create",type:"section"},{keyField:"type",isshow:!0},{keyField:"store_id",paramName:"c_store_id",isshow:!0,otherFields:[{tableName:"nw_store",fields:["name"]}]},{keyField:"card_no",joinField:"no",valRange:{tableName:"nw_card",filterFields:[{keyField:"card_rank_id",isshow:!0,otherFields:[{tableName:"nw_card_rank",fields:["name"]}]}]}}],filterParam:{}}});