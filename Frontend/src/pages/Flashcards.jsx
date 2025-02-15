// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const BASE_URL = "http://localhost:5832"; // ✅ Ensure correct backend URL

// // const Flashcards = () => {
// //     const [flashcards, setFlashcards] = useState([]);
// //     const [showAnswer, setShowAnswer] = useState(false);
// //     const [currentIndex, setCurrentIndex] = useState(0);
// //     const [error, setError] = useState(""); // ✅ Handle errors

// //     useEffect(() => {
// //         const fetchFlashcards = async () => {
// //             try {
// //                 const res = await axios.get(`${BASE_URL}/flashcards`); // ✅ Corrected API endpoint
// //                 setFlashcards(res.data);
// //             } catch (err) {
// //                 console.error("Failed to fetch flashcards:", err);
// //                 setError("Failed to load flashcards. Please try again.");
// //             }
// //         };

// //         fetchFlashcards();
// //     }, []);

// //     if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
// //     if (flashcards.length === 0) return <p className="text-center mt-10">No flashcards available.</p>;

// //     const currentFlashcard = flashcards[currentIndex];

// //     const nextCard = () => {
// //         setShowAnswer(false);
// //         setCurrentIndex((prev) => (prev + 1) % flashcards.length);
// //     };

// //     return (
// //         <div className="text-center mt-10">
// //             <h2 className="text-xl font-bold">Flashcard Study</h2>

// //             <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
// //                 <h3 className="text-lg">{currentFlashcard.question}</h3>

// //                 {showAnswer && <p className="mt-4 text-green-500 font-bold">{currentFlashcard.answer}</p>}

// //                 <button 
// //                     onClick={() => setShowAnswer(!showAnswer)} 
// //                     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
// //                 >
// //                     {showAnswer ? "Hide Answer" : "Show Answer"}
// //                 </button>
// //             </div>

// //             <button 
// //                 onClick={nextCard} 
// //                 className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md"
// //             >
// //                 Next Flashcard
// //             </button>
// //         </div>
// //     );
// // };

// // export default Flashcards;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const BASE_URL = "http://localhost:5832"; // ✅ Ensure correct backend URL

// // const Flashcards = () => {
// //     const [flashcards, setFlashcards] = useState([]);
// //     const [showAnswer, setShowAnswer] = useState(false);
// //     const [currentIndex, setCurrentIndex] = useState(0);
// //     const [error, setError] = useState(""); // ✅ Handle errors

// //     useEffect(() => {
// //         const fetchFlashcards = async () => {
// //             const token = localStorage.getItem("token"); // ✅ Get token from local storage

// //             if (!token) {
// //                 setError("No token found. Please log in again.");
// //                 return;
// //             }

// //             try {
// //                 const res = await axios.get(`${BASE_URL}/flashcards`, {
// //                     headers: {
// //                         Authorization: `Bearer ${token}`, // ✅ Send token in headers
// //                     },
// //                 });

// //                 setFlashcards(res.data);
// //             } catch (err) {
// //                 console.error("Failed to fetch flashcards:", err);

// //                 if (err.response && err.response.status === 401) {
// //                     setError("Unauthorized access. Please log in again.");
// //                 } else {
// //                     setError("Failed to load flashcards. Please try again.");
// //                 }
// //             }
// //         };

// //         fetchFlashcards();
// //     }, []);

// //     if (error) {
// //         return <p className="text-center mt-10 text-red-500">{error}</p>;
// //     }

// //     if (flashcards.length === 0) {
// //         return <p className="text-center mt-10">No flashcards available.</p>;
// //     }

// //     const currentFlashcard = flashcards[currentIndex];

// //     const nextCard = () => {
// //         setShowAnswer(false);
// //         setCurrentIndex((prev) => (prev + 1) % flashcards.length);
// //     };

// //     return (
// //         <div className="text-center mt-10">
// //             <h2 className="text-xl font-bold">Flashcard Study</h2>

// //             <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
// //                 <h3 className="text-lg">{currentFlashcard.question}</h3>

// //                 {showAnswer && <p className="mt-4 text-green-500 font-bold">{currentFlashcard.answer}</p>}

// //                 <button 
// //                     onClick={() => setShowAnswer(!showAnswer)} 
// //                     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
// //                 >
// //                     {showAnswer ? "Hide Answer" : "Show Answer"}
// //                 </button>
// //             </div>

// //             <button 
// //                 onClick={nextCard} 
// //                 className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md"
// //             >
// //                 Next Flashcard
// //             </button>
// //         </div>
// //     );
// // };

