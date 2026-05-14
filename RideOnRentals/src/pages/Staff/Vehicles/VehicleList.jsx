/*import React from "react";
import VehicleTable from "../../../components/Tables/VehicleTable";

const VehicleList = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-blue-800 mb-6">Vehicles</h1>
      <VehicleTable />
    </div>
  );
};

export default VehicleList;
*/

import React from "react";
import DataTable from "../../../components/Tables/DataTable";

const VehicleList = () => {
  const columns = ["ID", "Vehicle Type", "AC/Non-AC", "Status", "Per Hour (₹)", "Per KM (₹)"];
  const data = [
    { id: 1, type: "Ambassador", ac: "AC", status: "Available", hour: 300, km: 15 },
    { id: 2, type: "Tata Sumo", ac: "Non-AC", status: "Rented", hour: 250, km: 12 },
    { id: 3, type: "Maruti Omni", ac: "Non-AC", status: "Available", hour: 200, km: 10 },
    { id: 4, type: "Mahindra Armada", ac: "AC", status: "Under Maintenance", hour: 350, km: 18 },
  ];

  return (
    <div>
      <h2>Vehicle Management</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default VehicleList;
