import Booking from "../models/bookingModel.js";

export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking successful", booking });
  } catch (error) {
    res.status(500).json({ message: "Error saving booking", error: error.message });
  }
};
