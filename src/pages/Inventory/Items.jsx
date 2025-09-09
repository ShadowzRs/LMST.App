import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../component/Sidebar.jsx";
import "../../index.css";

function Inventory() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <h1 className="text-black">List of Inventory</h1>
    </div>
  );
}

export default Inventory;
