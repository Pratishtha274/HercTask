// const express = require("express");
// const router = express.Router();
// const verifyToken = require("../middleware/authMiddleware"); // Protect routes with authentication
// const Battle = require("../models/Battle"); // Assuming you have a Battle model
// const Flashcard = require("../models/Flashcard"); // Import Flashcard model to fetch questions

// // ✅ Start a new quiz (single-player)
// router.post("/start", verifyToken, async (req, res) => {
//   try {
//     const { userId, category } = req.body;

//     // Fetch flashcards based on the selected category
//     const flashcards = await Flashcard.find({ category });

//     if (flashcards.length === 0) {
//       return res.status(404).json({ error: "No flashcards found for this category" });
//     }

//     // Create a new quiz (battle)
//     const newQuiz = new Battle({
//       player: userId, // Single player
//       category,
//       flashcards: flashcards.map((card) => card._id), // Store flashcard IDs
//       currentFlashcardIndex: 0, // Start with the first flashcard
//       score: 0, // Initialize score
//     });

//     await newQuiz.save();
//     res.status(201).json({ quiz: newQuiz });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to start quiz" });
//   }
// });

// // ✅ Submit an answer
// router.put("/:quizId/answer", verifyToken, async (req, res) => {
//   try {
//     const { userId, userAnswer } = req.body;
//     const quiz = await Battle.findById(req.params.quizId).populate("flashcards");

//     if (!quiz) {
//       return res.status(404).json({ error: "Quiz not found" });
//     }

//     // Validate the user
//     if (quiz.player.toString() !== userId) {
//       return res.status(403).json({ error: "You are not authorized to answer this quiz" });
//     }

//     // Get the current flashcard
//     const currentFlashcard = quiz.flashcards[quiz.currentFlashcardIndex];
//     if (!currentFlashcard) {
//       return res.status(404).json({ error: "No more flashcards in this quiz" });
//     }

//     // Check if the answer is correct
//     const isCorrect = currentFlashcard.answer === userAnswer;

//     // Update the score
//     if (isCorrect) {
//       quiz.score += 1;
//     }

//     // Move to the next flashcard
//     quiz.currentFlashcardIndex += 1;

//     // Check if the quiz is complete
//     const isComplete = quiz.currentFlashcardIndex >= quiz.flashcards.length;

//     await quiz.save();

//     res.status(200).json({
//       isCorrect,
//       score: quiz.score,
//       isComplete,
//       nextFlashcard: isComplete ? null : quiz.flashcards[quiz.currentFlashcardIndex],
//     });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to submit answer" });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware"); // Protect routes with authentication
const Battle = require("../models/Battle"); // Import Battle model
const Flashcard = require("../models/Flashcard"); // Import Flashcard model

// ✅ Start a new quiz (single-player)
router.post("/start", verifyToken, async (req, res) => {
  try {
    const { player, category } = req.body;

    // Fetch flashcards based on the selected category
    const flashcards = await Flashcard.find({ category });

    if (flashcards.length === 0) {
      return res.status(404).json({ error: "No flashcards found for this category" });
    }

    // Create a new quiz (battle)
    const newQuiz = new Battle({
      player,
      category,
      flashcards: flashcards.map((card) => card._id), // Store flashcard IDs
      currentFlashcardIndex: 0, // Start with the first flashcard
      score: 0, // Initialize score
    });

    await newQuiz.save();
    res.status(201).json({ quiz: newQuiz });
  } catch (err) {
    res.status(500).json({ error: "Failed to start quiz" });
  }
});

// ✅ Submit an answer
router.put("/:quizId/answer", verifyToken, async (req, res) => {
  try {
    const { player, userAnswer } = req.body;
    const quiz = await Battle.findById(req.params.quizId).populate("flashcards");

    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    // Validate the player
    if (quiz.player.toString() !== player) {
      return res.status(403).json({ error: "You are not authorized to answer this quiz" });
    }

    // Get the current flashcard
    const currentFlashcard = quiz.flashcards[quiz.currentFlashcardIndex];
    if (!currentFlashcard) {
      return res.status(404).json({ error: "No more flashcards in this quiz" });
    }

    // Check if the answer is correct
    const isCorrect = currentFlashcard.answer === userAnswer;

    // Update the score
    if (isCorrect) {
      quiz.score += 1;
    }

    // Move to the next flashcard
    quiz.currentFlashcardIndex += 1;

    // Check if the quiz is complete
    const isComplete = quiz.currentFlashcardIndex >= quiz.flashcards.length;
    if (isComplete) {
      quiz.status = "completed";
    }

    await quiz.save();

    res.status(200).json({
      isCorrect,
      score: quiz.score,
      isComplete,
      nextFlashcard: isComplete ? null : quiz.flashcards[quiz.currentFlashcardIndex],
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit answer" });
  }
});

module.exports = router;