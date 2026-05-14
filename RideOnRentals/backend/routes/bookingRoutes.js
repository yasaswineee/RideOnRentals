/*import express from "express";
import { createBooking } from "../controllers/bookingController.js";

const router = express.Router();
router.post("/", createBooking);

export default router;
*/
/*
import express from "express";
import Booking from "../models/bookingModel.js";

const router = express.Router();

//  🧾 CREATE BOOKING
  //URL: POST /api/bookings
 
router.post("/", async (req, res) => {
  try {
    const { user, vehicleType, startDate, endDate, totalPrice } = req.body;

    const booking = new Booking({ user, vehicleType, startDate, endDate, totalPrice });
    await booking.save();

    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
});


 // GET ALL BOOKINGS
 // URL: GET /api/bookings
 
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user", "name email");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
});

export default router;
*/

/*
import express from "express";
import Booking from "../models/bookingModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking confirmed", booking: newBooking });
  } catch (err) {
    res.status(500).json({ message: "Error creating booking", error: err.message });
  }
});

export default router;
*/



// backend/routes/bookingRoutes.js
import express from "express";
import Booking from "../models/bookingModel.js";

const router = express.Router();

// POST /api/bookings
/*
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking saved successfully!", booking });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(400).json({ message: "Failed to save booking" });
  }
});

export default router;
*/
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking saved successfully!", booking });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ message: "Error saving booking" });
  }
});
export default router;

