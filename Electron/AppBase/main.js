const {app, BrowserWindow, ipcMain} = require('electron');
const path = require("path");
const os = require("os");

const isDev = process.env.NODE_ENV !== undefined && process.env.NODE_ENV === "development"
    ? true : false

    const isMac = process.platform === "darwin" ? true : false;

function createWindow() {
    // style
    const win = new BrowserWindow({
        width: 600,
        height:600,
        backgroundColor: "#eee",
        show: false,
        icon: path.join(__dirname, "assets", "icons", "no-mundo-todo.png"),
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadFile("./src/index.html")
    if (isDev) {
        win.webContents.openDevTools();
    }

    win.once("ready-to-show", () => {
        win.show();
        setTimeout(() => {
            win.webContents.send('cpu_name', os.cpus()[0].models);
        }, 3000);
    });
}

app.whenReady().then(() => {
    createWindow();
});

app.on("window-all-closed", () => {
    console.log("todas as janelas fechagas");
    if (!isMac) {
        app.quit();
    }
});

app.on("activated", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})