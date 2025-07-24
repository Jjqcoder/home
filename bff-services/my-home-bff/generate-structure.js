/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: 本脚本用于生成项目结构的 Markdown 文件
 * 使用：在项目根目录下执行 node generate-structure.js
 */

const fs = require('fs');
const path = require('path');

function generateTree(dir, prefix = '', depth = 0, maxDepth = 3) {
  if (depth > maxDepth) return '';
  
  let result = '';
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach((file, index) => {
      // logs文件夹也不要跟踪
      if (file.match(/node_modules|dist|build|\.git|logs/)) return;
      
      const fullPath = path.join(dir, file);
      const isLast = index === files.length - 1;
      
      result += prefix + (isLast ? '└── ' : '├── ') + file + '\n';
      
      try {
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
          const newPrefix = prefix + (isLast ? '    ' : '│   ');
          result += generateTree(fullPath, newPrefix, depth + 1, maxDepth);
        }
      } catch (e) {
        // 忽略无法访问的目录
        console.error(e);
      }
    });
  } catch (e) {
    // 忽略无法访问的目录
    console.error(e);
  }
  
  return result;
}

const structure = '```\n' + generateTree(process.cwd()) + '```';
fs.writeFileSync('PROJECT-STRUCTURE.md', structure);
console.log('Markdown structure generated!');