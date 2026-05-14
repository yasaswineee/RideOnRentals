import { useState } from "react";

const sections = {
  overview: {
    label: "Overview",
    icon: "🚗",
  },
  techstack: {
    label: "Tech Stack",
    icon: "⚙️",
  },
  architecture: {
    label: "Architecture",
    icon: "🏗️",
  },
  features: {
    label: "Features",
    icon: "✨",
  },
  bookingflow: {
    label: "Booking Flow",
    icon: "📋",
  },
  api: {
    label: "API Endpoints",
    icon: "🔌",
  },
  schema: {
    label: "DB Schema",
    icon: "🗄️",
  },
  setup: {
    label: "Setup",
    icon: "🚀",
  },
  future: {
    label: "Roadmap",
    icon: "🛣️",
  },
};

const techData = [
  {
    layer: "Frontend",
    tech: "React.js",
    icon: "⚛️",
    color: "#61DAFB",
    desc: "Component-based UI with dynamic filtering, booking forms, and role-specific dashboards",
  },
  {
    layer: "Backend",
    tech: "Node.js + Express",
    icon: "🟢",
    color: "#68A063",
    desc: "RESTful API server handling auth, bookings, vehicle management, and conflict detection",
  },
  {
    layer: "Database",
    tech: "MongoDB + Mongoose",
    icon: "🍃",
    color: "#47A248",
    desc: "NoSQL document store with schemas for Users, Vehicles, and Bookings",
  },
  {
    layer: "Auth",
    tech: "JWT + bcrypt",
    icon: "🔐",
    color: "#F7DF1E",
    desc: "Stateless JWT tokens with role-based middleware and bcrypt password hashing",
  },
  {
    layer: "Styling",
    tech: "CSS Modules",
    icon: "🎨",
    color: "#FF6B6B",
    desc: "Scoped responsive styles for all components and pages",
  },
];

const features = [
  {
    icon: "🔑",
    title: "JWT Authentication",
    desc: "Stateless secure login with token expiry and refresh handling. Passwords hashed using bcrypt before storage.",
    tag: "Security",
    tagColor: "#FF6B6B",
  },
  {
    icon: "👥",
    title: "Role-Based Access",
    desc: "Customers book and track rentals. Admins manage inventory, users, and all bookings via a dedicated dashboard.",
    tag: "Access Control",
    tagColor: "#845EF7",
  },
  {
    icon: "🚫",
    title: "Conflict Detection",
    desc: "Before confirming any booking, the system checks for date overlaps on the same vehicle and rejects conflicts.",
    tag: "Core Logic",
    tagColor: "#20C997",
  },
  {
    icon: "🔍",
    title: "Vehicle Filtering",
    desc: "Filter vehicles by category, availability window, and price range with real-time UI updates.",
    tag: "UX",
    tagColor: "#339AF0",
  },
  {
    icon: "📊",
    title: "Admin Dashboard",
    desc: "Full control panel to add/edit/delete vehicles, view booking status, and manage all registered users.",
    tag: "Admin",
    tagColor: "#FF922B",
  },
  {
    icon: "📜",
    title: "Booking History",
    desc: "Customers can view all past and active bookings with dates, vehicle details, and current status.",
    tag: "Customer",
    tagColor: "#51CF66",
  },
];

const apiEndpoints = [
  { method: "POST", path: "/api/auth/register", desc: "Register a new user account", access: "Public", color: "#20C997" },
  { method: "POST", path: "/api/auth/login", desc: "Login and receive JWT token", access: "Public", color: "#20C997" },
  { method: "GET", path: "/api/vehicles", desc: "Fetch all available vehicles", access: "Public", color: "#339AF0" },
  { method: "POST", path: "/api/vehicles", desc: "Add a new vehicle to inventory", access: "Admin", color: "#FF922B" },
  { method: "PUT", path: "/api/vehicles/:id", desc: "Update vehicle details", access: "Admin", color: "#FF922B" },
  { method: "DELETE", path: "/api/vehicles/:id", desc: "Remove vehicle from inventory", access: "Admin", color: "#FF6B6B" },
  { method: "POST", path: "/api/bookings", desc: "Create a new booking with conflict check", access: "Customer", color: "#845EF7" },
  { method: "GET", path: "/api/bookings/me", desc: "Fetch current user's booking history", access: "Customer", color: "#845EF7" },
  { method: "GET", path: "/api/bookings", desc: "Fetch all bookings across platform", access: "Admin", color: "#FF922B" },
];

