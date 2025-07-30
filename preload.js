const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  addItem: (item) => ipcRenderer.invoke("add-item", item),
  getItems: () => ipcRenderer.invoke("get-items"),
});
