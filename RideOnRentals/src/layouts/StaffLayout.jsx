/*import React from "react";
import StaffSidebar from "../components/Sidebar/StaffSidebar";
import StaffNavbar from "../components/Navbar/StaffNavbar";
import { Outlet } from "react-router-dom";

const StaffLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <StaffSidebar />
      <div className="flex-1 flex flex-col">
        <StaffNavbar />
        <main className="p-6 overflow-y-auto no-scrollbar flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StaffLayout;
*/
/*
import React, { useState } from "react";
import StaffSidebar from "../components/Sidebar/StaffSidebar";
import StaffNavbar from "../components/Navbar/StaffNavbar";
import StaffDashboard from "../pages/Staff/Dashboard/StaffDashboard";
import "./StaffLayout.css";

const StaffLayout = () => {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <StaffDashboard />;
      default:
        return <StaffDashboard />;
    }
  };

  return (
    <div className="layout-container">
      <StaffSidebar setPage={setPage} />
      <div className="main-content">
        <StaffNavbar />
        <div className="content-body">{renderPage()}</div>
      </div>
    </div>
  );
};

export default StaffLayout;
*/
/*
import React, { useState } from "react";
import StaffSidebar from "../components/Sidebar/StaffSidebar";
import StaffNavbar from "../components/Navbar/StaffNavbar";
import "./StaffLayout.css";

// Import all pages
import StaffDashboard from "../pages/Staff/Dashboard/StaffDashboard";
import VehicleList from "../pages/Staff/Vehicles/VehicleList";
import BookingList from "../pages/Staff/Bookings/BookingList";
import MaintenanceList from "../pages/Staff/Maintenance/MaintenanceList";
import ReportsDashboard from "../pages/Staff/Reports/ReportsDashboard";
import CustomerList from "../pages/Staff/Customers/CustomerList";
import SupportRequests from "../pages/Staff/Support/SupportRequests";

const StaffLayout = () => {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <StaffDashboard />;
      case "vehicles":
        return <VehicleList />;
      case "bookings":
        return <BookingList />;
      case "maintenance":
        return <MaintenanceList />;
      case "reports":
        return <ReportsDashboard />;
      case "customers":
        return <CustomerList />;
      case "support":
        return <SupportRequests />;
      default:
        return <StaffDashboard />;
    }
  };

  return (
    <div className="layout-container">
      <StaffSidebar setPage={setPage} />
      <div className="main-content">
        <StaffNavbar />
        <div className="content-body">{renderPage()}</div>
      </div>
    </div>
  );
};

export default StaffLayout;
*/
/*
import React, { useState } from "react";
import StaffSidebar from "../components/Sidebar/StaffSidebar";
import StaffNavbar from "../components/Navbar/StaffNavbar";
import "./StaffLayout.css";

// Import all staff pages
import StaffDashboard from "../pages/Staff/Dashboard/StaffDashboard";
import VehicleList from "../pages/Staff/Vehicles/VehicleList";
import BookingList from "../pages/Staff/Bookings/BookingList";
import MaintenanceList from "../pages/Staff/Maintenance/MaintenanceList";
import ReportsDashboard from "../pages/Staff/Reports/ReportsDashboard";
import CustomerList from "../pages/Staff/Customers/CustomerList";
import SupportRequests from "../pages/Staff/Support/SupportRequests";

const StaffLayout = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <StaffDashboard />;
      case "vehicles":
        return <VehicleList />;
      case "bookings":
        return <BookingList />;
      case "maintenance":
        return <MaintenanceList />;
      case "reports":
        return <ReportsDashboard />;
      case "customers":
        return <CustomerList />;
      case "support":
        return <SupportRequests />;
      default:
        return <StaffDashboard />;
    }
  };

  return (
    <div className="layout-container">
    
      <StaffSidebar activePage={activePage} setActivePage={setActivePage} />

    
      <div className="main-content">
        <StaffNavbar />
        <div className="content-body">{renderPage()}</div>
      </div>
    </div>
  );
};

export default StaffLayout;
*/
/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StaffSidebar from "../components/Sidebar/StaffSidebar";
import "./StaffLayout.css";

// Import all staff pages
import StaffDashboard from "../pages/Staff/Dashboard/StaffDashboard";
import VehicleList from "../pages/Staff/Vehicles/VehicleList";
import BookingList from "../pages/Staff/Bookings/BookingList";
import MaintenanceList from "../pages/Staff/Maintenance/MaintenanceList";
import ReportsDashboard from "../pages/Staff/Reports/ReportsDashboard";
import CustomerList from "../pages/Staff/Customers/CustomerList";
import SupportRequests from "../pages/Staff/Support/SupportRequests";

