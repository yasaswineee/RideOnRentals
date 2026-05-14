import React from "react";

const requests = [
  { id: 1, customer: "Ravi Kumar", issue: "Refund not received", status: "Pending" },
  { id: 2, customer: "Neha Sharma", issue: "Booking confirmation delay", status: "Resolved" },
];

const SupportRequests = () => (
  <div className="p-4 bg-white rounded-2xl shadow">
    <h1 className="text-2xl font-semibold text-blue-800 mb-6">Support Requests</h1>
    <table className="w-full border-collapse">
      <thead className="bg-blue-100 text-blue-900">
        <tr>
          <th className="p-3 text-left">Customer</th>
          <th className="p-3 text-left">Issue</th>
          <th className="p-3 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((r) => (
          <tr key={r.id} className="border-t hover:bg-gray-50">
            <td className="p-3">{r.customer}</td>
            <td className="p-3">{r.issue}</td>
            <td
              className={`p-3 ${
                r.status === "Resolved" ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {r.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SupportRequests;
