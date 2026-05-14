/*import React from "react";

const maintenance = [
  { id: 1, vehicle: "Maruti Omni", date: "2025-11-05", description: "Oil change", cost: 1200 },
  { id: 2, vehicle: "Tata Sumo", date: "2025-11-06", description: "Brake pad replacement", cost: 2500 },
];

const MaintenanceList = () => (
  <div className="p-4 bg-white rounded-2xl shadow">
    <h1 className="text-2xl font-semibold text-blue-800 mb-6">Maintenance Records</h1>
    <table className="w-full border-collapse">
      <thead className="bg-blue-100 text-blue-900">
        <tr>
          <th className="p-3 text-left">Vehicle</th>
          <th className="p-3 text-left">Date</th>
          <th className="p-3 text-left">Description</th>
          <th className="p-3 text-left">Cost (₹)</th>
        </tr>
      </thead>
      <tbody>
        {maintenance.map((m) => (
          <tr key={m.id} className="border-t hover:bg-gray-50">
            <td className="p-3">{m.vehicle}</td>
            <td className="p-3">{m.date}</td>
            <td className="p-3">{m.description}</td>
            <td className="p-3">₹{m.cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MaintenanceList;
*/
import React from "react";
import DataTable from "../../../components/Tables/DataTable";

const MaintenanceList = () => {
  const columns = ["Vehicle ID", "Type", "Date", "Issue", "Cost (₹)", "Status"];
  const data = [
    { id: 1, type: "Mahindra Armada", date: "2025-11-02", issue: "Brake Check", cost: 1200, status: "Completed" },
    { id: 2, type: "Maruti Omni", date: "2025-11-04", issue: "Oil Change", cost: 800, status: "Pending" },
    { id: 3, type: "Ambassador", date: "2025-11-06", issue: "Tyre Replacement", cost: 2500, status: "Ongoing" },
  ];

  return (
    <div>
      <h2>Vehicle Maintenance</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default MaintenanceList;
