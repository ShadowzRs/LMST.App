import React from "react";

const Table = ({ columns }) => {
  // dummy data for now
  const data = [
    {
      name: "Nandor the Relentless",
      dob: "04/06/1262",
      role: "Vampire Warrior",
      salary: "$0",
    },
    {
      name: "Laszlo Cravensworth",
      dob: "19/10/1678",
      role: "Vampire Gentleman",
      salary: "$0",
    },
    {
      name: "Nadja",
      dob: "15/03/1593",
      role: "Vampire Seductress",
      salary: "$0",
    },
    {
      name: "Colin Robinson",
      dob: "01/09/1971",
      role: "Energy Vampire",
      salary: "$53,000",
    },
    {
      name: "Guillermo de la Cruz",
      dob: "18/11/1991",
      role: "Familiar/Vampire Hunter",
      salary: "$0",
    },
  ];

  return (
    <div className="overflow-x-auto rounded border border-gray-300 shadow-sm">
      <table className="min-w-full divide-y-2 divide-gray-200">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="*:font-medium *:text-gray-900">
            {columns.map((col, index) => (
              <th key={index} className="px-3 py-2 whitespace-nowrap">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="*:text-gray-900 *:first:font-medium">
              <td className="px-3 py-2 whitespace-nowrap">{row.name}</td>
              <td className="px-3 py-2 whitespace-nowrap">{row.dob}</td>
              <td className="px-3 py-2 whitespace-nowrap">{row.role}</td>
              <td className="px-3 py-2 whitespace-nowrap">{row.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
