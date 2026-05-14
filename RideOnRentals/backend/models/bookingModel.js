/*import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  contact: String,
  car: String,
  duration: Number,
  kilometers: Number,
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", bookingSchema);
*/

/*

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    vehicleType: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
*/





// backend/models/Booking.js
/*
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    car: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    kilometers: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
*/
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    car: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    kilometers: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },

    // ⭐ NEW FIELD — STORE CALCULATED AMOUNT
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
