/*import React from "react";
import StatCard from "../../../components/Cards/StatCard";
import RevenueChart from "../../../components/Charts/RevenueChart";

const StaffDashboard = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-blue-800">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Vehicles" value="47" />
        <StatCard title="Available" value="25" />
        <StatCard title="Rented Out" value="18" />
        <StatCard title="Under Repair" value="4" />
      </div>

      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
        <RevenueChart />
      </div>
    </div>
  );
};

export default StaffDashboard;
*/

import React from "react";
import StatCard from "../../../components/Cards/StatCard";
import RevenueChart from "../../../components/Charts/RevenueChart";
import "./StaffDashboard.css";

const StaffDashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to Ride On Rentals Staff Portal</h2>
      <div className="stats-grid">
        <StatCard title="Total Vehicles" value="47" />
        <StatCard title="Active Bookings" value="12" />
        <StatCard title="Maintenance Vehicles" value="5" />
        <StatCard title="Total Revenue" value="₹1,25,000" />
      </div>
      <RevenueChart />
    </div>
  );
};

export default StaffDashboard;