const roadmap = [
  { icon: "💳", title: "Payment Gateway", desc: "Integrate Razorpay or Stripe for seamless online payments at booking confirmation.", status: "Planned" },
  { icon: "📧", title: "Email Notifications", desc: "Send booking confirmations and reminders via NodeMailer with HTML templates.", status: "Planned" },
  { icon: "📍", title: "GPS Tracking", desc: "Real-time vehicle location for admins using Google Maps API integration.", status: "Planned" },
  { icon: "📱", title: "Mobile App", desc: "React Native version for iOS and Android with native notifications.", status: "Future" },
  { icon: "⭐", title: "Review System", desc: "Allow customers to rate vehicles and leave reviews after rental completion.", status: "Future" },
  { icon: "📈", title: "Analytics Dashboard", desc: "Revenue charts, popular vehicles, and peak booking periods for admin insights.", status: "Future" },
];

const bookingSteps = [
  { step: 1, icon: "🔐", title: "Login", desc: "User authenticates and receives a JWT token stored in local state" },
  { step: 2, icon: "🔍", title: "Browse", desc: "Filter vehicles by category, dates, and availability" },
  { step: 3, icon: "📅", title: "Select Dates", desc: "Choose rental start and end dates from the booking form" },
  { step: 4, icon: "⚡", title: "Conflict Check", desc: "Backend validates no overlapping bookings exist for that vehicle" },
  { step: 5, icon: "✅", title: "Confirm", desc: "Booking saved to MongoDB and appears in customer's history" },
  { step: 6, icon: "🚗", title: "Rental Active", desc: "Vehicle marked as booked for the selected period" },
];

const schemaNodes = [
  {
    name: "User",
    color: "#339AF0",
    icon: "👤",
    fields: ["_id", "name", "email", "password (hashed)", "role: customer|admin", "createdAt"],
  },
  {
    name: "Vehicle",
    color: "#20C997",
    icon: "🚗",
    fields: ["_id", "name", "category", "pricePerDay", "status: available|booked", "imageUrl", "description"],
  },
  {
    name: "Booking",
    color: "#845EF7",
    icon: "📋",
    fields: ["_id", "userId (ref: User)", "vehicleId (ref: Vehicle)", "startDate", "endDate", "status: active|completed|cancelled"],
  },
];

const methodColors = {
  GET: "#339AF0",
  POST: "#20C997",
  PUT: "#FF922B",
  DELETE: "#FF6B6B",
};