// // export default Flashcards;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const BASE_URL = "http://localhost:5832"; // ✅ Backend URL

// // const Flashcards = () => {
// //     const [flashcards, setFlashcards] = useState([]);
// //     const [showAnswer, setShowAnswer] = useState(false);
// //     const [currentIndex, setCurrentIndex] = useState(0);
// //     const [error, setError] = useState(""); // ✅ Error state

// //     useEffect(() => {
// //         const fetchFlashcards = async () => {
// //             try {
// //                 const token = localStorage.getItem("token"); // ✅ Retrieve token from storage
                
// //                 if (!token) {
// //                     setError("Unauthorized: Please log in first.");
// //                     return;
// //                 }

// //                 const res = await axios.get(`${BASE_URL}/flashcards`, {
// //                     headers: { Authorization: `Bearer ${token}` }, // ✅ Send token in headers
// //                 });

// //                 setFlashcards(res.data);
// //             } catch (err) {
// //                 console.error("Failed to fetch flashcards:", err);
// //                 setError("Failed to load flashcards. Please try again.");
// //             }
// //         };

// //         fetchFlashcards();
// //     }, []); // ✅ Run on component mount

// //     if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
// //     if (flashcards.length === 0) return <p className="text-center mt-10">No flashcards available.</p>;

// //     const currentFlashcard = flashcards[currentIndex];

// //     const nextCard = () => {
// //         setShowAnswer(false);
// //         setCurrentIndex((prev) => (prev + 1) % flashcards.length);
// //     };

// //     return (
// //         <div className="text-center mt-10">
// //             <h2 className="text-xl font-bold">Flashcard Study</h2>

// //             <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
// //                 <h3 className="text-lg">{currentFlashcard.question}</h3>

// //                 {showAnswer && <p className="mt-4 text-green-500 font-bold">{currentFlashcard.answer}</p>}

// //                 <button 
// //                     onClick={() => setShowAnswer(!showAnswer)} 
// //                     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
// //                 >
// //                     {showAnswer ? "Hide Answer" : "Show Answer"}
// //                 </button>
// //             </div>

// //             <button 
// //                 onClick={nextCard} 
// //                 className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md"
// //             >
// //                 Next Flashcard
// //             </button>
// //         </div>
// //     );
// // };

// // export default Flashcards;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const BASE_URL = "http://localhost:5832"; // ✅ Ensure correct backend URL

// // const Flashcards = () => {
// //     const [flashcards, setFlashcards] = useState([]);
// //     const [showAnswer, setShowAnswer] = useState(false);
// //     const [currentIndex, setCurrentIndex] = useState(0);
// //     const [error, setError] = useState("");
// //     const [newQuestion, setNewQuestion] = useState("");
// //     const [newAnswer, setNewAnswer] = useState("");

// //     useEffect(() => {
// //         const fetchFlashcards = async () => {
// //             try {
// //                 const token = localStorage.getItem("token"); 
// //                 if (!token) {
// //                     setError("Unauthorized: Please log in first.");
// //                     return;
// //                 }

// //                 const res = await axios.get(`${BASE_URL}/flashcards`, {
// //                     headers: { Authorization: `Bearer ${token}` },
// //                 });

// //                 setFlashcards(res.data);
// //             } catch (err) {
// //                 console.error("Failed to fetch flashcards:", err);
// //                 setError("Failed to load flashcards. Please try again.");
// //             }
// //         };

// //         fetchFlashcards();
// //     }, []);

// //     const addFlashcard = async (e) => {
// //         e.preventDefault();
// //         if (!newQuestion || !newAnswer) return alert("Please enter both question and answer.");

// //         try {
// //             const token = localStorage.getItem("token");
// //             const res = await axios.post(
// //                 `${BASE_URL}/flashcards`, 
// //                 { question: newQuestion, answer: newAnswer },
// //                 { headers: { Authorization: `Bearer ${token}` } }
// //             );

// //             setFlashcards([...flashcards, res.data]);
// //             setNewQuestion("");
// //             setNewAnswer("");
// //         } catch (err) {
// //             console.error("Failed to add flashcard:", err);
// //             alert("Error adding flashcard.");
// //         }
// //     };

// //     if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
// //     if (flashcards.length === 0) return <p className="text-center mt-10">No flashcards available.</p>;

// //     const currentFlashcard = flashcards[currentIndex];

// //     const nextCard = () => {
// //         setShowAnswer(false);
// //         setCurrentIndex((prev) => (prev + 1) % flashcards.length);
// //     };

