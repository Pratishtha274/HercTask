// // import { useState } from "react";
// // import { addFlashcard } from "../api/api";

// // const FlashcardForm = ({ token, refreshFlashcards }) => {
// //   const [flashcard, setFlashcard] = useState({ question: "", answer: "" });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await addFlashcard(flashcard, token);
// //       refreshFlashcards(); // Refresh list after adding
// //       setFlashcard({ question: "", answer: "" }); // Reset form
// //     } catch (error) {
// //       alert("Failed to add flashcard.");
// //     }
// //   };

// //   return (
// //     <form className="space-y-4 p-4 border rounded" onSubmit={handleSubmit}>
// //       <input
// //         type="text"
// //         placeholder="Question"
// //         className="border p-2 w-full"
// //         value={flashcard.question}
// //         onChange={(e) => setFlashcard({ ...flashcard, question: e.target.value })}
// //         required
// //       />
// //       <input
// //         type="text"
// //         placeholder="Answer"
// //         className="border p-2 w-full"
// //         value={flashcard.answer}
// //         onChange={(e) => setFlashcard({ ...flashcard, answer: e.target.value })}
// //         required
// //       />
// //       <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
// //         Add Flashcard
// //       </button>
// //     </form>
// //   );
// // };

// // export default FlashcardForm;
// // import React, { useState } from "react";
// // import { addFlashcard } from "../api/FlashcardApi";

// // const FlashcardForm = ({ setFlashcards }) => {
// //     const [question, setQuestion] = useState("");
// //     const [answer, setAnswer] = useState("");
// //     const token = localStorage.getItem("token");

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const newFlashcard = await addFlashcard({ question, answer }, token);
// //         setFlashcards(prev => [...prev, newFlashcard]);
// //         setQuestion("");
// //         setAnswer("");
// //     };

// //     return (
// //         <form onSubmit={handleSubmit}>
// //             <input type="text" placeholder="Question" value={question} onChange={(e) => setQuestion(e.target.value)} required />
// //             <input type="text" placeholder="Answer" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
// //             <button type="submit">Add Flashcard</button>
// //         </form>
// //     );
// // };

// // export default FlashcardForm;
// // import React, { useState } from "react";
// // import axios from "axios";

// // const BASE_URL = "http://localhost:5832";

// // const FlashcardForm = ({ onAddFlashcard }) => {
// //     const [question, setQuestion] = useState("");
// //     const [answer, setAnswer] = useState("");
// //     const [error, setError] = useState("");

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
        
// //         if (!question.trim() || !answer.trim()) {
// //             setError("Both question and answer are required.");
// //             return;
// //         }

// //         const token = localStorage.getItem("token");

// //         try {
// //             const res = await axios.post(
// //                 `${BASE_URL}/flashcards`,
// //                 { question, answer },
// //                 { headers: { Authorization: `Bearer ${token}` } }
// //             );
// //             onAddFlashcard(res.data); // Add new flashcard to the list
// //             setQuestion("");
// //             setAnswer("");
// //             setError("");
// //         } catch (err) {
// //             setError(err.response?.data?.message || "Failed to add flashcard.");
// //         }
// //     };

// //     return (
// //         <form onSubmit={handleSubmit} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
// //             <h2 className="text-lg font-bold">Add a Flashcard</h2>
// //             {error && <p className="text-red-500">{error}</p>}
            
// //             <input
// //                 type="text"
// //                 placeholder="Enter question"
// //                 value={question}
// //                 onChange={(e) => setQuestion(e.target.value)}
// //                 className="w-full p-2 mt-2 border rounded"
// //             />

// //             <textarea
// //                 placeholder="Enter answer"
// //                 value={answer}
// //                 onChange={(e) => setAnswer(e.target.value)}
// //                 className="w-full p-2 mt-2 border rounded"
// //             />

// //             <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
// //                 Add Flashcard
// //             </button>
// //         </form>
// //     );
// // };

// // export default FlashcardForm;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const BASE_URL = "http://localhost:5832";

// // const FlashcardForm = ({ onAddFlashcard }) => {
// //     const [question, setQuestion] = useState("");
// //     const [answer, setAnswer] = useState("");
// //     const [error, setError] = useState("");
// //     const [isDarkMode, setIsDarkMode] = useState(false);

// //     // Toggle dark mode
// //     const toggleDarkMode = () => {
// //         setIsDarkMode(!isDarkMode);
// //     };

