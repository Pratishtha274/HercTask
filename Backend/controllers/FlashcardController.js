// // const Flashcard = require("../models/Flashcard");

// // // Add a new flashcard
// // const addFlashcard = async (req, res) => {
// //     try {
// //         const { question, answer } = req.body;
// //         const newFlashcard = new Flashcard({
// //             question,
// //             answer,
// //             user: req.user.id, // Associate flashcard with the logged-in user
// //         });
// //         await newFlashcard.save();
// //         res.status(201).json(newFlashcard);
// //     } catch (error) {
// //         res.status(500).json({ message: "Server error", error: error.message });
// //     }
// // };

// // // Get all flashcards for the user
// // const getFlashcards = async (req, res) => {
// //     try {
// //         const flashcards = await Flashcard.find({ user: req.user.id });
// //         res.status(200).json(flashcards);
// //     } catch (error) {
// //         res.status(500).json({ message: "Server error", error: error.message });
// //     }
// // };

// // // Update a flashcard (move to the next level or back to Box 1)
// // const updateFlashcard = async (req, res) => {
// //     try {
// //         const { id } = req.params;
// //         const { isCorrect } = req.body;

// //         const flashcard = await Flashcard.findById(id);
// //         if (!flashcard) {
// //             return res.status(404).json({ message: "Flashcard not found" });
// //         }

// //         // Leitner System logic
// //         if (isCorrect) {
// //             flashcard.box = Math.min(flashcard.box + 1, 5); // Move to the next box (max Box 5)
// //         } else {
// //             flashcard.box = 1; // Move back to Box 1
// //         }

// //         // Set next review date based on box level
// //         const intervals = [1, 3, 7, 14, 30]; // Days for each box level
// //         const nextReviewDate = new Date();
// //         nextReviewDate.setDate(nextReviewDate.getDate() + intervals[flashcard.box - 1]);
// //         flashcard.nextReview = nextReviewDate;

// //         await flashcard.save();
// //         res.status(200).json(flashcard);
// //     } catch (error) {
// //         res.status(500).json({ message: "Server error", error: error.message });
// //     }
// // };

// // // Delete a flashcard
// // const deleteFlashcard = async (req, res) => {
// //     try {
// //         const { id } = req.params;
// //         await Flashcard.findByIdAndDelete(id);
// //         res.status(200).json({ message: "Flashcard deleted successfully" });
// //     } catch (error) {
// //         res.status(500).json({ message: "Server error", error: error.message });
// //     }
// // };

// // module.exports = { addFlashcard, getFlashcards, updateFlashcard, deleteFlashcard };
// const Flashcard = require("../models/Flashcard");

// // ✅ Add a flashcard
// const addFlashcard = async (req, res) => {
//   try {
//     const { question, answer } = req.body;
//     if (!question || !answer) {
//       return res.status(400).json({ message: "Question and answer are required." });
//     }

//     const newFlashcard = new Flashcard({ question, answer, user: req.user.id });
//     await newFlashcard.save();

//     res.status(201).json(newFlashcard);
//   } catch (error) {
//     console.error("Error adding flashcard:", error);
//     res.status(500).json({ message: "Server error while adding flashcard." });
//   }
// };

// // ✅ Get all flashcards for a user
// const getFlashcards = async (req, res) => {
//   try {
//     const flashcards = await Flashcard.find({ user: req.user.id });
//     res.json(flashcards);
//   } catch (error) {
//     console.error("Error fetching flashcards:", error);
//     res.status(500).json({ message: "Server error while fetching flashcards." });
//   }
// };

// // ✅ Update a flashcard
// const updateFlashcard = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { question, answer } = req.body;

//     const flashcard = await Flashcard.findById(id);
//     if (!flashcard) {
//       return res.status(404).json({ message: "Flashcard not found." });
//     }

//     // Ensure user owns the flashcard
//     if (flashcard.user.toString() !== req.user.id) {
//       return res.status(403).json({ message: "Not authorized to update this flashcard." });
//     }

//     flashcard.question = question || flashcard.question;
//     flashcard.answer = answer || flashcard.answer;
//     await flashcard.save();

