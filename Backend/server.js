
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const flashcardRoutes = require("./routes/flashcards");
const authRoutes = require("./routes/authRoutes");
const battleRoutes = require("./routes/battleRoutes"); // ✅ Import battle routes
const verifyToken = require("./middleware/authMiddleware"); // ✅ Import auth middleware

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Enable JSON parsing

// ✅ Enable CORS (Fix frontend request issues)
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"], // ✅ Ensure Authorization headers are allowed
  })
);

// ✅ Use authentication routes
app.use("/auth", authRoutes);

// ✅ Protect Flashcards API with authentication
app.use("/flashcards", verifyToken, flashcardRoutes);

// ✅ Add Battle Routes (Single-Player Quiz)
app.use("/battles", verifyToken, battleRoutes); // ✅ Protect battle routes with authentication

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = 5832;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));