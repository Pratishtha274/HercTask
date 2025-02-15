// const express = require("express");
// const { addFlashcard, getFlashcards, updateFlashcard, deleteFlashcard } = require("../controllers/FlashcardController");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// // Protect all routes with authentication middleware
// router.use(authMiddleware);

// // Flashcard routes
// router.post("/", addFlashcard);
// router.get("/", getFlashcards);
// router.put("/:id", updateFlashcard);
// router.delete("/:id", deleteFlashcard);

// module.exports = router;
// const express = require("express");
// const {
//   addFlashcard,
//   getFlashcards,
//   updateFlashcard,
//   deleteFlashcard,
// } = require("../controllers/FlashcardController");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// // ✅ Protect all routes with authentication middleware
// router.use(authMiddleware);

// // ✅ Flashcard Routes
// router.post("/", addFlashcard); // Add a new flashcard
// router.get("/", getFlashcards); // Get all flashcards
// router.put("/:id", updateFlashcard); // Update a flashcard by ID
// router.delete("/:id", deleteFlashcard); // Delete a flashcard by ID

// module.exports = router;
const express = require("express");
const {
  addFlashcard,
  getFlashcards,
  updateFlashcard,
  deleteFlashcard,
} = require("../controllers/FlashcardController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Protect only certain routes
router.post("/", authMiddleware, addFlashcard); // Add a new flashcard (protected)
router.get("/", authMiddleware, getFlashcards); // Get all flashcards (protected)
router.put("/:id", authMiddleware, updateFlashcard); // Update a flashcard by ID (protected)
router.delete("/:id", authMiddleware, deleteFlashcard); // Delete a flashcard by ID (protected)

// If you want to add a public route, you can leave it unprotected:
router.get("/public", (req, res) => {
  res.status(200).json({ message: "This is a public route!" });
});

module.exports = router;
