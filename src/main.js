const { BrowserWindow, Menu, app, ipcMain } = require('electron');

// Main window
function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadFile('src/gui/html/index.html');
    // const mainMenu = Menu.buildFromTemplate(template);
    // Menu.setApplicationMenu(mainMenu);
}

const template = [
    {
        label: "File",
        submenu: [
            {
                label: "Products",
                accelerator: "Ctrl+p",
                click() {
                    console.log("Click desde Productos");
                }
            }
        ]
    },
    {
        label: "Products"
    },
    {
        label: "Acerca"
    },
    {
        label: "Quit",
        accelerator: "Ctrl+q",
        click() {
            app.quit();
        }
    }
];

// Product window
function productWindow() {
    const productWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    productWindow.loadFile('src/gui/html/create_product.html');
}

ipcMain.on("create-product", () => {
    productWindow();
});

module.exports = { createWindow };