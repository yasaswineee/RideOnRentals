import React from "react";

const vehicles = [
  { type: "Ambassador", revenue: 40000, maintenance: 8000 },
  { type: "Tata Sumo", revenue: 60000, maintenance: 10000 },
  { type: "Maruti Omni", revenue: 35000, maintenance: 7000 },
];

const VehicleProfitReport = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Vehicle Profit Report</h2>
      <table className="w-full border-collapse">
        <thead className="bg-blue-100 text-blue-900">
          <tr>
            <th className="p-3 text-left">Vehicle Type</th>
            <th className="p-3 text-left">Revenue (₹)</th>
            <th className="p-3 text-left">Maintenance (₹)</th>
            <th className="p-3 text-left">Profit (₹)</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v, idx) => (
            <tr key={idx} className="border-t hover:bg-gray-50">
              <td className="p-3">{v.type}</td>
              <td className="p-3">₹{v.revenue}</td>
              <td className="p-3">₹{v.maintenance}</td>
              <td className="p-3 font-semibold text-green-600">
                ₹{v.revenue - v.maintenance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleProfitReport;
