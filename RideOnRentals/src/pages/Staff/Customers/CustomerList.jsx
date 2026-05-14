/*import React from "react";

const customers = [
  { id: 1, name: "Ravi Kumar", phone: "9876543210", bookings: 3 },
  { id: 2, name: "Neha Sharma", phone: "9865432109", bookings: 1 },
];

const CustomerList = () => (
  <div className="p-4 bg-white rounded-2xl shadow">
    <h1 className="text-2xl font-semibold text-blue-800 mb-6">Customers</h1>
    <table className="w-full border-collapse">
      <thead className="bg-blue-100 text-blue-900">
        <tr>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Phone</th>
          <th className="p-3 text-left">Bookings</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((c) => (
          <tr key={c.id} className="border-t hover:bg-gray-50">
            <td className="p-3">{c.name}</td>
            <td className="p-3">{c.phone}</td>
            <td className="p-3">{c.bookings}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CustomerList;
*/
import React from "react";
import DataTable from "../../../components/Tables/DataTable";

const CustomerList = () => {
  const columns = ["Customer ID", "Name", "Email", "Phone", "Total Bookings", "Last Booking"];
  const data = [
    { id: "C001", name: "Rajesh Kumar", email: "rajesh@example.com", phone: "9876543210", total: 3, last: "2025-11-02" },
    { id: "C002", name: "Anjali Sharma", email: "anjali@example.com", phone: "9876543221", total: 2, last: "2025-11-04" },
    { id: "C003", name: "Ravi Teja", email: "ravi@example.com", phone: "9876543333", total: 1, last: "2025-11-05" },
  ];

  return (
    <div>
      <h2>Customer Records</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default CustomerList;