// //     return (
// //         <div className="text-center mt-10">
// //             <h2 className="text-xl font-bold">Flashcard Study</h2>

// //             <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
// //                 <h3 className="text-lg">{currentFlashcard.question}</h3>
// //                 {showAnswer && <p className="mt-4 text-green-500 font-bold">{currentFlashcard.answer}</p>}

// //                 <button 
// //                     onClick={() => setShowAnswer(!showAnswer)} 
// //                     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
// //                 >
// //                     {showAnswer ? "Hide Answer" : "Show Answer"}
// //                 </button>
// //             </div>

// //             <button 
// //                 onClick={nextCard} 
// //                 className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md"
// //             >
// //                 Next Flashcard
// //             </button>

// //             {/* Add Flashcard Form */}
// //             <div className="mt-10 p-6 bg-gray-200 dark:bg-gray-900 rounded-lg shadow-md">
// //                 <h3 className="text-lg font-bold">Add New Flashcard</h3>
// //                 <form onSubmit={addFlashcard} className="mt-4">
// //                     <input 
// //                         type="text"
// //                         placeholder="Enter question"
// //                         value={newQuestion}
// //                         onChange={(e) => setNewQuestion(e.target.value)}
// //                         className="block w-full p-2 border rounded-md mb-2"
// //                     />
// //                     <input 
// //                         type="text"
// //                         placeholder="Enter answer"
// //                         value={newAnswer}
// //                         onChange={(e) => setNewAnswer(e.target.value)}
// //                         className="block w-full p-2 border rounded-md mb-2"
// //                     />
// //                     <button 
// //                         type="submit"
// //                         className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md"
// //                     >
// //                         Add Flashcard
// //                     </button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Flashcards;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // //import FlashcardForm from "./FlashcardForm"; // Import the form component
// // import FlashcardForm from "../components/FlashcardForm";

// // const BASE_URL = "http://localhost:5832"; // Backend URL

// // const Flashcards = () => {
// //     const [flashcards, setFlashcards] = useState([]);
// //     const [currentIndex, setCurrentIndex] = useState(0);
// //     const [showAnswer, setShowAnswer] = useState(false);
// //     const [error, setError] = useState("");

// //     // ✅ Fetch flashcards from backend
// //     useEffect(() => {
// //         const fetchFlashcards = async () => {
// //             try {
// //                 const token = localStorage.getItem("token"); // Check authentication
// //                 if (!token) {
// //                     setError("Unauthorized: Please log in first.");
// //                     return;
// //                 }

// //                 const res = await axios.get(`${BASE_URL}/flashcards`, {
// //                     headers: { Authorization: `Bearer ${token}` },
// //                 });

// //                 setFlashcards(res.data);
// //             } catch (err) {
// //                 setError("Failed to load flashcards. Please try again.");
// //             }
// //         };

// //         fetchFlashcards();
// //     }, []);

// //     // ✅ Add new flashcard
// //     const handleAddFlashcard = (newFlashcard) => {
// //         setFlashcards([...flashcards, newFlashcard]);
// //     };

// //     // ✅ Navigate to next flashcard
// //     const nextCard = () => {
// //         setShowAnswer(false);
// //         setCurrentIndex((prev) => (prev + 1) % flashcards.length);
// //     };

// //     if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

// //     return (
// //         <div className="text-center mt-10">
// //             <h2 className="text-xl font-bold">Flashcard Study</h2>

// //             {flashcards.length === 0 ? (
// //                 <p>No flashcards available.</p>
// //             ) : (
// //                 <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
// //                     <h3 className="text-lg">{flashcards[currentIndex].question}</h3>
// //                     {showAnswer && <p className="mt-4 text-green-500 font-bold">{flashcards[currentIndex].answer}</p>}

// //                     <button 
// //                         onClick={() => setShowAnswer(!showAnswer)} 
// //                         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
// //                     >
// //                         {showAnswer ? "Hide Answer" : "Show Answer"}
// //                     </button>

// //                     <button 
// //                         onClick={nextCard} 
// //                         className="mt-4 ml-2 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md"
// //                     >
// //                         Next Flashcard
// //                     </button>
// //                 </div>
// //             )}

// //             {/* ✅ Add Flashcard Form */}
// //             <div className="mt-10 bg-gray-200 dark:bg-gray-900 p-6 rounded-lg shadow-md">
// //                 <FlashcardForm onAddFlashcard={handleAddFlashcard} />
// //             </div>
// //         </div>
// //     );
// // };

