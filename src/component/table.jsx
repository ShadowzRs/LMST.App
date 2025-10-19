import React from "react";

const typeColors = {
  Restock: "green",
  Dispatch: "red",
  Return: "blue",
};

const typeSigns = {
  Restock: "+",
  Return: "-",
  Dispatch: "-",
};

const Table = ({ columns }) => {
  // dummy data for now
  const data = [
    {
      type: "Restock",
      name: "Paracetamol 500mg",
      sku: "MED-001",
      category: "Analgesic",
      unit: "Tablet",
      quantity: "100",
      date: "2025-10-19",
      reason: "New shipment",
    },
    {
      type: "Dispatch",
      name: "Amoxicillin 250mg",
      sku: "MED-002",
      category: "Antibiotic",
      unit: "Capsule",
      quantity: "50",
      date: "2025-10-18",
      reason: "Customer order #1234",
    },
    {
      type: "Restock",
      name: "Vitamin C 1000mg",
      sku: "MED-003",
      category: "Vitamin",
      unit: "Tablet",
      quantity: "200",
      date: "2025-10-17",
      reason: "New shipment",
    },
    {
      type: "Return",
      name: "Ibuprofen 200mg",
      sku: "MED-004",
      category: "Analgesic",
      unit: "Tablet",
      quantity: "30",
      date: "2025-10-16",
      reason: "Purchase return due to near-expiry stock"
    },
    {
      type: "Dispatch",
      name: "Cough Syrup 100ml",
      sku: "MED-005",
      category: "Expectorant",
      unit: "Bottle",
      quantity: "75",
      date: "2025-10-15",
      reason: "Customer order #6789",
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="ltr:text-left rtl:text-right bg-slate-50">
          <tr className="*:font-medium *:text-gray-900">
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-slate-50">
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                <span
                  className={`inline-flex items-center rounded-full bg-${
                    typeColors[row.type]
                  }-100 px-2.5 py-0.5 text-xs font-medium text-${
                    typeColors[row.type]
                  }-800`}
                >
                  {row.type}
                </span>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                {row.name}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                {row.sku}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                {row.category}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                {row.unit}
              </td>
              <td
                className={`whitespace-nowrap px-6 py-4 text-sm font-medium text-${
                  typeColors[row.type]
                }-600`}
              >
                {typeSigns[row.type]}
                {row.quantity}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                {row.date}
              </td>
              <td className="max-w-[200px] truncate whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                {row.reason}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
