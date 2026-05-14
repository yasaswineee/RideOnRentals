/*import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar always visible *//*}
        <Navbar />

        {/* Define all routes *//*}
        <Routes>
          {/* Landing page *//*}
          <Route path="/" element={<Home />} />

          {/* Login and Signup pages *//*}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/
/*
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffLayout from "./layouts/StaffLayout";
import StaffDashboard from "./pages/Staff/Dashboard/StaffDashboard";
import VehicleList from "./pages/Staff/Vehicles/VehicleList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/staff" element={<StaffLayout />}>
          <Route path="dashboard" element={<StaffDashboard />} />
          <Route path="vehicles" element={<VehicleList />} />
  
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
*/
//FINAL STAFF DASHBOARD//
/*
import React from "react";
import StaffLayout from "./layouts/StaffLayout";

function App() {
  return (
    <div className="App">
      <StaffLayout />
    </div>
  );
}

export default App;
*/
/*
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [loginData, setLoginData] = useState({
    role: "",
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
  });

  const images = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
    "https://images.unsplash.com/photo-1511910849309-0e2a9b049a21",
  ];

  const cards = [
    { emoji: "🚗", title: "Wide Range", desc: "Choose from sedans, SUVs, and more — perfect for every journey." },
    { emoji: "💨", title: "Fast Service", desc: "Book a car instantly and get on the road without any delay." },
    { emoji: "🛣️", title: "Long Trips", desc: "Enjoy comfortable long rides with our well-maintained vehicles." },
    { emoji: "💰", title: "Affordable Rates", desc: "Get transparent pricing — no hidden charges, just value." },
    { emoji: "🌡️", title: "AC & Non-AC", desc: "Pick your comfort — both AC and Non-AC options available." },
    { emoji: "🧰", title: "Maintained Fleet", desc: "Our cars are serviced regularly for a safe, smooth ride." },
    { emoji: "👨‍✈️", title: "Professional Drivers", desc: "Trained, polite drivers for your peace of mind." },
    { emoji: "📅", title: "Easy Booking", desc: "Book online in minutes — quick and hassle-free experience." },
    { emoji: "🕒", title: "24/7 Support", desc: "Our team is available anytime to help you with your booking." },
  ];

  // Auto carousel
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const goToSlide = (index) => setCurrent(index);

  // LOGIN HANDLER
  const handleLogin = () => {
    const { role, email, password } = loginData;
    if (!role || !email || !password)
      return alert("Please fill in all fields!");
    if (!/\S+@\S+\.\S+/.test(email))
      return alert("Please enter a valid email address!");
    alert(`Login Successful!\nRole: ${role}\nEmail: ${email}`);
    setLoginData({ role: "", email: "", password: "" });
    setShowLogin(false);
  };

  // SIGNUP HANDLER
  const handleSignup = () => {
    const { role, name, email, password } = signupData;
    if (!role || !name || !email || !password)
      return alert("Please fill in all fields!");
    if (!/\S+@\S+\.\S+/.test(email))
      return alert("Please enter a valid email address!");
    alert(`Signup Successful!\nRole: ${role}\nName: ${name}\nEmail: ${email}`);
    setSignupData({ role: "", name: "", email: "", password: "" });
    setShowSignup(false);
  };

  return (
    <div className="App">
  
      <nav className="navbar">
        <div className="navbar-left">Ride on Rentals</div>
        <div className="navbar-right">
          <button className="nav-btn" onClick={() => setShowLogin(true)}>Login</button>
          <button className="nav-btn" onClick={() => setShowSignup(true)}>Signup</button>
        </div>
      </nav>

    
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
            <h2>Login</h2>

            <select
              value={loginData.role}
              onChange={(e) => setLoginData({ ...loginData, role: e.target.value })}
              className="modal-select"
            >
              <option value="">Select Role</option>
              <option value="Customer">Customer</option>
              <option value="Staff">Staff</option>
              <option value="Admin">Admin</option>
            </select>

            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button className="modal-btn" onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}

    
      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowSignup(false)}>&times;</span>
            <h2>Signup</h2>

            <select
              value={signupData.role}
              onChange={(e) => setSignupData({ ...signupData, role: e.target.value })}
              className="modal-select"
            >
              <option value="">Select Role</option>
              <option value="Customer">Customer</option>
              <option value="Staff">Staff</option>
              <option value="Admin">Admin</option>
            </select>

            <input
              type="text"
              placeholder="Full Name"
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            />
            <button className="modal-btn" onClick={handleSignup}>Signup</button>
          </div>
        </div>
      )}

      <div
        className="carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div className="carousel-item" key={index}>
              <img src={img} alt={`Slide ${index}`} className="carousel-img" />
            </div>
          ))}
        </div>

      
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

    
      <div className="cards-section">
        {cards.map((card, i) => (
          <div className="card" key={i}>
            <div className="emoji">{card.emoji}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

  
      <footer className="footer">
        <h2>Contact Us</h2>
        <p>
          📍 123, MG Road, Hyderabad, India <br />
          📞 +91 98765 43210 <br />
          ✉️ contact@rideonrentals.com
        </p>
        <p className="footer-note">© 2025 Ride on Rentals. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
*/
/*
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import CustomerPage from "./pages/CustomerPage.jsx";
import StaffLayout from "./layouts/StaffLayout.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import "./App.css";
const API_URL = "http://localhost:5000/api";


// ==============================
// 🌐 LANDING PAGE COMPONENT
// ==============================
function LandingPage() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [loginData, setLoginData] = useState({
    role: "customer",
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    role: "customer",
    name: "",
    email: "",
    password: "",
  });

  const images = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
    "https://images.unsplash.com/photo-1511910849309-0e2a9b049a21",
  ];

  const cards = [
    { emoji: "🚗", title: "Wide Range", desc: "Choose from sedans, SUVs, and more — perfect for every journey." },
    { emoji: "💨", title: "Fast Service", desc: "Book a car instantly and get on the road without any delay." },
    { emoji: "🛣️", title: "Long Trips", desc: "Enjoy comfortable long rides with our well-maintained vehicles." },
    { emoji: "💰", title: "Affordable Rates", desc: "Get transparent pricing — no hidden charges, just value." },
    { emoji: "🌡️", title: "AC & Non-AC", desc: "Pick your comfort — both AC and Non-AC options available." },
    { emoji: "🧰", title: "Maintained Fleet", desc: "Our cars are serviced regularly for a safe, smooth ride." },
    { emoji: "👨‍✈️", title: "Professional Drivers", desc: "Trained, polite drivers for your peace of mind." },
    { emoji: "📅", title: "Easy Booking", desc: "Book online in minutes — quick and hassle-free experience." },
    { emoji: "🕒", title: "24/7 Support", desc: "Our team is available anytime to help you with your booking." },
  ];

  // Auto Carousel
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const goToSlide = (index) => setCurrent(index);

  // ✅ LOGIN HANDLER WITH ROLE NAVIGATION
  /*const handleLogin = () => {
   const { role, email, password } = loginData;
    if (!email || !password) return alert("Please fill all fields!");
    if (!/\S+@\S+\.\S+/.test(email)) return alert("Please enter a valid email!");

    if (role === "customer") navigate("/customer");
    else if (role === "staff") navigate("/staff");
    else if (role === "admin") navigate("/admin");

    setShowLogin(false);
  };

  // ✅ SIGNUP HANDLER WITH ROLE NAVIGATION
  const handleSignup = () => {
    const { role, name, email, password } = signupData;
    if (!name || !email || !password) return alert("Please fill all fields!");
    if (!/\S+@\S+\.\S+/.test(email)) return alert("Please enter a valid email!");

    alert(`Signup Successful!\nWelcome ${name}!`);
    setShowSignup(false);

    // After signup, navigate to selected role page
    if (role === "customer") navigate("/customer");
    else if (role === "staff") navigate("/staff");
    else if (role === "admin") navigate("/admin");
  };
*/
// LOGIN HANDLER
/*
const handleLogin = async () => {
  const { role, email, password } = loginData;
  if (!email || !password) return alert("Please fill all fields!");

  try {
    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();

    if (!res.ok) return alert(data.message || "Login failed");
    alert(data.message);

    if (role === "customer") navigate("/customer");
    else if (role === "staff") navigate("/staff");
    else navigate("/admin");

  } catch (err) {
    alert("Error connecting to server");
  }
};
*/
/*
const handleLogin = async () => {
  const { role, email, password } = loginData;
  if (!email || !password) return alert("Please fill all fields!");

  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    alert("Login Successful!");
    if (role === "customer") navigate("/customer");
    else if (role === "staff") navigate("/staff");
    else if (role === "admin") navigate("/admin");
  } catch (err) {
    alert("Login failed!");
  }
};

// SIGNUP HANDLER
/*
const handleSignup = async () => {
  const { role, name, email, password } = signupData;
  if (!name || !email || !password) return alert("Please fill all fields!");

  try {
    const res = await fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    });
    const data = await res.json();

    if (!res.ok) return alert(data.message || "Signup failed");
    alert("Signup Successful!");

    if (role === "customer") navigate("/customer");
    else if (role === "staff") navigate("/staff");
    else navigate("/admin");

  } catch (err) {
    alert("Error connecting to server");
  }
};
*/
/*
const handleSignup = async () => {
  const { role, name, email, password } = signupData;
  if (!name || !email || !password) return alert("Please fill all fields!");

  try {
    const res = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    alert("Signup Successful!");
    if (role === "customer") navigate("/customer");
    else if (role === "staff") navigate("/staff");
    else if (role === "admin") navigate("/admin");
  } catch (err) {
    alert("Signup failed!");
  }
};
*//*
const handleSignup = async () => {
  const { role, name, email, password } = signupData;
  if (!name || !email || !password) return alert("Please fill all fields!");

  try {
    const res = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message || "Signup failed!");

    alert("Signup successful!");
    if (role === "customer") navigate("/customer");
    else if (role === "staff") navigate("/staff");
    else navigate("/admin");
  } catch (err) {
    console.error(err);
    alert("Error connecting to server");
  }
};

const handleLogin = async () => {
  const { role, email, password } = loginData;
  if (!email || !password) return alert("Please fill all fields!");

  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message || "Login failed");

    alert("Login successful!");
    if (role === "customer") navigate("/customer");
    else if (role === "staff") navigate("/staff");
    else navigate("/admin");
  } catch (err) {
    console.error(err);
    alert("Error connecting to server");
  }
};


  return (
    <div className="App">

      <nav className="navbar">
        <div className="navbar-left">Ride On Rentals</div>
        <div className="navbar-right">
          <button className="nav-btn" onClick={() => setShowLogin(true)}>Login</button>
          <button className="nav-btn" onClick={() => setShowSignup(true)}>Signup</button>
        </div>
      </nav>

    
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
            <h2>Login</h2>

            <select
              value={loginData.role}
              onChange={(e) => setLoginData({ ...loginData, role: e.target.value })}
              className="modal-select"
            >
              <option value="customer">Customer</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>

            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button className="modal-btn" onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}

      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowSignup(false)}>&times;</span>
            <h2>Signup</h2>

            <select
              value={signupData.role}
              onChange={(e) => setSignupData({ ...signupData, role: e.target.value })}
              className="modal-select"
            >
              <option value="customer">Customer</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>

            <input
              type="text"
              placeholder="Full Name"
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            />
            <button className="modal-btn" onClick={handleSignup}>Signup</button>
          </div>
        </div>
      )}

      
      <div
        className="carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((img, index) => (
            <div className="carousel-item" key={index}>
              <img src={img} alt={`Slide ${index}`} className="carousel-img" />
            </div>
          ))}
        </div>

        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      
      <div className="cards-section">
        {cards.map((card, i) => (
          <div className="card" key={i}>
            <div className="emoji">{card.emoji}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      
      <footer className="footer">
        <h2>Contact Us</h2>
        <p>
          📍 123, MG Road, Hyderabad, India <br />
          📞 +91 98765 43210 <br />
          ✉️ contact@rideonrentals.com
        </p>
        <p className="footer-note">© 2025 Ride On Rentals. All rights reserved.</p>
      </footer>
    </div>
  );
}

// ==============================
// 🌍 MAIN APP ROUTER
// ==============================
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/staff" element={<StaffLayout />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
*/
/*
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import CustomerPage from "./pages/CustomerPage.jsx";
import StaffLayout from "./layouts/StaffLayout.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import "./App.css";

const API_URL = "http://localhost:5000/api"; // ✅ Backend Base URL

// ==============================
// 🌐 LANDING PAGE COMPONENT
// ==============================
function LandingPage() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [loginData, setLoginData] = useState({
    role: "customer",
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    role: "customer",
    name: "",
    email: "",
    password: "",
  });

  const images = [
    "scorpio.jpeg",
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
    "https://images.unsplash.com/photo-1511910849309-0e2a9b049a21",
  ];

  const cards = [
    { emoji: "🚗", title: "Wide Range", desc: "Choose from sedans, SUVs, and more — perfect for every journey." },
    { emoji: "💨", title: "Fast Service", desc: "Book a car instantly and get on the road without any delay." },
    { emoji: "🛣️", title: "Long Trips", desc: "Enjoy comfortable long rides with our well-maintained vehicles." },
    { emoji: "💰", title: "Affordable Rates", desc: "Get transparent pricing — no hidden charges, just value." },
    { emoji: "🌡️", title: "AC & Non-AC", desc: "Pick your comfort — both AC and Non-AC options available." },
    { emoji: "🧰", title: "Maintained Fleet", desc: "Our cars are serviced regularly for a safe, smooth ride." },
    { emoji: "👨‍✈️", title: "Professional Drivers", desc: "Trained, polite drivers for your peace of mind." },
    { emoji: "📅", title: "Easy Booking", desc: "Book online in minutes — quick and hassle-free experience." },
    { emoji: "🕒", title: "24/7 Support", desc: "Our team is available anytime to help you with your booking." },
  ];

  // ✅ Auto Carousel
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const goToSlide = (index) => setCurrent(index);

  // ✅ SIGNUP HANDLER
  const handleSignup = async () => {
    const { role, name, email, password } = signupData;
    if (!name || !email || !password) return alert("Please fill all fields!");

    try {
      const res = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message || "Signup failed!");

      alert("Signup successful!");
      if (role === "customer") navigate("/customer");
      else if (role === "staff") navigate("/staff");
      else navigate("/admin");
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  // ✅ LOGIN HANDLER
  const handleLogin = async () => {
    const { role, email, password } = loginData;
    if (!email || !password) return alert("Please fill all fields!");

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message || "Login failed");

      alert("Login successful!");
      if (role === "customer") navigate("/customer");
      else if (role === "staff") navigate("/staff");
      else navigate("/admin");
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="App">
    
      <nav className="navbar">
        <div className="navbar-left">Ride On Rentals</div>
        <div className="navbar-right">
          <button className="nav-btn" onClick={() => setShowLogin(true)}>Login</button>
          <button className="nav-btn" onClick={() => setShowSignup(true)}>Signup</button>
        </div>
      </nav>

      
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
            <h2>Login</h2>

            <select
              value={loginData.role}
              onChange={(e) => setLoginData({ ...loginData, role: e.target.value })}
              className="modal-select"
            >
              <option value="customer">Customer</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>

            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button className="modal-btn" onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}

    
      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowSignup(false)}>&times;</span>
            <h2>Signup</h2>

            <select
              value={signupData.role}
              onChange={(e) => setSignupData({ ...signupData, role: e.target.value })}
              className="modal-select"
            >
              <option value="customer">Customer</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>

            <input
              type="text"
              placeholder="Full Name"
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            />
            <button className="modal-btn" onClick={handleSignup}>Signup</button>
          </div>
        </div>
      )}

      
      <div
        className="carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((img, index) => (
            <div className="carousel-item" key={index}>
              <img src={img} alt={`Slide ${index}`} className="carousel-img" />
            </div>
          ))}
        </div>

        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      
      <div className="cards-section">
        {cards.map((card, i) => (
          <div className="card" key={i}>
            <div className="emoji">{card.emoji}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

    
      <footer className="footer">
        <h2>Contact Us</h2>
        <p>
          📍 123, MG Road, Hyderabad, India <br />
          📞 +91 98765 43210 <br />
          ✉️ contact@rideonrentals.com
        </p>
        <p className="footer-note">© 2025 Ride On Rentals. All rights reserved.</p>
      </footer>
    </div>
  );
}

// ==============================
// 🌍 MAIN APP ROUTER
// ==============================
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/staff" element={<StaffLayout />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
*/

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import CustomerPage from "./pages/CustomerPage.jsx";

