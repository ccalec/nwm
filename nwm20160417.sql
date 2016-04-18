-- MySQL dump 10.13  Distrib 5.6.24, for osx10.8 (x86_64)
--
-- Host: 127.0.0.1    Database: nw
-- ------------------------------------------------------
-- Server version	5.6.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `nw_batch_in`
--

DROP TABLE IF EXISTS `nw_batch_in`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_batch_in` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `goods_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `from_store_id` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_batch_in`
--

LOCK TABLES `nw_batch_in` WRITE;
/*!40000 ALTER TABLE `nw_batch_in` DISABLE KEYS */;
/*!40000 ALTER TABLE `nw_batch_in` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_batch_out`
--

DROP TABLE IF EXISTS `nw_batch_out`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_batch_out` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `goods_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `to_store_id` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_batch_out`
--

LOCK TABLES `nw_batch_out` WRITE;
/*!40000 ALTER TABLE `nw_batch_out` DISABLE KEYS */;
INSERT INTO `nw_batch_out` VALUES (69,'batch_out',0,'2016-04-04 16:55:21','2016-04-04 16:55:21','',2,3,1,NULL,1),(70,'batch_out',0,'2016-04-04 16:55:55','2016-04-04 16:55:55','',1,1,1,NULL,1),(71,'batch_out',0,'2016-04-04 16:55:55','2016-04-04 16:55:55','',2,1,1,NULL,1),(72,'batch_out',0,'2016-04-04 16:56:28','2016-04-04 16:56:28','',1,1,1,NULL,1),(73,'batch_out',0,'2016-04-04 21:37:03','2016-04-04 21:37:03','',1,1,1,NULL,1),(74,'batch_out',0,'2016-04-04 22:12:52','2016-04-04 22:12:52','',1,1,1,NULL,1),(75,'batch_out',0,'2016-04-04 22:12:52','2016-04-04 22:12:52','',2,1,1,NULL,1),(76,'batch_out',0,'2016-04-05 01:16:25','2016-04-05 01:16:25','',1,1,1,NULL,1),(77,'batch_out',0,'2016-04-09 22:06:14','2016-04-09 22:06:14','',1,2,1,NULL,1),(78,'batch_out',0,'2016-04-09 22:06:35','2016-04-09 22:06:35','',2,1,1,NULL,1),(79,'batch_out',0,'2016-04-09 22:10:46','2016-04-09 22:10:46','',1,1,1,NULL,1),(80,'batch_out',0,'2016-04-09 22:58:09','2016-04-09 22:58:09','',1,1,1,NULL,1),(81,'batch_out',0,'2016-04-09 23:17:31','2016-04-09 23:17:31','',1,1,1,NULL,1),(82,'batch_out',0,'2016-04-10 00:43:33','2016-04-10 00:43:33','',1,1,1,NULL,1),(83,'batch_out',0,'2016-04-10 00:43:33','2016-04-10 00:43:33','',2,1,1,NULL,1),(84,'batch_out',0,'2016-04-10 01:15:46','2016-04-10 01:15:46','',1,1,1,NULL,1),(85,'batch_out',0,'2016-04-10 01:23:07','2016-04-10 01:23:07','',1,1,1,NULL,1),(86,'batch_out',0,'2016-04-10 01:30:47','2016-04-10 01:30:47','',1,1,1,NULL,1),(87,'batch_out',0,'2016-04-10 01:33:13','2016-04-10 01:33:13','',2,1,1,NULL,1),(88,'batch_out',0,'2016-04-10 01:33:13','2016-04-10 01:33:13','',1,1,1,NULL,1),(89,'batch_out',0,'2016-04-10 01:52:59','2016-04-10 01:52:59','',1,1,1,NULL,1),(90,'batch_out',0,'2016-04-10 01:54:02','2016-04-10 01:54:02','',1,1,1,NULL,1),(91,'batch_out',0,'2016-04-10 01:54:43','2016-04-10 01:54:43','',1,1,1,NULL,1),(92,'batch_out',0,'2016-04-10 22:32:46','2016-04-10 22:32:46','',1,1,1,NULL,1),(93,'batch_out',0,'2016-04-10 22:32:46','2016-04-10 22:32:46','',2,1,1,NULL,1),(94,'batch_out',0,'2016-04-11 00:40:46','2016-04-11 00:40:46','',1,1,1,NULL,2),(95,'batch_out',0,'2016-04-11 00:40:46','2016-04-11 00:40:46','',2,1,1,NULL,2),(96,'batch_out',0,'2016-04-16 22:49:46','2016-04-16 22:49:46','',1,11,1,NULL,1),(97,'batch_out',0,'2016-04-17 18:12:20','2016-04-17 18:12:20','',2,4,1,NULL,1),(98,'batch_out',0,'2016-04-17 18:12:20','2016-04-17 18:12:20','',1,3,1,NULL,1),(99,'batch_out',0,'2016-04-17 19:30:08','2016-04-17 19:30:08','',1,1,1,NULL,1),(100,'batch_out',0,'2016-04-17 19:30:08','2016-04-17 19:30:08','',2,1,1,NULL,1);
/*!40000 ALTER TABLE `nw_batch_out` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_card`
--

DROP TABLE IF EXISTS `nw_card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_card` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `no` varchar(128) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `card_rank_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT '0',
  `score` int(11) DEFAULT '0',
  `comment` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_card`
--

