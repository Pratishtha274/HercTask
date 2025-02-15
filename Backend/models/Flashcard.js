// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const FlashcardSchema = new Schema({
//     user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
//     question: { type: String, required: true },
//     answer: { type: String, required: true },
//     box: { type: Number, default: 1 }, 
//     nextReview: { type: Date, default: Date.now },
//     createdAt: { type: Date, default: Date.now },
// });

// const FlashcardModel = mongoose.model('Flashcard', FlashcardSchema);

// module.exports = FlashcardModel;
// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const FlashcardSchema = new Schema(
//   {
//     user: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true }, // 🔹 Indexed for faster lookups
//     question: { type: String, required: true, trim: true }, // 🔹 Trim whitespace
//     answer: { type: String, required: true, trim: true },
//     box: { type: Number, default: 1, min: 1 }, // 🔹 Prevent negative values
//     nextReview: { type: Date, default: Date.now },
//   },
//   { timestamps: true } // 🔹 Automatically adds createdAt & updatedAt
// );

// // 🔹 Pre-save hook to update `nextReview` dynamically
// FlashcardSchema.pre("save", function (next) {
//   const daysToAdd = [1, 2, 4, 7, 15, 30, 60, 120]; // Example Spaced Repetition intervals
//   this.nextReview = new Date(Date.now() + (daysToAdd[this.box - 1] || 1) * 24 * 60 * 60 * 1000);
//   next();
// });

// const FlashcardModel = mongoose.model("Flashcard", FlashcardSchema);
// module.exports = FlashcardModel;
// const mongoose = require("mongoose");
const { Schema } = mongoose;

const FlashcardSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true }, 
    question: { type: String, required: true, trim: true }, 
    answer: { type: String, required: true, trim: true },
    domain: { type: String, required: true },
    box: { type: Number, default: 1, min: 1, max: 8 }, // 🔹 Ensuring box stays within range
    nextReview: { type: Date, default: Date.now },
  },
  { timestamps: true } 
);

// Spaced Repetition Intervals (in days)
const daysToAdd = [1, 2, 4, 7, 15, 30, 60, 120];

// 🔹 Middleware: Update `nextReview` only when `box` changes
FlashcardSchema.pre("save", function (next) {
  if (this.isModified("box")) {
    const interval = daysToAdd[this.box - 1] || daysToAdd[daysToAdd.length - 1]; 
    this.nextReview = new Date(Date.now() + interval * 24 * 60 * 60 * 1000);
  }
  next();
});

// 🔹 Ensure `nextReview` updates when using `findOneAndUpdate`
FlashcardSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();
  if (update.box !== undefined) {
    const interval = daysToAdd[update.box - 1] || daysToAdd[daysToAdd.length - 1];
    update.nextReview = new Date(Date.now() + interval * 24 * 60 * 60 * 1000);
    this.setUpdate(update);
  }
  next();
});

const FlashcardModel = mongoose.model("Flashcard", FlashcardSchema);
module.exports = FlashcardModel;
