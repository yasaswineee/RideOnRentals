/*import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Car, Calendar, Wrench, BarChart, Users, MessageSquare } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/staff/dashboard" },
  { name: "Vehicles", icon: <Car size={18} />, path: "/staff/vehicles" },
  { name: "Bookings", icon: <Calendar size={18} />, path: "/staff/bookings" },
  { name: "Maintenance", icon: <Wrench size={18} />, path: "/staff/maintenance" },
  { name: "Reports", icon: <BarChart size={18} />, path: "/staff/reports" },
  { name: "Customers", icon: <Users size={18} />, path: "/staff/customers" },
  { name: "Support", icon: <MessageSquare size={18} />, path: "/staff/support" },
];

const StaffSidebar = () => (
  <aside className="w-60 bg-blue-800 text-white flex flex-col py-6">
    <h1 className="text-2xl font-bold text-center mb-8">Ride On Rentals</h1>
    <nav className="flex flex-col gap-2 px-4">
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-700 transition ${
              isActive ? "bg-blue-700" : ""
            }`
          }
        >
          {item.icon}
          <span>{item.name}</span>
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default StaffSidebar;
*/
/*

import React from "react";
import "./StaffSidebar.css";

const StaffSidebar = ({ setPage }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Ride On Rentals</h2>
      <ul className="sidebar-menu">
        <li onClick={() => setPage("dashboard")}>Dashboard</li>
        <li onClick={() => setPage("vehicles")}>Vehicles</li>
        <li onClick={() => setPage("bookings")}>Bookings</li>
        <li onClick={() => setPage("maintenance")}>Maintenance</li>
        <li onClick={() => setPage("reports")}>Reports</li>
        <li onClick={() => setPage("customers")}>Customers</li>
        <li onClick={() => setPage("support")}>Support</li>
      </ul>
    </div>
  );
};

export default StaffSidebar;
*/
/*

import React from "react";
import "./StaffSidebar.css";

const StaffSidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { key: "dashboard", label: "Dashboard" },
    { key: "vehicles", label: "Vehicles" },
    { key: "bookings", label: "Bookings" },
    { key: "maintenance", label: "Maintenance" },
    { key: "reports", label: "Reports" },
    { key: "customers", label: "Customers" },
    { key: "support", label: "Support" },
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Ride On Rentals</h2>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.key}
            className={activePage === item.key ? "active" : ""}
            onClick={() => setActivePage(item.key)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffSidebar;
*/
/*
import React from "react";
import "./StaffSidebar.css";

const StaffSidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { key: "dashboard", label: "Dashboard" },
    { key: "vehicles", label: "Vehicles" },
    { key: "bookings", label: "Bookings" },
    { key: "maintenance", label: "Maintenance" },
    { key: "reports", label: "Reports" },
    { key: "customers", label: "Customers" },
    { key: "support", label: "Support" },
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Ride On Rentals</h2>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.key}
            className={activePage === item.key ? "active" : ""}
            onClick={() => setActivePage(item.key)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffSidebar;
*/
import React from "react";
import "./StaffSidebar.css";

const StaffSidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { key: "dashboard", label: "Dashboard" },
    { key: "vehicles", label: "Vehicles" },
    { key: "bookings", label: "Bookings" },
    { key: "maintenance", label: "Maintenance" },
    { key: "reports", label: "Reports" },
    { key: "customers", label: "Customers" },
    
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Ride On Rentals</h2>

      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.key}
            className={activePage === item.key ? "active" : ""}
            onClick={() => setActivePage(item.key)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffSidebar;
