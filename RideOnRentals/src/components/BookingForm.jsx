
/*import React, { useState } from "react";
import "../assets/styles/BookingForm.css";

const BookingForm = ({ selectedCar, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    car: selectedCar || "",
    duration: "",
    kilometers: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    alert(`✅ Booking Confirmed for ${formData.name} (${formData.car})`);
    onClose();
  } catch (err) {
    alert("Error saving booking!");
  }
};



  return (
    <div className="booking-overlay">
      <div className="booking-container">
        <h2>Vehicle Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Customer Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Contact Number:</label>
          <input
            type="tel"
            name="contact"
            placeholder="Enter contact number"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <label>Select Car:</label>
          <select
            name="car"
            value={formData.car}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a Vehicle --</option>
            <option value="Maruti Swift">Maruti Swift</option>
            <option value="Hyundai Creta">Hyundai Creta</option>
            <option value="Maruti Omni">Maruti Omni</option>
            <option value="Honda City">Honda City</option>
            <option value="Mahindra Scorpio">Mahindra Scorpio</option>
          </select>

          <label>Duration (in hours):</label>
          <input
            type="number"
            name="duration"
            placeholder="Enter rental duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />

          <label>Number of Kilometers:</label>
          <input
            type="number"
            name="kilometers"
            placeholder="Enter total km"
            value={formData.kilometers}
            onChange={handleChange}
            required
          />

          <label>Payment Option:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Payment Method --</option>
            <option value="UPI">UPI</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Cash">Cash</option>
          </select>

          <button type="submit" className="confirm-btn">
            Confirm Booking
          </button>
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
*/

import React, { useState, useEffect } from "react";
import "../assets/styles/BookingForm.css";

const BookingForm = ({ selectedCar, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    car: selectedCar || "",
    duration: "",
    kilometers: "",
    paymentMethod: "",
  });

  const [amount, setAmount] = useState(0);

  // Rates for each car
  const rateChart = {
    "Maruti Swift": { perHour: 150, perKm: 10 },
    "Hyundai Creta": { perHour: 200, perKm: 13 },
    "Maruti Omni": { perHour: 100, perKm: 8 },
    "Honda City": { perHour: 220, perKm: 14 },
    "Mahindra Scorpio": { perHour: 250, perKm: 15 },
  };

  // Auto calculate amount whenever inputs change
  useEffect(() => {
    const { car, duration, kilometers } = formData;

    if (car && duration && kilometers) {
      const rates = rateChart[car];
      const total =
        duration * rates.perHour + kilometers * rates.perKm;

      setAmount(total);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = { ...formData, amount };

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message);

      alert(`✅ Booking Confirmed!
Customer: ${formData.name}
Vehicle: ${formData.car}
Amount: ₹${amount}`);

      onClose();
    } catch (err) {
      alert("Error saving booking!");
    }
  };

  return (
    <div className="booking-overlay">
      <div className="booking-container">
        <h2>Vehicle Booking Form</h2>

        <form onSubmit={handleSubmit}>
          <label>Customer Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Contact Number:</label>
          <input
            type="tel"
            name="contact"
            placeholder="Enter contact number"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <label>Select Car:</label>
          <select
            name="car"
            value={formData.car}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a Vehicle --</option>
            <option value="Maruti Swift">Maruti Swift</option>
            <option value="Hyundai Creta">Hyundai Creta</option>
            <option value="Maruti Omni">Maruti Omni</option>
            <option value="Honda City">Honda City</option>
            <option value="Mahindra Scorpio">Mahindra Scorpio</option>
          </select>

          <label>Duration (in hours):</label>
          <input
            type="number"
            name="duration"
            placeholder="Enter rental duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />

          <label>Number of Kilometers:</label>
          <input
            type="number"
            name="kilometers"
            placeholder="Enter total km"
            value={formData.kilometers}
            onChange={handleChange}
            required
          />

          {/* Display Calculated Amount */}
          <label>Total Amount:</label>
          <input
            type="text"
            value={amount ? `₹ ${amount}` : "Enter details to calculate"}
            readOnly
          />

          <label>Payment Option:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Payment Method --</option>
            <option value="UPI">UPI</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Cash">Cash</option>
          </select>

          <button type="submit" className="confirm-btn">
            Confirm Booking
          </button>
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
