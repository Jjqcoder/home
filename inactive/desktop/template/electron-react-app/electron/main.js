/**
 * 创建时间: 2025-05-20
 * 作者: jjq
 * 描述: electron 主进程
 */

// electron/main.js
import {app, BrowserWindow} from 'electron'
import path from 'path'
import {fileURLToPath} from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    // 开发环境加载 Vite 服务器
    mainWindow.loadURL('http://localhost:5173')

    // 生产环境加载打包文件
    // mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
}

app.whenReady().then(createWindow)
