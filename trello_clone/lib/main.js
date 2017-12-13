const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog
const path = require('path')
const fs = require('fs')
const Menu = electron.Menu


var openFile

// exports.openFile = openFile
// exports.saveFile = saveFile
// exports.saveAsFile = saveAsFile

app.on('ready', () => {

  mainWindow = new BrowserWindow({width:1000})

  mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'))

  mainWindow.on('closed', () => {
    mainWindow = null
  })

})

// function openFile () {
//   const files = dialog.showOpenDialog(mainWindow, {
//     properties: ['openFile'],
//     filters: [
//       { name: 'Markdown Files', extensions: ['md', 'markdown', 'txt'] }
//     ]
//   })
//
//   if (!files) return
//
//   openFile = files[0]
//   const file = files[0]
//   const content = fs.readFileSync(file).toString()
//
//   app.addRecentDocument(file)
//
//   mainWindow.webContents.send('file-opened', file, content)
// }
//
// function saveFile (content) {
//   if (!openFile) return
//
//   fs.writeFileSync(openFile, content)
// }
//
// function saveAsFile (content) {
//   const fileName = dialog.showSaveDialog(mainWindow, {
//     title: 'Save HTML Output',
//     defaultPath: app.getPath('documents'),
//     filters: [
//       { name: 'HTML Files', extensions: ['html'] }
//     ]
//   })
//
//   if (!fileName) return
//
//   fs.writeFileSync(fileName, content)
// }
//
// app.on('open-file', (event, file) => {
//   const content = fs.readFileSync(file).toString()
//   mainWindow.webContents.send('file-opened', file, content)
// })
