// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffLayout from "./layouts/StaffLayout";
import StaffDashboard from "./pages/Staff/Dashboard/StaffDashboard";
import VehicleList from "./pages/Staff/Vehicles/VehicleList";
import BookingList from "./pages/Staff/Bookings/BookingList";
import MaintenanceList from "./pages/Staff/Maintenance/MaintenanceList";
import ReportsDashboard from "./pages/Staff/Reports/ReportsDashboard";
import CustomerList from "./pages/Staff/Customers/CustomerList";
import SupportRequests from "./pages/Staff/Support/SupportRequests";

function App() {
  return (
    <Router>
      <StaffLayout>
        <Routes>
          <Route path="/" element={<StaffDashboard />} />
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/maintenance" element={<MaintenanceList />} />
          <Route path="/reports" element={<ReportsDashboard />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/support" element={<SupportRequests />} />
        </Routes>
      </StaffLayout>
    </Router>
  );
}

export default App;
