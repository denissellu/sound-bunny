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

exports.openSettings = function() {
  let settingsWindow = null;

  if (settingsWindow) {
    return;
  }

  settingsWindow = new BrowserWindow({
    height: 300,
    resizable: false,
    width: 300,
    titleBarStyle: 'hidden-inset'
  });

  settingsWindow.loadURL('file://' + __dirname + '/app/settings.html');

  settingsWindow.on('closed', function () {
    settingsWindow = null;
  });
}