// //     // Apply dark mode class to the body
// //     useEffect(() => {
// //         if (isDarkMode) {
// //             document.body.classList.add("dark");
// //         } else {
// //             document.body.classList.remove("dark");
// //         }
// //     }, [isDarkMode]);

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         if (!question.trim() || !answer.trim()) {
// //             setError("Both question and answer are required.");
// //             return;
// //         }

// //         const token = localStorage.getItem("token");

// //         try {
// //             const res = await axios.post(
// //                 `${BASE_URL}/flashcards`,
// //                 { question, answer },
// //                 { headers: { Authorization: `Bearer ${token}` } }
// //             );
// //             onAddFlashcard(res.data); // Add new flashcard to the list
// //             setQuestion("");
// //             setAnswer("");
// //             setError("");
// //         } catch (err) {
// //             setError(err.response?.data?.message || "Failed to add flashcard.");
// //         }
// //     };

// //     return (
// //         <div className={`min-h-screen flex items-center justify-center p-4 ${isDarkMode ? "bg-gray-900" : "bg-purple-50"}`}>
// //             <div className={`w-full max-w-md p-6 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
// //                 {/* Theme Toggle Button */}
// //                 <button
// //                     onClick={toggleDarkMode}
// //                     className={`absolute top-4 right-4 p-2 rounded-full ${isDarkMode ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-800"}`}
// //                 >
// //                     {isDarkMode ? "🌙" : "☀️"}
// //                 </button>

// //                 <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-purple-400" : "text-purple-700"}`}>
// //                     Add a Flashcard
// //                 </h2>

// //                 {error && <p className="text-red-500 mb-4">{error}</p>}

// //                 <form onSubmit={handleSubmit}>
// //                     <input
// //                         type="text"
// //                         placeholder="Enter question"
// //                         value={question}
// //                         onChange={(e) => setQuestion(e.target.value)}
// //                         className={`w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 ${
// //                             isDarkMode
// //                                 ? "bg-gray-700 border-gray-600 focus:ring-purple-500"
// //                                 : "bg-purple-50 border-purple-200 focus:ring-purple-500"
// //                         }`}
// //                     />

// //                     <textarea
// //                         placeholder="Enter answer"
// //                         value={answer}
// //                         onChange={(e) => setAnswer(e.target.value)}
// //                         className={`w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 ${
// //                             isDarkMode
// //                                 ? "bg-gray-700 border-gray-600 focus:ring-purple-500"
// //                                 : "bg-purple-50 border-purple-200 focus:ring-purple-500"
// //                         }`}
// //                         rows="4"
// //                     />

// //                     <button
// //                         type="submit"
// //                         className={`w-full px-4 py-2 rounded-lg font-semibold ${
// //                             isDarkMode
// //                                 ? "bg-purple-600 hover:bg-purple-700 text-white"
// //                                 : "bg-purple-500 hover:bg-purple-600 text-white"
// //                         }`}
// //                     >
// //                         Add Flashcard
// //                     </button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default FlashcardForm;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BASE_URL = "http://localhost:5832";

// const FlashcardForm = ({ onAddFlashcard }) => {
//     const [question, setQuestion] = useState("");
//     const [answer, setAnswer] = useState("");
//     const [error, setError] = useState("");
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     // Toggle dark mode
//     const toggleDarkMode = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     // Apply dark mode class to the body
//     useEffect(() => {
//         if (isDarkMode) {
//             document.body.classList.add("dark");
//         } else {
//             document.body.classList.remove("dark");
//         }
//     }, [isDarkMode]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!question.trim() || !answer.trim()) {
//             setError("Both question and answer are required.");
//             return;
//         }

//         const token = localStorage.getItem("token");

//         try {
//             const res = await axios.post(
//                 `${BASE_URL}/flashcards`,
//                 { question, answer },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             onAddFlashcard(res.data); // Add new flashcard to the list
//             setQuestion(""); // Reset question input
//             setAnswer(""); // Reset answer input
//             setError(""); // Clear error message
//         } catch (err) {
//             setError(err.response?.data?.message || "Failed to add flashcard.");
//         }
//     };

//     return (
//         <div className={`min-h-screen flex items-center justify-center p-4 ${isDarkMode ? "bg-gray-900" : "bg-purple-50"}`}>
//             <div className={`w-full max-w-md p-6 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
//                 {/* Theme Toggle Button */}
//                 <button
//                     onClick={toggleDarkMode}
//                     className={`absolute top-4 right-4 p-2 rounded-full ${isDarkMode ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-800"}`}
//                 >
//                     {isDarkMode ? "🌙" : "☀️"}
//                 </button>

//                 <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-purple-400" : "text-purple-700"}`}>
//                     Add a Flashcard
//                 </h2>

//                 {error && <p className="text-red-500 mb-4">{error}</p>}

//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Enter question"
//                         value={question}
//                         onChange={(e) => setQuestion(e.target.value)}
//                         className={`w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 ${
//                             isDarkMode
//                                 ? "bg-gray-700 border-gray-600 focus:ring-purple-500"
//                                 : "bg-purple-50 border-purple-200 focus:ring-purple-500"
//                         }`}
//                     />

//                     <textarea
//                         placeholder="Enter answer"
//                         value={answer}
//                         onChange={(e) => setAnswer(e.target.value)}
//                         className={`w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 ${
//                             isDarkMode
//                                 ? "bg-gray-700 border-gray-600 focus:ring-purple-500"
//                                 : "bg-purple-50 border-purple-200 focus:ring-purple-500"
//                         }`}
//                         rows="4"
//                     />

//                     <button
//                         type="submit"
//                         className={`w-full px-4 py-2 rounded-lg font-semibold ${
//                             isDarkMode
//                                 ? "bg-purple-600 hover:bg-purple-700 text-white"
//                                 : "bg-purple-500 hover:bg-purple-600 text-white"
//                         }`}
//                     >
//                         Add Flashcard
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default FlashcardForm;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BASE_URL = "http://localhost:5832";

// const FlashcardForm = ({ onAddFlashcard }) => {
//     const [question, setQuestion] = useState("");
//     const [answer, setAnswer] = useState("");
//     const [domain, setDomain] = useState(""); // New state for domain
//     const [error, setError] = useState("");
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     // Toggle dark mode
//     const toggleDarkMode = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     // Apply dark mode class to the body
//     useEffect(() => {
//         if (isDarkMode) {
//             document.body.classList.add("dark");
//         } else {
//             document.body.classList.remove("dark");
//         }
//     }, [isDarkMode]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validate that all fields are filled out
//         if (!question.trim() || !answer.trim() || !domain.trim()) {
//             setError("All fields (question, answer, domain) are required.");
//             return;
//         }

//         const token = localStorage.getItem("token");

//         try {
//             const res = await axios.post(
//                 `${BASE_URL}/flashcards`,
//                 { question, answer, domain }, // Include domain in the request
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             onAddFlashcard(res.data); // Add new flashcard to the list
//             setQuestion(""); // Reset question input
//             setAnswer(""); // Reset answer input
//             setDomain(""); // Reset domain input
//             setError(""); // Clear error message
//         } catch (err) {
//             setError(err.response?.data?.message || "Failed to add flashcard.");
//         }
//     };

//     return (
//         <div className={`min-h-screen flex items-center justify-center p-4 ${isDarkMode ? "bg-gray-900" : "bg-purple-50"}`}>
//             <div className={`w-full max-w-md p-6 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
//                 {/* Theme Toggle Button */}
//                 <button
//                     onClick={toggleDarkMode}
//                     className={`absolute top-4 right-4 p-2 rounded-full ${isDarkMode ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-800"}`}
//                 >
//                     {isDarkMode ? "🌙" : "☀️"}
//                 </button>

//                 <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-purple-400" : "text-purple-700"}`}>
//                     Add a Flashcard
//                 </h2>

//                 {error && <p className="text-red-500 mb-4">{error}</p>}

//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Enter question"
//                         value={question}
//                         onChange={(e) => setQuestion(e.target.value)}
//                         className={`w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 ${
//                             isDarkMode
//                                 ? "bg-gray-700 border-gray-600 focus:ring-purple-500"
//                                 : "bg-purple-50 border-purple-200 focus:ring-purple-500"
//                         }`}
//                     />

//                     <textarea
//                         placeholder="Enter answer"
//                         value={answer}
//                         onChange={(e) => setAnswer(e.target.value)}
//                         className={`w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 ${
//                             isDarkMode
//                                 ? "bg-gray-700 border-gray-600 focus:ring-purple-500"
//                                 : "bg-purple-50 border-purple-200 focus:ring-purple-500"
//                         }`}
//                         rows="4"
//                     />

//                     <input
//                         type="text"
//                         placeholder="Enter domain"
//                         value={domain}
//                         onChange={(e) => setDomain(e.target.value)}
//                         className={`w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 ${
//                             isDarkMode
//                                 ? "bg-gray-700 border-gray-600 focus:ring-purple-500"
//                                 : "bg-purple-50 border-purple-200 focus:ring-purple-500"
//                         }`}
//                     />

//                     <button
//                         type="submit"
//                         className={`w-full px-4 py-2 rounded-lg font-semibold ${
//                             isDarkMode
//                                 ? "bg-purple-600 hover:bg-purple-700 text-white"
//                                 : "bg-purple-500 hover:bg-purple-600 text-white"
//                         }`}
//                     >
//                         Add Flashcard
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default FlashcardForm;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";  // Change this import

// const BASE_URL = "http://localhost:5832";

// const FlashcardForm = () => {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [domain, setDomain] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();  // Replace useHistory with useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!question.trim() || !answer.trim() || !domain) {
//       setError("All fields are required.");
//       return;
//     }

//     const token = localStorage.getItem("token");

//     try {
//       const res = await axios.post(
//         `${BASE_URL}/flashcards`,
//         { question, answer, domain },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       // Redirect to revise page after success
//       navigate("/revise-flashcards");  // Use navigate instead of history.push
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to add flashcard.");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Add a Flashcard</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter question"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//         <textarea
//           placeholder="Enter answer"
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//         />
//         <div>
//           <label htmlFor="domain">Select Domain: </label>
//           <select
//             id="domain"
//             value={domain}
//             onChange={(e) => setDomain(e.target.value)}
//           >
//             <option value="">--Select Domain--</option>
//             <option value="Math">Math</option>
//             <option value="Science">Science</option>
//             <option value="History">History</option>
//             {/* Add more domains as needed */}
//           </select>
//         </div>
//         <button type="submit">Add Flashcard</button>
//       </form>
//     </div>
//   );
// };

// export default FlashcardForm;
import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5832";

const FlashcardForm = ({ onAddFlashcard }) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [domain, setDomain] = useState(""); // Domain state
    const [error, setError] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Apply dark mode class to the body
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate that all fields are filled out
        if (!question.trim() || !answer.trim() || !domain.trim()) {
            setError("All fields (question, answer, domain) are required.");
            return;
        }

        const token = localStorage.getItem("token");

        try {
            const res = await axios.post(
                `${BASE_URL}/flashcards`,
                { question, answer, domain }, // Include domain in the request
                { headers: { Authorization: `Bearer ${token}` } }
            );
            onAddFlashcard(res.data); // Add new flashcard to the list
            setQuestion(""); // Reset question input
            setAnswer(""); // Reset answer input
            setDomain(""); // Reset domain input
            setError(""); // Clear error message
        } catch (err) {
            setError(err.response?.data?.message || "Failed to add flashcard.");
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 ${isDarkMode ? "bg-gray-900" : "bg-purple-50"}`}>
            <div className={`w-full max-w-md p-6 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
                {/* Theme Toggle Button */}
                <button
                    onClick={toggleDarkMode}
                    className={`absolute top-4 right-4 p-2 rounded-full ${isDarkMode ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-800"}`}
                >
                    {isDarkMode ? "🌙" : "☀️"}
                </button>

                <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-purple-400" : "text-purple-700"}`}>
                    Add a Flashcard
                </h2>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className={`w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode ? "bg-gray-700 border-gray-600 focus:ring-purple-500" : "bg-purple-50 border-purple-200 focus:ring-purple-500"}`}
                    />

                    <textarea
                        placeholder="Enter answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className={`w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode ? "bg-gray-700 border-gray-600 focus:ring-purple-500" : "bg-purple-50 border-purple-200 focus:ring-purple-500"}`}
                        rows="4"
                    />

                    <select
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        className={`w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode ? "bg-gray-700 border-gray-600 focus:ring-purple-500" : "bg-purple-50 border-purple-200 focus:ring-purple-500"}`}
                    >
                        <option value="">Select Domain</option>
                        <option value="Geography">Geography</option>
                        <option value="History">History</option>
                        <option value="Science">Science</option>
                        <option value="Technology">Technology</option>
                    </select>

                    <button
                        type="submit"
                        className={`w-full px-4 py-2 rounded-lg font-semibold ${isDarkMode ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-purple-500 hover:bg-purple-600 text-white"}`}
                    >
                        Add Flashcard
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FlashcardForm;
