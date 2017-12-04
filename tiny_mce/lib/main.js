const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const dialog = electron.dialog;
const path = require('path');
const fs = require('fs');
const Menu = electron.Menu;

// const tinymce = require('tinymce');
// console.log("I got here!!!!");

console.log("This program is running on platform: " +process.platform);

app.on('ready', () => {


  mainWindow = new BrowserWindow({width:1000});

  mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

})

// console.log("hello again")
// console.log(mainWindow)


// var openFile
//
// exports.openFile = openFile
// exports.saveFile = saveFile
// exports.saveAsFile = saveAsFile
//
// if (process.platform === 'darwin') {
//   const name = app.getName()
//   template.unshift({
//     label: name,
//     submenu: [
//       {
//         label: 'About ' + name,
//         role: 'about'
//       },
//       {
//         type: 'separator'
//       },
//       {
//         label: 'Services',
//         role: 'services',
//         submenu: []
//       },
//       {
//         type: 'separator'
//       },
//       {
//         label: 'Hide ' + name,
//         accelerator: 'Command+H',
//         role: 'hide'
//       },
//       {
//         label: 'Hide Others',
//         accelerator: 'Command+Alt+H',
//         role: 'hideothers'
//       },
//       {
//         label: 'Show All',
//         role: 'unhide'
//       },
//       {
//         type: 'separator'
//       },
//       {
//         label: 'Quit',
//         accelerator: 'Command+Q',
//         click () { app.quit() }
//       }
//     ]
//   })
// }
//
// app.on('ready', () => {
//
//   mainWindow = new BrowserWindow({width:1000})
//
//   const menu = Menu.buildFromTemplate(template)
//   Menu.setApplicationMenu(menu)
//
//   mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'))
//
//   mainWindow.on('closed', () => {
//     mainWindow = null
//   })
//
// })
//
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