// // export default Flashcards;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import FlashcardItem from "../components/FlashcardItem"; // Assuming this component handles each individual flashcard's display
// import FlashcardForm from "../components/FlashcardForm"; // Assuming this is the form for adding a new flashcard

// const BASE_URL = "http://localhost:5832";

// const FlashcardList = () => {
//     const [flashcards, setFlashcards] = useState([]);
//     const [error, setError] = useState("");

//     // Fetch flashcards on component mount
//     useEffect(() => {
//         const fetchFlashcards = async () => {
//             const token = localStorage.getItem("token");

//             if (!token) {
//                 setError("Access denied. Please log in.");
//                 return;
//             }

//             try {
//                 const res = await axios.get(`${BASE_URL}/flashcards`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 setFlashcards(res.data);
//             } catch (err) {
//                 setError(err.response?.data?.message || "Failed to load flashcards.");
//             }
//         };

//         fetchFlashcards();
//     }, []);

//     // Handle flashcard deletion
//     const handleDeleteFlashcard = (id) => {
//         setFlashcards(flashcards.filter((card) => card._id !== id));
//     };

//     // Handle flashcard addition
//     const handleAddFlashcard = (newFlashcard) => {
//         setFlashcards([newFlashcard, ...flashcards]);
//     };

//     return (
//         <div className="text-center mt-6">
//             <h2 className="text-xl font-bold">Your Flashcards</h2>

//             {error && <p className="text-red-500">{error}</p>}
//             {flashcards.length === 0 && <p>No flashcards available.</p>}

//             <FlashcardForm onAddFlashcard={handleAddFlashcard} />

//             <div className="mt-4">
//                 {flashcards.map((flashcard) => (
//                     <FlashcardItem 
//                         key={flashcard._id} 
//                         flashcard={flashcard} 
//                         onDelete={handleDeleteFlashcard} 
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FlashcardList;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BASE_URL = "http://localhost:5832"; // Correct backend URL

// const Flashcards = () => {
//     const [flashcards, setFlashcards] = useState([]);
//     const [showAnswer, setShowAnswer] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [error, setError] = useState("");
//     const [newQuestion, setNewQuestion] = useState("");
//     const [newAnswer, setNewAnswer] = useState("");

//     // Fetch flashcards from the backend
//     useEffect(() => {
//         const fetchFlashcards = async () => {
//             const token = localStorage.getItem("token");

//             if (!token) {
//                 setError("Unauthorized: Please log in first.");
//                 return;
//             }

//             try {
//                 const res = await axios.get(`${BASE_URL}/flashcards`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 setFlashcards(res.data);
//             } catch (err) {
//                 console.error("Failed to fetch flashcards:", err);
//                 setError("Failed to load flashcards. Please try again.");
//             }
//         };

//         fetchFlashcards();
//     }, []);

//     // Handle adding a new flashcard
//     const addFlashcard = async (e) => {
//         e.preventDefault();

//         if (!newQuestion || !newAnswer) return alert("Please enter both question and answer.");

//         const token = localStorage.getItem("token");

//         try {
//             const res = await axios.post(
//                 `${BASE_URL}/flashcards`,
//                 { question: newQuestion, answer: newAnswer },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );

//             setFlashcards((prev) => [...prev, res.data]);
//             setNewQuestion("");
//             setNewAnswer("");
//         } catch (err) {
//             console.error("Failed to add flashcard:", err);
//             alert("Error adding flashcard.");
//         }
//     };

//     // Handle error and no flashcards state
//     if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
//     if (flashcards.length === 0) return <p className="text-center mt-10">No flashcards available.</p>;

//     const currentFlashcard = flashcards[currentIndex];

//     // Navigate to the next flashcard
//     const nextCard = () => {
//         setShowAnswer(false);
//         setCurrentIndex((prev) => (prev + 1) % flashcards.length);
//     };

//     return (
//         <div className="text-center mt-10">
//             <h2 className="text-xl font-bold">Flashcard Study</h2>

//             {/* Display current flashcard */}
//             <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
//                 <h3 className="text-lg">{currentFlashcard.question}</h3>
//                 {showAnswer && <p className="mt-4 text-green-500 font-bold">{currentFlashcard.answer}</p>}

//                 <button
//                     onClick={() => setShowAnswer(!showAnswer)}
//                     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
//                 >
//                     {showAnswer ? "Hide Answer" : "Show Answer"}
//                 </button>
//             </div>

//             {/* Next flashcard button */}
//             <button
//                 onClick={nextCard}
//                 className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md"
//             >
//                 Next Flashcard
//             </button>

