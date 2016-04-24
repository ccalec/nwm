/**
 * @fileOverview 店铺统计页面
 * @author <a href="http://ju.taobao.com">jianhui.fjh</a>
 * @version 0.1
 */

/**
 * @namespace
 * @author jianhui.fjh
 * @name tjStoreDataGadget
 */

define(function(require, exports, module) {
  var FW = require("../breeze/framework/js/BreezeFW");
  require("../breeze/framework/js/tools/Widget")(FW);
  require("../breeze/framework/js/tools/DateTime")(FW);
  FW.register({
    param: {
      modelDesc: { // 模型描述
        store_id:  {
          title: '店铺ID',
          type: 'Text',
          islist: 1
        },
        store_name:  {
          title: '店铺名称',
          type: 'Text',
          islist: 1
        },
        store_cash_amount:  {
          title: '店铺收入总金额',
          type: 'Price',
          islist: 1
        },
        store_user_count: {
          title: '会员总数量',
          type: 'Text',
          islist: 1
        },
        user_prepaid: {
          title: '会员充值总金额',
          type: 'Price',
          islist: 1
        },
        store_cash_score: {
          title: '消费总积分值',
          type: 'Text',
          islist: 1
        },
        store_bd_score: {
          title: '变动积分值',
          type: 'Text',
          islist: 1
        },
        store_technic_count: {
          title: '技师总数',
          type: 'Text',
          islist: 1
        },
        store_push_amount: {
          title: '技师提成总金额',
          type: 'Price',
          islist: 1
        },
        store_case_count: {
          title: '就诊记录数',
          type: 'Text',
          islist: 1
        },
        store_goods_count: {
          title: '商品总数',
          type: 'Text',
          islist: 1
        },
        store_services_count: {
          title: '服务项目总数',
          type: 'Text',
          islist: 1
        }
      },
      totalPamrm: { //统计字段查询参数
        store: {
          selFields: ['id','name']
        },
        cash_detail: {
          aggrModel: {
            fields: [{
                fieldName: 'total_amount',
                asName: 'store_cash_amount',
                type: 'sum'
              },{
                fieldName: 'push_amount',
                asName: 'store_push_amount',
                type: 'sum'
              },
              'store_id'
            ],
            groupByField: 'store_id'
          }
        },
        score_record: [{
          aggrModel: {
            fields: [{
                fieldName: 'score',
                asName: 'store_cash_score',
                type: 'sum'
              },
              'store_id'
            ],
            groupByField: 'store_id'
          },
          tableWhere: 'nw_score_record.from_type = 1'
        },{
          aggrModel: {
            fields: [{
                fieldName: 'score',
                asName: 'store_bd_score',
                type: 'sum'
              },
              'store_id'
            ],
            groupByField: 'store_id'
          },
          tableWhere: 'nw_score_record.from_type = 2'
        }],
        user:{
          aggrModel: {
            fields: [{
                fieldName: 'id',
                asName: 'store_user_count',
                type: 'count'
              },
              'store_id'
            ],
            groupByField: 'store_id'
          }
        },
        prepaid_record: {
          aggrModel: {
            fields: [{
                fieldName: 'amount',
                asName: 'store_user_count',
                type: 'sum'
              },
              'store_id'
            ],
            groupByField: 'store_id'
          }
        },
        technician: {
          aggrModel: {
            fields: [{
                fieldName: 'id',
                asName: 'store_technic_count',
                type: 'count'
              },
              'store_id'
            ],
            groupByField: 'store_id'
          }
        },
        case: {
          aggrModel: {
            fields: [{
                fieldName: 'id',
                asName: 'store_case_count',
                type: 'count'
              },
              'store_id'
            ],
            groupByField: 'store_id'
          }
        },
        goods: {
          aggrModel: {
            fields: [{
                fieldName: 'id',
                asName: 'store_goods_count',
                type: 'count'
              },
              'store_id'
            ],
            groupByField: 'store_id'
          }
        },
        services: {
          aggrModel: {
            fields: [{
                fieldName: 'id',
                asName: 'store_services_count',
                type: 'count'
              },
              'store_id'
            ],
            groupByField: 'store_id'
          }
        }
      }
    },
    name: "tjStoreDataGadget",
    extends: [],
    onCreate: function() {
      this.API.private("showDefault");
      this.API.show('viewContentList');
      this.MY.formDom = this.API.find("#formContentList");
      this.MY.param = {
        alias: '',
        target: 'self',
        resultSet: ''
      }
    },
    private: {
      showDefault: function(){
        var self = this;
        self.API.initPost();
        var totalData = {};
        var totalPamrm = self.param.totalPamrm;
        for (var alias in totalPamrm) {
          var obj = totalPamrm[alias];
          if(toString.apply(obj) === '[object Array]'){
            for (var i = 0; i < obj.length; i++) {
              (function(_i,_alias){
                var one = obj[_i];
                one.alias = _alias;
                done(one);
              })(i,alias);
            }
          }else{
            obj.alias = alias;
            done(obj);
          }
        }
        function done(one){
          var oneparam = $.extend({}, self.MY.param, one);
          if(oneparam.alias=='store'){
            oneparam.filterFields = [{
              keyField: 'id',
              type: 'int'
            }]
          }else{
            oneparam.filterFields = [{
              keyField: 'store_id',
              type: 'int'
            }];
            if(oneparam.filterParam && oneparam.filterParam.id){
              oneparam.filterParam = {
                store_id : oneparam.filterParam.id
              }
            }else{
              oneparam.filterParam = {};
            }
          }
          self.API.addPost('queryData','cms', oneparam, function(code,data){
            if(code>0 && data && data.listData && data.listData.length){
              for (var i = 0; i < data.listData.length; i++) {
                var onedata = data.listData[i];
                if(oneparam.alias=='store'){
                  onedata.store_id = onedata.id;
                  onedata.store_name = onedata.name;
                }
                var cur_store_id = onedata['store_id'];
                totalData[cur_store_id] = totalData[cur_store_id] || {};
                totalData[cur_store_id] = $.extend({}, totalData[cur_store_id], onedata);
              }
            }
          })
        }
        self.API.doPost(function(){
          var listData = [];
          for(var id in totalData){
            listData.push(totalData[id]);
          }
          FW.use().createFormList(self.param.modelDesc,self.MY.formDom,listData,null,2);
        })
      }
    },
    FireEvent: {
    },
    TrigerEvent: {
      trigerUpdatefilterParam: function(param){
        this.MY.param.filterParam = param && param.filterParam;
        this.API.private("showDefault");
      }
    }
  });
  return FW;
});