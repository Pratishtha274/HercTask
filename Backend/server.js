// // // const express = require("express");
// // // const mongoose = require("mongoose");
// // // const cors = require("cors");
// // // const dotenv = require("dotenv");
// // // const authRoutes = require("./routes/authRoutes");

// // // dotenv.config();

// // // const app = express();

// // // // Middleware
// // // app.use(express.json());
// // // app.use(cors());

// // // // Routes
// // // app.use("/api/auth", authRoutes);

// // // // Connect to MongoDB
// // // mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// // //     .then(() => console.log("✅ MongoDB connected"))
// // //     .catch((err) => console.log("❌ MongoDB connection error:", err));

// // // const PORT = process.env.PORT || 5832;
// // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// // require("dotenv").config();
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");

// // const authRoutes = require("./routes/authRoutes"); // Ensure this file exists

// // const app = express();
// // const PORT = process.env.PORT || 5832;

// // // Middleware
// // app.use(express.json());
// // app.use(cors());

// // // Routes
// // app.use("/auth", authRoutes); // Updated path

// // // Connect to MongoDB
// // mongoose
// //   .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log("✅ Connected to MongoDB"))
// //   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // // Start server
// // app.use((req, res) => {
// //     res.status(404).json({ error: "Invalid API route" });
// //   });
  
// // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const authRoutes = require("./routes/authRoutes");

// dotenv.config(); // Load environment variables

// const app = express();
// app.use(express.json()); // Enable JSON parsing

// // Use authentication routes
// app.use(authRoutes); // ✅ No "/api/auth/" prefix, direct access

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// const PORT = 5832; // ✅ Using your required port
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// const express = require("express");
// const mongoose = require("mongoose"); // ✅ Import mongoose
// const dotenv = require("dotenv");
// const cors = require("cors"); // ✅ Import CORS middleware
// const flashcardRoutes = require("./routes/flashcards");
// const authRoutes = require("./routes/authRoutes");

// dotenv.config(); // Load environment variables

// const app = express();
// app.use(express.json()); // Enable JSON parsing

// // Enable CORS (Fix frontend request issues)
// app.use(cors({ 
//     origin: "http://localhost:5173", 
//     methods: ["GET", "POST", "PUT", "DELETE"], 
//     credentials: true 
// }));

// // Use authentication routes
// app.use("/flashcards", flashcardRoutes);
// app.use("/auth", authRoutes); // ✅ Add a prefix for better route organization

// // ✅ MongoDB Connection
// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// const PORT = 5832; // ✅ Using your required port
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const flashcardRoutes = require("./routes/flashcards");
// const authRoutes = require("./routes/authRoutes");
// const verifyToken = require("./middleware/authMiddleware"); // ✅ Import auth middleware

// dotenv.config(); // Load environment variables

// const app = express();
// app.use(express.json()); // Enable JSON parsing

// // ✅ Enable CORS (Fix frontend request issues)
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//     allowedHeaders: ["Content-Type", "Authorization"], // ✅ Ensure Authorization headers are allowed
//   })
// );

// // ✅ Use authentication routes
// app.use("/auth", authRoutes);

// // ✅ Protect Flashcards API with authentication
// app.use("/flashcards", verifyToken, flashcardRoutes);

// // ✅ MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// const PORT = 5832;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
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