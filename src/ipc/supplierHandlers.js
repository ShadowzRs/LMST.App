const { ipcMain } = require("electron");
const { db } = require("../../database/table/migrate");

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

module.exports = { registerSupplierHandlers };
