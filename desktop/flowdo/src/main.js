// require('@babel/register')({
//     presets: ['@babel/preset-react']
// })

const {app, BrowserWindow} = require('electron')
const path = require('path')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    mainWindow.loadFile(path.join(__dirname, '../public/index.html'))
    mainWindow.webContents.openDevTools() // 这行必须放在 loadFile 之后
}

app.whenReady().then(createWindow)
