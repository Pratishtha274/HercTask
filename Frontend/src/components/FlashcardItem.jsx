// import { useState } from "react";
// import { updateFlashcard, deleteFlashcard } from "../api/api";

// const FlashcardItem = ({ card, token, refreshFlashcards }) => {
//   const [showAnswer, setShowAnswer] = useState(false);

//   const handleUpdate = async (isCorrect) => {
//     try {
//       await updateFlashcard(card._id, { isCorrect }, token);
//       refreshFlashcards(); // Refresh list
//     } catch (error) {
//       alert("Failed to update flashcard.");
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await deleteFlashcard(card._id, token);
//       refreshFlashcards(); // Refresh list
//     } catch (error) {
//       alert("Failed to delete flashcard.");
//     }
//   };

//   return (
//     <div className="border p-4 rounded shadow-lg">
//       <h3 className="font-bold text-lg">{card.question}</h3>
//       {showAnswer && <p className="mt-2">{card.answer}</p>}
//       <button className="mt-2 text-blue-500" onClick={() => setShowAnswer(!showAnswer)}>
//         {showAnswer ? "Hide Answer" : "Show Answer"}
//       </button>
//       <div className="mt-4 flex gap-2">
//         <button className="bg-green-500 text-white p-2 rounded" onClick={() => handleUpdate(true)}>✅ Correct</button>
//         <button className="bg-yellow-500 text-white p-2 rounded" onClick={() => handleUpdate(false)}>❌ Incorrect</button>
//         <button className="bg-red-500 text-white p-2 rounded" onClick={handleDelete}>🗑 Delete</button>
//       </div>
//     </div>
//   );
// };

// export default FlashcardItem;
// import React from "react";
// import { deleteFlashcard, updateFlashcard } from "../api/FlashcardApi";

// const FlashcardItem = ({ flashcard, setFlashcards }) => {
//     const token = localStorage.getItem("token");

//     const handleDelete = async () => {
//         await deleteFlashcard(flashcard._id, token);
//         setFlashcards(prev => prev.filter(item => item._id !== flashcard._id));
//     };

//     const handleReview = async (isCorrect) => {
//         const updatedCard = await updateFlashcard(flashcard._id, isCorrect, token);
//         setFlashcards(prev => prev.map(item => item._id === flashcard._id ? updatedCard : item));
//     };

//     return (
//         <li>
//             <strong>Q:</strong> {flashcard.question} <br />
//             <strong>A:</strong> {flashcard.answer} <br />
//             <button onClick={() => handleReview(true)}>✔ Correct</button>
//             <button onClick={() => handleReview(false)}>❌ Incorrect</button>
//             <button onClick={handleDelete}>🗑 Delete</button>
//         </li>
//     );
// };

// export default FlashcardItem;
// import React, { useState } from "react";
// import axios from "axios";

// const BASE_URL = "http://localhost:5832";

// const FlashcardItem = ({ flashcard, onDelete }) => {
//     const [showAnswer, setShowAnswer] = useState(false);

//     const handleDelete = async () => {
//         const token = localStorage.getItem("token");
//         try {
//             await axios.delete(`${BASE_URL}/flashcards/${flashcard.id}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             onDelete(flashcard.id);
//         } catch (err) {
//             console.error("Failed to delete flashcard:", err);
//         }
//     };

//     return (
//         <div className="p-4 mt-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">{flashcard.question}</h3>
//             {showAnswer && <p className="mt-2 text-green-500">{flashcard.answer}</p>}

//             <button 
//                 onClick={() => setShowAnswer(!showAnswer)}
//                 className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
//             >
//                 {showAnswer ? "Hide Answer" : "Show Answer"}
//             </button>

//             <button 
//                 onClick={handleDelete}
//                 className="mt-2 ml-2 px-3 py-1 bg-red-500 text-white rounded"
//             >
//                 Delete
//             </button>
//         </div>
//     );
// };

// export default FlashcardItem;
// import React, { useState } from "react";
// import axios from "axios";

// const BASE_URL = "http://localhost:5832";

