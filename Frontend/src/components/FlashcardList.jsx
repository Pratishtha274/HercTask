// import { useEffect, useState } from "react";
// import { getFlashcards } from "../api/api";
// import FlashcardItem from "./FlashcardItem";

// const FlashcardList = ({ token }) => {
//   const [flashcards, setFlashcards] = useState([]);

//   const fetchFlashcards = async () => {
//     try {
//       const res = await getFlashcards(token);
//       setFlashcards(res.data);
//     } catch (error) {
//       alert("Failed to load flashcards.");
//     }
//   };

//   useEffect(() => {
//     fetchFlashcards();
//   }, [token]);

//   return (
//     <div className="mt-4 space-y-4">
//       {flashcards.length === 0 ? <p>No flashcards available.</p> : flashcards.map((card) => (
//         <FlashcardItem key={card._id} card={card} token={token} refreshFlashcards={fetchFlashcards} />
//       ))}
//     </div>
//   );
// };

// export default FlashcardList;
// import { useEffect, useState } from "react";
// import { getFlashcards } from "../api/FlashcardApi";  // ✅ Correct API import
// import FlashcardItem from "./FlashcardItem";

// const FlashcardList = ({ token }) => {
//     const [flashcards, setFlashcards] = useState([]);

//     const fetchFlashcards = async () => {
//         try {
//             const res = await getFlashcards(token);
//             setFlashcards(res); // ✅ Ensure it correctly updates state
//         } catch (error) {
//             alert("Failed to load flashcards.");
//         }
//     };

//     useEffect(() => {
//         fetchFlashcards();
//     }, [token]);

//     return (
//         <div className="mt-4 space-y-4">
//             {flashcards.length === 0 ? (
//                 <p>No flashcards available.</p>
//             ) : (
//                 flashcards.map((card) => (
//                     <FlashcardItem
//                         key={card._id}
//                         card={card}
//                         token={token}
//                         refreshFlashcards={fetchFlashcards} // ✅ Refresh after update/delete
//                     />
//                 ))
//             )}
//         </div>
//     );
// };

// export default FlashcardList;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import FlashcardItem from "./FlashcardItem";

// const BASE_URL = "http://localhost:5832";

// const FlashcardList = () => {
//     const [flashcards, setFlashcards] = useState([]);
//     const [error, setError] = useState("");

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

//     const handleDeleteFlashcard = (id) => {
//         setFlashcards(flashcards.filter((card) => card.id !== id));
//     };

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
//                     <FlashcardItem key={flashcard.id} flashcard={flashcard} onDelete={handleDeleteFlashcard} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FlashcardList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import FlashcardItem from "../components/FlashcardItem"; // Assuming this component handles each individual flashcard's display
import FlashcardForm from "../components/FlashcardForm"; // Assuming this is the form for adding a new flashcard
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const BASE_URL = "http://localhost:5832";

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
      const fetchFlashcards = async () => {
          const token = localStorage.getItem("token");

          if (!token) {
              setError("Access denied. Please log in.");
              return;
          }

          try {
              const res = await axios.get(`${BASE_URL}/flashcards`, {
                  headers: { Authorization: `Bearer ${token}` },
              });
              setFlashcards(res.data);
          } catch (err) {
              setError(err.response?.data?.message || "Failed to load flashcards.");
          }
      };

      fetchFlashcards();
  }, []);

  const handleDeleteFlashcard = (id) => {
      setFlashcards(flashcards.filter((card) => card._id !== id));
  };

  const handleAddFlashcard = (newFlashcard) => {
      setFlashcards([newFlashcard, ...flashcards]);
  };

  // Button to navigate to the dashboard
  const goToDashboard = () => {
      navigate("/dashboard"); // Redirect to dashboard
  };

  return (
      <div className="text-center mt-6">
          <h2 className="text-xl font-bold">Your Flashcards</h2>

          {error && <p className="text-red-500">{error}</p>}
          {flashcards.length === 0 && <p>No flashcards available.</p>}

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

          {/* Button to redirect to Dashboard */}
          <button
              onClick={goToDashboard}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          >
              Go to Dashboard
          </button>
      </div>
  );
};

export default FlashcardList;
