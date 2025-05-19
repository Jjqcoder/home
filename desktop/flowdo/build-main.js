const babel = require('@babel/core')
const fs = require('fs')

const code = fs.readFileSync('./src/main.js', 'utf8')
const result = babel.transformSync(code, {
    presets: ['@babel/preset-react']
})

fs.writeFileSync('./dist/main-compiled.js', result.code)
