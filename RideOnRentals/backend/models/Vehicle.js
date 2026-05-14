import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, default: "Non-AC" },
  minCharge: { type: Number, required: true },
  extraPerHr: { type: Number, default: 100 },
  status: { type: String, default: "Available" },
  img: { type: String, required: true },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;
