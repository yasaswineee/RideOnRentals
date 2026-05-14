import React from "react";

const vehicles = [
  { id: 1, name: "Ambassador", type: "Non-AC", status: "Available", perHour: 200, perKm: 15 },
  { id: 2, name: "Tata Sumo", type: "AC", status: "Rented", perHour: 300, perKm: 20 },
  { id: 3, name: "Maruti Omni", type: "Non-AC", status: "Repair", perHour: 180, perKm: 12 },
];

const VehicleTable = () => (
  <table className="w-full bg-white rounded-2xl shadow overflow-hidden">
    <thead className="bg-blue-100 text-blue-900">
      <tr>
        <th className="p-3 text-left">Vehicle</th>
        <th className="p-3 text-left">Type</th>
        <th className="p-3 text-left">Status</th>
        <th className="p-3 text-left">Per Hour</th>
        <th className="p-3 text-left">Per Km</th>
      </tr>
    </thead>
    <tbody>
      {vehicles.map((v) => (
        <tr key={v.id} className="border-t hover:bg-gray-50">
          <td className="p-3">{v.name}</td>
          <td className="p-3">{v.type}</td>
          <td className={`p-3 ${v.status === "Rented" ? "text-red-500" : "text-green-600"}`}>{v.status}</td>
          <td className="p-3">₹{v.perHour}</td>
          <td className="p-3">₹{v.perKm}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default VehicleTable;
