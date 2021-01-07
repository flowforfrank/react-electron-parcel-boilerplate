const { app, BrowserWindow } = require('electron');

try {
    require('electron-reloader')(module);
} catch (_) {}

const createWindow = () => {
    const window = new BrowserWindow();

    window.loadFile('build/index.html');
};

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());