const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const dialog = electron.dialog;
const path = require('path');
const fs = require('fs');
const Menu = electron.Menu;

console.log("This program is running on platform: " +process.platform);

app.on('ready', () => {


  mainWindow = new BrowserWindow({width:1000});

  mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

})
