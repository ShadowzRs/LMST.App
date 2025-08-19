// import { useEffect, useState } from "react";
import "./index.css";

function Dashboard() {
  return (
    <>
      <header className="top-header">
        <h1>Dashboard</h1>
        <p>Welcome to the Inventory Dashboard!</p>
      </header>
      <section className="dashboard-content">
        <div className="dashboard-card">
          <h2>Total Items</h2>
          <p>150</p>
        </div>
        <div className="dashboard-card">
          <h2>Low Stock Alerts</h2>
          <p>5 items</p>
        </div>
        <div className="dashboard-card">
          <h2>Recent Activity</h2>
          <p>Last updated: 2 hours ago</p>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
