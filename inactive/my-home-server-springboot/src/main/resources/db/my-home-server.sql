/*
 Navicat Premium Data Transfer

 Source Server         : 我的服务器
 Source Server Type    : MySQL
 Source Server Version : 80027 (8.0.27)
 Source Host           : 120.27.159.194:3307
 Source Schema         : my-home-server

 Target Server Type    : MySQL
 Target Server Version : 80027 (8.0.27)
 File Encoding         : 65001

 Date: 11/03/2025 13:53:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for BLOG
-- ----------------------------
DROP TABLE IF EXISTS `BLOG`;
CREATE TABLE `BLOG`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `BLOG_CREATE_TIME` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `BLOG_UPDATE_TIME` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `BLOG_TITLE` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `BLOG_CONTENT` varchar(2555) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `IS_DELETE` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '0代表未删除/1代表删除',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1022 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '此表为home的日志表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for VISIT_RECORDER
-- ----------------------------
DROP TABLE IF EXISTS `VISIT_RECORDER`;
CREATE TABLE `VISIT_RECORDER`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `IP` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `CREATE_TIME` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 453 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '此表为home的来访者记录表' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
