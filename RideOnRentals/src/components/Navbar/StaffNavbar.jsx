/*import React from "react";
import { Bell, User } from "lucide-react";

const StaffNavbar = () => {
  return (
    <header className="bg-white shadow flex justify-between items-center px-6 py-3">
      <h2 className="text-xl font-semibold text-blue-800">Staff Panel</h2>
      <div className="flex items-center gap-4">
        <Bell className="text-gray-500 cursor-pointer" />
        <div className="flex items-center gap-2">
          <User className="text-blue-600" />
          <span className="font-medium">Staff</span>
        </div>
      </div>
    </header>
  );
};

export default StaffNavbar;
*/import React from "react";
import "./StaffNavbar.css";

const StaffNavbar = () => {
  return (
    <nav className="navbar">
      <h3>Staff Dashboard</h3>
      <div className="navbar-user">👤 Staff</div>
    </nav>
  );
};

export default StaffNavbar;
