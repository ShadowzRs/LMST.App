import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../component/Sidebar.jsx";
import "../../index.css";

function Inventory() {
  return (
    <div className="flex">
      <Sidebar />
      <h1 className="flex-1 text-black">List of Inventory</h1>
    </div>
  );
}

export default Inventory;
