/*import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 25000 },
  { month: "Feb", revenue: 30000 },
  { month: "Mar", revenue: 28000 },
  { month: "Apr", revenue: 35000 },
  { month: "May", revenue: 40000 },
];

const RevenueChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
);

export default RevenueChart;
*/
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import "./RevenueChart.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const RevenueChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Revenue (₹)",
        data: [20000, 30000, 25000, 40000, 50000, 60000],
        borderColor: "#007BFF",
        backgroundColor: "rgba(0, 123, 255, 0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Revenue Overview</h3>
      <Line data={data} />
    </div>
  );
};

export default RevenueChart;
