/*import express from "express";
import Vehicle from "../models/vehicleModel.js";

const router = express.Router();

// GET all vehicles
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new vehicle
/*
router.post("/", async (req, res) => {
  const { name, type, minCharge, extraPerHr, status, img } = req.body;

  if (!name || !minCharge || !img) {
    return res.status(400).json({ message: "Please fill all required fields!" });
  }

  const vehicle = new Vehicle({
    name,
    type: type || "Non-AC",
    minCharge,
    extraPerHr: extraPerHr || 100,
    status: status || "Available",
    img,
  });

  try {
    const savedVehicle = await vehicle.save();
    res.status(201).json(savedVehicle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
*/
/*
router.post("/", async (req, res) => {
  const { name, type, minCharge, extraPerHr, status, img } = req.body;

  if (!name || !minCharge || !img) {
    return res.status(400).json({ message: "Please fill all required fields!" });
  }

  try {
    const vehicle = new Vehicle({
      name,
      type: type || "Non-AC",
      minCharge: Number(minCharge),       // ✅ Convert to Number
      extraPerHr: Number(extraPerHr) || 100,  // ✅ Convert to Number
      status: status || "Available",
      img,
    });

    const savedVehicle = await vehicle.save();
    res.status(201).json(savedVehicle);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
*/
import express from "express";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

// TEST ROUTE
router.get("/test", (req, res) => {
  res.send("Vehicle route working");
});

// POST /api/vehicles
router.post("/", async (req, res) => {
  console.log("🔥 POST /api/vehicles HIT");
  console.log("📥 Body:", req.body);

  const { name, type, minCharge, extraPerHr, status, img } = req.body;

  if (!name || !minCharge || !img) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const vehicle = new Vehicle({
      name,
      type: type || "Non-AC",
      minCharge: Number(minCharge),
      extraPerHr: Number(extraPerHr) || 100,
      status: status || "Available",
      img,
    });

    const saved = await vehicle.save();
    console.log("✅ SAVED:", saved);

    res.status(201).json(saved);
  } catch (err) {
    console.log("❌ ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
