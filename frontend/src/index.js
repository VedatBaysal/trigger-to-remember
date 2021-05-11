const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

const createWindow = () => {
  const mainWin = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  mainWin.webContents.openDevTools()
  mainWin.loadURL(
    url.format({
      pathname: path.join(__dirname, 'views/index.html'),
      protocol: 'file',
      slashes: true,
    })
  )
  mainWin.on('closed', () => {
    mainWin = null
    app.quit()
  })
}
app.on('ready', async () => {
  await createWindow()
})
