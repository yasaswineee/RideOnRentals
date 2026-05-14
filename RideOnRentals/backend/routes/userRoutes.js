/*import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
*/
/*
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User route is working ✅");
});

export default router;
*/
/*
import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

export default router;
*/
/*
import express from "express";
const router = express.Router();

// Test route
/*
router.get("/", (req, res) => {
  res.send("✅ User API Working!");
});*/
/*
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});


export default router;
//final
*/
/*
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";   // ✅ You forgot this import!

const router = express.Router();


// ================================
// ⭐ REGISTER / SIGNUP
// ================================
router.post("/signup", async (req, res) => {
  try {
    const { role, name, email, password } = req.body;

    // Check if email already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const user = new User({
      role: role || "customer",
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User registered", user });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ================================
// ⭐ LOGIN
// ================================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email" });

    // Verify password
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Wrong password" });

    // Generate token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ message: "Login successful", token, user });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ================================
// ⭐ GET ALL CUSTOMERS (ADMIN)
// ================================
router.get("/customers", async (req, res) => {
  try {
    const customers = await User.find({ role: "customer" }).select("name email createdAt");
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: "Cannot fetch customers" });
  }
});

export default router;
*/
import express from "express";
import User from "../models/userModel.js";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// register OR signup
router.post("/register", registerUser); 
router.post("/signup", registerUser);  

// login
router.post("/login", loginUser);

// get all users (Admin Dashboard)
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password"); // hide passwords
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

export default router;
