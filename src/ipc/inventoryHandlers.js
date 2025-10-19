import { ipcMain } from "electron";
import { db } from "../../database/table/migrate.js";

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

export default registerInventoryHandlers;
