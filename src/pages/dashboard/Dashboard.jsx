import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../component/Sidebar.jsx";
import Table from "../../component/table.jsx";
import boxIcon from "../../assets/box.png";

import "../../index.css";

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 my-[35px] mx-[50px]">
        <div>
          <span className="flex items-center mb-5">
            <span className="shrink-0 text-xl font-bold pe-4 text-black">
              Inventory Overview
            </span>

            <span className="h-px flex-1 bg-gray-300"></span>
          </span>

          <div className="mx-3 mb-6 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white">
              <div className="flex flex-col gap-2 p-4 sm:p-6 lg:p-7">
                <div className="flex items-center justify-between text-sm font-medium text-slate-500">
                  <h2>Total Items</h2>
                  <img src={boxIcon} alt="Box Icon" className="w-6 h-6" />
                </div>

                <h1 className="text-3xl font-bold text-slate-900">945</h1>
              </div>
            </article>
            {/* ---------------------------------------------------------------------------- */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-500">
                  Items Low in Stock
                </h3>
                <svg
                  className="h-6 w-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <line x1="12" x2="12" y1="9" y2="13"></line>
                  <line x1="12" x2="12.01" y1="17" y2="17"></line>
                </svg>
              </div>
              <p className="mt-2 text-3xl font-bold text-orange-500">12</p>
            </div>
            {/* ------------------------------------------------------------ */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-500">
                  Items to Reorder
                </h3>
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
              </div>
              <p className="mt-2 text-3xl font-bold text-red-500">25</p>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}

          <span className="flex items-center my-5">
            <span className="shrink-0 text-xl font-bold pe-4 text-black">
              Stock Last Update
            </span>
            <span className="h-px flex-1 bg-gray-300" />
          </span>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* 🔍 Search & Filter Section */}
            <div className="lg:col-span-1">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <svg
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="search"
                    placeholder="Search logs..."
                    className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div className="flex gap-4">
                  <select className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-auto">
                    <option>All Types</option>
                    <option>Restock</option>
                    <option>Dispatch</option>
                    <option>Return</option>
                  </select>
                </div>
              </div>
            </div>

            {/* ➕ Action Buttons Section */}
            <div className="lg:col-span-2 flex items-start justify-end gap-4 flex-wrap">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-500 p-[2px] text-black hover:text-white focus:outline-hidden focus:ring-3"
              >
                <span className="flex items-center gap-1 rounded-full bg-white px-6 py-3 text-sm font-medium group-hover:bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Add New Item
                </span>
              </Link>

              <Link
                to="/"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] p-[2px] text-black hover:text-white focus:outline-hidden focus:ring-3"
              >
                <span className="flex items-center gap-1 rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5 mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7l9 5 9-5M3 7v10l9 5 9-5V7"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2v5m0 0l-2-2m2 2l2-2"
                    />
                  </svg>
                  Restock Item
                </span>
              </Link>

              <Link
                to="/"
                className="group inline-flex items-center gap-2 rounded-full bg-red-400 p-[2px] text-red-600 hover:text-white focus:outline-hidden focus:ring-3"
              >
                <span className="flex items-center gap-1 rounded-full bg-red-100 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5 mx-auto"
                  >
                    <g transform="translate(0, 1)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5"
                      />
                      <circle cx="8" cy="19" r="1" />
                      <circle cx="16" cy="19" r="1" />
                    </g>
                  </svg>
                  Dispatch Item
                </span>
              </Link>
            </div>
          </div>

          <Table
            columns={[
              "TRANSACTION TYPE",
              "ITEM NAME",
              "SKU/CODE",
              "CATEGORY",
              "UNIT",
              "QUANTITY CHANGE",
              "DATE",
              "REASON",
            ]}
          />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
