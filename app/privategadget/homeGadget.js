/**
 * @fileOverview 首页统计
 * @author <a href="http://ju.taobao.com">jianhui.fjh</a>
 * @version 0.1
 */

/**
 * @namespace
 * @author jianhui.fjh
 * @name homeGadget
 */

define(function(require, exports, module) {
  var FW = require("../breeze/framework/js/BreezeFW");
  require("../breeze/framework/js/tools/Widget")(FW);
  require("../breeze/framework/js/tools/DateTime")(FW);
  require("../gadget/cmsMgrGadget"); //引入扩展函数
  FW.register({
    param: {
      pagesize: 5
    },
    name: "homeGadget",
    extends:["cmsMgrGadget"],
    onCreate: function() {
      var self = this;
      this.API.private('privateSetGlobalVar'); //继承
      $(".cateName",window.parent.document).text('店铺首页');
      $(".aliasName",window.parent.document).text('欢迎您');
      var outData = {};
      //根据店铺标识获取店铺信息
      self.API.initPost();
      self.API.addPost('queryHome', 'cms', null, function(code,data){
        if(code>0 && data){
          outData.sysData = data;
        }
      })
      //获取最近4条公告记录
      var param = {
        alias:'global_announcement',
        limit: 4,
        orderBy: [{
          fieldName: 'id',
          isDesc: false
        }]
      };
      self.API.addPost('queryData','cms',param,function(code,data){
        if(code>0 && data){
          for (var i = 0; i < data.listData.length; i++) {
            data.listData[i].time_ymd = FW.use('DateTime').format(data.listData[i].gmt_create,'yyyy-MM-dd');
            data.listData[i].time_ymdhms = FW.use('DateTime').format(data.listData[i].gmt_create,'yyyy-MM-dd hh:mm:ss');
          };
          outData.aaData = data.listData;
          self.MY.aaData = data.listData;
        }
      })
      //查询最近30天新增会员数
      var categories = [];
      var map = {};
      var series = [];
      for (var i = 0; i < 30; i++) {
        var date = FW.use('DateTime').getDayStart(new Date().getTime(), 0-i);
        var dd = FW.use('DateTime').format(new Date(date), 'MM-dd');
        categories.unshift(dd);
        map[dd] = i;
        series[i] = 0;
      }
      var oneMonth = FW.use('DateTime').getDayStart(new Date().getTime(), -30);
      var param2 = {
        alias: 'user',
        tableWhere: 'nw_user.gmt_create > '+FW.use().toJSONString(oneMonth)
      };
      self.API.addPost('queryData','cms',param2,function(code,data){
        if(code>0 && data){
          var userData = data.listData;
          for (var i = 0; i < userData.length; i++) {
            var item = userData[i];
            var dd = FW.use('DateTime').format(new Date(item.gmt_create),'MM-dd');
            series[map[dd]]++;
          }
        }
      })
      self.API.doPost(function(){
        self.API.show('viewHomeGadget', outData);
        self.API.private('hcLineFun',categories,series);
        self.API.private('bindTabEvent');
        self.API.find('.nav-tabs li').eq(0).trigger('click');
      })
    },
    FireEvent: {
      fireAA: function(idx){
        var data = this.MY.aaData[idx];
        var html = this.API.getHtml('viewAA',data);
        FW.use('Widget').prompt($(html), '系统公告');
      }
    },
    TrigerEvent: {
    },
    private: {
      hcLineFun: function(categories,series){
        Highcharts.theme = {
          colors: ["#7461aa", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
            "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
          chart: {
            backgroundColor: null,
            style: {
              fontFamily: "Dosis, sans-serif"
            }
          },
          title: {
            style: {
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }
          },
          tooltip: {
            borderWidth: 0,
            backgroundColor: 'rgba(219,219,216,0.8)',
            shadow: false
          },
          legend: {
            itemStyle: {
              fontWeight: 'bold',
              fontSize: '13px'
            }
          },
          xAxis: {
            gridLineWidth: 1,
            labels: {
              style: {
                fontSize: '12px'
              }
            }
          },
          yAxis: {
            minorTickInterval: 'auto',
            title: {
              style: {
                textTransform: 'uppercase'
              }
            },
            labels: {
              style: {
                fontSize: '12px'
              }
            }
          },
          plotOptions: {
            candlestick: {
              lineColor: '#7461aa'
            }
          },
          background2: '#F0F0EA'
        };
        Highcharts.setOptions(Highcharts.theme);
        this.API.find('#J_user_qs').highcharts({
          title: {
              text: ''
          },
          xAxis: {
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
            categories: categories,
            labels: {
              rotation: 0,
              align: 'right',
              formatter: function() {
                return this.value.split('-')[1];
              },
              style: {
                fontSize: '12px',
                fontFamily: 'Verdana, sans-serif'
              }
            }
          },
          yAxis: {
              gridLineColor: '#eeeeee',
              allowDecimals: false,
              min: 0,
              title: {
                  text: ''
              }
          },
          tooltip: {
              valueSuffix: '人',
              crosshairs: true,
              shared: true
          },
          exporting: {
              enabled: false
          },
          credits: {
              enabled: false
          },
          legend: {
              enabled: false
          },
          series: [{
              name: '新增会员:',
              data: series
          }]
        })
      },
      bindTabEvent: function(){
        var self = this;
        var tabLi = this.API.find('.nav-tabs li');
        tabLi.on('click', function(){
          var alias = $(this).find('a').attr('href').substring(1);
          if($(this).attr('data-status')=='true') return;
          $(this).attr('data-status','true');
          //显示分页列表
          var conListDom = $('<form class="form-horizontal clearfix modal-body hidden"></form>');
          conListDom.appendTo($('#'+alias));
          var tableWhere, orderByField, isDesc;
          if(alias=='user'){
            var start = FW.use('DateTime').format(new Date(),'MM-dd');
            var end = FW.use('DateTime').getDayStart(new Date().getTime(), 3); //3天内
            end = FW.use('DateTime').format(new Date(end),'MM-dd'); //3天内
            if(start.split('-')=='12' && end.split('-')[0]=='01') end = '13-00'; //跨年的情况
            tableWhere = "date_format(nw_"+alias+".birthday,'%m-%d') between '"+start+"' and '"+end+"'";
            orderByField = 'birthday';
          }else if(alias=='goods'){
            tableWhere = 'nw_'+alias+'.inventory < 10';
            orderByField = 'inventory';
          }else if(alias=='reservation'){
            var start = FW.use('DateTime').getDayStart(new Date().getTime(), 0); //一天内
            var end = FW.use('DateTime').getDayStart(new Date().getTime(), 2); //2天内
            tableWhere = "nw_"+alias+".reserva_time between '"+start+"' and '"+end+"'";
            orderByField = 'reserva_time';
          }
          var param = {
            alias: alias,
            tableWhere: tableWhere,
            filterParam: {},
            orderBy:[{
              fieldName: orderByField,
              isDesc: false
            }]
          };
          self.API.private("privateBindFormListPage", conListDom, param, 2, function(data){
            conListDom.removeClass('hidden');
          })
        })
      }
    }
  });
  return FW;
});