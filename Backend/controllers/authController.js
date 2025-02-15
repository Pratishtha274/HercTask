
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input fields
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields (name, email, password) are required" });
        }

        // Trim input fields
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        // Check if user already exists
        const existingUser = await User.findOne({ email: trimmedEmail });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(trimmedPassword, salt);
        console.log("Hashed password during signup (before save):", hashedPassword); // Debugging log

        // Create new user
        const newUser = new User({
            name,
            email: trimmedEmail,
            password: hashedPassword,
        });

        await newUser.save();
        console.log("User registered:", newUser.email); // Debugging log
        console.log("Stored password hash (after save):", newUser.password); // Debugging log

        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
// Login Controller
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input fields
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Trim input fields
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        // Check if user exists
        const user = await User.findOne({ email: trimmedEmail });
        if (!user) {
            console.error("User not found for email:", trimmedEmail); // Debugging log
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Debugging logs
        console.log("User found:", user.email);
        console.log("Stored password hash:", user.password);
        console.log("Provided password:", trimmedPassword);

        // Ensure user has a password
        if (!user.password) {
            console.error("Error: User has no password stored in DB");
            return res.status(500).json({ message: "Server error: Missing password" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(trimmedPassword, user.password);
        if (!isMatch) {
            console.error("Password does not match for user:", user.email); // Debugging log
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        console.log("Login successful for:", user.email); // Debugging log
        res.status(200).json({ message: "Login successful", token });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { signup, login };