//     res.json(flashcard);
//   } catch (error) {
//     console.error("Error updating flashcard:", error);
//     res.status(500).json({ message: "Server error while updating flashcard." });
//   }
// };

// // ✅ Delete a flashcard
// const deleteFlashcard = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const flashcard = await Flashcard.findById(id);
//     if (!flashcard) {
//       return res.status(404).json({ message: "Flashcard not found." });
//     }

//     // Ensure user owns the flashcard
//     if (flashcard.user.toString() !== req.user.id) {
//       return res.status(403).json({ message: "Not authorized to delete this flashcard." });
//     }

//     await flashcard.remove();
//     res.json({ message: "Flashcard deleted successfully." });
//   } catch (error) {
//     console.error("Error deleting flashcard:", error);
//     res.status(500).json({ message: "Server error while deleting flashcard." });
//   }
// };

// module.exports = { addFlashcard, getFlashcards, updateFlashcard, deleteFlashcard };
// const FlashcardModel = require("../models/Flashcard");

// // ✅ Add a new flashcard
// exports.addFlashcard = async (req, res) => {
//     try {
//         const { question, answer, box, nextReview } = req.body;
//         const userId = req.user.id; // Get user from authMiddleware

//         const newFlashcard = new FlashcardModel({
//             user: userId,
//             question,
//             answer,
//             box: box || 1, // Default to box 1
//             nextReview: nextReview || new Date(),
//         });

//         await newFlashcard.save();
//         res.status(201).json({ message: "Flashcard added!", flashcard: newFlashcard });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // ✅ Get all flashcards for the logged-in user
// exports.getFlashcards = async (req, res) => {
//     try {
//         const flashcards = await FlashcardModel.find({ user: req.user.id });
//         res.status(200).json(flashcards);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // ✅ Update a flashcard by ID
// exports.updateFlashcard = async (req, res) => {
//     try {
//         const { question, answer, box, nextReview } = req.body;
//         const flashcard = await FlashcardModel.findByIdAndUpdate(
//             req.params.id,
//             { question, answer, box, nextReview },
//             { new: true }
//         );

//         if (!flashcard) return res.status(404).json({ error: "Flashcard not found" });

//         res.status(200).json({ message: "Flashcard updated!", flashcard });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // ✅ Delete a flashcard by ID
// exports.deleteFlashcard = async (req, res) => {
//     try {
//         const flashcard = await FlashcardModel.findByIdAndDelete(req.params.id);

//         if (!flashcard) return res.status(404).json({ error: "Flashcard not found" });

//         res.status(200).json({ message: "Flashcard deleted!" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
// const FlashcardModel = require("../models/Flashcard");

// // ✅ Add a new flashcard
// exports.addFlashcard = async (req, res) => {
//     try {
//         const { question, answer, box, nextReview, domain } = req.body; // Include domain
//         const userId = req.user.id; // Get user from authMiddleware

//         const newFlashcard = new FlashcardModel({
//             user: userId,
//             question,
//             answer,
//             box: box || 1, // Default to box 1
//             nextReview: nextReview || new Date(),
//             domain, // Save domain to the flashcard
//         });

//         await newFlashcard.save();
//         res.status(201).json({ message: "Flashcard added!", flashcard: newFlashcard });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // ✅ Get all flashcards for the logged-in user and filter by domain (optional)
// exports.getFlashcards = async (req, res) => {
//     try {
//         const { domain } = req.query; // Accept domain as a query parameter (optional)
//         const filter = { user: req.user.id };
//         if (domain) filter.domain = domain; // Filter by domain if provided

//         const flashcards = await FlashcardModel.find(filter);
//         res.status(200).json(flashcards);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // ✅ Update a flashcard by ID
// exports.updateFlashcard = async (req, res) => {
//     try {
//         const { question, answer, box, nextReview, domain } = req.body; // Include domain
//         const flashcard = await FlashcardModel.findByIdAndUpdate(
//             req.params.id,
//             { question, answer, box, nextReview, domain }, // Update domain as well
//             { new: true }
//         );

