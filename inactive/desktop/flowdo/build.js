const fs = require('fs')
const path = require('path')

// 将src/index.js复制到public/renderer.js
fs.copyFileSync(path.join(__dirname, 'src', 'index.js'), path.join(__dirname, 'public', 'renderer.js'))

console.log('✅ 文件复制完成')
