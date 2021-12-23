const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// main app window reference
let mainWindow;

/**
 * Create main app window
 */
function createMainWindow() {

  // create main app window
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      backgroundThrottling: false,
      webSecurity: false,
    },
  });

  // load the dist folder from Angular
  mainWindow.loadURL(url.format({ pathname: path.join(__dirname, '../../ng/index.html'), protocol: 'file:', slashes: true }));

  // destroy win on close
  mainWindow.on('closed', () => { win = null; });

}

/**
 * Start application
 */
function main() {

  // create/recreate main window upon activation
  app.on('ready', createMainWindow);
  app.on('activate', () => {
    if (mainWindow === null) {
      createMainWindow();
    }
  });

  // close application when last window is closed
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

}

// we're in the first instance, let's start the app
main();
