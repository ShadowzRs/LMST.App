import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Inventory from "./pages/Inventory/Inventory.jsx";

function Routing() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </HashRouter>
  );
}

export default Routing;
