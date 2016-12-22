const electron = require('electron')
const {app, BrowserWindow, ipcMain} = electron

app.on('ready', () => {
    let win = new BrowserWindow({
      height: 720,
      width: 368,
      frame: false,
      resizable: false,
    })

    win.loadURL(`file://${__dirname}/app/app.html`)
    win.webContents.openDevTools();
})
