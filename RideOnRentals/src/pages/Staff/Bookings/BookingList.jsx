/*import React from "react";

const bookings = [
  {
    id: 1,
    customer: "Ravi Kumar",
    vehicle: "Tata Sumo (AC)",
    status: "Active",
    start: "2025-11-07 09:00 AM",
    expectedReturn: "2025-11-07 05:00 PM",
  },
  {
    id: 2,
    customer: "Neha Sharma",
    vehicle: "Ambassador (Non-AC)",
    status: "Completed",
    start: "2025-11-06 08:00 AM",
    expectedReturn: "2025-11-06 04:00 PM",
  },
];

const BookingList = () => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-semibold text-blue-800 mb-6">Bookings</h1>

      <table className="w-full border-collapse">
        <thead className="bg-blue-100 text-blue-900">
          <tr>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Vehicle</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Start Time</th>
            <th className="p-3 text-left">Expected Return</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{b.customer}</td>
              <td className="p-3">{b.vehicle}</td>
              <td
                className={`p-3 ${
                  b.status === "Active" ? "text-green-600" : "text-gray-500"
                }`}
              >
                {b.status}
              </td>
              <td className="p-3">{b.start}</td>
              <td className="p-3">{b.expectedReturn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
*/
import React from "react";
import DataTable from "../../../components/Tables/DataTable";

const BookingList = () => {
  const columns = ["Booking ID", "Customer Name", "Vehicle", "Start Date", "End Date", "Status"];
  const data = [
    { id: "B001", name: "Rajesh Kumar", vehicle: "Tata Sumo (AC)", start: "2025-11-01", end: "2025-11-02", status: "Completed" },
    { id: "B002", name: "Anjali Sharma", vehicle: "Maruti Omni", start: "2025-11-03", end: "2025-11-04", status: "Ongoing" },
    { id: "B003", name: "Ravi Teja", vehicle: "Ambassador (AC)", start: "2025-11-05", end: "2025-11-06", status: "Upcoming" },
  ];

  return (
    <div>
      <h2>Booking Records</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default BookingList;
