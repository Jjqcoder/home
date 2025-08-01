/*!40101 SET NAMES utf8mb4 */;
-- 确保在正确的数据库中操作
USE `my_blog_db`;

-- 创建文章表
CREATE TABLE IF NOT EXISTS `blogs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `content` TEXT,
  `author` VARCHAR(100),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 可选：插入初始数据
INSERT IGNORE INTO `blogs` (`title`, `content`, `author`) VALUES
('欢迎来到我的博客', '这是我的第一篇博客文章', '管理员');