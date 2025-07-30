# 将现有JS项目逐步迁移到TypeScript的配置方案(用于参考)

## 第一步：安装必要的依赖

首先，运行以下命令安装TypeScript和相关工具：

```bash
pnpm add -D typescript @types/node @types/express @types/cors @types/body-parser @types/morgan @types/response-time ts-node
```

## 第二步：创建TypeScript配置文件

在项目根目录创建 `tsconfig.json` 文件：

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "allowJs": true,
    "checkJs": false,
    "outDir": "./dist",
    "rootDir": ".",
    "strict": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": false
  },
  "include": ["**/*"],
  "exclude": ["node_modules", "dist"]
}
```

关键配置说明：
- `allowJs: true` - 允许编译JS文件
- `checkJs: false` - 不检查JS文件的类型错误
- `outDir` - 输出目录
- `rootDir` - 根目录设为项目根目录

## 第三步：修改package.json

更新你的package.json的script脚本：

```json
    "build": "tsc",
    "start": "node dist/app.js"
```

## 第四步：修改ecosystem.config.js配置

更新`ecosystem.config.js`以支持TypeScript：

```javascript
script: 'dist/app.js',// 调用根目录下的脚本，指向dist文件夹中的内容
```