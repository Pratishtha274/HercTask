
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
