/*
 Navicat Premium Data Transfer

 Source Server         : 我的服务器
 Source Server Type    : MySQL
 Source Server Version : 80027 (8.0.27)
 Source Host           : 120.27.159.194:3307
 Source Schema         : manage-server

 Target Server Type    : MySQL
 Target Server Version : 80027 (8.0.27)
 File Encoding         : 65001

 Date: 07/03/2025 14:35:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for USERS
-- ----------------------------
DROP TABLE IF EXISTS `USERS`;
CREATE TABLE `USERS`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `USERNAME` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `PASSWORD` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
