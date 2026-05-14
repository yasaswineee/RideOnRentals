/*import React from "react";

const StatCard = ({ title, value }) => (
  <div className="bg-white shadow rounded-2xl p-4 text-center">
    <h3 className="text-gray-500 text-sm">{title}</h3>
    <p className="text-2xl font-bold text-blue-700 mt-2">{value}</p>
  </div>
);

export default StatCard;
*/

import React from "react";
import "./StatCard.css";

const StatCard = ({ title, value }) => {
  return (
    <div className="stat-card">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
};

export default StatCard;