//         if (!flashcard) return res.status(404).json({ error: "Flashcard not found" });

//         res.status(200).json({ message: "Flashcard updated!", flashcard });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // ✅ Delete a flashcard by ID
// exports.deleteFlashcard = async (req, res) => {
//     try {
//         const flashcard = await FlashcardModel.findByIdAndDelete(req.params.id);

//         if (!flashcard) return res.status(404).json({ error: "Flashcard not found" });

//         res.status(200).json({ message: "Flashcard deleted!" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
// const FlashcardModel = require("../models/Flashcard");

// // ✅ Add a new flashcard
// exports.addFlashcard = async (req, res) => {
//     try {
//         const { question, answer, domain } = req.body; // Include domain
//         const userId = req.user.id; // Get user from authMiddleware

//         // Default values for box (1) and nextReview (current date)
//         const box = 1;
//         const nextReview = new Date();

//         const newFlashcard = new FlashcardModel({
//             user: userId,
//             question,
//             answer,
//             box, // Default to box 1
//             nextReview,
//             domain, // Save domain to the flashcard
//         });

//         await newFlashcard.save();
//         res.status(201).json({ message: "Flashcard added!", flashcard: newFlashcard });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // ✅ Get all flashcards for the logged-in user and filter by domain (optional)
// exports.getFlashcards = async (req, res) => {
//     try {
//         const { domain } = req.query; // Accept domain as a query parameter (optional)
//         const filter = { user: req.user.id };
//         if (domain) filter.domain = domain; // Filter by domain if provided

//         const flashcards = await FlashcardModel.find(filter);
//         res.status(200).json(flashcards);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // ✅ Update a flashcard by ID
// exports.updateFlashcard = async (req, res) => {
//     try {
//         const { box, nextReview } = req.body; // Only update box and nextReview dynamically
//         const flashcard = await FlashcardModel.findById(req.params.id);

//         if (!flashcard) return res.status(404).json({ error: "Flashcard not found" });

//         // Calculate the next review date based on the box
//         let newNextReview = new Date();
//         if (box === 1) {
//             newNextReview.setDate(newNextReview.getDate() + 1); // Box 1: Review next day
//         } else if (box === 2) {
//             newNextReview.setDate(newNextReview.getDate() + 3); // Box 2: Review in 3 days
//         } else if (box === 3) {
//             newNextReview.setDate(newNextReview.getDate() + 7); // Box 3: Review in 7 days
//         } else if (box === 4) {
//             newNextReview.setDate(newNextReview.getDate() + 14); // Box 4: Review in 14 days
//         }

//         // Update flashcard box and next review date
//         flashcard.box = box;
//         flashcard.nextReview = newNextReview;

//         await flashcard.save();

//         res.status(200).json({ message: "Flashcard updated!", flashcard });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // ✅ Delete a flashcard by ID
// exports.deleteFlashcard = async (req, res) => {
//     try {
//         const flashcard = await FlashcardModel.findByIdAndDelete(req.params.id);

//         if (!flashcard) return res.status(404).json({ error: "Flashcard not found" });

//         res.status(200).json({ message: "Flashcard deleted!" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
// const FlashcardModel = require("../models/Flashcard");

// // ✅ Add a new flashcard
// exports.addFlashcard = async (req, res) => {
//     try {
//         const { question, answer, domain } = req.body; // Include domain
//         const userId = req.user.id; // Get user from authMiddleware

//         // Default values for box (1) and nextReview (current date)
//         const box = 1;
//         const nextReview = new Date();

//         const newFlashcard = new FlashcardModel({
//             user: userId,
//             question,
//             answer,
//             box, // Default to box 1
//             nextReview,
//             domain, // Save domain to the flashcard
//         });

//         await newFlashcard.save();
//         res.status(201).json({ message: "Flashcard added!", flashcard: newFlashcard });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // ✅ Get all flashcards for the logged-in user and filter by domain (optional)
// exports.getFlashcards = async (req, res) => {
//     try {
//         const { domain } = req.query; // Accept domain as a query parameter (optional)
//         const filter = { user: req.user.id };
//         if (domain) filter.domain = domain; // Filter by domain if provided

