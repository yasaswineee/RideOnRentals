/*import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("fleet");

  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: "Ambassador (Non-AC)",
      type: "Non-AC",
      minCharge: 400,
      extraPerHr: 100,
      status: "Available",
      img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "Ambassador (AC)",
      type: "AC",
      minCharge: 600,
      extraPerHr: 100,
      status: "Rented",
      img: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      name: "Tata Sumo (Non-AC)",
      type: "Non-AC",
      minCharge: 500,
      extraPerHr: 100,
      status: "Available",
      img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      name: "Tata Sumo (AC)",
      type: "AC",
      minCharge: 750,
      extraPerHr: 100,
      status: "Under Repair",
      img: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      name: "Maruti Omni (Non-AC)",
      type: "Non-AC",
      minCharge: 350,
      extraPerHr: 100,
      status: "Available",
      img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      name: "Maruti Esteem (AC)",
      type: "AC",
      minCharge: 525,
      extraPerHr: 100,
      status: "Rented",
      img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 7,
      name: "Mahindra Armada (Non-AC)",
      type: "Non-AC",
      minCharge: 450,
      extraPerHr: 100,
      status: "Available",
      img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ]);

  const [newVehicle, setNewVehicle] = useState({
    name: "",
    type: "Non-AC",
    minCharge: "",
    extraPerHr: 100,
    status: "Available",
    img: "",
  });

  const handleAddVehicle = () => {
    if (!newVehicle.name || !newVehicle.minCharge || !newVehicle.img)
      return alert("Please fill all fields!");
    setVehicles([...vehicles, { ...newVehicle, id: vehicles.length + 1 }]);
    setNewVehicle({
      name: "",
      type: "Non-AC",
      minCharge: "",
      extraPerHr: 100,
      status: "Available",
      img: "",
    });
  };

  const handleRemoveVehicle = (id) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };

  const monthlyData = [
    { month: "Jan", revenue: 40000 },
    { month: "Feb", revenue: 45000 },
    { month: "Mar", revenue: 60000 },
    { month: "Apr", revenue: 55000 },
    { month: "May", revenue: 70000 },
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden", // ✅ hide all scrollbars
      }}
    >
      
      <div
        style={{
          width: "230px",
          background: "#1e293b",
          color: "white",
          padding: "20px",
          flexShrink: 0,
          height: "100vh",
        }}
      >
        <h2 style={{ marginBottom: "30px", textAlign: "center" }}>Admin Panel</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <button onClick={() => setActiveSection("fleet")} style={btnStyle}>
            Fleet
          </button>
          <button onClick={() => setActiveSection("status")} style={btnStyle}>
            Status
          </button>
        </div>
      </div>

  
      <div
        style={{
          flexGrow: 1,
          padding: "25px",
          backgroundColor: "#f8fafc",
          width: "calc(100vw - 230px)",
          overflow: "hidden", 
        }}
      >
        <h1 style={{ fontSize: "26px", marginBottom: "20px" }}>Welcome, Admin</h1>

    
        {activeSection === "fleet" && (
          <div style={{ width: "100%", overflow: "hidden" }}>
            <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Fleet Management</h2>

            
            <div
              style={{
                marginBottom: "25px",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <input
                placeholder="Vehicle Name"
                value={newVehicle.name}
                onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })}
                style={inputStyle}
              />
              <select
                value={newVehicle.type}
                onChange={(e) => setNewVehicle({ ...newVehicle, type: e.target.value })}
                style={inputStyle}
              >
                <option value="Non-AC">Non-AC</option>
                <option value="AC">AC</option>
              </select>
              <input
                placeholder="Min Charge (₹)"
                type="number"
                value={newVehicle.minCharge}
                onChange={(e) =>
                  setNewVehicle({ ...newVehicle, minCharge: Number(e.target.value) })
                }
                style={inputStyle}
              />
              <input
                placeholder="Image URL"
                value={newVehicle.img}
                onChange={(e) => setNewVehicle({ ...newVehicle, img: e.target.value })}
                style={inputStyle}
              />
              <button onClick={handleAddVehicle} style={addBtn}>
                Add Vehicle
              </button>
            </div>

            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                gap: "25px",
                justifyItems: "center",
                width: "100%",
              }}
            >
              {vehicles.map((v) => (
                <div
                  key={v.id}
                  style={cardStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img src={v.img} alt={v.name} style={imgStyle} />
                  <h3>{v.name}</h3>
                  <p>Type: {v.type}</p>
                  <p>Minimum Charge (4 hrs): ₹{v.minCharge}</p>
                  <p>Extra Charge per Hour: ₹{v.extraPerHr}</p>
                  <button onClick={() => handleRemoveVehicle(v.id)} style={removeBtn}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        
        {activeSection === "status" && (
          <div style={{ width: "100%", overflow: "hidden" }}>
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
              Vehicle Status Overview
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "25px",
                width: "100%",
                justifyItems: "center",
              }}
            >
              {vehicles.map((v) => (
                <div
                  key={v.id}
                  style={cardStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img src={v.img} alt={v.name} style={imgStyle} />
                  <h3>{v.name}</h3>
                  <p>Type: {v.type}</p>
                  <p>
                    Status:{" "}
                    <b
                      style={{
                        color:
                          v.status === "Available"
                            ? "green"
                            : v.status === "Rented"
                            ? "orange"
                            : "red",
                      }}
                    >
                      {v.status}
                    </b>
                  </p>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: "50px", textAlign: "center" }}>
              Monthly Revenue Stats
            </h2>
            <div style={chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#0f766e" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Styles
const btnStyle = {
  background: "#334155",
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "4px",
  textAlign: "left",
};

const inputStyle = {
  marginRight: "10px",
  padding: "5px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const addBtn = {
  background: "#0f766e",
  color: "white",
  padding: "6px 10px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const removeBtn = {
  background: "#b91c1c",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "4px",
  cursor: "pointer",
};

const cardStyle = {
  background: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  padding: "15px",
  width: "90%",
  maxWidth: "380px",
  textAlign: "center",
  transition: "transform 0.2s ease-in-out",
};

const imgStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "8px",
  objectFit: "cover",
  marginBottom: "10px",
};

const chartContainer = {
  width: "90%",
  maxWidth: "900px",
  height: "300px",
  background: "white",
  borderRadius: "10px",
  padding: "15px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  margin: "20px auto",
};

export default AdminDashboard;
*/
/*
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("fleet");

  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: "Ambassador (Non-AC)",
      type: "Non-AC",
      minCharge: 400,
      extraPerHr: 100,
      status: "Available",
      img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "Ambassador (AC)",
      type: "AC",
      minCharge: 600,
      extraPerHr: 100,
      status: "Rented",
      img: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      name: "Tata Sumo (Non-AC)",
      type: "Non-AC",
      minCharge: 500,
      extraPerHr: 100,
      status: "Available",
      img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      name: "Tata Sumo (AC)",
      type: "AC",
      minCharge: 750,
      extraPerHr: 100,
      status: "Under Repair",
      img: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      name: "Maruti Omni (Non-AC)",
      type: "Non-AC",
      minCharge: 350,
      extraPerHr: 100,
      status: "Available",
      img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      name: "Maruti Esteem (AC)",
      type: "AC",
      minCharge: 525,
      extraPerHr: 100,
      status: "Rented",
      img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 7,
      name: "Mahindra Armada (Non-AC)",
      type: "Non-AC",
      minCharge: 450,
      extraPerHr: 100,
      status: "Available",
      img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ]);

  const [newVehicle, setNewVehicle] = useState({
    name: "",
    type: "Non-AC",
    minCharge: "",
    extraPerHr: 100,
    status: "Available",
    img: "",
  });

  const handleAddVehicle = () => {
    if (!newVehicle.name || !newVehicle.minCharge || !newVehicle.img)
      return alert("Please fill all fields!");
    setVehicles([...vehicles, { ...newVehicle, id: vehicles.length + 1 }]);
    setNewVehicle({
      name: "",
      type: "Non-AC",
      minCharge: "",
      extraPerHr: 100,
      status: "Available",
      img: "",
    });
  };

  const handleRemoveVehicle = (id) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };

  const monthlyData = [
    { month: "Jan", revenue: 40000 },
    { month: "Feb", revenue: 45000 },
    { month: "Mar", revenue: 60000 },
    { month: "Apr", revenue: 55000 },
    { month: "May", revenue: 70000 },
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
      }}
    >
    
      <div
        style={{
          width: "230px",
          background: "#1d7ee6ff", // ✅ changed color
          color: "white",
          padding: "20px",
          flexShrink: 0,
          height: "100vh",
        }}
      >
        <h2 style={{ marginBottom: "30px", textAlign: "center" }}>Admin Panel</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <button onClick={() => setActiveSection("fleet")} style={btnStyle}>
            Fleet
          </button>
          <button onClick={() => setActiveSection("status")} style={btnStyle}>
            Status
          </button>
        </div>
      </div>

    
      <div
        style={{
          flexGrow: 1,
          padding: "25px",
          overflowY: "auto",
          backgroundColor: "#f8fafc",
          width: "calc(100vw - 230px)",
        }}
      >
        <h1 style={{ fontSize: "26px", marginBottom: "20px" }}>Welcome, Admin</h1>

      
        {activeSection === "fleet" && (
          <div style={{ width: "100%" }}>
            <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Fleet Management</h2>

            
            <div
              style={{
                marginBottom: "25px",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <input
                placeholder="Vehicle Name"
                value={newVehicle.name}
                onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })}
                style={inputStyle}
              />
              <select
                value={newVehicle.type}
                onChange={(e) => setNewVehicle({ ...newVehicle, type: e.target.value })}
                style={inputStyle}
              >
                <option value="Non-AC">Non-AC</option>
                <option value="AC">AC</option>
              </select>
              <input
                placeholder="Min Charge (₹)"
                type="number"
                value={newVehicle.minCharge}
                onChange={(e) =>
                  setNewVehicle({ ...newVehicle, minCharge: Number(e.target.value) })
                }
                style={inputStyle}
              />
              <input
                placeholder="Image URL"
                value={newVehicle.img}
                onChange={(e) => setNewVehicle({ ...newVehicle, img: e.target.value })}
                style={inputStyle}
              />
              <button onClick={handleAddVehicle} style={addBtn}>
                Add Vehicle
              </button>
            </div>

          
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                gap: "25px",
                justifyItems: "center",
                width: "100%",
              }}
            >
              {vehicles.map((v) => (
                <div
                  key={v.id}
                  style={{
                    background: "white",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    padding: "15px",
                    width: "90%",
                    maxWidth: "380px",
                    textAlign: "center",
                    transition: "transform 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img
                    src={v.img}
                    alt={v.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      borderRadius: "8px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                  />
                  <h3>{v.name}</h3>
                  <p>Type: {v.type}</p>
                  <p>Minimum Charge (4 hrs): ₹{v.minCharge}</p>
                  <p>Extra Charge per Hour: ₹{v.extraPerHr}</p>
                  <button onClick={() => handleRemoveVehicle(v.id)} style={removeBtn}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      
        {activeSection === "status" && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
              Vehicle Status Overview
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "25px",
                width: "100%",
                justifyItems: "center",
              }}
            >
              {vehicles.map((v) => (
                <div
                  key={v.id}
                  style={{
                    background: "white",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    padding: "15px",
                    width: "90%",
                    maxWidth: "350px",
                    textAlign: "center",
                    transition: "transform 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img
                    src={v.img}
                    alt={v.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      borderRadius: "8px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                  />
                  <h3>{v.name}</h3>
                  <p>Type: {v.type}</p>
                  <p>
                    Status:{" "}
                    <b
                      style={{
                        color:
                          v.status === "Available"
                            ? "green"
                            : v.status === "Rented"
                            ? "orange"
                            : "red",
                      }}
                    >
                      {v.status}
                    </b>
                  </p>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: "50px", textAlign: "center" }}>
              Monthly Revenue Stats
            </h2>
            <div
              style={{
                width: "90%",
                maxWidth: "900px",
                height: "300px",
                background: "white",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                marginTop: "20px",
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#0E3E70" /> 
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Styles
const btnStyle = {
  background: "#144d8a", // updated button color
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "4px",
  textAlign: "left",
  transition: "background-color 0.3s ease",
};

const inputStyle = {
  marginRight: "10px",
  padding: "5px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const addBtn = {
  background: "#0E3E70",
  color: "white",
  padding: "6px 10px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const removeBtn = {
  background: "#b91c1c",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "4px",
  cursor: "pointer",
};

export default AdminDashboard;
*/
/*
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../assets/styles/AdminDashboard.css";



const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("fleet");

  // Existing Vehicles Data
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: "Ambassador (Non-AC)",
      type: "Non-AC",
      minCharge: 400,
      extraPerHr: 100,
      status: "Available",
      img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "Ambassador (AC)",
      type: "AC",
      minCharge: 600,
      extraPerHr: 100,
      status: "Rented",
      img: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      name: "Tata Sumo (Non-AC)",
      type: "Non-AC",
      minCharge: 500,
      extraPerHr: 100,
      status: "Available",
      img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      name: "Tata Sumo (AC)",
      type: "AC",
      minCharge: 750,
      extraPerHr: 100,
      status: "Under Repair",
      img: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ]);

  // New Vehicle Input State
  const [newVehicle, setNewVehicle] = useState({
    name: "",
    type: "Non-AC",
    minCharge: "",
    extraPerHr: 100,
    status: "Available",
    img: "",
  });

  const handleAddVehicle = () => {
    if (!newVehicle.name || !newVehicle.minCharge || !newVehicle.img)
      return alert("Please fill all fields!");

    setVehicles([...vehicles, { ...newVehicle, id: vehicles.length + 1 }]);

    setNewVehicle({
      name: "",
      type: "Non-AC",
      minCharge: "",
      extraPerHr: 100,
      status: "Available",
      img: "",
    });
  };

  const handleRemoveVehicle = (id) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };

  const monthlyData = [
    { month: "Jan", revenue: 40000 },
    { month: "Feb", revenue: 45000 },
    { month: "Mar", revenue: 60000 },
    { month: "Apr", revenue: 55000 },
    { month: "May", revenue: 70000 },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif", overflow: "hidden" }}>
      
    
      <div
        style={{
          width: "230px",
          background: "#1d7ee6ff",
          color: "white",
          padding: "20px",
          height: "100vh",
        }}
      >
        <h2 style={{ marginBottom: "30px", textAlign: "center" }}>Admin Panel</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <button onClick={() => setActiveSection("fleet")} style={btnStyle}>Fleet</button>
          <button onClick={() => setActiveSection("status")} style={btnStyle}>Status</button>
          <button onClick={() => setActiveSection("bookings")} style={btnStyle}>Bookings</button>
          <button onClick={() => setActiveSection("customers")} style={btnStyle}>Customers</button>
          <button onClick={() => setActiveSection("drivers")} style={btnStyle}>Drivers</button>
          <button onClick={() => setActiveSection("feedback")} style={btnStyle}>Feedback</button>
          <button onClick={() => setActiveSection("logout")} style={btnStyle}>Logout</button>
        </div>
      </div>

      
      <div style={{ flexGrow: 1, padding: "25px", overflowY: "auto", backgroundColor: "#f8fafc" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
  <h1 style={{ fontSize: "26px", marginBottom: "20px" }}>Welcome, Admin</h1>


  <button className="back-btn-admin" onClick={() => window.history.back()}>
    ⬅ Back
  </button>
</div>


        
        {activeSection === "fleet" && (
          <div>
            <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Fleet Management</h2>

          
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  style={{
                    width: "260px",
                    background: "white",
                    borderRadius: "10px",
                    padding: "10px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={vehicle.img}
                    alt={vehicle.name}
                    style={{ width: "100%", height: "150px", borderRadius: "10px", objectFit: "cover" }}
                  />
                  <h3>{vehicle.name}</h3>
                  <p>Type: {vehicle.type}</p>
                  <p>Min Charge: ₹{vehicle.minCharge}</p>
                  <p>Status: {vehicle.status}</p>
                  <button
                    style={{
                      marginTop: "10px",
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "8px",
                      width: "100%",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleRemoveVehicle(vehicle.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

          
            <div style={sectionBox}>
              <h2>Add New Vehicle</h2>

              <input
                type="text"
                placeholder="Vehicle Name"
                value={newVehicle.name}
                onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })}
                style={inputStyle}
              />

              <select
                value={newVehicle.type}
                onChange={(e) => setNewVehicle({ ...newVehicle, type: e.target.value })}
                style={inputStyle}
              >
                <option>Non-AC</option>
                <option>AC</option>
              </select>

              <input
                type="number"
                placeholder="Minimum Charge"
                value={newVehicle.minCharge}
                onChange={(e) => setNewVehicle({ ...newVehicle, minCharge: e.target.value })}
                style={inputStyle}
              />

              <input
                type="text"
                placeholder="Image URL"
                value={newVehicle.img}
                onChange={(e) => setNewVehicle({ ...newVehicle, img: e.target.value })}
                style={inputStyle}
              />

              <button onClick={handleAddVehicle} style={addBtnStyle}>Add Vehicle</button>
            </div>
          </div>
        )}

        
        {activeSection === "status" && (
          <div>
            <h2>Status & Revenue</h2>

            <div style={{ width: "80%", height: 300, margin: "auto", marginTop: 20 }}>
              <ResponsiveContainer>
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#1d7ee6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

      
        {activeSection === "bookings" && (
          <div style={sectionBox}>
            <h2>Recent Bookings</h2>
            <p>• Booking ID: 1023 — John Doe — Maruti Omni (Non-AC)</p>
            <p>• Booking ID: 1024 — Priya Sharma — Tata Sumo (AC)</p>
            <p>• Booking ID: 1025 — Kiran — Ambassador (AC)</p>
          </div>
        )}

        
        {activeSection === "customers" && (
          <div style={sectionBox}>
            <h2>Registered Customers</h2>
            <p>• John Doe — 7 bookings</p>
            <p>• Priya Sharma — 4 bookings</p>
            <p>• Kiran — 2 bookings</p>
            <p>• Sneha — 1 booking</p>
          </div>
        )}

        
        {activeSection === "drivers" && (
          <div style={sectionBox}>
            <h2>Driver Details</h2>
            <p>• Ramesh — Available</p>
            <p>• Mahesh — On Ride</p>
            <p>• Suresh — On Leave</p>
          </div>
        )}

        
        {activeSection === "feedback" && (
          <div style={sectionBox}>
            <h2>Customer Feedback</h2>
            <p>• "Great ride! Very clean vehicle." — John</p>
            <p>• "Driver was polite and on time." — Priya</p>
            <p>• "AC was not very effective." — Kiran</p>
          </div>
        )}

        
        {activeSection === "logout" && (
          <div style={sectionBox}>
            <h2>You have been logged out.</h2>
            <p>Please close the tab or login again.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// ------------------ Styles ------------------

const sectionBox = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  width: "80%",
  margin: "20px auto",
};

const btnStyle = {
  background: "#144d8a",
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "4px",
  textAlign: "left",
  transition: "0.3s",
  fontSize: "16px",
};

const addBtnStyle = {
  background: "#1d7ee6",
  color: "white",
  padding: "10px",
  width: "100%",
  borderRadius: "6px",
  border: "none",
  fontSize: "16px",
  marginTop: "10px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginBottom: "10px",
};



export default AdminDashboard;
*/
//final
/*
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../assets/styles/AdminDashboard.css";

// Importing your local images
import ambassador1 from "../assets/images/ambassador1.jpeg";
import ambassador2 from "../assets/images/ambassador2.jpeg";
import sumo from "../assets/images/sumo.jpeg";
import toyota from "../assets/images/toyota.jpeg";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("fleet");

  // Updated Vehicles Data with local images
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: "Ambassador (Non-AC)",
      type: "Non-AC",
      minCharge: 400,
      extraPerHr: 100,
      status: "Available",
      img: ambassador1,
    },
    {
      id: 2,
      name: "Ambassador (AC)",
      type: "AC",
      minCharge: 600,
      extraPerHr: 100,
      status: "Rented",
      img: ambassador2,
    },
    {
      id: 3,
      name: "Tata Sumo (Non-AC)",
      type: "Non-AC",
      minCharge: 500,
      extraPerHr: 100,
      status: "Available",
      img: sumo,
    },
    {
      id: 4,
      name: "Tata Sumo (AC)",
      type: "AC",
      minCharge: 750,
      extraPerHr: 100,
      status: "Under Repair",
      img: toyota,
    },
  ]);

  const [newVehicle, setNewVehicle] = useState({
    name: "",
    type: "Non-AC",
    minCharge: "",
    extraPerHr: 100,
    status: "Available",
    img: "",
  });

  const handleAddVehicle = () => {
    if (!newVehicle.name || !newVehicle.minCharge || !newVehicle.img)
      return alert("Please fill all fields!");

    setVehicles([...vehicles, { ...newVehicle, id: vehicles.length + 1 }]);

    setNewVehicle({
      name: "",
      type: "Non-AC",
      minCharge: "",
      extraPerHr: 100,
      status: "Available",
      img: "",
    });
  };

  const handleRemoveVehicle = (id) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };

  const monthlyData = [
    { month: "Jan", revenue: 40000 },
    { month: "Feb", revenue: 45000 },
    { month: "Mar", revenue: 60000 },
    { month: "Apr", revenue: 55000 },
    { month: "May", revenue: 70000 },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif", overflow: "hidden" }}>
      
    
      <div
        style={{
          width: "230px",
          background: "#1d7ee6ff",
          color: "white",
          padding: "20px",
          height: "100vh",
        }}
      >
        <h2 style={{ marginBottom: "30px", textAlign: "center" }}>Admin Panel</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <button onClick={() => setActiveSection("fleet")} style={btnStyle}>Fleet</button>
          <button onClick={() => setActiveSection("status")} style={btnStyle}>Status</button>
          <button onClick={() => setActiveSection("bookings")} style={btnStyle}>Bookings</button>
          <button onClick={() => setActiveSection("customers")} style={btnStyle}>Customers</button>
          <button onClick={() => setActiveSection("drivers")} style={btnStyle}>Drivers</button>
          <button onClick={() => setActiveSection("feedback")} style={btnStyle}>Feedback</button>
          <button onClick={() => setActiveSection("logout")} style={btnStyle}>Logout</button>
        </div>
      </div>

  
      <div style={{ flexGrow: 1, padding: "25px", overflowY: "auto", backgroundColor: "#f8fafc" }}>
        
    
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: "26px", marginBottom: "20px" }}>Welcome, Admin</h1>

          <button className="back-btn-admin" onClick={() => window.history.back()}>
            ⬅ Back
          </button>
        </div>


        {activeSection === "fleet" && (
          <div>
            <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Fleet Management</h2>

            
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "20px", 
              justifyContent: "center" 
            }}>
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  style={{
                    width: "260px",
                    background: "white",
                    borderRadius: "10px",
                    padding: "10px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={vehicle.img}
                    alt={vehicle.name}
                    style={{
                      width: "100%",
                      height: "150px",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />

                  <h3>{vehicle.name}</h3>
                  <p>Type: {vehicle.type}</p>
                  <p>Min Charge: ₹{vehicle.minCharge}</p>
                  <p>Status: {vehicle.status}</p>

                  <button
                    style={{
                      marginTop: "10px",
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "8px",
                      width: "100%",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleRemoveVehicle(vehicle.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

          
            <div style={sectionBox}>
              <h2>Add New Vehicle</h2>

              <input
                type="text"
                placeholder="Vehicle Name"
                value={newVehicle.name}
                onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })}
                style={inputStyle}
              />

              <select
                value={newVehicle.type}
                onChange={(e) => setNewVehicle({ ...newVehicle, type: e.target.value })}
                style={inputStyle}
              >
                <option>Non-AC</option>
                <option>AC</option>
              </select>

              <input
                type="number"
                placeholder="Minimum Charge"
                value={newVehicle.minCharge}
                onChange={(e) => setNewVehicle({ ...newVehicle, minCharge: e.target.value })}
                style={inputStyle}
              />

              <input
                type="text"
                placeholder="Image URL"
                value={newVehicle.img}
                onChange={(e) => setNewVehicle({ ...newVehicle, img: e.target.value })}
                style={inputStyle}
              />

              <button onClick={handleAddVehicle} style={addBtnStyle}>Add Vehicle</button>
            </div>
          </div>
        )}

      
        {activeSection === "status" && (
          <div>
            <h2>Status & Revenue</h2>
            <div style={{ width: "80%", height: 300, margin: "auto", marginTop: 20 }}>
              <ResponsiveContainer>
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#1d7ee6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeSection === "bookings" && (
          <div style={sectionBox}>
            <h2>Recent Bookings</h2>
            <p>• Booking ID: 1023 — John Doe — Maruti Omni (Non-AC)</p>
            <p>• Booking ID: 1024 — Priya Sharma — Tata Sumo (AC)</p>
            <p>• Booking ID: 1025 — Kiran — Ambassador (AC)</p>
          </div>
        )}

        {activeSection === "customers" && (
          <div style={sectionBox}>
            <h2>Registered Customers</h2>
            <p>• John Doe — 7 bookings</p>
            <p>• Priya Sharma — 4 bookings</p>
            <p>• Kiran — 2 bookings</p>
            <p>• Sneha — 1 booking</p>
          </div>
        )}

        {activeSection === "drivers" && (
          <div style={sectionBox}>
            <h2>Driver Details</h2>
            <p>• Ramesh — Available</p>
            <p>• Mahesh — On Ride</p>
            <p>• Suresh — On Leave</p>
          </div>
        )}

        {activeSection === "feedback" && (
          <div style={sectionBox}>
            <h2>Customer Feedback</h2>
            <p>• "Great ride! Very clean vehicle." — John</p>
            <p>• "Driver was polite and on time." — Priya</p>
            <p>• "AC was not very effective." — Kiran</p>
          </div>
        )}

        {activeSection === "logout" && (
          <div style={sectionBox}>
            <h2>You have been logged out.</h2>
            <p>Please close the tab or login again.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Styles
const sectionBox = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  width: "80%",
  margin: "20px auto",
};

const btnStyle = {
  background: "#144d8a",
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "4px",
  textAlign: "left",
  transition: "0.3s",
  fontSize: "16px",
};

const addBtnStyle = {
  background: "#1d7ee6",
  color: "white",
  padding: "10px",
  width: "100%",
  borderRadius: "6px",
  border: "none",
  fontSize: "16px",
  marginTop: "10px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginBottom: "10px",
};

export default AdminDashboard;
*/
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


