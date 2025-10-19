import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../component/Sidebar.jsx";
import "../../index.css";

function Supplier() {
  return (
    <div className="flex">
      <Sidebar />
      <h1 className="flex-1 text-black">List of Supplier</h1>
    </div>
  );
}

export default Supplier;