const StaffLayout = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const navigate = useNavigate();

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <StaffDashboard />;
      case "vehicles":
        return <VehicleList />;
      case "bookings":
        return <BookingList />;
      case "maintenance":
        return <MaintenanceList />;
      case "reports":
        return <ReportsDashboard />;
      case "customers":
        return <CustomerList />;
      case "support":
        return <SupportRequests />;
      default:
        return <StaffDashboard />;
    }
  };

  return (
    <div className="layout-container">
  
      <StaffSidebar activePage={activePage} setActivePage={setActivePage} />

    
      <div className="main-content">
    
        <div className="navbar staff-navbar">
          <div className="navbar-left">
            <button className="back-btn" onClick={() => navigate("/")}>
              ⬅ Back
            </button>
            <h2 className="navbar-title">Staff Dashboard</h2>
          </div>
        </div>

  
        <div className="content-body">{renderPage()}</div>
      </div>
    </div>
  );
};

export default StaffLayout;
*/
/*

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StaffSidebar from "../components/Sidebar/StaffSidebar";
import "./StaffLayout.css";

// Import all staff pages
import StaffDashboard from "../pages/Staff/Dashboard/StaffDashboard";
import VehicleList from "../pages/Staff/Vehicles/VehicleList";
import BookingList from "../pages/Staff/Bookings/BookingList";
import MaintenanceList from "../pages/Staff/Maintenance/MaintenanceList";
import ReportsDashboard from "../pages/Staff/Reports/ReportsDashboard";
import CustomerList from "../pages/Staff/Customers/CustomerList";
import SupportRequests from "../pages/Staff/Support/SupportRequests";

const StaffLayout = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const navigate = useNavigate();

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <StaffDashboard />;
      case "vehicles":
        return <VehicleList />;
      case "bookings":
        return <BookingList />;
      case "maintenance":
        return <MaintenanceList />;
      case "reports":
        return <ReportsDashboard />;
      case "customers":
        return <CustomerList />;
      case "support":
        return <SupportRequests />;
      default:
        return <StaffDashboard />;
    }
  };

  return (
    <div className="layout-container">

      
      <StaffSidebar activePage={activePage} setActivePage={setActivePage} />

      
      <div className="right-section">

      
        <div className="staff-navbar">
          <button className="back-btn" onClick={() => navigate("/")}>⬅ Back</button>
          <h2 className="navbar-title">Staff Dashboard</h2>
        </div>

      
        <div className="content-body">
          {renderPage()}
        </div>

      </div>
    </div>
  );
};

export default StaffLayout;
*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import StaffSidebar from "../components/Sidebar/StaffSidebar";
import "./StaffLayout.css";

// Import all staff pages
import StaffDashboard from "../pages/Staff/Dashboard/StaffDashboard";
import VehicleList from "../pages/Staff/Vehicles/VehicleList";
import BookingList from "../pages/Staff/Bookings/BookingList";
import MaintenanceList from "../pages/Staff/Maintenance/MaintenanceList";
import ReportsDashboard from "../pages/Staff/Reports/ReportsDashboard";
import CustomerList from "../pages/Staff/Customers/CustomerList";
import SupportRequests from "../pages/Staff/Support/SupportRequests";

const StaffLayout = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const navigate = useNavigate();

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <StaffDashboard />;
      case "vehicles":
        return <VehicleList />;
      case "bookings":
        return <BookingList />;
      case "maintenance":
        return <MaintenanceList />;
      case "reports":
        return <ReportsDashboard />;
      case "customers":
        return <CustomerList />;
      case "support":
        return <SupportRequests />;
      default:
        return <StaffDashboard />;
    }
  };

  return (
    <div className="layout-container">

      {/* LEFT SIDEBAR */}
      <StaffSidebar activePage={activePage} setActivePage={setActivePage} />

      {/* RIGHT SIDE */}
      <div className="right-section">

        {/* TOP NAVBAR */}
        <div className="staff-navbar">
          <button className="back-btn" onClick={() => navigate("/")}>⬅ Back</button>
          <h2 className="navbar-title">Staff Dashboard</h2>
        </div>

        {/* PAGE CONTENT */}
        <div className="content-body">
          {renderPage()}
        </div>

      </div>
    </div>
  );
};

export default StaffLayout;

