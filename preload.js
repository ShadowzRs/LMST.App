const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  // inventory item
  addItem: (item) => ipcRenderer.invoke("add-item", item),
  getItems: () => ipcRenderer.invoke("get-items"),

  // suppliers
  addSupplier: (supplier) => ipcRenderer.invoke("add-supplier", supplier),
  getSuppliers: () => ipcRenderer.invoke("get-suppliers"),
});
