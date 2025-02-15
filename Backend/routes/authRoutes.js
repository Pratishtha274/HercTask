// // const express = require("express");
// // const bcrypt = require("bcrypt");
// // const jwt = require("jsonwebtoken");
// // const User = require("../models/User");

// // const router = express.Router();
// // const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Fallback for local testing

// // // Signup Route
// // router.post("/signup", async (req, res) => {
// //     try {
// //         const { name, email, password } = req.body;

// //         // Check if user already exists
// //         let user = await User.findOne({ email });
// //         if (user) return res.status(400).json({ message: "User already exists" });

// //         // Hash password before saving
// //         const salt = await bcrypt.genSalt(10);
// //         const hashedPassword = await bcrypt.hash(password, salt);

// //         // Create user
// //         user = new User({ name, email, password: hashedPassword });
// //         await user.save();

// //         res.status(201).json({ message: "User registered successfully" });
// //     } catch (error) {
// //         res.status(500).json({ message: "Error creating user", error });
// //     }
// // });

// // // Login Route
// // router.post("/login", async (req, res) => {
// //     const { email, password } = req.body;

// //     try {
// //         const user = await User.findOne({ email }); // Fix: Use User model
// //         if (!user) {
// //             return res.status(400).json({ error: "Invalid credentials" });
// //         }

// //         const isPasswordValid = await bcrypt.compare(password, user.password);
// //         if (!isPasswordValid) {
// //             return res.status(401).json({ error: "Invalid credentials" });
// //         }

// //         const token = jwt.sign({ userId: user._id, name: user.name }, JWT_SECRET, { expiresIn: "1h" });

// //         res.json({ message: "Login successful", token });
// //     } catch (err) {
// //         res.status(500).json({ error: "Internal server error" });
// //     }
// // });

// // module.exports = router;
// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const router = express.Router();
// const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Fallback for local testing

// // Signup Route
// router.post("/signup", async (req, res) => {
//     try {
//         console.log("Signup request received:", req.body);

//         const { name, email, password } = req.body;
//         if (!name || !email || !password) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         let user = await User.findOne({ email });
//         if (user) {
//             console.log("User already exists:", email);
//             return res.status(400).json({ message: "User already exists" });
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         user = new User({ name, email, password: hashedPassword });
//         await user.save();

//         console.log("User registered:", email);
//         res.status(201).json({ message: "User registered successfully" });
//     } catch (error) {
//         console.error("Error during signup:", error);
//         res.status(500).json({ message: "Error creating user", error });
//     }
// });

// // Login Route
// router.post("/login", async (req, res) => {
//     console.log("Login request received:", req.body);

//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({ error: "Email and password are required" });
//     }

//     try {
//         const user = await User.findOne({ email });

//         if (!user) {
//             console.log("User not found:", email);
//             return res.status(400).json({ error: "Invalid credentials" });
//         }

//         console.log("User found:", user.email);
//         console.log("Stored password hash:", user.password);

//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             console.log("Password mismatch for:", email);
//             return res.status(401).json({ error: "Invalid credentials" });
//         }

//         const token = jwt.sign({ userId: user._id, name: user.name }, JWT_SECRET, { expiresIn: "1h" });
//         console.log("Generated Token:", token);

//         res.json({ message: "Login successful", token });
//     } catch (err) {
//         console.error("Error during login:", err);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// module.exports = router;
const express = require("express");
const { signup, login } = require("../controllers/authController");

const router = express.Router();

// Define routes
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
