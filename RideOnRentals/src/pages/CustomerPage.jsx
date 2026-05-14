/*import React, { useState } from "react";
import "../assets/styles/CustomerPage.css";
import BookingForm from "../components/BookingForm";

const CustomerPage = () => {
  const [vehicles] = useState([
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg",
      model: "Toyota Innova",
      chargePerHour: 500,
      chargePerKm: 20,
      available: true,
      minRentHours: 4,
      type: "AC",
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
      model: "Mahindra Bolero",
      chargePerHour: 400,
      chargePerKm: 18,
      available: false,
      minRentHours: 4,
      type: "Non-AC",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800",
      model: "Maruti Swift",
      chargePerHour: 350,
      chargePerKm: 15,
      available: true,
      minRentHours: 4,
      type: "AC",
    },
    {
      id: 4,
      image: "https://cdn.pixabay.com/photo/2017/03/27/14/56/car-2179220_1280.jpg",
      model: "Tata Sumo",
      chargePerHour: 300,
      chargePerKm: 14,
      available: true,
      minRentHours: 4,
      type: "Non-AC",
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800",
      model: "Hyundai Creta",
      chargePerHour: 550,
      chargePerKm: 22,
      available: false,
      minRentHours: 4,
      type: "AC",
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800",
      model: "Maruti Omni",
      chargePerHour: 280,
      chargePerKm: 12,
      available: true,
      minRentHours: 4,
      type: "Non-AC",
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
      model: "Honda City",
      chargePerHour: 600,
      chargePerKm: 25,
      available: true,
      minRentHours: 4,
      type: "AC",
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=800",
      model: "Mahindra Scorpio",
      chargePerHour: 480,
      chargePerKm: 19,
      available: false,
      minRentHours: 4,
      type: "AC",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");

  const handleBookNow = (carName) => {
    setSelectedCar(carName);
    setShowForm(true);
  };

  return (
    <div className="customer-page">
      <h1 className="page-title">Welcome to Ride On Rentals</h1>
      <p className="page-subtitle">
        Explore our fleet of vehicles and choose your ride!
      </p>

      <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
          <div className="vehicle-card" key={vehicle.id}>
            <img
              src={vehicle.image}
              alt={vehicle.model}
              className="vehicle-image"
            />
            <div className="vehicle-details">
              <h3>{vehicle.model}</h3>
              <p>
                <strong>Charge/hour:</strong> ₹{vehicle.chargePerHour}
              </p>
              <p>
                <strong>Charge/km:</strong> ₹{vehicle.chargePerKm}
              </p>
              <p>
                <strong>Availability:</strong>{" "}
                <span
                  className={vehicle.available ? "available" : "rented"}
                >
                  {vehicle.available ? "Available" : "Rented"}
                </span>
              </p>
              <p>
                <strong>Min Rent:</strong> {vehicle.minRentHours} hrs
              </p>
              <p>
                <strong>Type:</strong> {vehicle.type}
              </p>
              <button
                className="book-btn"
                disabled={!vehicle.available}
                onClick={() => handleBookNow(vehicle.model)}
              >
                {vehicle.available ? "Book Now" : "Rented"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <BookingForm
          selectedCar={selectedCar}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default CustomerPage;
*/
/*

import React, { useState } from "react";
import "../assets/styles/CustomerPage.css";
import BookingForm from "../components/BookingForm";
import { useNavigate } from "react-router-dom";

const CustomerPage = () => {
  const navigate = useNavigate();

  const [vehicles] = useState([
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg",
      model: "Toyota Innova",
      chargePerHour: 500,
      chargePerKm: 20,
      available: true,
      minRentHours: 4,
      type: "AC",
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
      model: "Mahindra Bolero",
      chargePerHour: 400,
      chargePerKm: 18,
      available: false,
      minRentHours: 4,
      type: "Non-AC",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800",
      model: "Maruti Swift",
      chargePerHour: 350,
      chargePerKm: 15,
      available: true,
      minRentHours: 4,
      type: "AC",
    },
    {
      id: 4,
      image: "https://cdn.pixabay.com/photo/2017/03/27/14/56/car-2179220_1280.jpg",
      model: "Tata Sumo",
      chargePerHour: 300,
      chargePerKm: 14,
      available: true,
      minRentHours: 4,
      type: "Non-AC",
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800",
      model: "Hyundai Creta",
      chargePerHour: 550,
      chargePerKm: 22,
      available: false,
      minRentHours: 4,
      type: "AC",
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800",
      model: "Maruti Omni",
      chargePerHour: 280,
      chargePerKm: 12,
      available: true,
      minRentHours: 4,
      type: "Non-AC",
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
      model: "Honda City",
      chargePerHour: 600,
      chargePerKm: 25,
      available: true,
      minRentHours: 4,
      type: "AC",
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=800",
      model: "Mahindra Scorpio",
      chargePerHour: 480,
      chargePerKm: 19,
      available: false,
      minRentHours: 4,
      type: "AC",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");

  const handleBookNow = (carName) => {
    setSelectedCar(carName);
    setShowForm(true);
  };

  return (
    <div className="customer-page">
    
      <div className="back-btn-container">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>

      <h1 className="page-title">Welcome to Ride On Rentals</h1>
      <p className="page-subtitle">
        Explore our fleet of vehicles and choose your ride!
      </p>

      <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
          <div className="vehicle-card" key={vehicle.id}>
            <img
              src={vehicle.image}
              alt={vehicle.model}
              className="vehicle-image"
            />
            <div className="vehicle-details">
              <h3>{vehicle.model}</h3>
              <p>
                <strong>Charge/hour:</strong> ₹{vehicle.chargePerHour}
              </p>
              <p>
                <strong>Charge/km:</strong> ₹{vehicle.chargePerKm}
              </p>
              <p>
                <strong>Availability:</strong>{" "}
                <span
                  className={vehicle.available ? "available" : "rented"}
                >
                  {vehicle.available ? "Available" : "Rented"}
                </span>
              </p>
              <p>
                <strong>Min Rent:</strong> {vehicle.minRentHours} hrs
              </p>
              <p>
                <strong>Type:</strong> {vehicle.type}
              </p>
              <button
                className="book-btn"
                disabled={!vehicle.available}
                onClick={() => handleBookNow(vehicle.model)}
              >
                {vehicle.available ? "Book Now" : "Rented"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <BookingForm
          selectedCar={selectedCar}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default CustomerPage;
*/
import React, { useState } from "react";
import "../assets/styles/CustomerPage.css";
import BookingForm from "../components/BookingForm";
import { useNavigate } from "react-router-dom";

