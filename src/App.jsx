import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", type: "", price: "" });

  const fetchItems = async () => {
    const data = await window.api.getItems();
    setItems(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await window.api.addItem({
      name: form.name,
      type: form.type,
      price: parseFloat(form.price),
    });
    setForm({ name: "", type: "", price: "" });
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="app">
      <h1>Inventory</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Type"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <b>{item.name}</b> - {item.type} - Rp.{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
