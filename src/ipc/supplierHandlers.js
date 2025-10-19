import { ipcMain } from "electron";
import { db } from "../../database/table/migrate.js";

function registerSupplierHandlers() {
  ipcMain.handle("add-supplier", (event, supplier) => {
    const stmt = db.prepare(
      "INSERT INTO suppliers (name, contact) VALUES (?, ?)"
    );
    const result = stmt.run(supplier.name, supplier.contact);
    return result.lastInsertRowid;
  });

  ipcMain.handle("get-suppliers", () => {
    return db.prepare("SELECT * FROM suppliers").all();
  });
}

export default registerSupplierHandlers;