// const FlashcardItem = ({ flashcard, onDelete }) => {
//     const [showAnswer, setShowAnswer] = useState(false);
//     const [userAnswer, setUserAnswer] = useState("");
//     const [isCorrect, setIsCorrect] = useState(null); // To track if the user's answer is correct

//     const handleDelete = async () => {
//         const token = localStorage.getItem("token");

//         try {
//             await axios.delete(`${BASE_URL}/flashcards/${flashcard._id}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             onDelete(flashcard._id);  // Update the flashcard list in parent component
//         } catch (err) {
//             console.error("Failed to delete flashcard:", err);
//         }
//     };

//     const handleAnswerSubmit = (e) => {
//         e.preventDefault();
//         if (userAnswer.trim().toLowerCase() === flashcard.answer.trim().toLowerCase()) {
//             setIsCorrect(true);
//         } else {
//             setIsCorrect(false);
//         }
//     };

//     return (
//         <div className="p-4 mt-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">{flashcard.question}</h3>

//             {showAnswer && <p className="mt-2 text-green-500">{flashcard.answer}</p>}

//             {/* User input for answering the flashcard */}
//             {!showAnswer && (
//                 <form onSubmit={handleAnswerSubmit} className="mt-2">
//                     <input
//                         type="text"
//                         placeholder="Your answer..."
//                         value={userAnswer}
//                         onChange={(e) => setUserAnswer(e.target.value)}
//                         className="border p-2 rounded w-full mb-2"
//                     />
//                     <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//                         Verify Answer
//                     </button>
//                 </form>
//             )}

//             {/* Display answer verification result */}
//             {isCorrect !== null && (
//                 <p className={`mt-2 ${isCorrect ? "text-green-500" : "text-red-500"}`}>
//                     {isCorrect ? "Correct!" : "Incorrect. Try again!"}
//                 </p>
//             )}

//             <button
//                 onClick={() => setShowAnswer(!showAnswer)}
//                 className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
//             >
//                 {showAnswer ? "Hide Answer" : "Show Answer"}
//             </button>

//             <button
//                 onClick={handleDelete}
//                 className="mt-2 ml-2 px-3 py-1 bg-red-500 text-white rounded"
//             >
//                 Delete
//             </button>
//         </div>
//     );
// };

// export default FlashcardItem;
import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5832";

const FlashcardItem = ({ flashcard, onDelete }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(null); // To track if the user's answer is correct

    const handleDelete = async () => {
        const token = localStorage.getItem("token");

        try {
            await axios.delete(`${BASE_URL}/flashcards/${flashcard._id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            onDelete(flashcard._id);  // Update the flashcard list in parent component
        } catch (err) {
            console.error("Failed to delete flashcard:", err);
        }
    };

    const handleAnswerSubmit = (e) => {
        e.preventDefault();
        if (userAnswer.trim().toLowerCase() === flashcard.answer.trim().toLowerCase()) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div className="flashcard-container">
            <div className={`flashcard ${showAnswer ? "flipped" : ""}`}>
                <div className="flashcard-front">
                    <h3 className="text-lg font-semibold">{flashcard.question}</h3>

                    {/* User input for answering the flashcard */}
                    <form onSubmit={handleAnswerSubmit} className="mt-2">
                        <input
                            type="text"
                            placeholder="Your answer..."
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            className="border p-2 rounded w-full mb-2"
                        />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Verify Answer
                        </button>
                    </form>

                    {/* Display answer verification result */}
                    {isCorrect !== null && (
                        <p className={`mt-2 ${isCorrect ? "text-green-500" : "text-red-500"}`}>
                            {isCorrect ? "Correct!" : "Incorrect. Try again!"}
                        </p>
                    )}

                    <button
                        onClick={() => setShowAnswer(!showAnswer)}
                        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
                    >
                        Show Answer
                    </button>

                    <button
                        onClick={handleDelete}
                        className="mt-2 ml-2 px-3 py-1 bg-red-500 text-white rounded"
                    >
                        Delete
                    </button>
                </div>

                <div className="flashcard-back">
                    <p className="text-green-500">{flashcard.answer}</p>
                    <button
                        onClick={() => setShowAnswer(!showAnswer)}
                        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
                    >
                        Hide Answer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FlashcardItem;