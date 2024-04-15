/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50536
Source Host           : 127.0.0.1:3306
Source Database       : home

Target Server Type    : MYSQL
Target Server Version : 50536
File Encoding         : 65001

Date: 2024-04-15 22:28:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `blog`
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog` (
  `ID` int(10) NOT NULL AUTO_INCREMENT COMMENT '文章ID',
  `BLOG_CREATE_TIME` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '文章创建时间',
  `BLOG_UPDATE_TIME` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `BLOG_TITLE` varchar(255) COLLATE utf8_general_mysql500_ci NOT NULL DEFAULT '' COMMENT '文章标题',
  `BLOG_CONTENT` mediumtext COLLATE utf8_general_mysql500_ci COMMENT '博客内容，允许为空',
  `IS_DELETE` varchar(1) COLLATE utf8_general_mysql500_ci NOT NULL DEFAULT '0' COMMENT '0代表未删除，1代表已删除',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- ----------------------------
-- Records of blog
-- ----------------------------
