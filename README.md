# 🚗 Ride On Rentals

A modern full-stack vehicle rental booking platform built using the MERN stack.  
The application allows customers to browse vehicles, check availability, and make bookings, while admins can manage vehicles, users, and booking operations through a dedicated dashboard.

---

# ✨ Features

- 🔐 JWT Authentication & Authorization
- 👥 Role-Based Access Control (Customer / Admin)
- 🚫 Booking Conflict Detection
- 🚗 Vehicle Availability Management
- 🔍 Advanced Vehicle Filtering
- 📋 Booking History Tracking
- 📊 Admin Dashboard
- 📱 Responsive User Interface
- ⚡ RESTful API Architecture

---

# 🛠️ Tech Stack

## Frontend
- React.js
- CSS Modules
- React Hooks

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- JWT (JSON Web Tokens)
- bcrypt.js

---

# 🏗️ System Architecture

```text
React Frontend
       ↓
Express REST API
       ↓
JWT Authentication Middleware
       ↓
Mongoose Models
       ↓
MongoDB Database
```

---

# 👤 User Roles

## Customer
- Register & Login
- Browse Vehicles
- Filter by Category
- Book Vehicles
- View Booking History

## Admin
- Manage Vehicles
- View All Bookings
- Manage Users
- Access Admin Dashboard
- Update Vehicle Status

---

# 📋 Booking Flow

1. User logs into the platform
2. Browse available vehicles
3. Select rental dates
4. System checks booking conflicts
5. Booking gets confirmed
6. Vehicle marked as unavailable

---

# 🔌 API Endpoints

## Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`

## Vehicles
- `GET /api/vehicles`
- `POST /api/vehicles`
- `PUT /api/vehicles/:id`
- `DELETE /api/vehicles/:id`

## Bookings
- `POST /api/bookings`
- `GET /api/bookings/me`
- `GET /api/bookings`

---

# 🗄️ Database Schema

## User
```js
{
  name,
  email,
  password,
  role
}
```

## Vehicle
```js
{
  name,
  category,
  pricePerDay,
  status,
  imageUrl,
  description
}
```

## Booking
```js
{
  userId,
  vehicleId,
  startDate,
  endDate,
  status
}
```

---

# 🚀 Installation & Setup

## Clone Repository

```bash
git clone YOUR_REPOSITORY_LINK
```

## Navigate to Project

```bash
cd ride-on-rentals
```

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

## Run Backend

```bash
npm start
```

---

# 🌟 Future Enhancements

- 💳 Online Payment Integration
- 📧 Email Notifications
- 📍 GPS Vehicle Tracking
- 📱 Mobile Application
- ⭐ Vehicle Reviews & Ratings
- 📈 Analytics Dashboard

---

# 📸 Screenshots

_Add project screenshots here_

---

# 📚 Learning Outcomes

This project demonstrates:
- Full-stack MERN development
- REST API design
- JWT authentication
- Role-based authorization
- MongoDB schema modeling
- Responsive frontend development
- Real-world booking logic implementation

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed by Yasaswine
