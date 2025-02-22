
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
