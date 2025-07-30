/// <reference types="vite/client" />

interface InventoryItem {
  name: string;
  type: string;
  price: number;
}

interface Window {
  api: {
    addItem: (item: InventoryItem) => Promise<number>;
    getItems: () => Promise<InventoryItem[]>;
  };
}

declare const window: Window;