// ✅ Importing Local Images
import toyotaImg from "../assets/images/toyota.jpeg";
import boleroImg from "../assets/images/bolero.jpeg";
import swiftImg from "../assets/images/swift.jpeg";
import sumoImg from "../assets/images/sumo.jpeg";
import cretaImg from "../assets/images/creta.jpeg";
import omniImg from "../assets/images/omni.jpeg";
import hondacityImg from "../assets/images/hondacity.jpeg";
import scorpioImg from "../assets/images/scorpio.jpeg";

const CustomerPage = () => {
  const navigate = useNavigate();

  const [vehicles] = useState([
    {
      id: 1,
      image: toyotaImg,
      model: "Toyota Innova",
      chargePerHour: 500,
      chargePerKm: 20,
      available: true,
      minRentHours: 4,
      type: "AC",
    },
    {
      id: 2,
      image: boleroImg,
      model: "Mahindra Bolero",
      chargePerHour: 400,
      chargePerKm: 18,
      available: false,
      minRentHours: 4,
      type: "Non-AC",
    },
    {
      id: 3,
      image: swiftImg,
      model: "Maruti Swift",
      chargePerHour: 350,
      chargePerKm: 15,
      available: true,
      minRentHours: 4,
      type: "AC",
    },
    {
      id: 4,
      image: sumoImg,
      model: "Tata Sumo",
      chargePerHour: 300,
      chargePerKm: 14,
      available: true,
      minRentHours: 4,
      type: "Non-AC",
    },
    {
      id: 5,
      image: cretaImg,
      model: "Hyundai Creta",
      chargePerHour: 550,
      chargePerKm: 22,
      available: false,
      minRentHours: 4,
      type: "AC",
    },
    {
      id: 6,
      image: omniImg,
      model: "Maruti Omni",
      chargePerHour: 280,
      chargePerKm: 12,
      available: true,
      minRentHours: 4,
      type: "Non-AC",
    },
    {
      id: 7,
      image: hondacityImg,
      model: "Honda City",
      chargePerHour: 600,
      chargePerKm: 25,
      available: true,
      minRentHours: 4,
      type: "AC",
    },
    {
      id: 8,
      image: scorpioImg,
      model: "Mahindra Scorpio",
      chargePerHour: 480,
      chargePerKm: 19,
      available: false,
      minRentHours: 4,
      type: "AC",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");

  const handleBookNow = (carName) => {
    setSelectedCar(carName);
    setShowForm(true);
  };

  return (
    <div className="customer-page">

      {/* Back Button */}
      <div className="back-btn-container">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>

      <h1 className="page-title">Welcome to Ride On Rentals</h1>
      <p className="page-subtitle">
        Explore our fleet of vehicles and choose your ride!
      </p>

      <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
          <div className="vehicle-card" key={vehicle.id}>
            <img
              src={vehicle.image}
              alt={vehicle.model}
              className="vehicle-image"
            />
            <div className="vehicle-details">
              <h3>{vehicle.model}</h3>
              <p><strong>Charge/hour:</strong> ₹{vehicle.chargePerHour}</p>
              <p><strong>Charge/km:</strong> ₹{vehicle.chargePerKm}</p>
              <p>
                <strong>Availability:</strong>{" "}
                <span className={vehicle.available ? "available" : "rented"}>
                  {vehicle.available ? "Available" : "Rented"}
                </span>
              </p>
              <p><strong>Min Rent:</strong> {vehicle.minRentHours} hrs</p>
              <p><strong>Type:</strong> {vehicle.type}</p>

              <button
                className="book-btn"
                disabled={!vehicle.available}
                onClick={() => handleBookNow(vehicle.model)}
              >
                {vehicle.available ? "Book Now" : "Rented"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <BookingForm
          selectedCar={selectedCar}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default CustomerPage;
