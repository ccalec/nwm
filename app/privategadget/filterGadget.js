/**
* @fileOverview 数据过滤器通用gadget
* @author <a href="http://ju.taobao.com">jianhui.fjh</a>
* @version 0.1
*/

/**
* @namespace
* @author jianhui.fjh
* @name filterGadget
*/
define(function(require, exports, module) {
  var FW = require("../breeze/framework/js/BreezeFW");
  require("../breeze/framework/js/tools/Widget")(FW);
  require("../breeze/framework/js/tools/DateTime")(FW);
  var FilterCfg = {
    'cash_record':  {
      tpl: require("../views/filter_tpl/cash_record.tpl"),
      param: require("../views/filter_param/cash_record")
    },
    'cash_detail':  {
      tpl: require("../views/filter_tpl/cash_detail.tpl"),
      param: require("../views/filter_param/cash_detail")
    },
    'user':  {
      tpl: require("../views/filter_tpl/user.tpl"),
      param: require("../views/filter_param/user")
    },
    'card':  {
      tpl: require("../views/filter_tpl/card.tpl"),
      param: require("../views/filter_param/card")
    },
    'score_record':  {
      tpl: require("../views/filter_tpl/score_record.tpl"),
      param: require("../views/filter_param/score_record")
    },
    'case':  {
      tpl: require("../views/filter_tpl/case.tpl"),
      param: require("../views/filter_param/case")
    },
    'reservation':  {
      tpl: require("../views/filter_tpl/reservation.tpl"),
      param: require("../views/filter_param/reservation")
    },
    'goods':  {
      tpl: require("../views/filter_tpl/goods.tpl"),
      param: require("../views/filter_param/goods")
    },
    'services':  {
      tpl: require("../views/filter_tpl/services.tpl"),
      param: require("../views/filter_param/services")
    },
    'technician':  {
      tpl: require("../views/filter_tpl/technician.tpl"),
      param: require("../views/filter_param/technician")
    },
    'sms_record':  {
      tpl: require("../views/filter_tpl/sms_record.tpl"),
      param: require("../views/filter_param/sms_record")
    },
    'prepaid_record':  {
      tpl: require("../views/filter_tpl/prepaid_record.tpl"),
      param: require("../views/filter_param/prepaid_record")
    },
    'tj_push_amount':  {
      tpl: require("../views/filter_tpl/tj_push_amount.tpl"),
      param: require("../views/filter_param/tj_push_amount")
    },
    'tj_store':  {
      tpl: require("../views/filter_tpl/tj_store.tpl"),
      param: require("../views/filter_param/tj_store")
    },
    'batch_in':  {
      tpl: require("../views/filter_tpl/batch_in.tpl"),
      param: require("../views/filter_param/batch_in")
    },
    'batch_out':  {
      tpl: require("../views/filter_tpl/batch_out.tpl"),
      param: require("../views/filter_param/batch_out")
    }
  };
  FW.register(
    {
      param:{
      },
      name:'filterGadget',
      onCreate:function(){
        var self = this;
        //获取alias
        self.MY.alias = this.param.alias || FW.use().getParameter("alias") || '';
        //显示默认视图
        if(FilterCfg[self.MY.alias])  self.API.private('privateShowDefaultView');
      },
      FireEvent:{
      },
      private:{
        privateShowDefaultView:function(){
          var self = this;
          self.API.show('viewFilter');
          self.API.private('privateGetFilterData',function(data){
            var html = FilterCfg[self.MY.alias].tpl(data);
            //现实内容
            self.API.find('#J_filter').html(html);
            //绑定按钮事件
            self.API.private('privateBindEvent');
          });
        },
        privateBindEvent: function(){
          var self = this;
          //select onchange
          self.API.find('#J_filter').find('select').on('change',function(){
            self.API.find('.J_submitBtn').trigger('click');
          })
          //搜索按钮
          self.API.find('.J_submitBtn').on('click',function(){
            self.API.private('privateGetFilterParam');
            FW.trigerEvent('trigerUpdatefilterParam', self.MY.filterData);
          });
          //清空按钮
          self.API.find('.J_resetBtn').on('click',function(){
            self.API.private('privateShowDefaultView')
            FW.trigerEvent('trigerUpdatefilterParam');
          });
          // form的提交
          self.API.find('#J_filterForm').on('submit',function(){
            self.API.find('.J_submitBtn').trigger('click');
            return false;
          })
        },
        /*
          data-filter-type: 匹配类型
            datetime start: 时间区间开始
            datetime end: 时间区间结束（end需要加一天）
            start: 普通区间开始
            end: 普通区间结束
            price: 需要*100
        */
        privateGetFilterParam: function(){
          var self = this;
          var filterParam = {};
          var filterData = self.API.find('#J_filterForm').serializeArray();
          $.each(filterData, function(i, obj){
            var prop = obj.name;
            var value = obj.value;
            if(!value && value!==0) return true;
            var dom = $('[name="'+prop+'"]');
            var filterType = dom.data('filter-type');
            if(filterType=='price start'){
              var nprop = prop.replace('_start','');
              filterParam[nprop] = filterParam[nprop] || [];
              filterParam[nprop][0] = parseInt(value)*100;
            }else if(filterType=='price end'){
              var nprop = prop.replace('_end','');
              filterParam[nprop] = filterParam[nprop] || [];
              filterParam[nprop][1] = parseInt(value)*100;
            }else if(filterType=='datetime start'){
              value = value.replace(/\-/g,"/");
              var starttime = FW.use('DateTime').getDayStart(value, 0);
              var nprop = prop.replace('_start','');
              filterParam[nprop] = filterParam[nprop] || [];
              filterParam[nprop][0] = starttime;
            }else if(filterType=='datetime end'){
              value = value.replace(/\-/g,"/");
              var endtime = FW.use('DateTime').getDayStart(value, 1);
              var nprop = prop.replace('_end','');
              filterParam[nprop] = filterParam[nprop] || [];
              filterParam[nprop][1] = endtime;
            }else if(filterType=='start'){
              var nprop = prop.replace('_start','');
              filterParam[nprop] = filterParam[nprop] || [];
              filterParam[nprop][0] = value;
            }else if(filterType=='end'){
              var nprop = prop.replace('_end','');
              filterParam[nprop] = filterParam[nprop] || [];
              filterParam[nprop][1] = value;
            }else{
              filterParam[prop] = value;
            }
          });
          self.MY.filterData.filterParam = filterParam;
        },
        privateGetFilterData: function(callback){  //获取过滤器数据
          var self = this;
          self.MY.filterData = FilterCfg[self.MY.alias].param;
          self.MY.filterData.resultSet = 'filter';
          self.API.doServer("queryData", "cms", self.MY.filterData, function(code,data){
            if(code==1 && data){
              callback && callback(data || {});
            }
          })
        }
      },
      TrigerEvent:{
        trigerShowFilter: function(){
          this.API.private('privateShowDefaultView');
        }
      }
    }
  );
  return FW;
});

