/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50615
 Source Host           : localhost
 Source Database       : rfbreeze

 Target Server Type    : MySQL
 Target Server Version : 50615
 File Encoding         : utf-8

 Date: 12/08/2015 22:02:58 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `sys_model`
-- ----------------------------
DROP TABLE IF EXISTS `sys_model`;
CREATE TABLE `sys_model` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `data_owner` varchar(255) DEFAULT NULL,
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `model_name` varchar(255) NOT NULL,
  `model_alias` varchar(255) NOT NULL,
  `table_name` varchar(255) NOT NULL,
  `parent_alias` varchar(255) DEFAULT NULL,
  `data_owner_set` varchar(255) DEFAULT NULL,
  `data_refresh` varchar(255) DEFAULT NULL,
  `role_set` varchar(255) DEFAULT NULL,
  `data_memo` text,
  `model_desc` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tableName` (`table_name`) USING BTREE,
  UNIQUE KEY `modelAlias` (`model_alias`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `sys_model`
-- ----------------------------
BEGIN;
INSERT INTO `sys_model` VALUES ('1', 'model', '1', null, '2015-12-03 11:40:58', '2015-12-03 11:41:06', '数据模型', 'model', 'sys_model', 'model_class', '', '', '', '', '{\"id\":{\"title\":\"模型ID\",\"type\":\"ReadOnly\",\"islist\":\"1\",\"width\":\"80px\",\"desc\":\"*数字,创建后不可更改,并具有唯一性。\"},\"model_name\":{\"title\":\"模型名称\",\"type\":\"Text\",\"islist\":\"1\",\"desc\":\"*必填模型的中文名称,在后台管理,前台发布等均使用此名字。\"},\"model_alias\":{\"title\":\"模型别名alias\",\"type\":\"Text\",\"islist\":\"1\",\"desc\":\"*必填模型唯一标识，不可修改，建议由英文、数字或下划线组成\"},\"table_name\":{\"title\":\"模型表名\",\"type\":\"Text\",\"islist\":\"1\",\"desc\":\"*必填建议sys_*必需唯一,必须由英文、数字、下划线组成\"},\"parent_alias\":{\"title\":\"挂接模型\",\"type\":\"Text\",\"islist\":\"1\",\"desc\":\"本数据模型挂接在指定模型下\"},\"data_owner_set\":{\"title\":\"数据所有者\",\"type\":\"Text\",\"islist\":\"1\",\"desc\":\"*数据拥有者的获取路径，IFNULL无数据拥有者\"},\"data_refresh\":{\"title\":\"缓存刷新\",\"type\":\"Text\",\"islist\":\"1\",\"desc\":\"*空标示无缓存，否则数据修改后刷新缓存\"},\"extend_alias\":{\"title\":\"模型继承\",\"type\":\"Text\",\"islist\":\"0\",\"desc\":\"*是否继承别的alias的字段数据描述\"},\"role_set\":{\"title\":\"是否设置权限\",\"type\":\"CheckBox\",\"valueRange\":[{\"查询权限\":1,\"增加权限\":2,\"修改权限\":3,\"删除权限\":4}],\"islist\":\"0\",\"desc\":\"*表配置功能权限\"},\"data_memo\":{\"title\":\"模型备注\",\"type\":\"TextArea\",\"islist\":\"0\",\"desc\":\"\"},\"model_desc\":{\"title\":\"字段描述\",\"type\":\"List\",\"desc\":\"用于描述该模型对应表结构的数据描述\",\"valueRange\":[{\"fieldname\":{\"title\":\"fieldname\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"80px\"},\"title\":{\"title\":\"字段名称\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"80px\"},\"type\":{\"title\":\"显示类型\",\"type\":\"Select\",\"width\":\"100px\",\"islist\":\"1\",\"valueRange\":[{\"单行文本\":\"Text\"},{\"隐藏文本\":\"Hidden\"},{\"只读文本\":\"ReadOnly\"},{\"多行文本\":\"TextArea\"},{\"HTML编辑\":\"Html\"},{\"复选框\":\"CheckBox\"},{\"单选框\":\"Radio\"},{\"下拉单选\":\"Select\"},{\"下拉多选\":\"MultSelect\"},{\"列表类型\":\"List\"},{\"对象类型\":\"Object\"},{\"多语言类型\":\"Langs\"},{\"附件上传\":\"Affix\"},{\"缩略图\":\"File\"},{\"多图上传\":\"Pics\"},{\"仅日期\":\"DatePicker\"},{\"仅时间\":\"TimePicker\"},{\"日期+时间\":\"DateTimePicker\"},{\"日期区间\":\"DateRangePicker\"},{\"外联字段\":\"OuterLink\"},{\"价格类型\":\"Price\"},{\"折扣类型\":\"Discount\"}]},\"fieldType\":{\"title\":\"字段类型\",\"type\":\"Select\",\"islist\":\"1\",\"width\":\"90px\",\"valueRange\":[{\"varchar\":\"varchar\"},{\"int\":\"int\"},{\"long\":\"bigint\"},{\"outerField\":\"outerField\"}]},\"outerLink\":{\"title\":\"外联描述\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"50px\"},\"fieldLen\":{\"title\":\"字段长度\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"50px\"},\"fieldExt\":{\"title\":\"字段扩展\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"50px\"},\"valueRange\":{\"title\":\"描述&验证\",\"islist\":\"1\",\"type\":\"TextArea\",\"width\":\"70px\"},\"desc\":{\"title\":\"desc\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"50px\"},\"width\":{\"title\":\"width\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"40px\"},\"fieldtmp\":{\"title\":\"转换函数\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"50px\"},\"islist\":{\"title\":\"islist\",\"type\":\"Select\",\"islist\":\"1\",\"valueRange\":[{\"是\":\"1\"},{\"否\":\"0\"}],\"width\":\"60px\"},\"issearch\":{\"title\":\"查询条件\",\"type\":\"Select\",\"islist\":\"1\",\"valueRange\":[{\"否\":\"0\"},{\"是\":\"1\"}],\"width\":\"60px\"},\"order\":{\"title\":\"排序\",\"type\":\"Text\",\"valueRange\":[{\"checkers\":[\"\\\\d+\"],\"failTips\":\"排序只能输入数字\"}],\"islist\":\"1\",\"width\":\"30px\"}}]}}'), ('2', 'model', '1', null, '2015-12-03 11:41:10', '2015-12-03 11:41:13', '模型分类', 'model_class', 'sys_model_class', '', '', '', '', '', '{\"class_name\":{\"title\":\"分类名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"50\"}}'), ('3', 'model', '1', '', '2015-12-04 14:27:55', '2015-12-04 14:27:55', '工作流配置原型', 'workflow', 'sys_workflow', 'workflow_class', '', '', '', '用于描述工作流配置的数据描述，生成工作流配置界面', '{\"flow_name\":{\"title\":\"工作流名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"NOT NULL\",\"valueRange\":\"\",\"desc\":\"* 工作流的中文名称\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"1\"},\"flow_demo\":{\"title\":\"工作流备注\",\"type\":\"TextArea\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"2000\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"2\"},\"flow_units\":{\"title\":\"工作单元配置\",\"type\":\"List\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"10000\",\"fieldExt\":\"\",\"valueRange\":[{\"unit_name\":{\"title\":\"单元名称\",\"type\":\"Text\"},\"result\":{\"title\":\"单元执行结果\",\"type\":\"List\",\"valueRange\":[{\"code\":{\"title\":\"结果码\",\"type\":\"Text\"},\"next\":{\"title\":\"下一个单元\",\"type\":\"Text\"}}]}}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"3\"}}'), ('4', 'model', '1', '', '2015-12-08 21:58:54', '2015-12-08 21:58:54', '工作流分类', 'workflow_class', 'sys_workflow_class', '', '', '', '', '', '{\"class_name\":{\"title\":\"分类名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"}}'), ('5', 'model', '1', '', '2015-12-04 22:21:33', '2015-12-04 22:21:33', '服务配置原型', 'service', 'sys_service', 'service_class', '', '', '', '', '{\"service_name\":{\"title\":\"服务名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"＊（全英文）服务路由唯一标识，用于前端发送请求的servicename\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"},\"service_demo\":{\"title\":\"备注\",\"type\":\"TextArea\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"2000\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"＊ 服务说明\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"},\"flow_id\":{\"title\":\"工作流ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"workflow.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"\"},\"flow_name\":{\"title\":\"所属工作流\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"workflow.flow_name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"},\"unit_param\":{\"title\":\"服务配置\",\"type\":\"Object\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"10000\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"\"}}'), ('6', 'model', '1', '', '2015-12-08 21:52:00', '2015-12-08 21:52:00', '服务分类', 'service_class', 'sys_service_class', '', '', '', '', '', '{\"class_name\":{\"title\":\"分类名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"NOT NULL\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"}}');
COMMIT;

-- ----------------------------
--  Table structure for `sys_model_class`
-- ----------------------------
DROP TABLE IF EXISTS `sys_model_class`;
CREATE TABLE `sys_model_class` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `class_name` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `sys_model_class`
-- ----------------------------
BEGIN;
INSERT INTO `sys_model_class` VALUES ('1', 'model_class', '0', null, '2015-12-03 14:24:12', '2015-12-03 14:24:14', 'cms');
COMMIT;

-- ----------------------------
--  Table structure for `sys_service`
-- ----------------------------
DROP TABLE IF EXISTS `sys_service`;
CREATE TABLE `sys_service` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `service_name` varchar(128) DEFAULT NULL,
  `service_demo` varchar(2000) DEFAULT NULL,
  `flow_id` int(11) DEFAULT NULL,
  `unit_param` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `sys_service`
-- ----------------------------
BEGIN;
INSERT INTO `sys_service` VALUES ('1', 'service', '1', '2015-12-07 20:33:16', '2015-12-07 20:33:16', '', 'queryModel', '模型通用查询服务', '1', '{\"operModel.targetFlowUnit\":\"queryModel\"}'), ('2', 'service', '1', '2015-12-07 20:33:16', '2015-12-07 20:33:16', '', 'queryData', '数据通用查询服务', '2', '{\"operData.targetFlowUnit\":\"queryData\"}'), ('3', 'service', '1', '2015-12-07 20:33:16', '2015-12-07 20:33:16', null, 'modModel', '模型通用修改服务', '1', '{\"operModel.targetFlowUnit\":\"modModel\"}'), ('4', 'service', '1', '2015-12-07 20:33:16', '2015-12-07 20:33:16', null, 'modData', '数据通用修改服务', '2', '{\"operData.targetFlowUnit\":\"modData\"}'), ('5', 'service', '1', '2015-12-07 20:33:16', '2015-12-07 20:33:16', null, 'delModel', '模型通用删除服务', '1', '{\"operModel.targetFlowUnit\":\"delModel\"}'), ('6', 'service', '1', '2015-12-07 20:33:16', '2015-12-07 20:33:16', null, 'delData', '数据通用删除服务', '2', '{\"operData.targetFlowUnit\":\"delData\"}'), ('7', 'service', '1', '2015-12-07 20:33:16', '2015-12-07 20:33:16', null, 'addModel', '模型通用增加服务', '1', '{\"operModel.targetFlowUnit\":\"addModel\"}'), ('8', 'service', '1', '2015-12-07 20:33:16', '2015-12-07 20:33:16', null, 'addData', '数据通用增加服务', '2', '{\"operData.targetFlowUnit\":\"addData\"}'), ('9', 'service', '1', '2015-12-07 20:33:16', '2015-12-07 20:33:16', null, 'queryServiceModel', '查询服务模型', '3', '');
COMMIT;

-- ----------------------------
--  Table structure for `sys_service_class`
-- ----------------------------
DROP TABLE IF EXISTS `sys_service_class`;
CREATE TABLE `sys_service_class` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `class_name` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `sys_service_class`
-- ----------------------------
BEGIN;
INSERT INTO `sys_service_class` VALUES ('1', 'service_class', '0', '2015-12-08 21:52:41', '2015-12-08 21:52:41', '', 'cms');
COMMIT;

-- ----------------------------
--  Table structure for `sys_workflow`
-- ----------------------------
DROP TABLE IF EXISTS `sys_workflow`;
CREATE TABLE `sys_workflow` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `flow_name` varchar(128) NOT NULL,
  `flow_units` varchar(10000) DEFAULT NULL,
  `flow_demo` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `sys_workflow`
-- ----------------------------
BEGIN;
INSERT INTO `sys_workflow` VALUES ('1', 'workflow', '1', '2015-12-04 19:49:43', '2015-12-04 19:49:43', '', 'sys_operModel', '[{\"unit_name\":\"operModel\",\"result\":[{\"code\":\"1\",\"next\":\"\"}]}]', '系统模型通用操作'), ('2', 'workflow', '1', '2015-12-04 19:23:38', '2015-12-04 19:23:38', '', 'sys_operData', '[{\"unit_name\":\"operData\",\"result\":[{\"code\":\"1\",\"next\":\"\"}]}]', '系统数据通用操作'), ('3', 'workflow', '1', '2015-12-07 18:06:44', '2015-12-07 18:06:44', '', 'sys_operFlowModel', '[{\"unit_name\":\"queryFlowModel\",\"result\":[{\"code\":\"1\",\"next\":\"\"}]}]', '系统对工作流所有工作单元入参的数据描述进行操作');
COMMIT;

-- ----------------------------
--  Table structure for `sys_workflow_class`
-- ----------------------------
DROP TABLE IF EXISTS `sys_workflow_class`;
CREATE TABLE `sys_workflow_class` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `class_name` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `sys_workflow_class`
-- ----------------------------
BEGIN;
INSERT INTO `sys_workflow_class` VALUES ('1', 'workflow_class', '0', '2015-12-08 22:00:42', '2015-12-08 22:00:42', '', 'cms');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
