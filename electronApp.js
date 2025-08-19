const { app, BrowserWindow } = require("electron");
const path = require("path");

// Import migrations & db
const { runMigrations } = require("./database/table/migrate");

// Import IPC handlers
const { registerInventoryHandlers } = require("./src/ipc/inventoryHandlers");
const { registerSupplierHandlers } = require("./src/ipc/supplierHandlers");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // stays outside src
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL("http://localhost:5173").catch(console.error);
}

app.whenReady().then(() => {
  runMigrations(); // ✅ run migrations before anything else
  registerInventoryHandlers();
  registerSupplierHandlers();
  createWindow();
});
