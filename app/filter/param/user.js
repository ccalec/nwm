define("",[],function(require,e,i){i.exports={alias:"user",target:"self",filterFields:[{keyField:"store_id",otherFields:[{tableName:"nw_store",fields:["name"]}],type:"int",isshow:!0},{keyField:"id",joinField:"user_id",isshow:!1,valRange:{tableName:"nw_card",filterFields:[{keyField:"card_rank_id",otherFields:[{tableName:"nw_card_rank",fields:["name"]}],isshow:!0}]}}],filterParam:{}}});