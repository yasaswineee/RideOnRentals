import React from "react";
import RevenueChart from "../../../components/Charts/RevenueChart";

const ReportsDashboard = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-blue-800">Reports Dashboard</h1>
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Monthly Revenue Report</h2>
        <RevenueChart />
      </div>
    </div>
  );
};

export default ReportsDashboard;
