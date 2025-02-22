
const mongoose = require("mongoose");

const battleSchema = new mongoose.Schema({
  player: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Single player
  category: { type: String, required: true }, // Category of flashcards
  flashcards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Flashcard" }], // Array of flashcard IDs
  currentFlashcardIndex: { type: Number, default: 0 }, // Track the current flashcard
  score: { type: Number, default: 0 }, // Track the player's score
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Battle", battleSchema);