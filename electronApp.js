import { app, BrowserWindow } from "electron";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

// Import migrations &  IPC handlers
import { runMigrations } from "./database/table/migrate.js";
import registerInventoryHandlers from "./src/ipc/inventoryHandlers.js";
import registerSupplierHandlers from "./src/ipc/supplierHandlers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
