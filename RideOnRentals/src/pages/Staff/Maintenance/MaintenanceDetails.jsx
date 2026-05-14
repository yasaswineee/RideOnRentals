import React from "react";

const MaintenanceDetails = () => {
  const record = {
    vehicle: "Maruti Omni",
    totalRepairs: 8,
    totalCost: 13500,
    lastService: "2025-11-05",
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Maintenance Summary</h2>
      <div className="space-y-2 text-gray-700">
        <p><strong>Vehicle:</strong> {record.vehicle}</p>
        <p><strong>Total Repairs:</strong> {record.totalRepairs}</p>
        <p><strong>Total Cost:</strong> ₹{record.totalCost}</p>
        <p><strong>Last Serviced:</strong> {record.lastService}</p>
      </div>
    </div>
  );
};

export default MaintenanceDetails;