// Import local images
import ambassador1 from "../assets/images/ambassador1.jpeg";
import ambassador2 from "../assets/images/ambassador2.jpeg";
import sumo from "../assets/images/sumo.jpeg";
import toyota from "../assets/images/toyota.jpeg";


const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("fleet");

  // Vehicle state
  const [vehicles, setVehicles] = useState([
    { id: 1, name: "Ambassador (Non-AC)", type: "Non-AC", minCharge: 400, extraPerHr: 100, status: "Available", img: ambassador1 },
    { id: 2, name: "Ambassador (AC)", type: "AC", minCharge: 600, extraPerHr: 100, status: "Rented", img: ambassador2 },
    { id: 3, name: "Tata Sumo (Non-AC)", type: "Non-AC", minCharge: 500, extraPerHr: 100, status: "Available", img: sumo },
    { id: 4, name: "Tata Sumo (AC)", type: "AC", minCharge: 750, extraPerHr: 100, status: "Under Repair", img: toyota },
  ]);

  // New vehicle form state
  const [newVehicle, setNewVehicle] = useState({
    name: "",
    type: "Non-AC",
    minCharge: "",
    extraPerHr: 100,
    status: "Available",
    img: "",
  });

  // Add new vehicle
  /*const handleAddVehicle = () => {
    if (!newVehicle.name || !newVehicle.minCharge || !newVehicle.img) {
      return alert("Please fill all fields!");
    }

    setVehicles([...vehicles, { ...newVehicle, id: vehicles.length + 1 }]);

    setNewVehicle({
      name: "",
      type: "Non-AC",
      minCharge: "",
      extraPerHr: 100,
      status: "Available",
      img: "",
    });
  };
*/
const handleAddVehicle = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVehicle),
    });

    const data = await res.json();
    console.log("Saved:", data);

    if (res.ok) {
      alert("Vehicle added!");
      setVehicles([...vehicles, data]);
    } else {
      alert("Error: " + data.message);
    }

  } catch (err) {
    console.log(err);
  }
};

  // Remove vehicle
  const handleRemoveVehicle = (id) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };

  // Monthly revenue chart data
  const monthlyData = [
    { month: "Jan", revenue: 40000 },
    { month: "Feb", revenue: 45000 },
    { month: "Mar", revenue: 60000 },
    { month: "Apr", revenue: 55000 },
    { month: "May", revenue: 70000 },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif", overflow: "hidden" }}>
      
      {/* Sidebar */}
      <div style={{ width: "230px", background: "#1d7ee6ff", color: "white", padding: "20px", height: "100vh" }}>
        <h2 style={{ marginBottom: "30px", textAlign: "center" }}>Admin Panel</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <button onClick={() => setActiveSection("fleet")} style={btnStyle}>Fleet</button>
    
          <button onClick={() => setActiveSection("bookings")} style={btnStyle}>Bookings</button>
          <button onClick={() => setActiveSection("customers")} style={btnStyle}>Customers</button>
          <button onClick={() => setActiveSection("drivers")} style={btnStyle}>Drivers</button>
          <button onClick={() => setActiveSection("feedback")} style={btnStyle}>Feedback</button>
          <button onClick={() => setActiveSection("logout")} style={btnStyle}>Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flexGrow: 1, padding: "25px", overflowY: "auto", backgroundColor: "#f8fafc" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: "26px", marginBottom: "20px" }}>Welcome, Admin</h1>
          <button className="back-btn-admin" onClick={() => window.history.back()}>⬅ Back</button>
        </div>

        {/* Fleet Section */}
        {activeSection === "fleet" && (
          <div>
            <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Fleet Management</h2>

            {/* Vehicle List */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} style={vehicleCardStyle}>
                  <img src={vehicle.img} alt={vehicle.name} style={vehicleImgStyle} />
                  <h3>{vehicle.name}</h3>
                  <p>Type: {vehicle.type}</p>
                  <p>Min Charge: ₹{vehicle.minCharge}</p>
                  <p>Status: {vehicle.status}</p>
                  <button style={removeBtnStyle} onClick={() => handleRemoveVehicle(vehicle.id)}>Remove</button>
                </div>
              ))}
            </div>

            {/* Add Vehicle Form */}
            <div style={sectionBox}>
              <h2>Add New Vehicle</h2>
              <input type="text" placeholder="Vehicle Name" value={newVehicle.name} onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })} style={inputStyle} />
              <select value={newVehicle.type} onChange={(e) => setNewVehicle({ ...newVehicle, type: e.target.value })} style={inputStyle}>
                <option>Non-AC</option>
                <option>AC</option>
              </select>
              <input type="number" placeholder="Minimum Charge" value={newVehicle.minCharge} onChange={(e) => setNewVehicle({ ...newVehicle, minCharge: e.target.value })} style={inputStyle} />
              <input type="text" placeholder="Image URL" value={newVehicle.img} onChange={(e) => setNewVehicle({ ...newVehicle, img: e.target.value })} style={inputStyle} />
              <button onClick={handleAddVehicle} style={addBtnStyle}>Add Vehicle</button>
            </div>
          </div>
        )}




        
 
        

        {/* Bookings Section */}
        {activeSection === "bookings" && (
          <div style={sectionBox}>
            <h2>Recent Bookings</h2>
            <p>• Booking ID: 1023 — John Doe — Maruti Omni (Non-AC)</p>
            <p>• Booking ID: 1024 — Priya Sharma — Tata Sumo (AC)</p>
            <p>• Booking ID: 1025 — Kiran — Ambassador (AC)</p>
          </div>
        )}

        {/* Customers Section */}
        {activeSection === "customers" && (
          <div style={sectionBox}>
            <h2>Registered Customers</h2>
            <p>• John Doe — 7 bookings</p>
            <p>• Priya Sharma — 4 bookings</p>
            <p>• Kiran — 2 bookings</p>
            <p>• Sneha — 1 booking</p>
          </div>
        )}

        {/* Drivers Section */}
        {activeSection === "drivers" && (
          <div style={sectionBox}>
            <h2>Driver Details</h2>
            <p>• Ramesh — Available</p>
            <p>• Mahesh — On Ride</p>
            <p>• Suresh — On Leave</p>
          </div>
        )}

        {/* Feedback Section */}
        {activeSection === "feedback" && (
          <div style={sectionBox}>
            <h2>Customer Feedback</h2>
            <p>• "Great ride! Very clean vehicle." — John</p>
            <p>• "Driver was polite and on time." — Priya</p>
            <p>• "AC was not very effective." — Kiran</p>
          </div>
        )}

        

      </div>
    </div>
  );
};

// ------------------- Styles -------------------
const sectionBox = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  width: "80%",
  margin: "20px auto",
};

const btnStyle = {
  background: "#144d8a",
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "4px",
  textAlign: "left",
  transition: "0.3s",
  fontSize: "16px",
};

const addBtnStyle = {
  background: "#1d7ee6",
  color: "white",
  padding: "10px",
  width: "100%",
  borderRadius: "6px",
  border: "none",
  fontSize: "16px",
  marginTop: "10px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginBottom: "10px",
};

const vehicleCardStyle = {
  width: "260px",
  background: "white",
  borderRadius: "10px",
  padding: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const vehicleImgStyle = {
  width: "100%",
  height: "150px",
  borderRadius: "10px",
  objectFit: "cover",
};

const removeBtnStyle = {
  marginTop: "10px",
  background: "red",
  color: "white",
  border: "none",
  padding: "8px",
  width: "100%",
  borderRadius: "5px",
  cursor: "pointer",
};

export default AdminDashboard;