import StaffLayout from "./layouts/StaffLayout.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import scorpio from "./assets/scorpio-BJYpAlfM.jpeg";
import creta from "./assets/creta-wkmdn7Oj.jpeg";
import swift from "./assets/swift-CSIcJc3r.jpeg";


import "./App.css";

const API_URL = "http://localhost:5000/api"; // Backend URL

// ==============================
// 🌐 LANDING PAGE COMPONENT
// ==============================
function LandingPage() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [loginData, setLoginData] = useState({
    role: "customer",
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    role: "customer",
    name: "",
    email: "",
    password: "",
  });

const images = [
"https://w0.peakpx.com/wallpaper/582/50/HD-wallpaper-akfa-car-rental-rentalcar-g63-rent-luxury-brabus-car-suv-sports-dubai.jpg",
  creta,
  scorpio,
  swift,
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
  
];


  const cards = [
    { emoji: "🚗", title: "Wide Range", desc: "Choose from sedans, SUVs, and more — perfect for every journey." },
  { emoji: "⚡", title: "Fast Service", desc: "Book a car instantly and get on the road without any delay." },

    { emoji: "🛣️", title: "Long Trips", desc: "Enjoy comfortable long rides with our well-maintained vehicles." },
    { emoji: "💰", title: "Affordable Rates", desc: "Get transparent pricing — no hidden charges, just value." },
    { emoji: "🌡️", title: "AC & Non-AC", desc: "Pick your comfort — both AC and Non-AC options available." },
    { emoji: "🧰", title: "Maintained Fleet", desc: "Our cars are serviced regularly for a safe, smooth ride." },
    { emoji: "👨‍✈️", title: "Professional Drivers", desc: "Trained, polite drivers for your peace of mind." },
    { emoji: "📅", title: "Easy Booking", desc: "Book online in minutes — quick and hassle-free experience." },
    { emoji: "🕒", title: "24/7 Support", desc: "Our team is available anytime to help you with your booking." },
  ];

  // Auto Carousel
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const goToSlide = (index) => setCurrent(index);

  // SIGNUP HANDLER
  const handleSignup = async () => {
    const { role, name, email, password } = signupData;
    if (!name || !email || !password) return alert("Please fill all fields!");

    try {
      const res = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message || "Signup failed!");

      alert("Signup successful!");
      if (role === "customer") navigate("/customer");
      else if (role === "staff") navigate("/staff");
      else navigate("/admin");
    } catch (err) {
      alert("Error connecting to server");
    }
  };

  // LOGIN HANDLER
  const handleLogin = async () => {
    const { role, email, password } = loginData;
    if (!email || !password) return alert("Please fill all fields!");

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message || "Login failed");

      alert("Login successful!");
      if (role === "customer") navigate("/customer");
      else if (role === "staff") navigate("/staff");
      else navigate("/admin");
    } catch (err) {
      alert("Error connecting to server");
    }
  };

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-left">Ride On Rentals</div>
        <div className="navbar-right">
          <button className="nav-btn" onClick={() => setShowLogin(true)}>Login</button>
          <button className="nav-btn" onClick={() => setShowSignup(true)}>Signup</button>
        </div>
      </nav>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
            <h2>Login</h2>

            <select
              className="modal-select"
              value={loginData.role}
              onChange={(e) => setLoginData({ ...loginData, role: e.target.value })}
            >
              <option value="customer">Customer</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>

            <input type="email" placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />

            <input type="password" placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />

            <button className="modal-btn" onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}

      {/* SIGNUP MODAL */}
      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowSignup(false)}>&times;</span>
            <h2>Signup</h2>

            <select
              className="modal-select"
              value={signupData.role}
              onChange={(e) => setSignupData({ ...signupData, role: e.target.value })}
            >
              <option value="customer">Customer</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>

            <input type="text" placeholder="Full Name"
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
            />

            <input type="email" placeholder="Email"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
            />

            <input type="password" placeholder="Password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />

            <button className="modal-btn" onClick={handleSignup}>Signup</button>
          </div>
        </div>
      )}

      {/* CAROUSEL */}
      <div
        className="carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((img, i) => (
            <div className="carousel-item" key={i}>
              <img src={img} className="carousel-img" alt="Slide" />
            </div>
          ))}
        </div>

        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => goToSlide(i)}
              className={`dot ${i === current ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>

      {/* CARDS */}
      <div className="cards-section">
        {cards.map((c, i) => (
          <div className="card" key={i}>
            <div className="emoji">{c.emoji}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <h2>Contact Us</h2>
        <p>
          📍 123, MG Road, Hyderabad, India <br />
          📞 +91 98765 43210 <br />
          ✉️ contact@rideonrentals.com
        </p>
        <p className="footer-note">© 2025 Ride On Rentals. All rights reserved.</p>
      </footer>
    </div>
  );
}

// ==============================
// 🌍 MAIN APP ROUTER
// ==============================
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/staff" element={<StaffLayout />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
