/**
* @fileOverview 列表视图通用套头
* @author <a href="http://ju.taobao.com">jianhui.fjh</a>
* @version 0.1
*/

/**
* @namespace
* @author jianhui.fjh
* @name cmsListHeadGadget
*/
define(function(require, exports, module) {
  var FW = require("../breeze/framework/js/BreezeFW");
  require("../breeze/framework/js/tools/Widget")(FW);
  require("../breeze/framework/js/tools/DateTime")(FW);
  FW.register(
    {
      param:{
        navTxt: {
          'user': ['会员管理','会员信息'],
          'card': ['会员管理','开会员卡'],
          'cash_record': ['会员消费','消费记录'],
          'cash_detail': ['会员消费','消费明细'],
          'card_rank': ['会员管理','会员卡等级'],
          'score_record': ['会员管理','积分记录'],
          'case': ['病例管理','就诊记录'],
          'reservation': ['病例管理','会员预约'],
          'technician': ['技师管理','技师信息'],
          'technician_rank': ['技师管理','技师等级'],
          'services': ['项目管理','服务项目'],
          'services_category': ['项目管理','服务分类'],
          'goods': ['项目管理','商品信息'],
          'goods_category': ['项目管理','商品分类'],
          'supplier': ['项目管理','供应商信息'],
          'prepaid_record': ['充值管理','充值记录'],
          'sms_record': ['短信管理','发送短信'],
          'sms_template': ['短信管理','短信模版'],
          'store': ['店铺管理','店铺信息'],
          'tj_usercash': ['统计报表','消费汇总'],
          'batch_in': ['商品管理','采购明细'],
          'batch_out': ['商品管理','出库明细'],
          'tj_store': ['统计报表','店铺数据']
        }
      },
      name:'cmsListHeadGadget',
      onCreate:function(){
        this.API.private('showDefault');
      },
      private:{
        showDefault: function(){
          var self = this;
          //获取alias
          self.MY.alias = FW.use().getParameter("alias") || '';
          var addBtnShow = FW.use().getParameter("addcon") == 'true';
          //默认导出数据
          self.MY.param = {
            alias: self.MY.alias,
            target: 'self',
            resultSet: '',
            limit: 1000
          };
          //更新导航栏
          if(self.param.navTxt[self.MY.alias]){
            $(".cateName",window.parent.document).text(self.param.navTxt[self.MY.alias][0]);
            $(".aliasName",window.parent.document).text(self.param.navTxt[self.MY.alias][1]);
          }
          //显示默认视图
          self.API.show('viewCmsListHead', {
            addBtnShow: addBtnShow,
            aliasName: self.param.navTxt[self.MY.alias] && self.param.navTxt[self.MY.alias][1]
          });
        }
      },
      FireEvent:{
        fireGoToList: function(){
          location.href = 'cmslist.html?alias='+this.MY.alias+'&addcon=true';
        },
        fireGoToAdd: function(){
          if(this.MY.alias=='score_record'){
            location.href = 'scoreoper.html';
          }else{
            location.href = 'cmsadd.html?alias='+this.MY.alias+'&action=conAdd';
          }
        },
        firePrinter: function(){
        },
        fireExport: function(e){
          if($(e).data('status')) return;
          $(e).data('status','true');
          $(e).find('i').attr('class','icon-spinner icon-spin orange');
          var self = this;
          self.MY.param.resultSet = '';
          self.API.doServer("jsonToXls", "cms", self.MY.param, function(code,data){
            if(code==1 && data){
              $(e).attr('href',data.filepath)
              .attr('download',data.filename)
              .removeClass('btn-light').addClass('btn-success')
              .html('<i class="icon-download"></i>下载');
            }else if(code==-1){
              FW.use('Widget').alert('无任何数据','warning');
            }else{
              FW.use('Widget').alert('导出失败','danger');
            }
          })
        }
      },
      TrigerEvent:{
        trigerUpdatefilterParam: function(param){
          this.API.private('showDefault');
          this.MY.param = $.extend({}, param);
        }
      }
    }
  );
  return FW;
});

