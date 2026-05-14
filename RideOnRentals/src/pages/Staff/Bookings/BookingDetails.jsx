import React from "react";

const BookingDetails = () => {
  const booking = {
    id: 1,
    customer: "Ravi Kumar",
    vehicle: "Tata Sumo (AC)",
    start: "2025-11-07 09:00 AM",
    end: "2025-11-07 06:00 PM",
    hours: 9,
    km: 120,
    perHour: 300,
    perKm: 20,
    nightHalt: 0,
  };

  const calcTotal = () => {
    const hourly = booking.perHour * booking.hours;
    const distance = booking.perKm * booking.km;
    const base = Math.max(hourly, distance);
    const minCharge = booking.perHour * 4;
    return Math.max(base, minCharge) + booking.nightHalt;
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Booking Details
      </h2>
      <div className="space-y-2 text-gray-700">
        <p><strong>Customer:</strong> {booking.customer}</p>
        <p><strong>Vehicle:</strong> {booking.vehicle}</p>
        <p><strong>Start:</strong> {booking.start}</p>
        <p><strong>End:</strong> {booking.end}</p>
        <p><strong>Hours Used:</strong> {booking.hours}</p>
        <p><strong>Kilometers Run:</strong> {booking.km} km</p>
        <p><strong>Total Charge:</strong> ₹{calcTotal()}</p>
      </div>
    </div>
  );
};

export default BookingDetails;