//         const flashcards = await FlashcardModel.find(filter);
//         res.status(200).json(flashcards);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // ✅ Update a flashcard by ID
// exports.updateFlashcard = async (req, res) => {
//     try {
//         const { box, nextReview } = req.body; // Only update box and nextReview dynamically
//         const flashcard = await FlashcardModel.findById(req.params.id);

//         if (!flashcard) return res.status(404).json({ error: "Flashcard not found" });

//         // Calculate the next review date based on the box
//         let newNextReview = new Date();
//         if (box === 1) {
//             newNextReview.setDate(newNextReview.getDate() + 1); // Box 1: Review next day
//         } else if (box === 2) {
//             newNextReview.setDate(newNextReview.getDate() + 3); // Box 2: Review in 3 days
//         } else if (box === 3) {
//             newNextReview.setDate(newNextReview.getDate() + 7); // Box 3: Review in 7 days
//         } else if (box === 4) {
//             newNextReview.setDate(newNextReview.getDate() + 14); // Box 4: Review in 14 days
//         }

//         // Update flashcard box and next review date
//         flashcard.box = box;
//         flashcard.nextReview = newNextReview;

//         await flashcard.save();

//         res.status(200).json({ message: "Flashcard updated!", flashcard });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // ✅ Delete a flashcard by ID
// exports.deleteFlashcard = async (req, res) => {
//     try {
//         const flashcard = await FlashcardModel.findByIdAndDelete(req.params.id);

//         if (!flashcard) return res.status(404).json({ error: "Flashcard not found" });

//         res.status(200).json({ message: "Flashcard deleted!" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
const FlashcardModel = require("../models/Flashcard");

// ✅ Add a new flashcard
exports.addFlashcard = async (req, res) => {
    try {
        const { question, answer, domain } = req.body; // Include domain
        const userId = req.user.id; // Get user from authMiddleware

        const newFlashcard = new FlashcardModel({
            user: userId,
            question,
            answer,
            domain,
            box: 1, // Default box
            nextReview: new Date(), // Default to today
        });

        await newFlashcard.save();
        res.status(201).json({ message: "Flashcard added!", flashcard: newFlashcard });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ✅ Get all flashcards for the logged-in user (with optional domain filter)
exports.getFlashcards = async (req, res) => {
    try {
        const { domain } = req.query;
        const filter = { user: req.user.id };
        if (domain) filter.domain = domain; // Apply domain filter if provided

        const flashcards = await FlashcardModel.find(filter).select("question answer domain box nextReview createdAt");
        res.status(200).json(flashcards);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ✅ Update flashcard's box & next review date
exports.updateFlashcard = async (req, res) => {
    try {
        const { box } = req.body; // Only update box, nextReview is auto-handled
        const flashcard = await FlashcardModel.findOne({ _id: req.params.id, user: req.user.id });

        if (!flashcard) return res.status(404).json({ error: "Flashcard not found" });

        // Validate box range
        if (box < 1 || box > 7) return res.status(400).json({ error: "Invalid box value" });

        flashcard.box = box;

        // 🔹 Option 1: Let Mongoose pre-save hook handle `nextReview`
        await flashcard.save();

        // 🔹 Option 2: Manually calculate `nextReview` (Uncomment below if needed)
        /*
        const daysToAdd = [1, 3, 7, 14, 30, 60, 120]; 
        flashcard.nextReview = new Date(Date.now() + (daysToAdd[box - 1] || 1) * 24 * 60 * 60 * 1000);
        await flashcard.save();
        */

        res.status(200).json({ message: "Flashcard updated!", flashcard });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ✅ Delete a flashcard (only if user is the owner)
exports.deleteFlashcard = async (req, res) => {
    try {
        const flashcard = await FlashcardModel.findOneAndDelete({ _id: req.params.id, user: req.user.id });

        if (!flashcard) return res.status(403).json({ error: "Flashcard not found or unauthorized" });

        res.status(200).json({ message: "Flashcard deleted!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
