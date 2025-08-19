const { ipcMain } = require("electron");
const { db } = require("../../database/table/migrate");

function registerInventoryHandlers() {
  ipcMain.handle("add-item", (event, item) => {
    const stmt = db.prepare(
      "INSERT INTO inventory (name, type, price, stock) VALUES (?, ?, ?, ?)"
    );
    const result = stmt.run(item.name, item.type, item.price, item.stock ?? 0);
    return result.lastInsertRowid;
  });

  ipcMain.handle("get-items", () => {
    return db.prepare("SELECT * FROM inventory").all();
  });
}

module.exports = { registerInventoryHandlers };