LOCK TABLES `nw_card` WRITE;
/*!40000 ALTER TABLE `nw_card` DISABLE KEYS */;
INSERT INTO `nw_card` VALUES (1,'card',0,'1970-01-01 08:00:01','2016-03-22 21:21:07','','8001','202cb962ac59075b964b07152d234b70',1,1,1,1,140000,1711,'asdf'),(2,'card',0,'1970-01-01 08:00:02','2016-03-22 23:11:26','','8002','202cb962ac59075b964b07152d234b70',3,1,1,1,40000,151,''),(3,'card',0,'2016-03-22 23:18:34','2016-03-22 23:18:34','','8003','4297f44b13955235245b2497399d7a93',1,2,1,1,10000,66,'123123');
/*!40000 ALTER TABLE `nw_card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_card_rank`
--

DROP TABLE IF EXISTS `nw_card_rank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_card_rank` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `score_ratio` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_card_rank`
--

LOCK TABLES `nw_card_rank` WRITE;
/*!40000 ALTER TABLE `nw_card_rank` DISABLE KEYS */;
INSERT INTO `nw_card_rank` VALUES (1,'card_rank',0,'2016-03-22 23:14:34','2016-03-22 23:14:34','','普通会员',98,1,10),(2,'card_rank',0,'2016-03-26 22:00:48','2016-03-26 22:00:48','','银卡会员',80,1,5);
/*!40000 ALTER TABLE `nw_card_rank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_case`
--

DROP TABLE IF EXISTS `nw_case`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_case` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `user_name` varchar(128) DEFAULT NULL,
  `clinic_time` datetime DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `technician_id` int(11) DEFAULT NULL,
  `technician_name` varchar(128) DEFAULT NULL,
  `comment` varchar(128) DEFAULT NULL,
  `next_time` datetime DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_case`
--

LOCK TABLES `nw_case` WRITE;
/*!40000 ALTER TABLE `nw_case` DISABLE KEYS */;
INSERT INTO `nw_case` VALUES (2,'case',0,'2016-03-20 17:02:53','2016-03-20 17:02:53','',1,'alec','2016-03-01 17:02:49','',1,'张三','','2016-03-01 00:00:00',1);
/*!40000 ALTER TABLE `nw_case` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_cash_detail`
--

DROP TABLE IF EXISTS `nw_cash_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_cash_detail` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `item_type` varchar(128) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `unit_price` int(11) DEFAULT NULL,
  `total_amount` int(11) DEFAULT NULL,
  `cash_record_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `user_name` varchar(128) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `technician_id` int(11) DEFAULT NULL,
  `technician_name` varchar(128) DEFAULT NULL,
  `item_name` varchar(128) DEFAULT NULL,
  `push_amount` int(11) DEFAULT NULL,
  `card_no` varchar(128) DEFAULT NULL,
  `cash_type` int(11) DEFAULT NULL,
  `push_percent` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_cash_detail`
--

LOCK TABLES `nw_cash_detail` WRITE;
/*!40000 ALTER TABLE `nw_cash_detail` DISABLE KEYS */;
INSERT INTO `nw_cash_detail` VALUES (103,'cash_detail',0,'2016-04-10 01:30:47','2016-04-10 01:30:47','','goods',1,1,11760,11760,78,1,'alec',1,NULL,'','测试商品1',0,'8001',1,'0'),(104,'cash_detail',0,'2016-04-10 01:30:47','2016-04-10 01:30:47','','services',1,1,9604,9604,78,1,'alec',1,NULL,'','服务项目一',0,'8001',1,'0'),(111,'cash_detail',0,'2016-04-10 01:33:13','2016-04-10 01:33:13','','goods',2,1,23520,23520,82,1,'alec',1,NULL,'','测试商品2',0,'8001',1,'0'),(112,'cash_detail',0,'2016-04-10 01:33:13','2016-04-10 01:33:13','','goods',1,1,11760,11760,82,1,'alec',1,NULL,'','测试商品1',0,'8001',1,'0'),(119,'cash_detail',0,'2016-04-10 01:50:41','2016-04-10 01:50:41','','services',2,1,29204,29204,87,3,'xixi',1,NULL,'','服务项目二',0,'8002',1,'0'),(120,'cash_detail',0,'2016-04-10 01:52:59','2016-04-10 01:52:59','','goods',1,1,9600,9600,88,1,'alec',1,NULL,'','测试商品1',0,'8003',1,'0'),(121,'cash_detail',0,'2016-04-10 01:52:59','2016-04-10 01:52:59','','services',2,1,23840,23840,88,1,'alec',1,NULL,'','服务项目二',0,'8003',1,'0'),(122,'cash_detail',0,'2016-04-10 01:54:02','2016-04-10 01:54:02','','goods',1,1,12000,12000,89,0,'散户',1,2,'李四','测试商品1',1800,'--',0,'15'),(123,'cash_detail',0,'2016-04-10 01:54:02','2016-04-10 01:54:02','','services',1,1,9800,9800,89,0,'散户',1,1,'张三','服务项目一',980,'--',0,'10'),(124,'cash_detail',0,'2016-04-10 01:54:43','2016-04-10 01:54:43','','goods',1,1,12000,12000,90,0,'散户',1,NULL,'','测试商品1',0,'--',0,'0'),(125,'cash_detail',0,'2016-04-10 01:54:43','2016-04-10 01:54:43','','services',1,4,9800,39200,90,0,'散户',1,NULL,'','服务项目一',0,'--',0,'0'),(126,'cash_detail',0,'2016-04-10 22:32:46','2016-04-10 22:32:46','','goods',1,1,11760,11760,91,1,'alec',1,NULL,'','测试商品1',0,'8001',1,'0'),(127,'cash_detail',0,'2016-04-10 22:32:46','2016-04-10 22:32:46','','goods',2,1,23520,23520,91,1,'alec',1,NULL,'','测试商品2',0,'8001',1,'0'),(128,'cash_detail',0,'2016-04-11 00:40:46','2016-04-11 00:40:46','','goods',1,1,11760,11760,92,1,'alec',2,NULL,'','测试商品1',0,'8001',1,'0'),(129,'cash_detail',0,'2016-04-11 00:40:46','2016-04-11 00:40:46','','goods',2,1,23520,23520,92,1,'alec',2,NULL,'','测试商品2',0,'8001',1,'0'),(130,'cash_detail',0,'2016-04-11 00:40:46','2016-04-11 00:40:46','','services',1,1,9604,9604,92,1,'alec',2,NULL,'','服务项目一',0,'8001',1,'0'),(131,'cash_detail',0,'2016-04-11 00:40:46','2016-04-11 00:40:46','','services',2,1,29204,29204,92,1,'alec',2,NULL,'','服务项目二',0,'8001',1,'0'),(132,'cash_detail',0,'2016-04-16 22:49:46','2016-04-16 22:49:46','','goods',1,11,12000,132000,93,0,'散户',1,NULL,'','测试商品1',0,'--',0,'0'),(133,'cash_detail',0,'2016-04-16 22:49:46','2016-04-16 22:49:46','','services',1,1,9800,9800,93,0,'散户',1,NULL,'','服务项目一',0,'--',0,'0'),(134,'cash_detail',0,'2016-04-17 18:12:20','2016-04-17 18:12:20','','goods',2,4,23520,94080,94,1,'alec',1,NULL,'','测试商品2',0,'8001',1,'0'),(135,'cash_detail',0,'2016-04-17 18:12:20','2016-04-17 18:12:20','','goods',1,3,11760,35280,94,1,'alec',1,NULL,'','测试商品1',0,'8001',1,'0'),(136,'cash_detail',0,'2016-04-17 19:30:08','2016-04-17 19:30:08','','goods',1,1,11760,11760,95,1,'alec',1,NULL,'','测试商品1',0,'8001',1,'0'),(137,'cash_detail',0,'2016-04-17 19:30:08','2016-04-17 19:30:08','','goods',2,1,23520,23520,95,1,'alec',1,NULL,'','测试商品2',0,'8001',1,'0');
/*!40000 ALTER TABLE `nw_cash_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_cash_record`
--

DROP TABLE IF EXISTS `nw_cash_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_cash_record` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `cash_type` int(11) DEFAULT NULL,
  `card_no` varchar(128) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `user_name` varchar(128) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `real_amount` int(11) DEFAULT NULL,
  `comment` text,
  `status` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `cash_no` varchar(128) DEFAULT NULL,
  `cash_time` datetime DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_cash_record`
--

LOCK TABLES `nw_cash_record` WRITE;
/*!40000 ALTER TABLE `nw_cash_record` DISABLE KEYS */;
INSERT INTO `nw_cash_record` VALUES (78,'cash_record',0,'2016-04-10 01:30:47','2016-04-10 01:30:47','',1,'8001',1,'alec',19600,21364,'',1,1,'GS16041001303226','1970-01-01 08:00:02',20),(82,'cash_record',0,'2016-04-10 01:33:12','2016-04-10 01:33:12','',1,'8001',1,'alec',36000,35280,'',1,1,'GS16041001330489','1970-01-01 08:00:02',34),(87,'cash_record',0,'2016-04-10 01:50:40','2016-04-10 01:50:40','',1,'8002',3,'xixi',29800,29204,'',1,1,'GS16041001503036','1970-01-01 08:00:02',29),(88,'cash_record',0,'2016-04-10 01:52:59','2016-04-10 01:52:59','',1,'8003',1,'alec',41800,33440,'',1,1,'GS16041001524541','1970-01-01 08:00:02',66),(89,'cash_record',0,'2016-04-10 01:54:01','2016-04-10 01:54:01','',0,'--',0,'散户',19600,21800,'',1,1,'GS16041001534599','1970-01-01 08:00:02',0),(90,'cash_record',0,'2016-04-10 01:54:42','2016-04-10 01:54:42','',0,'--',0,'散户',49000,51200,'',1,1,'GS16041001543449','1970-01-01 08:00:02',0),(91,'cash_record',0,'2016-04-10 22:32:46','2016-04-10 22:32:46','',1,'8001',1,'alec',36000,35280,'',1,1,'GS16041022323764','1970-01-01 08:00:02',34),(92,'cash_record',0,'2016-04-11 00:40:46','2016-04-11 00:40:46','',1,'8001',1,'alec',79200,74088,'',1,2,'GS16041100402013','1970-01-01 08:00:02',72),(93,'cash_record',0,'2016-04-16 22:49:46','2016-04-16 22:49:46','',0,'--',0,'散户',117600,141800,'',1,1,'GS16041622490566','1970-01-01 08:00:02',0),(94,'cash_record',0,'2016-04-17 18:12:20','2016-04-17 18:12:20','',1,'8001',1,'alec',132000,129359,'',1,1,'GS16041718120943','1970-01-01 08:00:02',129),(95,'cash_record',0,'2016-04-17 19:30:07','2016-04-17 19:30:07','',1,'8001',1,'alec',36000,35280,'',1,1,'GS16041719300151','1970-01-01 08:00:02',34);
/*!40000 ALTER TABLE `nw_cash_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_goods`
--

DROP TABLE IF EXISTS `nw_goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_goods` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `no` varchar(128) DEFAULT NULL,
  `brand` varchar(128) DEFAULT NULL,
  `original_price` int(11) DEFAULT NULL,
  `active_price` varchar(128) DEFAULT NULL,
  `description` varchar(128) DEFAULT NULL,
  `inventory` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_goods`
--

LOCK TABLES `nw_goods` WRITE;
/*!40000 ALTER TABLE `nw_goods` DISABLE KEYS */;
INSERT INTO `nw_goods` VALUES (1,'goods',1,'2016-03-23 00:34:28','2016-03-23 00:34:28','','测试商品1','1001','品牌1',100000,'12000','很不错的商品',22,1,1,2),(2,'goods',2,'2016-03-26 16:50:10','2016-03-26 16:50:10','','测试商品2','8002','品牌二',39800,'24000','不错的商品哦',7,1,1,1);
/*!40000 ALTER TABLE `nw_goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_goods_category`
--

DROP TABLE IF EXISTS `nw_goods_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_goods_category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_goods_category`
--

LOCK TABLES `nw_goods_category` WRITE;
/*!40000 ALTER TABLE `nw_goods_category` DISABLE KEYS */;
INSERT INTO `nw_goods_category` VALUES (1,'goods_category',0,'2016-03-23 00:39:18','2016-03-23 00:39:18','','商品类别一',1),(2,'goods_category',0,'2016-03-26 16:48:42','2016-03-26 16:48:42','','商品类别二',1);
/*!40000 ALTER TABLE `nw_goods_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_prepaid_record`
--

DROP TABLE IF EXISTS `nw_prepaid_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_prepaid_record` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `card_no` varchar(128) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `user_name` varchar(128) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `comment` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_prepaid_record`
--

LOCK TABLES `nw_prepaid_record` WRITE;
/*!40000 ALTER TABLE `nw_prepaid_record` DISABLE KEYS */;
INSERT INTO `nw_prepaid_record` VALUES (9,'prepaid_record',0,'2016-04-07 00:06:12','2016-04-07 00:06:12','',30000,'8002',1,'alec',1,'1000'),(10,'prepaid_record',0,'2016-04-07 23:54:36','2016-04-07 23:54:36','',10000,'8002',1,'alec',1,''),(11,'prepaid_record',0,'2016-04-09 09:15:06','2016-04-09 09:15:06','',10000,'8001',1,'alec',1,''),(12,'prepaid_record',0,'2016-04-09 09:17:24','2016-04-09 09:17:24','',30000,'8001',1,'alec',1,''),(13,'prepaid_record',0,'2016-04-09 09:17:27','2016-04-09 09:17:27','',30000,'8001',1,'alec',1,''),(14,'prepaid_record',0,'2016-04-09 09:18:50','2016-04-09 09:18:50','',20000,'8001',1,'alec',1,'asdf'),(15,'prepaid_record',0,'2016-04-09 09:20:03','2016-04-09 09:20:03','',20000,'8001',1,'alec',1,''),(16,'prepaid_record',0,'2016-04-17 19:30:31','2016-04-17 19:30:31','',20000,'8001',1,'alec',1,'asd');
/*!40000 ALTER TABLE `nw_prepaid_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_reservation`
--

DROP TABLE IF EXISTS `nw_reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_reservation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `reserva_time` datetime DEFAULT NULL,
  `technician_id` int(11) DEFAULT NULL,
  `technician_name` varchar(128) DEFAULT NULL,
  `comment` text,
  `store_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_reservation`
--

LOCK TABLES `nw_reservation` WRITE;
/*!40000 ALTER TABLE `nw_reservation` DISABLE KEYS */;
/*!40000 ALTER TABLE `nw_reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_score_record`
--

DROP TABLE IF EXISTS `nw_score_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_score_record` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `card_no` varchar(128) DEFAULT NULL,
  `user_id` varchar(128) DEFAULT NULL,
  `user_name` varchar(128) DEFAULT NULL,
  `comment` varchar(128) DEFAULT NULL,
  `from_type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_score_record`
--

LOCK TABLES `nw_score_record` WRITE;
/*!40000 ALTER TABLE `nw_score_record` DISABLE KEYS */;
INSERT INTO `nw_score_record` VALUES (39,'score_record',0,'2016-04-09 22:58:09','2016-04-09 22:58:09','',1,11,1,'8001','1','alec','会员消费积分，消费总金额[11760]，获得积分[11]',1),(40,'score_record',0,'2016-04-10 00:43:33','2016-04-10 00:43:33','',1,34,1,'8001','1','alec','会员消费积分，消费总金额[35280]，获得积分[34]',2),(41,'score_record',0,'2016-04-10 01:15:46','2016-04-10 01:15:46','',1,11,1,'8002','3','xixi','会员消费积分，消费总金额[11760]，获得积分[11]',1),(42,'score_record',0,'2016-04-10 01:30:47','2016-04-10 01:30:47','',1,20,1,'8001','1','alec','会员消费积分，消费总金额[21364]，获得积分[20]',2),(43,'score_record',0,'2016-04-10 01:33:13','2016-04-10 01:33:13','',1,34,1,'8001','1','alec','会员消费积分，消费总金额[35280]，获得积分[34]',1),(44,'score_record',0,'2016-04-10 01:50:41','2016-04-10 01:50:41','',1,29,1,'8002','3','xixi','会员消费积分，消费总金额[29204.000000000004]，获得积分[29]',2),(45,'score_record',0,'2016-04-10 01:52:59','2016-04-10 01:52:59','',1,66,1,'8003','1','alec','会员消费积分，消费总金额[33440]，获得积分[66]',1),(46,'score_record',0,'2016-04-10 22:32:46','2016-04-10 22:32:46','',1,34,1,'8001','1','alec','会员消费积分，消费总金额[35280]，获得积分[34]',2),(47,'score_record',0,'2016-04-11 00:38:58','2016-04-11 00:38:58','',1,100,2,'8001','1','alec','aasf',1),(48,'score_record',0,'2016-04-11 00:40:00','2016-04-11 00:40:00','',1,100,2,'8002','3','xixi','',2),(49,'score_record',0,'2016-04-11 00:40:46','2016-04-11 00:40:46','',1,72,2,'8001','1','alec','会员消费积分，消费总金额[74088]，获得积分[72]',1),(50,'score_record',0,'2016-04-17 18:12:20','2016-04-17 18:12:20','',1,129,1,'8001','1','alec','会员消费积分，消费总金额[129359.99999999999]，获得积分[129]',1),(51,'score_record',0,'2016-04-17 19:30:08','2016-04-17 19:30:08','',1,34,1,'8001','1','alec','会员消费积分，消费总金额[35280]，获得积分[34]',1),(52,'score_record',0,'2016-04-17 19:31:30','2016-04-17 19:31:30','',1,10,1,'8001','1','alec','',2);
/*!40000 ALTER TABLE `nw_score_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_services`
--

DROP TABLE IF EXISTS `nw_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_services` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `active_price` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_services`
--

LOCK TABLES `nw_services` WRITE;
/*!40000 ALTER TABLE `nw_services` DISABLE KEYS */;
INSERT INTO `nw_services` VALUES (1,'services',1,'2016-03-26 16:45:23','2016-03-26 16:45:23','','服务项目一',9800,1,2,1),(2,'services',1,'2016-03-26 16:45:35','2016-03-26 16:45:35','','服务项目二',29800,1,1,1);
/*!40000 ALTER TABLE `nw_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_services_category`
--

DROP TABLE IF EXISTS `nw_services_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_services_category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_services_category`
--

LOCK TABLES `nw_services_category` WRITE;
/*!40000 ALTER TABLE `nw_services_category` DISABLE KEYS */;
INSERT INTO `nw_services_category` VALUES (1,'services_category',0,'2016-03-26 16:43:59','2016-03-26 16:43:59','','服务分类一',1),(2,'services_category',0,'2016-03-26 16:44:08','2016-03-26 16:44:08','','服务分类二',1);
/*!40000 ALTER TABLE `nw_services_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_sms_record`
--

DROP TABLE IF EXISTS `nw_sms_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_sms_record` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `phones` varchar(128) DEFAULT NULL,
  `phone_num` int(11) DEFAULT NULL,
  `template_content` varchar(128) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `template_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_sms_record`
--

LOCK TABLES `nw_sms_record` WRITE;
/*!40000 ALTER TABLE `nw_sms_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `nw_sms_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_sms_template`
--

DROP TABLE IF EXISTS `nw_sms_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_sms_template` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `content` varchar(128) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_sms_template`
--

LOCK TABLES `nw_sms_template` WRITE;
/*!40000 ALTER TABLE `nw_sms_template` DISABLE KEYS */;
INSERT INTO `nw_sms_template` VALUES (1,'sms_template',0,'2016-04-03 22:37:38','2016-04-03 22:37:38','','—会员生日—','尊敬的{Name}：你的生日{MemBirthday}就要到了，在此送给您最真挚的祝福！生日快乐',1),(2,'sms_template',0,'2016-04-03 22:38:44','2016-04-03 22:38:44','','—会员到期—','尊敬的客户：您尾号为{LCardID}的会员卡,将于{MemPastTime}过期，当前账户余额{Money}元，账户积分{Point}，请及时续期或充值！',1);
/*!40000 ALTER TABLE `nw_sms_template` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_store`
--

DROP TABLE IF EXISTS `nw_store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_store` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `tel` varchar(128) DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `level` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_store`
--

LOCK TABLES `nw_store` WRITE;
/*!40000 ALTER TABLE `nw_store` DISABLE KEYS */;
INSERT INTO `nw_store` VALUES (1,'store',0,'2016-03-20 16:43:48','2016-03-20 16:43:48','','总店','13577778888','广西南宁','总店'),(2,'store',0,'2016-04-09 10:15:14','2016-04-09 10:15:14','','某某分店','18723232233','阿斯顿发送到发送到发送奋斗','1');
/*!40000 ALTER TABLE `nw_store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_supplier`
--

DROP TABLE IF EXISTS `nw_supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_supplier` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_supplier`
--

LOCK TABLES `nw_supplier` WRITE;
/*!40000 ALTER TABLE `nw_supplier` DISABLE KEYS */;
/*!40000 ALTER TABLE `nw_supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_sys_log`
--

DROP TABLE IF EXISTS `nw_sys_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_sys_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_sys_log`
--

LOCK TABLES `nw_sys_log` WRITE;
/*!40000 ALTER TABLE `nw_sys_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `nw_sys_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_technician`
--

DROP TABLE IF EXISTS `nw_technician`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_technician` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `no` varchar(128) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `rank_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_technician`
--

LOCK TABLES `nw_technician` WRITE;
/*!40000 ALTER TABLE `nw_technician` DISABLE KEYS */;
INSERT INTO `nw_technician` VALUES (1,'technician',0,'2016-03-20 16:49:03','2016-03-20 16:49:03','',1,'8001','张三',1),(2,'technician',0,'2016-03-26 22:26:05','2016-03-26 22:26:05','',1,'J001','李四',2);
/*!40000 ALTER TABLE `nw_technician` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_technician_rank`
--

DROP TABLE IF EXISTS `nw_technician_rank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_technician_rank` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `push_percent` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_technician_rank`
--

LOCK TABLES `nw_technician_rank` WRITE;
/*!40000 ALTER TABLE `nw_technician_rank` DISABLE KEYS */;
INSERT INTO `nw_technician_rank` VALUES (1,'technician_rank',0,'2016-03-26 22:24:55','2016-03-26 22:24:55','','优秀技师',10,1),(2,'technician_rank',0,'2016-03-26 22:25:09','2016-03-26 22:25:09','','中级技师',15,1),(3,'technician_rank',0,'2016-03-26 22:25:22','2016-03-26 22:25:22','','高级技师',20,1);
/*!40000 ALTER TABLE `nw_technician_rank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nw_user`
--

DROP TABLE IF EXISTS `nw_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nw_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `sex` int(11) DEFAULT NULL,
  `birthday` varchar(128) DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `phone` varchar(128) DEFAULT NULL,
  `mail` varchar(128) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `head` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nw_user`
--

LOCK TABLES `nw_user` WRITE;
/*!40000 ALTER TABLE `nw_user` DISABLE KEYS */;
INSERT INTO `nw_user` VALUES (1,'user',0,'2016-03-20 16:40:01','2016-03-20 16:40:01','','alec',1,'2016-03-23','广西南宁','19723748234','',1,NULL),(3,'user',0,'2016-04-09 09:58:19','2016-04-09 09:58:19','','xixi',1,'2016-04-22','湖南阿斯顿发生的开发链接啊都是减肥了','18267678989','234283489@qq.com',1,'');
/*!40000 ALTER TABLE `nw_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_model`
--

DROP TABLE IF EXISTS `sys_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_model`
--

LOCK TABLES `sys_model` WRITE;
/*!40000 ALTER TABLE `sys_model` DISABLE KEYS */;
INSERT INTO `sys_model` VALUES (1,'model',1,NULL,'2015-12-03 11:40:58','2015-12-03 11:41:06','数据模型','model','sys_model','model_class','','','','','{\"id\":{\"title\":\"模型ID\",\"type\":\"ReadOnly\",\"islist\":\"1\",\"width\":\"80px\",\"desc\":\"*数字,创建后不可更改,并具有唯一性。\"},\"model_name\":{\"title\":\"模型名称\",\"type\":\"Text\",\"islist\":\"1\",\"desc\":\"*必填模型的中文名称,在后台管理,前台发布等均使用此名字。\"},\"model_alias\":{\"title\":\"模型别名alias\",\"type\":\"Text\",\"islist\":\"1\",\"desc\":\"*必填模型唯一标识，不可修改，建议由英文、数字或下划线组成\"},\"table_name\":{\"title\":\"模型表名\",\"type\":\"Text\",\"islist\":\"1\",\"desc\":\"*必填建议sys_*必需唯一,必须由英文、数字、下划线组成\"},\"parent_alias\":{\"title\":\"挂接模型\",\"type\":\"Text\",\"islist\":\"1\",\"desc\":\"本数据模型挂接在指定模型下\"},\"data_owner_set\":{\"title\":\"数据所有者\",\"type\":\"Text\",\"islist\":\"1\",\"desc\":\"*数据拥有者的获取路径，IFNULL无数据拥有者\"},\"data_refresh\":{\"title\":\"缓存刷新\",\"type\":\"Text\",\"islist\":\"1\",\"desc\":\"*空标示无缓存，否则数据修改后刷新缓存\"},\"extend_alias\":{\"title\":\"模型继承\",\"type\":\"Text\",\"islist\":\"0\",\"desc\":\"*是否继承别的alias的字段数据描述\"},\"role_set\":{\"title\":\"是否设置权限\",\"type\":\"CheckBox\",\"valueRange\":[{\"查询权限\":1,\"增加权限\":2,\"修改权限\":3,\"删除权限\":4}],\"islist\":\"0\",\"desc\":\"*表配置功能权限\"},\"data_memo\":{\"title\":\"模型备注\",\"type\":\"TextArea\",\"islist\":\"0\",\"desc\":\"\"},\"model_desc\":{\"title\":\"字段描述\",\"type\":\"List\",\"desc\":\"用于描述该模型对应表结构的数据描述\",\"valueRange\":[{\"fieldname\":{\"title\":\"fieldname\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"80px\"},\"title\":{\"title\":\"字段名称\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"80px\"},\"type\":{\"title\":\"显示类型\",\"type\":\"Select\",\"width\":\"100px\",\"islist\":\"1\",\"valueRange\":[{\"单行文本\":\"Text\"},{\"隐藏文本\":\"Hidden\"},{\"只读文本\":\"ReadOnly\"},{\"多行文本\":\"TextArea\"},{\"HTML编辑\":\"Html\"},{\"复选框\":\"CheckBox\"},{\"单选框\":\"Radio\"},{\"下拉单选\":\"Select\"},{\"下拉多选\":\"MultSelect\"},{\"列表类型\":\"List\"},{\"对象类型\":\"Object\"},{\"多语言类型\":\"Langs\"},{\"附件上传\":\"Affix\"},{\"缩略图\":\"File\"},{\"多图上传\":\"Pics\"},{\"仅日期\":\"DatePicker\"},{\"仅时间\":\"TimePicker\"},{\"日期+时间\":\"DateTimePicker\"},{\"日期区间\":\"DateRangePicker\"},{\"外联字段\":\"OuterLink\"},{\"价格类型\":\"Price\"},{\"折扣类型\":\"Discount\"}]},\"fieldType\":{\"title\":\"字段类型\",\"type\":\"Select\",\"islist\":\"1\",\"width\":\"90px\",\"valueRange\":[{\"varchar\":\"varchar\"},{\"int\":\"int\"},{\"bigint\":\"bigint\"},{\"datetime\":\"datetime\"},{\"text\":\"text\"},{\"longtext\":\"longtext\"},{\"outerField\":\"outerField\"}]},\"outerLink\":{\"title\":\"外联描述\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"50px\"},\"fieldLen\":{\"title\":\"字段长度\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"50px\"},\"fieldExt\":{\"title\":\"字段扩展\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"50px\"},\"valueRange\":{\"title\":\"描述&验证\",\"islist\":\"1\",\"type\":\"TextArea\",\"width\":\"70px\"},\"desc\":{\"title\":\"desc\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"50px\"},\"width\":{\"title\":\"width\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"40px\"},\"fieldtmp\":{\"title\":\"转换函数\",\"type\":\"Text\",\"islist\":\"1\",\"width\":\"50px\"},\"islist\":{\"title\":\"islist\",\"type\":\"Select\",\"islist\":\"1\",\"valueRange\":[{\"是\":\"1\"},{\"否\":\"0\"}],\"width\":\"60px\"},\"issearch\":{\"title\":\"查询条件\",\"type\":\"Select\",\"islist\":\"1\",\"valueRange\":[{\"否\":\"0\"},{\"是\":\"1\"}],\"width\":\"60px\"},\"order\":{\"title\":\"排序\",\"type\":\"Text\",\"valueRange\":[{\"checkers\":[\"\\\\d+\"],\"failTips\":\"排序只能输入数字\"}],\"islist\":\"1\",\"width\":\"30px\"}}]}}'),(2,'model',1,NULL,'2015-12-03 11:41:10','2015-12-03 11:41:13','模型分类','model_class','sys_model_class','','','','','','{\"class_name\":{\"title\":\"分类名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"50\"}}'),(3,'model',1,'','2015-12-04 14:27:55','2015-12-04 14:27:55','工作流配置原型','workflow','sys_workflow','workflow_class','','','','用于描述工作流配置的数据描述，生成工作流配置界面','{\"flow_name\":{\"title\":\"工作流名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"NOT NULL\",\"valueRange\":\"\",\"desc\":\"* 工作流的中文名称\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"1\"},\"flow_demo\":{\"title\":\"工作流备注\",\"type\":\"TextArea\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"2000\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"2\"},\"flow_units\":{\"title\":\"工作单元配置\",\"type\":\"List\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"10000\",\"fieldExt\":\"\",\"valueRange\":[{\"unit_name\":{\"title\":\"单元名称\",\"type\":\"Text\"},\"result\":{\"title\":\"单元执行结果\",\"type\":\"List\",\"valueRange\":[{\"code\":{\"title\":\"结果码\",\"type\":\"Text\"},\"next\":{\"title\":\"下一个单元\",\"type\":\"Text\"}}]}}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"3\"}}'),(4,'model',1,'','2015-12-08 21:58:54','2015-12-08 21:58:54','工作流分类','workflow_class','sys_workflow_class','','','','','','{\"class_name\":{\"title\":\"分类名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"}}'),(5,'model',1,'','2015-12-04 22:21:33','2015-12-04 22:21:33','服务配置原型','service','sys_service','service_class','','','','','{\"service_name\":{\"title\":\"服务名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"＊（全英文）服务路由唯一标识，用于前端发送请求的servicename\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"},\"service_demo\":{\"title\":\"备注\",\"type\":\"TextArea\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"2000\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"＊ 服务说明\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"},\"flow_id\":{\"title\":\"工作流ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"workflow.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"\"},\"flow_name\":{\"title\":\"所属工作流\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"workflow.flow_name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"},\"unit_param\":{\"title\":\"服务配置\",\"type\":\"Object\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"10000\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"\"}}'),(6,'model',1,'','2015-12-08 21:52:00','2015-12-08 21:52:00','服务分类','service_class','sys_service_class','','','','','','{\"class_name\":{\"title\":\"分类名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"NOT NULL\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"}}'),(12,'model',2,'','2016-03-16 23:49:36','2016-03-16 23:49:36','系统日志','sys_log','nw_sys_log','','','','','纪录系统操作日志','{\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"}}'),(13,'model',2,'','2016-03-17 00:00:02','2016-03-17 00:00:02','消费记录','cash_record','nw_cash_record','','','','','','{\"cash_no\":{\"title\":\"消费编号\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"1\"},\"cash_type\":{\"title\":\"对象类型\",\"type\":\"Radio\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"会员\":1,\"散户\":0}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"card_no\":{\"title\":\"卡号\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"15\"},\"user_id\":{\"title\":\"会员id\",\"type\":\"Text\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"20\"},\"user_name\":{\"title\":\"消费者姓名\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"30\"},\"amount\":{\"title\":\"消费总金额\",\"type\":\"Price\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"},\"real_amount\":{\"title\":\"实收总金额\",\"type\":\"Price\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"60\"},\"score\":{\"title\":\"获得积分\",\"type\":\"Text\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"65\"},\"comment\":{\"title\":\"详细备注\",\"type\":\"TextArea\",\"fieldType\":\"text\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"70\"},\"cash_time\":{\"title\":\"消费时间\",\"type\":\"DateTimePicker\",\"fieldType\":\"datetime\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"75\"},\"status\":{\"title\":\"收款状态\",\"type\":\"Select\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"已结算\":1,\"挂单\":0,\"已取消\":-1}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"80\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"90\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"100\"}}'),(14,'model',2,'','2016-03-17 00:07:52','2016-03-17 00:07:52','收费项目明细','cash_detail','nw_cash_detail','','','','','','{\"item_id\":{\"title\":\"收费项ID\",\"type\":\"Text\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"15\"},\"item_name\":{\"title\":\"收费项名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"18\"},\"quantity\":{\"title\":\"数量\",\"type\":\"Text\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"unit_price\":{\"title\":\"折后单价\",\"type\":\"Price\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"30\"},\"total_amount\":{\"title\":\"折后总额\",\"type\":\"Price\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"},\"cash_type\":{\"title\":\"消费对象\",\"type\":\"Select\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"会员\":1,\"散户\":0}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"44\"},\"item_type\":{\"title\":\"收费项类型\",\"type\":\"Select\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"普通商品\":\"goods\",\"服务项目\":\"services\"}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"45\"},\"cash_record_id\":{\"title\":\"收费纪录ID\",\"type\":\"Text\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"50\"},\"card_no\":{\"title\":\"消费卡号\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"58\"},\"user_id\":{\"title\":\"会员ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"user.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"60\"},\"user_name\":{\"title\":\"会员姓名\",\"type\":\"ReadOnly\",\"fieldType\":\"varchar\",\"outerLink\":\"user.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"65\"},\"technician_id\":{\"title\":\"选择\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"technician.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"70\"},\"technician_name\":{\"title\":\"提成员工\",\"type\":\"ReadOnly\",\"fieldType\":\"varchar\",\"outerLink\":\"technician.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"80\"},\"push_percent\":{\"title\":\"提成比例\",\"type\":\"Hidden\",\"fieldType\":\"varchar\",\"outerLink\":\"technician.push_percent\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"90\"},\"push_amount\":{\"title\":\"提成金额\",\"type\":\"Price\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"95\"},\"gmt_create\":{\"title\":\"消费时间\",\"type\":\"DateTimePicker\",\"fieldType\":\"datetime\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"96\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"100\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"110\"}}'),(15,'model',2,'','2016-03-17 00:10:39','2016-03-17 00:10:39','会员充值记录','prepaid_record','nw_prepaid_record','','','','','','{\"card_no\":{\"title\":\"卡号\",\"type\":\"OuterLink\",\"fieldType\":\"varchar\",\"outerLink\":\"card.no\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"user_id\":{\"title\":\"会员ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"card.user_id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"20\"},\"user_name\":{\"title\":\"会员姓名\",\"type\":\"ReadOnly\",\"fieldType\":\"varchar\",\"outerLink\":\"card.user_name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"30\"},\"amount\":{\"title\":\"充值金额\",\"type\":\"Price\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"},\"comment\":{\"title\":\"备注\",\"type\":\"TextArea\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"42\"},\"gmt_create\":{\"title\":\"充值时间\",\"type\":\"DateTimePicker\",\"fieldType\":\"datetime\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"45\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"50\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"60\"}}'),(16,'model',2,'','2016-03-17 00:14:56','2016-03-17 00:14:56','会员积分记录','score_record','nw_score_record','','','','','','{\"user_id\":{\"title\":\"会员ID\",\"type\":\"ReadOnly\",\"fieldType\":\"varchar\",\"outerLink\":\"card.user_id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"5\"},\"user_name\":{\"title\":\"会员姓名\",\"type\":\"ReadOnly\",\"fieldType\":\"varchar\",\"outerLink\":\"card.user_name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"6\"},\"from_type\":{\"title\":\"来源类型\",\"type\":\"Radio\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"消费积分\":1,\"积分变动\":2}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"8\"},\"type\":{\"title\":\"变更类型\",\"type\":\"Select\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"增加\":1,\"减少\":2}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"score\":{\"title\":\"分值\",\"type\":\"Text\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"card_no\":{\"title\":\"卡号\",\"type\":\"ReadOnly\",\"fieldType\":\"varchar\",\"outerLink\":\"card.no\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"30\"},\"comment\":{\"title\":\"变更详情\",\"type\":\"TextArea\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"55\"},\"gmt_create\":{\"title\":\"变更时间\",\"type\":\"DateTimePicker\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"56\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"60\"},\"store.name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"70\"}}'),(17,'model',2,'','2016-03-17 22:23:26','2016-03-17 22:23:26','就诊记录','case','nw_case','','','','','','{\"user_id\":{\"title\":\"会员ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"user.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"10\"},\"user_name\":{\"title\":\"会员名\",\"type\":\"ReadOnly\",\"fieldType\":\"varchar\",\"outerLink\":\"user.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"technician_id\":{\"title\":\"接诊技师ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"technician.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"30\"},\"technician_name\":{\"title\":\"接诊技师\",\"type\":\"ReadOnly\",\"fieldType\":\"varchar\",\"outerLink\":\"technician.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"},\"clinic_time\":{\"title\":\"就诊时间\",\"type\":\"DateTimePicker\",\"fieldType\":\"datetime\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"60\"},\"address\":{\"title\":\"就诊地址\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"65\"},\"comment\":{\"title\":\"病例备注\",\"type\":\"TextArea\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"70\"},\"next_time\":{\"title\":\"下次就诊日期\",\"type\":\"DatePicker\",\"fieldType\":\"datetime\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"80\"},\"store_id\":{\"title\":\"所属店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"90\"},\"store.name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"100\"}}'),(18,'model',2,'','2016-03-17 22:27:46','2016-03-17 22:27:46','预约记录','reservation','nw_reservation','','','','','','{\"user_id\":{\"title\":\"会员ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"user.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"\"},\"user_name\":{\"title\":\"会员姓名\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"user.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"},\"reserva_time\":{\"title\":\"预约时间\",\"type\":\"DateTimePicker\",\"fieldType\":\"datetime\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"},\"technician_id\":{\"title\":\"预约技师ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"technician.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"\"},\"technician_name\":{\"title\":\"预约技师\",\"type\":\"ReadOnly\",\"fieldType\":\"varchar\",\"outerLink\":\"technician.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"},\"comment\":{\"title\":\"预约备注\",\"type\":\"Text\",\"fieldType\":\"text\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"},\"store_id\":{\"title\":\"所属店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"\"},\"store.name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"}}'),(19,'model',2,'','2016-03-17 22:41:45','2016-03-17 22:41:45','商品管理','goods','nw_goods','','','','','','{\"name\":{\"title\":\"商品名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"no\":{\"title\":\"商品编号\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"category_id\":{\"title\":\"商品分类\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"goods_category.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"30\"},\"category_name\":{\"title\":\"分类名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"goods_category.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"35\"},\"brand\":{\"title\":\"所属品牌\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"},\"original_price\":{\"title\":\"原价\",\"type\":\"Price\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"50\"},\"active_price\":{\"title\":\"现价\",\"type\":\"Price\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"60\"},\"description\":{\"title\":\"商品描述\",\"type\":\"TextArea\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"70\"},\"status\":{\"title\":\"商品状态\",\"type\":\"Radio\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"正常售卖中\":1,\"已下架\":0}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"80\"},\"inventory\":{\"title\":\"库存\",\"type\":\"ReadOnly\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"85\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"90\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"100\"}}'),(20,'model',2,'','2016-03-17 22:43:16','2016-03-17 22:43:16','商品分类','goods_category','nw_goods_category','','','','','','{\"name\":{\"title\":\"分类名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"}}'),(21,'model',2,'','2016-03-17 22:44:36','2016-03-17 22:44:36','商品供货商','supplier','nw_supplier','','','','','','{\"name\":{\"title\":\"供货商名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"\"}}'),(28,'model',2,'','2016-03-17 23:05:32','2016-03-17 23:05:32','商品入库记录','batch_in','nw_batch_in','','','','','','{\"type\":{\"title\":\"入库类型\",\"type\":\"Radio\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"采购入库\":1,\"从其他分店调拨入库\":2}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"1\"},\"goods_id\":{\"title\":\"商品ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"goods.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"10\"},\"goods_name\":{\"title\":\"商品名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"goods.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"active_price\":{\"title\":\"商品单价\",\"type\":\"Price\",\"fieldType\":\"outerField\",\"outerLink\":\"goods.active_price\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"30\"},\"quantity\":{\"title\":\"入库数量\",\"type\":\"Text\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"},\"supplier_id\":{\"title\":\"供货商ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"supplier.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"60\"},\"supplier_name\":{\"title\":\"供货商名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"supplier.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"70\"},\"from_store_id\":{\"title\":\"调拨分店ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"80\"},\"from_store_name\":{\"title\":\"调拨分店名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"90\"},\"gmt_create\":{\"title\":\"入库时间\",\"type\":\"DateTimePicker\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"95\"},\"store_id\":{\"title\":\"分店ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"100\"},\"store_name\":{\"title\":\"分店名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"110\"}}'),(35,'model',2,'','2016-03-17 23:18:38','2016-03-17 23:18:38','商品出库记录','batch_out','nw_batch_out','','','','','','{\"goods_id\":{\"title\":\"商品ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"goods.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"10\"},\"goods_name\":{\"title\":\"商品名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"goods.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"active_price\":{\"title\":\"商品单价\",\"type\":\"Price\",\"fieldType\":\"outerField\",\"outerLink\":\"goods.active_price\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"30\"},\"quantity\":{\"title\":\"出库数量\",\"type\":\"Text\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"},\"type\":{\"title\":\"出库类型\",\"type\":\"Radio\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"正常销售\":1,\"其他分店调拨\":2}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"50\"},\"to_store_id\":{\"title\":\"调拨分店ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"80\"},\"to_store_name\":{\"title\":\"调拨分店名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"90\"},\"gmt_create\":{\"title\":\"出库时间\",\"type\":\"DateTimePicker\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"95\"},\"store_id\":{\"title\":\"分店ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"100\"},\"store_name\":{\"title\":\"分店名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"110\"}}'),(43,'model',2,'','2016-03-17 23:38:44','2016-03-17 23:38:44','服务项目','services','nw_services','','','','','','{\"name\":{\"title\":\"服务名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"active_price\":{\"title\":\"服务单价\",\"type\":\"Price\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"category_id\":{\"title\":\"分类ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"services_category.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"24\"},\"category_name\":{\"title\":\"分类名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"services_category.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"25\"},\"status\":{\"title\":\"项目状态\",\"type\":\"Select\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"正常\":1,\"暂停服务\":0}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"26\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"30\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"}}'),(44,'model',2,'','2016-03-17 23:40:31','2016-03-17 23:40:31','服务类别','services_category','nw_services_category','','','','','','{\"name\":{\"title\":\"服务分类名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"20\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"30\"}}'),(45,'model',2,'','2016-03-17 23:41:56','2016-03-17 23:41:56','技师信息','technician','nw_technician','','','','','','{\"no\":{\"title\":\"技师编号\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"name\":{\"title\":\"技师姓名\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"rank_id\":{\"title\":\"技师等级ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"technician_rank.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"30\"},\"rank_name\":{\"title\":\"等级名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"technician_rank.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"},\"push_percent\":{\"title\":\"提成百分比\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"technician_rank.push_percent\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"45\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"50\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"60\"}}'),(46,'model',2,'','2016-03-17 23:46:16','2016-03-17 23:46:16','技师等级表','technician_rank','nw_technician_rank ','','','','','','{\"name\":{\"title\":\"等级名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"push_percent\":{\"title\":\"提成百分比\",\"type\":\"Text\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"30\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"}}'),(50,'model',2,'','2016-03-17 23:49:56','2016-03-17 23:49:56','短信模版','sms_template','nw_sms_template','','','','','','{\"name\":{\"title\":\"模版名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"content\":{\"title\":\"模版内容\",\"type\":\"TextArea\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"30\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"}}'),(51,'model',2,'','2016-03-17 23:53:04','2016-03-17 23:53:04','店铺管理','store','nw_store','','','','','','{\"name\":{\"title\":\"店铺名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"level\":{\"title\":\"店铺等级\",\"type\":\"Select\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"加盟店\":1,\"直营店\":2}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"15\"},\"tel\":{\"title\":\"联系电话\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"address\":{\"title\":\"地址\",\"type\":\"TextArea\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"30\"}}'),(52,'model',2,'','2016-03-20 10:14:59','2016-03-20 10:14:59','会员管理','user','nw_user','','','','','','{\"name\":{\"title\":\"姓名\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"checkers\":\"\\\\S+\",\"failTips\":\"姓名不能为空\"}],\"desc\":\"*  必填\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"head\":{\"title\":\"头像\",\"type\":\"File\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"15\"},\"phone\":{\"title\":\"手机\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"16\"},\"mail\":{\"title\":\"邮箱\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"17\"},\"sex\":{\"title\":\"性别\",\"type\":\"Radio\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"男\":1,\"女\":0}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"birthday\":{\"title\":\"生日\",\"type\":\"DatePicker\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"},\"address\":{\"title\":\"联系地址\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"50\"},\"gmt_create\":{\"title\":\"注册时间\",\"type\":\"DateTimePicker\",\"fieldType\":\"datetime\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"60\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"90\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"100\"}}'),(55,'model',2,'','2016-03-20 10:24:40','2016-03-20 10:24:40','会员卡','card','nw_card','','','','','','{\"no\":{\"title\":\"卡号\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"user_id\":{\"title\":\"会员ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"user.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"12\"},\"user_name\":{\"title\":\"会员姓名\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"user.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"13\"},\"user_phone\":{\"title\":\"会员手机\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"user.phone\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"15\"},\"password\":{\"title\":\"密码\",\"type\":\"Hidden\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"20\"},\"amount\":{\"title\":\"卡余额\",\"type\":\"Price\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"DEFAULT 0\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"25\"},\"score\":{\"title\":\"卡积分\",\"type\":\"Text\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"DEFAULT 0\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"26\"},\"card_rank_id\":{\"title\":\"等级ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"card_rank.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"50\"},\"card_rank_name\":{\"title\":\"等级名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"card_rank.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"60\"},\"discount\":{\"title\":\"享受折扣\",\"type\":\"Discount\",\"fieldType\":\"outerField\",\"outerLink\":\"card_rank.discount\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"61\"},\"score_ratio\":{\"title\":\"积分系数\",\"type\":\"Text\",\"fieldType\":\"outerField\",\"outerLink\":\"card_rank.score_ratio\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"62\"},\"status\":{\"title\":\"卡片状态\",\"type\":\"Select\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":[{\"未激活\":0,\"正常使用\":1,\"挂失\":-1,\"销户\":-999}],\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"80\"},\"comment\":{\"title\":\"备注\",\"type\":\"TextArea\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"85\"},\"gmt_create\":{\"title\":\"开卡时间\",\"type\":\"DateTimePicker\",\"fieldType\":\"datetime\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"87\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"90\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"100\"}}'),(56,'model',2,'','2016-03-20 10:27:28','2016-03-20 10:27:28','会员卡等级','card_rank','nw_card_rank','','','','','','{\"name\":{\"title\":\"等级名称\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"discount\":{\"title\":\"享受折扣\",\"type\":\"Discount\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"score_ratio\":{\"title\":\"积分系数\",\"type\":\"Text\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"多少钱积一分（eg: 10比表示10元积1分）\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"25\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"30\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"}}'),(65,'model',2,'','2016-04-03 21:33:23','2016-04-03 21:33:23','短信记录','sms_record','nw_sms_record','','','','','','{\"phones\":{\"title\":\"手机号码\",\"type\":\"Text\",\"fieldType\":\"varchar\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"* 支持多个号码同时发送，\\\",\\\"号分隔\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"10\"},\"phone_num\":{\"title\":\"号码数量\",\"type\":\"ReadOnly\",\"fieldType\":\"int\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"20\"},\"template_id\":{\"title\":\"短信模版ID\",\"type\":\"OuterLink\",\"fieldType\":\"int\",\"outerLink\":\"sms_template.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"31\"},\"template_name\":{\"title\":\"模版名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"sms_template.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"32\"},\"template_content\":{\"title\":\"发送内容\",\"type\":\"TextArea\",\"fieldType\":\"varchar\",\"outerLink\":\"sms_template.content\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"33\"},\"gmt_create\":{\"title\":\"发送时间\",\"type\":\"DateTimePicker\",\"fieldType\":\"datetime\",\"outerLink\":\"\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"40\"},\"store_id\":{\"title\":\"店铺ID\",\"type\":\"Hidden\",\"fieldType\":\"int\",\"outerLink\":\"store.id\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"0\",\"issearch\":\"0\",\"order\":\"50\"},\"store_name\":{\"title\":\"店铺名称\",\"type\":\"ReadOnly\",\"fieldType\":\"outerField\",\"outerLink\":\"store.name\",\"fieldLen\":\"\",\"fieldExt\":\"\",\"valueRange\":\"\",\"desc\":\"\",\"width\":\"\",\"fieldtmp\":\"\",\"islist\":\"1\",\"issearch\":\"0\",\"order\":\"60\"}}');
/*!40000 ALTER TABLE `sys_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_model_class`
--

DROP TABLE IF EXISTS `sys_model_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_model_class` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `class_name` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_model_class`
--

LOCK TABLES `sys_model_class` WRITE;
/*!40000 ALTER TABLE `sys_model_class` DISABLE KEYS */;
INSERT INTO `sys_model_class` VALUES (1,'model_class',0,NULL,'2015-12-03 14:24:12','2015-12-03 14:24:14','cms'),(2,'model_class',0,'','2016-03-11 21:26:08','2016-03-11 21:26:08','nw');
/*!40000 ALTER TABLE `sys_model_class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_service`
--

DROP TABLE IF EXISTS `sys_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_service`
--

LOCK TABLES `sys_service` WRITE;
/*!40000 ALTER TABLE `sys_service` DISABLE KEYS */;
INSERT INTO `sys_service` VALUES (1,'service',1,'2015-12-07 20:33:16','2015-12-07 20:33:16','','queryModel','模型通用查询服务',1,'{\"operModel.targetFlowUnit\":\"queryModel\"}'),(2,'service',1,'2015-12-07 20:33:16','2015-12-07 20:33:16','','queryData','数据通用查询服务',2,'{\"operData.targetFlowUnit\":\"queryData\"}'),(3,'service',1,'2015-12-07 20:33:16','2015-12-07 20:33:16',NULL,'modModel','模型通用修改服务',1,'{\"operModel.targetFlowUnit\":\"modModel\"}'),(4,'service',1,'2015-12-07 20:33:16','2015-12-07 20:33:16',NULL,'modData','数据通用修改服务',2,'{\"operData.targetFlowUnit\":\"modData\"}'),(5,'service',1,'2015-12-07 20:33:16','2015-12-07 20:33:16',NULL,'delModel','模型通用删除服务',1,'{\"operModel.targetFlowUnit\":\"delModel\"}'),(6,'service',1,'2015-12-07 20:33:16','2015-12-07 20:33:16',NULL,'delData','数据通用删除服务',2,'{\"operData.targetFlowUnit\":\"delData\"}'),(7,'service',1,'2015-12-07 20:33:16','2015-12-07 20:33:16',NULL,'addModel','模型通用增加服务',1,'{\"operModel.targetFlowUnit\":\"addModel\"}'),(8,'service',1,'2015-12-07 20:33:16','2015-12-07 20:33:16',NULL,'addData','数据通用增加服务',2,'{\"operData.targetFlowUnit\":\"addData\"}'),(9,'service',1,'2015-12-07 20:33:16','2015-12-07 20:33:16',NULL,'queryServiceModel','查询服务模型',3,''),(10,'service',2,'2016-03-27 11:03:39','2016-03-27 11:03:39','','cashSubmit','收银台提交接口',4,'{\"restfulApi.targetFlowUnit\":\"cashSubmit\"}'),(11,'service',2,'2016-04-05 01:14:42','2016-04-05 01:14:42','','modPassword','修改会员卡密码接口',4,'{\"restfulApi.targetFlowUnit\":\"modPassword\"}'),(12,'service',2,'2016-04-06 23:48:26','2016-04-06 23:48:26','','cardPrepaid','会员卡充值接口',4,'{\"restfulApi.targetFlowUnit\":\"cardPrepaid\"}'),(13,'service',2,'2016-04-07 00:40:55','2016-04-07 00:40:55','','cardStatus','会员卡挂失解挂接口',4,'{\"restfulApi.targetFlowUnit\":\"cardStatus\"}'),(14,'service',2,'2016-04-07 23:10:53','2016-04-07 23:10:53','','cardChange','会员换卡接口',4,'{\"restfulApi.targetFlowUnit\":\"cardChange\"}'),(15,'service',2,'2016-04-09 00:09:46','2016-04-09 00:09:46','','scoreOper','会员积分变更',4,'{\"restfulApi.targetFlowUnit\":\"scoreOper\"}'),(16,'service',2,'2016-04-16 18:47:55','2016-04-16 18:47:55','','jsonToXls','导出xls功能',4,'{\"restfulApi.targetFlowUnit\":\"jsonToXls\"}');
/*!40000 ALTER TABLE `sys_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_service_class`
--

DROP TABLE IF EXISTS `sys_service_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_service_class` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `class_name` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_service_class`
--

LOCK TABLES `sys_service_class` WRITE;
/*!40000 ALTER TABLE `sys_service_class` DISABLE KEYS */;
INSERT INTO `sys_service_class` VALUES (1,'service_class',0,'2015-12-08 21:52:41','2015-12-08 21:52:41','','cms'),(2,'service_class',0,'2016-03-27 10:58:06','2016-03-27 10:58:06','','nw');
/*!40000 ALTER TABLE `sys_service_class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_workflow`
--

DROP TABLE IF EXISTS `sys_workflow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_workflow`
--

LOCK TABLES `sys_workflow` WRITE;
/*!40000 ALTER TABLE `sys_workflow` DISABLE KEYS */;
INSERT INTO `sys_workflow` VALUES (1,'workflow',1,'2015-12-04 19:49:43','2015-12-04 19:49:43','','sys_operModel','[{\"unit_name\":\"operModel\",\"result\":[{\"code\":\"1\",\"next\":\"\"}]}]','系统模型通用操作'),(2,'workflow',1,'2015-12-04 19:23:38','2015-12-04 19:23:38','','sys_operData','[{\"unit_name\":\"operData\",\"result\":[{\"code\":\"1\",\"next\":\"\"}]}]','系统数据通用操作'),(3,'workflow',1,'2015-12-07 18:06:44','2015-12-07 18:06:44','','sys_operFlowModel','[{\"unit_name\":\"queryFlowModel\",\"result\":[{\"code\":\"1\",\"next\":\"\"}]}]','系统对工作流所有工作单元入参的数据描述进行操作'),(4,'workflow',1,'2016-03-27 11:01:06','2016-03-27 11:01:06','','sys_restfulApi','[{\"unit_name\":\"restfulApi\",\"result\":[{\"code\":\"1\",\"next\":\"\"}]}]','系统提供restful api接口流程');
/*!40000 ALTER TABLE `sys_workflow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_workflow_class`
--

DROP TABLE IF EXISTS `sys_workflow_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_workflow_class` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) NOT NULL,
  `nodeid` bigint(20) NOT NULL DEFAULT '0',
  `gmt_create` datetime NOT NULL,
  `gmt_modified` datetime NOT NULL,
  `data_owner` varchar(255) DEFAULT NULL,
  `class_name` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_workflow_class`
--

LOCK TABLES `sys_workflow_class` WRITE;
/*!40000 ALTER TABLE `sys_workflow_class` DISABLE KEYS */;
INSERT INTO `sys_workflow_class` VALUES (1,'workflow_class',0,'2015-12-08 22:00:42','2015-12-08 22:00:42','','cms');
/*!40000 ALTER TABLE `sys_workflow_class` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-04-17 20:28:08
