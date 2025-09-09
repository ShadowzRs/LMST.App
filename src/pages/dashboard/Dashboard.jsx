import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../component/Sidebar.jsx";
import Table from "../../component/table.jsx";
import "../../index.css";

function Dashboard() {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />

      <main className="flex-1 my-[35px] mx-[50px]">
        <div>
          <span className="flex items-center mb-5">
            <span className="shrink-0 text-xl font-bold pe-4 text-black">
              Inventory Overview
            </span>

            <span className="h-px flex-1 bg-gray-300"></span>
          </span>

          <div className="grid grid-cols-1 gap-4 pb-6 lg:grid-cols-3 lg:gap-8">
            <div className="h-30 rounded bg-gray-300"></div>
            <div className="h-30 rounded bg-gray-300"></div>
            <div className="h-30 rounded bg-gray-300"></div>
          </div>

          <span className="flex items-center mb-5">
            <span className="shrink-0 text-xl font-bold pe-4 text-black">
              Quick Access
            </span>

            <span className="h-px flex-1 bg-gray-300"></span>
          </span>

          <div className="flex flex-nowrap flex-row gap-4">
            <Link
              className="group inline-block rounded-full text-black bg-[var(--primary)] p-[2px] hover:text-white focus:ring-3 focus:outline-hidden"
              to="/"
            >
              <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                Add new Item
              </span>
            </Link>

            <Link
              className="group inline-block rounded-full text-black bg-[var(--primary)] p-[2px] hover:text-white focus:ring-3 focus:outline-hidden"
              to="/"
            >
              <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                View Low Stock
              </span>
            </Link>
          </div>

          <span className="flex items-center my-5">
            <span className="shrink-0 text-xl font-bold pe-4 text-black">
              Last Updated
            </span>

            <span className="h-px flex-1 bg-gray-300"></span>
          </span>
          <Table columns={["Name", "DoB", "Role", "Salary"]} />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