export default function App() {
  const [active, setActive] = useState("overview");
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredApi, setHoveredApi] = useState(null);
  const [expandedSchema, setExpandedSchema] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0D1117",
      color: "#E6EDF3",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #161B22 0%, #0D1117 100%)",
        borderBottom: "1px solid #21262D",
        padding: "32px 24px 0",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 36 }}>🚗</span>
            <div>
              <h1 style={{
                margin: 0,
                fontSize: 28,
                fontWeight: 700,
                fontFamily: "'Segoe UI', sans-serif",
                background: "linear-gradient(90deg, #58A6FF, #79C0FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Ride On Rentals</h1>
              <p style={{ margin: 0, color: "#8B949E", fontSize: 13 }}>Full-Stack Vehicle Rental Platform · MERN Stack</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 0, marginTop: 16 }}>
            {["MongoDB", "Express.js", "React.js", "Node.js", "JWT"].map(t => (
              <span key={t} style={{
                background: "#21262D",
                border: "1px solid #30363D",
                borderRadius: 20,
                padding: "3px 10px",
                fontSize: 11,
                color: "#79C0FF",
              }}>{t}</span>
            ))}
          </div>
          {/* Nav */}
          <div style={{ display: "flex", gap: 0, marginTop: 20, overflowX: "auto" }}>
            {Object.entries(sections).map(([key, { label, icon }]) => (
              <button key={key} onClick={() => setActive(key)} style={{
                background: "none",
                border: "none",
                borderBottom: active === key ? "2px solid #58A6FF" : "2px solid transparent",
                color: active === key ? "#58A6FF" : "#8B949E",
                padding: "8px 14px",
                cursor: "pointer",
                fontSize: 12,
                fontFamily: "inherit",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}>{icon} {label}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 24px" }}>

        {/* OVERVIEW */}
        {active === "overview" && (
          <div>
            <p style={{ color: "#C9D1D9", lineHeight: 1.8, fontSize: 14, marginBottom: 24 }}>
              Ride On Rentals is a full-stack vehicle rental booking platform built with the MERN stack.
              Users can browse available vehicles, check real-time availability, and complete bookings through
              a clean responsive interface. The platform supports two user roles — <span style={{ color: "#58A6FF" }}>Customer</span> and <span style={{ color: "#FF922B" }}>Admin</span> — each
              with dedicated flows, access controls, and dashboards.
            </p>

            {/* Role comparison mindmap-style */}
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ color: "#8B949E", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>User Roles</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { role: "Customer", color: "#58A6FF", icon: "👤", perms: ["Register & Login", "Browse Vehicles", "Filter by category & availability", "Make Bookings", "View Booking History"] },
                  { role: "Admin", color: "#FF922B", icon: "🛡️", perms: ["All customer permissions", "Add / Edit / Delete Vehicles", "View all platform bookings", "Manage registered users", "Access Admin Dashboard"] },
                ].map(r => (
                  <div key={r.role} style={{
                    background: "#161B22",
                    border: `1px solid ${r.color}40`,
                    borderRadius: 12,
                    padding: 20,
                  }}>
                    <div style={{ fontSize: 22, marginBottom: 8 }}>{r.icon}</div>
                    <div style={{ color: r.color, fontWeight: 700, marginBottom: 12, fontSize: 15 }}>{r.role}</div>
                    {r.perms.map(p => (
                      <div key={p} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{ color: r.color, fontSize: 10 }}>▶</span>
                        <span style={{ color: "#C9D1D9", fontSize: 12 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {[
                { label: "API Endpoints", value: "9", icon: "🔌" },
                { label: "DB Collections", value: "3", icon: "🗄️" },
                { label: "User Roles", value: "2", icon: "👥" },
                { label: "Tech Layers", value: "5", icon: "⚙️" },
              ].map(s => (
                <div key={s.label} style={{
                  background: "#161B22",
                  border: "1px solid #21262D",
                  borderRadius: 10,
                  padding: "16px 12px",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#58A6FF" }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "#8B949E" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TECH STACK */}
        {active === "techstack" && (
          <div>
            <h3 style={{ color: "#8B949E", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 20 }}>Technology Stack</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {techData.map((t, i) => (
                <div key={i} style={{
                  background: "#161B22",
                  border: "1px solid #21262D",
                  borderRadius: 12,
                  padding: 20,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  transition: "border-color 0.2s",
                  borderLeft: `3px solid ${t.color}`,
                }}>
                  <span style={{ fontSize: 24, minWidth: 32 }}>{t.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <span style={{ color: "#8B949E", fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>{t.layer}</span>
                      <span style={{ color: t.color, fontWeight: 700, fontSize: 14 }}>{t.tech}</span>
                    </div>
                    <p style={{ margin: 0, color: "#8B949E", fontSize: 13, lineHeight: 1.6 }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ARCHITECTURE */}
        {active === "architecture" && (
          <div>
            <h3 style={{ color: "#8B949E", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 20 }}>System Architecture</h3>
            {/* Visual flow */}
            <div style={{
              background: "#161B22",
              border: "1px solid #21262D",
              borderRadius: 12,
              padding: 28,
              marginBottom: 20,
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, flexWrap: "wrap" }}>
                {[
                  { label: "React.js", sub: "Frontend", color: "#61DAFB", icon: "⚛️" },
                  { arrow: true },
                  { label: "Express API", sub: "REST Endpoints", color: "#68A063", icon: "🟢" },
                  { arrow: true },
                  { label: "JWT Middleware", sub: "Auth Guard", color: "#F7DF1E", icon: "🔐" },
                  { arrow: true },
                  { label: "Mongoose", sub: "ORM Layer", color: "#880000", icon: "🍃" },
                  { arrow: true },
                  { label: "MongoDB", sub: "Database", color: "#47A248", icon: "🗄️" },
                ].map((node, i) =>
                  node.arrow ? (
                    <div key={i} style={{ color: "#30363D", fontSize: 20, padding: "0 4px" }}>→</div>
                  ) : (
                    <div key={i} style={{
                      background: "#0D1117",
                      border: `1px solid ${node.color}50`,
                      borderRadius: 10,
                      padding: "12px 16px",
                      textAlign: "center",
                      minWidth: 100,
                    }}>
                      <div style={{ fontSize: 18, marginBottom: 4 }}>{node.icon}</div>
                      <div style={{ color: node.color, fontSize: 12, fontWeight: 700 }}>{node.label}</div>
                      <div style={{ color: "#8B949E", fontSize: 10 }}>{node.sub}</div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Layer descriptions */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { title: "Client Layer", color: "#61DAFB", desc: "React.js app handles routing, state management, and renders role-specific UI for customer and admin flows." },
                { title: "API Layer", color: "#68A063", desc: "Express.js REST server processes HTTP requests, applies JWT middleware, and delegates to controllers." },
                { title: "Auth Layer", color: "#F7DF1E", desc: "JWT middleware validates tokens on protected routes. Role checks enforce customer vs admin access." },
                { title: "Data Layer", color: "#47A248", desc: "Mongoose models define schemas and handle CRUD operations. MongoDB stores all application data." },
              ].map((l, i) => (
                <div key={i} style={{
                  background: "#161B22",
                  border: `1px solid ${l.color}30`,
                  borderRadius: 10,
                  padding: 16,
                }}>
                  <div style={{ color: l.color, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{l.title}</div>
                  <p style={{ margin: 0, color: "#8B949E", fontSize: 12, lineHeight: 1.6 }}>{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FEATURES */}
        {active === "features" && (
          <div>
            <h3 style={{ color: "#8B949E", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 20 }}>Core Features</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {features.map((f, i) => (
                <div key={i}
                  onMouseEnter={() => setHoveredFeature(i)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  style={{
                    background: hoveredFeature === i ? "#161B22" : "#0D1117",
                    border: `1px solid ${hoveredFeature === i ? f.tagColor + "60" : "#21262D"}`,
                    borderRadius: 12,
                    padding: 20,
                    cursor: "default",
                    transition: "all 0.2s",
                  }}>
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{f.icon}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ color: "#E6EDF3", fontWeight: 700, fontSize: 13 }}>{f.title}</span>
                    <span style={{
                      background: f.tagColor + "20",
                      color: f.tagColor,
                      border: `1px solid ${f.tagColor}40`,
                      borderRadius: 20,
                      padding: "1px 8px",
                      fontSize: 10,
                    }}>{f.tag}</span>
                  </div>
                  <p style={{ margin: 0, color: "#8B949E", fontSize: 12, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BOOKING FLOW */}
        {active === "bookingflow" && (
          <div>
            <h3 style={{ color: "#8B949E", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 20 }}>Booking Flow</h3>
            <div style={{ position: "relative" }}>
              {bookingSteps.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 8 }}>
                  {/* Timeline */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 40 }}>
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: i === 3 ? "#FF6B6B20" : "#58A6FF20",
                      border: `2px solid ${i === 3 ? "#FF6B6B" : "#58A6FF"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                    }}>{s.icon}</div>
                    {i < bookingSteps.length - 1 && (
                      <div style={{ width: 2, flex: 1, background: "#21262D", margin: "4px 0", minHeight: 20 }} />
                    )}
                  </div>
                  {/* Content */}
                  <div style={{
                    background: "#161B22",
                    border: `1px solid ${i === 3 ? "#FF6B6B30" : "#21262D"}`,
                    borderRadius: 10,
                    padding: "14px 18px",
                    flex: 1,
                    marginBottom: 4,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ color: "#8B949E", fontSize: 10 }}>STEP {s.step}</span>
                      <span style={{ color: i === 3 ? "#FF6B6B" : "#58A6FF", fontWeight: 700, fontSize: 13 }}>{s.title}</span>
                      {i === 3 && <span style={{ color: "#FF6B6B", fontSize: 10, background: "#FF6B6B20", padding: "1px 6px", borderRadius: 10 }}>Conflict Check</span>}
                    </div>
                    <p style={{ margin: 0, color: "#8B949E", fontSize: 12, lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Conflict logic box */}
            <div style={{
              background: "#FF6B6B10",
              border: "1px solid #FF6B6B40",
              borderRadius: 10,
              padding: 18,
              marginTop: 16,
            }}>
              <div style={{ color: "#FF6B6B", fontWeight: 700, marginBottom: 8, fontSize: 13 }}>⚡ Conflict Detection Logic</div>
              <p style={{ margin: 0, color: "#8B949E", fontSize: 12, lineHeight: 1.6 }}>
                When a booking request comes in, the backend queries MongoDB for any existing bookings on the same vehicle where
                the requested dates overlap: <span style={{ color: "#79C0FF" }}>startDate &lt; existingEnd AND endDate &gt; existingStart</span>.
                If a conflict is found, the API returns a 409 error and the booking is rejected before saving.
              </p>
            </div>
          </div>
        )}

        {/* API */}
        {active === "api" && (
          <div>
            <h3 style={{ color: "#8B949E", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 20 }}>API Endpoints</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {apiEndpoints.map((ep, i) => (
                <div key={i}
                  onMouseEnter={() => setHoveredApi(i)}
                  onMouseLeave={() => setHoveredApi(null)}
                  style={{
                    background: hoveredApi === i ? "#161B22" : "#0D1117",
                    border: `1px solid ${hoveredApi === i ? methodColors[ep.method] + "50" : "#21262D"}`,
                    borderRadius: 10,
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    transition: "all 0.2s",
                    cursor: "default",
                  }}>
                  <span style={{
                    background: methodColors[ep.method] + "20",
                    color: methodColors[ep.method],
                    border: `1px solid ${methodColors[ep.method]}40`,
                    borderRadius: 6,
                    padding: "3px 8px",
                    fontSize: 11,
                    fontWeight: 700,
                    minWidth: 52,
                    textAlign: "center",
                  }}>{ep.method}</span>
                  <span style={{ color: "#79C0FF", fontSize: 12, minWidth: 220, fontFamily: "monospace" }}>{ep.path}</span>
                  <span style={{ color: "#8B949E", fontSize: 12, flex: 1 }}>{ep.desc}</span>
                  <span style={{
                    background: ep.access === "Public" ? "#20C99720" : ep.access === "Admin" ? "#FF922B20" : "#845EF720",
                    color: ep.access === "Public" ? "#20C997" : ep.access === "Admin" ? "#FF922B" : "#845EF7",
                    borderRadius: 20,
                    padding: "2px 10px",
                    fontSize: 10,
                  }}>{ep.access}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCHEMA */}
        {active === "schema" && (
          <div>
            <h3 style={{ color: "#8B949E", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 20 }}>Database Schema</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 20 }}>
              {schemaNodes.map((s, i) => (
                <div key={i}
                  onClick={() => setExpandedSchema(expandedSchema === i ? null : i)}
                  style={{
                    background: "#161B22",
                    border: `1px solid ${expandedSchema === i ? s.color : s.color + "40"}`,
                    borderRadius: 12,
                    padding: 18,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ color: s.color, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>{s.name}</div>
                  {s.fields.map((f, j) => (
                    <div key={j} style={{
                      fontSize: 11,
                      color: f.includes("ref:") ? "#F7DF1E" : f.includes("_id") ? "#58A6FF" : "#8B949E",
                      marginBottom: 4,
                      fontFamily: "monospace",
                    }}>· {f}</div>
                  ))}
                  <div style={{ color: s.color, fontSize: 10, marginTop: 8 }}>click to highlight</div>
                </div>
              ))}
            </div>

            {/* Relations */}
            <div style={{
              background: "#161B22",
              border: "1px solid #21262D",
              borderRadius: 12,
              padding: 20,
            }}>
              <div style={{ color: "#8B949E", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>Relationships</div>
              {[
                { from: "User", to: "Booking", rel: "1 → Many", desc: "One user can have multiple bookings over time", color: "#339AF0" },
                { from: "Vehicle", to: "Booking", rel: "1 → Many", desc: "One vehicle can appear in multiple bookings across different dates", color: "#20C997" },
                { from: "Booking", to: "User + Vehicle", rel: "References", desc: "Each booking stores userId and vehicleId as ObjectId references", color: "#845EF7" },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                  <div style={{
                    background: r.color + "20",
                    color: r.color,
                    border: `1px solid ${r.color}40`,
                    borderRadius: 6,
                    padding: "3px 8px",
                    fontSize: 10,
                    whiteSpace: "nowrap",
                  }}>{r.from} → {r.to}</div>
                  <div>
                    <span style={{ color: r.color, fontSize: 11, fontWeight: 700 }}>{r.rel} · </span>
                    <span style={{ color: "#8B949E", fontSize: 12 }}>{r.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SETUP */}
        {active === "setup" && (
          <div>
            <h3 style={{ color: "#8B949E", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 20 }}>Getting Started</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { step: 1, title: "Clone the Repository", cmd: "git clone https://github.com/yourusername/ride-on-rentals.git\ncd ride-on-rentals", color: "#58A6FF" },
                { step: 2, title: "Install Dependencies", cmd: "cd client && npm install\ncd ../server && npm install", color: "#20C997" },
                { step: 3, title: "Configure Environment", cmd: "# Create /server/.env\nMONGO_URI=your_mongodb_connection_string\nJWT_SECRET=your_jwt_secret_key\nPORT=5000", color: "#F7DF1E" },
                { step: 4, title: "Run the App", cmd: "# Terminal 1 — Backend\ncd server && npm start\n\n# Terminal 2 — Frontend\ncd client && npm start", color: "#FF922B" },
              ].map((s, i) => (
                <div key={i} style={{
                  background: "#161B22",
                  border: `1px solid ${s.color}30`,
                  borderRadius: 12,
                  overflow: "hidden",
                }}>
                  <div style={{
                    background: s.color + "15",
                    borderBottom: `1px solid ${s.color}30`,
                    padding: "10px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}>
                    <span style={{
                      background: s.color,
                      color: "#0D1117",
                      borderRadius: "50%",
                      width: 22,
                      height: 22,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      fontWeight: 700,
                    }}>{s.step}</span>
                    <span style={{ color: s.color, fontWeight: 700, fontSize: 13 }}>{s.title}</span>
                  </div>
                  <pre style={{
                    margin: 0,
                    padding: 16,
                    fontSize: 12,
                    color: "#C9D1D9",
                    fontFamily: "monospace",
                    lineHeight: 1.7,
                    background: "transparent",
                  }}>{s.cmd}</pre>
                </div>
              ))}
            </div>
            <div style={{
              background: "#58A6FF10",
              border: "1px solid #58A6FF30",
              borderRadius: 10,
              padding: 14,
              marginTop: 16,
              fontSize: 12,
              color: "#8B949E",
            }}>
              🌐 Frontend runs at <span style={{ color: "#79C0FF" }}>localhost:3000</span> · Backend at <span style={{ color: "#79C0FF" }}>localhost:5000</span>
            </div>
          </div>
        )}

        {/* ROADMAP */}
        {active === "future" && (
          <div>
            <h3 style={{ color: "#8B949E", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 20 }}>Roadmap</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {roadmap.map((r, i) => (
                <div key={i} style={{
                  background: "#161B22",
                  border: `1px solid ${r.status === "Planned" ? "#58A6FF30" : "#21262D"}`,
                  borderRadius: 12,
                  padding: 18,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{r.icon}</span>
                    <span style={{ color: "#E6EDF3", fontWeight: 700, fontSize: 13 }}>{r.title}</span>
                    <span style={{
                      marginLeft: "auto",
                      background: r.status === "Planned" ? "#58A6FF20" : "#8B949E20",
                      color: r.status === "Planned" ? "#58A6FF" : "#8B949E",
                      borderRadius: 20,
                      padding: "1px 8px",
                      fontSize: 10,
                    }}>{r.status}</span>
                  </div>
                  <p style={{ margin: 0, color: "#8B949E", fontSize: 12, lineHeight: 1.6 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
