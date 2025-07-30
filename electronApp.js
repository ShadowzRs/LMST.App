const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const Database = require("better-sqlite3");

const db = new Database(path.join(__dirname, "database", "inventory.db"));

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  console.log("=== Loading URL...");
  win.loadURL("http://localhost:5173").catch((err) => {
    console.error("=== Failed to load Vite:", err);
  });

  win.on("ready-to-show", () => {
    console.log("=== Window ready to use");
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      console.log("=== Recreating window...");
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  console.log("=== All windows closed.");
  if (process.platform !== "darwin") app.quit();
});

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    type TEXT,
    price INTEGER
  )
`
).run();

// IPC Handlers
ipcMain.handle("add-item", (event, item) => {
  const stmt = db.prepare(
    "INSERT INTO inventory (name, type, price) VALUES (?, ?, ?)"
  );
  const result = stmt.run(item.name, item.type, item.price);
  return result.lastInsertRowid;
});

ipcMain.handle("get-items", () => {
  return db.prepare("SELECT * FROM inventory").all();
});
