const {app, BrowserWindow} = require('electron')

function createMainWindow () {
    const mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: 500,
        height: 600
    })
}

app.on('ready', createMainWindow)