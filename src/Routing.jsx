import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Items from "./pages/Inventory/Items.jsx";
import Supplier from "./pages/Inventory/Supplier.jsx";

function Routing() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory/items" element={<Items />} />
        <Route path="/inventory/supplier" element={<Supplier />} />
      </Routes>
    </HashRouter>
  );
}

export default Routing;