//             {/* Add New Flashcard Form */}
//             <div className="mt-10 p-6 bg-gray-200 dark:bg-gray-900 rounded-lg shadow-md">
//                 <h3 className="text-lg font-bold">Add New Flashcard</h3>
//                 <form onSubmit={addFlashcard} className="mt-4">
//                     <input
//                         type="text"
//                         placeholder="Enter question"
//                         value={newQuestion}
//                         onChange={(e) => setNewQuestion(e.target.value)}
//                         className="block w-full p-2 border rounded-md mb-2"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Enter answer"
//                         value={newAnswer}
//                         onChange={(e) => setNewAnswer(e.target.value)}
//                         className="block w-full p-2 border rounded-md mb-2"
//                     />
//                     <button
//                         type="submit"
//                         className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md"
//                     >
//                         Add Flashcard
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Flashcards;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import FlashcardItem from "../components/FlashcardItem"; // Component for individual flashcard display
// import FlashcardForm from "../components/FlashcardForm"; // Component for adding a new flashcard

// const BASE_URL = "http://localhost:5832"; // Correct backend URL

// const FlashcardList = () => {
//     const [flashcards, setFlashcards] = useState([]);
//     const [error, setError] = useState("");

//     // Fetch flashcards from the backend
//     useEffect(() => {
//         const fetchFlashcards = async () => {
//             const token = localStorage.getItem("token");

//             if (!token) {
//                 setError("Access denied. Please log in.");
//                 return;
//             }

//             try {
//                 const res = await axios.get(`${BASE_URL}/flashcards`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 setFlashcards(res.data);
//             } catch (err) {
//                 setError(err.response?.data?.message || "Failed to load flashcards.");
//             }
//         };

//         fetchFlashcards();
//     }, []);

//     // Handle flashcard deletion
//     const handleDeleteFlashcard = (id) => {
//         setFlashcards(flashcards.filter((card) => card._id !== id));
//     };

//     // Handle flashcard addition
//     const handleAddFlashcard = (newFlashcard) => {
//         setFlashcards([newFlashcard, ...flashcards]);
//     };

//     return (
//         <div className="text-center mt-6">
//             <h2 className="text-xl font-bold">Your Flashcards</h2>

//             {error && <p className="text-red-500">{error}</p>}
//             {flashcards.length === 0 && <p>No flashcards available.</p>}

//             {/* Form to add a new flashcard */}
//             <FlashcardForm onAddFlashcard={handleAddFlashcard} />

//             <div className="mt-4">
//                 {flashcards.map((flashcard) => (
//                     <FlashcardItem
//                         key={flashcard._id}
//                         flashcard={flashcard}
//                         onDelete={handleDeleteFlashcard}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FlashcardList;
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import FlashcardItem from "../components/FlashcardItem";
import FlashcardForm from "../components/FlashcardForm";

const BASE_URL = "http://localhost:5832"; // Correct backend URL

const FlashcardList = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Add loading state

    // Fetch flashcards from the backend
    const fetchFlashcards = useCallback(async () => {
        setLoading(true);
        const token = localStorage.getItem("token");

        if (!token) {
            setError("Access denied. Please log in.");
            setLoading(false);
            return;
        }

        try {
            const res = await axios.get(`${BASE_URL}/flashcards`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setFlashcards(res.data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to load flashcards.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFlashcards();
    }, [fetchFlashcards]);

    // Handle flashcard deletion
    const handleDeleteFlashcard = useCallback((id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this flashcard?");
        if (confirmDelete) {
            setFlashcards(flashcards.filter((card) => card._id !== id));
        }
    }, [flashcards]);

    // Handle flashcard addition
    const handleAddFlashcard = useCallback((newFlashcard) => {
        setFlashcards([newFlashcard, ...flashcards]);
    }, [flashcards]);

    return (
        <div className="text-center mt-6">
            <h2 className="text-xl font-bold">Your Flashcards</h2>

            {error && <p className="text-red-500">{error}</p>}
            {loading && <p>Loading...</p>}
            {flashcards.length === 0 && !loading && <p>No flashcards available.</p>}

            {/* Form to add a new flashcard */}
            <FlashcardForm onAddFlashcard={handleAddFlashcard} />

            <div className="mt-4">
                {flashcards.map((flashcard) => (
                    <FlashcardItem
                        key={flashcard._id}
                        flashcard={flashcard}
                        onDelete={handleDeleteFlashcard}
                    />
                ))}
            </div>
        </div>
    );
};

export default FlashcardList;
