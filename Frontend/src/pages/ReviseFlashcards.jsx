// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom"; // useNavigate instead of useHistory

// // const BASE_URL = "http://localhost:5832";

// // const ReviseFlashcards = () => {
// //   const [flashcards, setFlashcards] = useState([]);
// //   const [selectedDomain, setSelectedDomain] = useState(null);
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate(); // useNavigate hook for navigation

// //   useEffect(() => {
// //     const fetchFlashcards = async () => {
// //       const token = localStorage.getItem("token");

// //       try {
// //         const res = await axios.get(`${BASE_URL}/flashcards`, {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setFlashcards(res.data);
// //       } catch (err) {
// //         setError("Failed to load flashcards.");
// //       }
// //     };

// //     fetchFlashcards();
// //   }, []);

// //   const handleDomainClick = (domain) => {
// //     setSelectedDomain(domain);
// //     // Example: Navigate to the domain's page if needed
// //     // navigate(`/flashcards/${domain}`);
// //   };

// //   const filteredFlashcards = flashcards.filter(
// //     (flashcard) => flashcard.domain === selectedDomain
// //   );

// //   return (
// //     <div className="revise-container">
// //       <h2>Revise Flashcards</h2>
// //       {error && <p className="text-red-500">{error}</p>}
// //       <div className="domains">
// //         {["Math", "Science", "History"].map((domain) => (
// //           <div
// //             key={domain}
// //             className="domain-box"
// //             onClick={() => handleDomainClick(domain)}
// //           >
// //             {domain}
// //           </div>
// //         ))}
// //       </div>

// //       {selectedDomain && (
// //         <div className="flashcards">
// //           <h3>{selectedDomain} Flashcards</h3>
// //           {filteredFlashcards.length ? (
// //             <ul>
// //               {filteredFlashcards.map((flashcard) => (
// //                 <li key={flashcard.id}>
// //                   <h4>{flashcard.question}</h4>
// //                   <p>{flashcard.answer}</p>
// //                 </li>
// //               ))}
// //             </ul>
// //           ) : (
// //             <p>No flashcards available for this domain.</p>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ReviseFlashcards;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const BASE_URL = "http://localhost:5832";

// const ReviseFlashcards = () => {
//   const [flashcards, setFlashcards] = useState([]);
//   const [selectedDomain, setSelectedDomain] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchFlashcards = async () => {
//       const token = localStorage.getItem("token");

//       try {
//         const res = await axios.get(`${BASE_URL}/flashcards`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setFlashcards(res.data);
//       } catch (err) {
//         setError("Failed to load flashcards.");
//       }
//     };

//     fetchFlashcards();
//   }, []);

//   const handleDomainClick = (domain) => {
//     setSelectedDomain(domain);
//   };

//   const handleAnswer = async (flashcardId, correct) => {
//     const flashcard = flashcards.find((fc) => fc._id === flashcardId);
//     let newBox = flashcard.box;
//     let nextReviewDate = new Date();

//     if (correct) {
//       // Move to the next box if correct
//       newBox = flashcard.box + 1;
//       if (newBox > 4) newBox = 4; // Cap at Box 4
//       // Set next review date based on the box
//       nextReviewDate.setDate(nextReviewDate.getDate() + (newBox === 1 ? 1 : newBox * 3));
//     } else {
//       // Reset to Box 1 if incorrect
//       newBox = 1;
//       nextReviewDate.setDate(nextReviewDate.getDate() + 1); // Review the next day
//     }

//     // Update the flashcard in the database
//     try {
//       await axios.put(`${BASE_URL}/flashcards/${flashcardId}`, {
//         box: newBox,
//         nextReviewDate,
//       });
//       setFlashcards(
//         flashcards.map((fc) =>
//           fc._id === flashcardId ? { ...fc, box: newBox, nextReviewDate } : fc
//         )
//       );
//     } catch (err) {
//       setError("Failed to update flashcard.");
//     }
//   };

//   const filteredFlashcards = flashcards.filter(
//     (flashcard) => flashcard.domain === selectedDomain
//   );

//   const boxes = [1, 2, 3, 4]; // Box levels

//   return (
//     <div className="revise-container">
//       <h2>Revise Flashcards</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <div className="domains">
//         {["Math", "Science", "History"].map((domain) => (
//           <div
//             key={domain}
//             className="domain-box"
//             onClick={() => handleDomainClick(domain)}
//           >
//             {domain}
//           </div>
//         ))}
//       </div>

//       {selectedDomain && (
//         <div className="flashcards">
//           <h3>{selectedDomain} Flashcards</h3>
//           {boxes.map((box) => (
//             <div key={box} className="box">
//               <h4>Box {box}</h4>
//               {filteredFlashcards
//                 .filter((flashcard) => flashcard.box === box)
//                 .map((flashcard) => (
//                   <div key={flashcard._id} className="flashcard">
//                     <h4>{flashcard.question}</h4>
//                     <p>{flashcard.answer}</p>
//                     <button onClick={() => handleAnswer(flashcard._id, true)}>Correct</button>
//                     <button onClick={() => handleAnswer(flashcard._id, false)}>Incorrect</button>
//                     <p>Next Review: {new Date(flashcard.nextReviewDate).toLocaleDateString()}</p>
//                   </div>
//                 ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviseFlashcards;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const BASE_URL = "http://localhost:5832";

// const ReviseFlashcards = () => {
//   const [flashcards, setFlashcards] = useState([]);
//   const [selectedDomain, setSelectedDomain] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchFlashcards = async () => {
//       const token = localStorage.getItem("token");

//       try {
//         const res = await axios.get(`${BASE_URL}/flashcards`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setFlashcards(res.data);
//       } catch (err) {
//         setError("Failed to load flashcards.");
//       }
//     };

//     fetchFlashcards();
//   }, []);

//   const handleDomainClick = (domain) => {
//     setSelectedDomain(domain);
//   };

//   const handleAnswer = async (flashcardId, correct) => {
//     const flashcard = flashcards.find((fc) => fc._id === flashcardId);
//     let newBox = flashcard.box;
//     let nextReviewDate = new Date();

//     if (correct) {
//       // Move to the next box if correct
//       newBox = flashcard.box + 1;
//       if (newBox > 4) newBox = 4; // Cap at Box 4
//       // Set next review date based on the box
//       nextReviewDate.setDate(nextReviewDate.getDate() + (newBox === 1 ? 1 : newBox * 3));
//     } else {
//       // Reset to Box 1 if incorrect
//       newBox = 1;
//       nextReviewDate.setDate(nextReviewDate.getDate() + 1); // Review the next day
//     }

//     console.log("Updating flashcard:", flashcardId, newBox, nextReviewDate); // Debugging line

//     // Update the flashcard in the database
//     try {
//       const response = await axios.put(`${BASE_URL}/flashcards/${flashcardId}`, {
//         box: newBox,
//         nextReviewDate,
//       });
//       console.log("Flashcard updated:", response.data); // Debugging line
//       setFlashcards(
//         flashcards.map((fc) =>
//           fc._id === flashcardId ? { ...fc, box: newBox, nextReviewDate } : fc
//         )
//       );
//     } catch (err) {
//       console.error("Error updating flashcard:", err); // More detailed error logging
//       setError("Failed to update flashcard.");
//     }
//   };

//   const filteredFlashcards = flashcards.filter(
//     (flashcard) => flashcard.domain === selectedDomain
//   );

//   const boxes = [1, 2, 3, 4]; // Box levels

//   return (
//     <div className="revise-container">
//       <h2>Revise Flashcards</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <div className="domains">
//         {["Math", "Science", "History"].map((domain) => (
//           <div
//             key={domain}
//             className="domain-box"
//             onClick={() => handleDomainClick(domain)}
//           >
//             {domain}
//           </div>
//         ))}
//       </div>

//       {selectedDomain && (
//         <div className="flashcards">
//           <h3>{selectedDomain} Flashcards</h3>
//           {boxes.map((box) => (
//             <div key={box} className="box">
//               <h4>Box {box}</h4>
//               {filteredFlashcards
//                 .filter((flashcard) => flashcard.box === box)
//                 .map((flashcard) => (
//                   <div key={flashcard._id} className="flashcard">
//                     <h4>{flashcard.question}</h4>
//                     <p>{flashcard.answer}</p>
//                     <button onClick={() => handleAnswer(flashcard._id, true)}>Correct</button>
//                     <button onClick={() => handleAnswer(flashcard._id, false)}>Incorrect</button>
//                     <p>Next Review: {new Date(flashcard.nextReviewDate).toLocaleDateString()}</p>
//                   </div>
//                 ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviseFlashcards;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const BASE_URL = "http://localhost:5832";

// const ReviseFlashcards = () => {
//   const [flashcards, setFlashcards] = useState([]);
//   const [selectedDomain, setSelectedDomain] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // List of domains to be displayed
//   const domains = ["Math", "Science", "History"];

//   useEffect(() => {
//     const fetchFlashcards = async () => {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setError("Token is missing or expired.");
//         return;
//       }

//       try {
//         const res = await axios.get(`${BASE_URL}/flashcards`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setFlashcards(res.data);
//       } catch (err) {
//         setError(err.response?.data?.message || "Failed to load flashcards.");
//       }
//     };

//     fetchFlashcards();
//   }, []);

//   const handleDomainClick = (domain) => {
//     setSelectedDomain(domain);
//   };

//   const handleAnswer = async (flashcardId, correct) => {
//     const flashcard = flashcards.find((fc) => fc._id === flashcardId);
//     if (!flashcard) return;

//     let newBox = flashcard.box;
//     let nextReviewDate = new Date();

//     if (correct) {
//       newBox = flashcard.box + 1;
//       if (newBox > 4) newBox = 4;
//       nextReviewDate.setDate(nextReviewDate.getDate() + (newBox === 1 ? 1 : newBox * 3));
//     } else {
//       newBox = 1;
//       nextReviewDate.setDate(nextReviewDate.getDate() + 1);
//     }

//     try {
//       const response = await axios.put(`${BASE_URL}/flashcards/${flashcardId}`, {
//         box: newBox,
//         nextReviewDate,
//       });
//       setFlashcards((prevFlashcards) =>
//         prevFlashcards.map((fc) =>
//           fc._id === flashcardId ? { ...fc, box: newBox, nextReviewDate } : fc
//         )
//       );
//     } catch (err) {
//       setError("Failed to update flashcard.");
//     }
//   };

//   const filteredFlashcards = flashcards.filter(
//     (flashcard) => flashcard.domain === selectedDomain
//   );

//   const boxes = [1, 2, 3, 4]; // Box levels

//   return (
//     <div className="revise-container">
//       <h2>Revise Flashcards</h2>
//       {error && <p className="text-red-500">{error}</p>}
      
//       <div className="domains">
//         {domains.map((domain) => (
//           <div
//             key={domain}
//             className="domain-box"
//             onClick={() => handleDomainClick(domain)}
//           >
//             {domain}
//           </div>
//         ))}
//       </div>

//       {selectedDomain && (
//         <div className="flashcards">
//           <h3>{selectedDomain} Flashcards</h3>
//           {boxes.map((box) => (
//             <div key={box} className="box">
//               <h4>Box {box}</h4>
//               {filteredFlashcards
//                 .filter((flashcard) => flashcard.box === box)
//                 .map((flashcard) => (
//                   <div key={flashcard._id} className="flashcard">
//                     <h4>{flashcard.question}</h4>
//                     <p>{flashcard.answer}</p>
//                     <button onClick={() => handleAnswer(flashcard._id, true)}>Correct</button>
//                     <button onClick={() => handleAnswer(flashcard._id, false)}>Incorrect</button>
//                     <p>Next Review: {new Date(flashcard.nextReviewDate).toLocaleDateString()}</p>
//                   </div>
//                 ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviseFlashcards;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const BASE_URL = "http://localhost:5832";

// const ReviseFlashcards = () => {
//   const [flashcards, setFlashcards] = useState([]);
//   const [selectedDomain, setSelectedDomain] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // List of domains to be displayed
//   const domains = ["Math", "Science", "History"];

//   useEffect(() => {
//     const fetchFlashcards = async () => {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setError("Token is missing or expired.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const res = await axios.get(`${BASE_URL}/flashcards`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         // Ensure date conversion
//         const formattedFlashcards = res.data.map((fc) => ({
//           ...fc,
//           nextReviewDate: fc.nextReviewDate ? new Date(fc.nextReviewDate).toISOString() : null,
//         }));

//         setFlashcards(formattedFlashcards);
//       } catch (err) {
//         setError(err.response?.data?.message || "Failed to load flashcards.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlashcards();
//   }, []);

//   const handleDomainClick = (domain) => {
//     setSelectedDomain(domain);
//   };

//   const handleAnswer = async (flashcardId, correct) => {
//     const flashcard = flashcards.find((fc) => fc._id === flashcardId);
//     if (!flashcard) return;

//     let newBox = correct ? Math.min(flashcard.box + 1, 4) : 1;
//     let nextReviewDate = new Date();

//     if (correct) {
//       nextReviewDate.setDate(nextReviewDate.getDate() + (newBox === 1 ? 1 : newBox * 3));
//     } else {
//       nextReviewDate.setDate(nextReviewDate.getDate() + 1);
//     }

//     try {
//       await axios.put(`${BASE_URL}/flashcards/${flashcardId}`, {
//         box: newBox,
//         nextReviewDate: nextReviewDate.toISOString(),
//       });

//       setFlashcards((prevFlashcards) =>
//         prevFlashcards.map((fc) =>
//           fc._id === flashcardId
//             ? { ...fc, box: newBox, nextReviewDate: nextReviewDate.toISOString() }
//             : fc
//         )
//       );
//     } catch (err) {
//       setError("Failed to update flashcard.");
//     }
//   };

//   const filteredFlashcards = flashcards.filter(
//     (flashcard) => flashcard.domain === selectedDomain
//   );

//   const boxes = [1, 2, 3, 4]; // Box levels

//   return (
//     <div className="revise-container">
//       <h2>Revise Flashcards</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       {loading && <p className="text-blue-500">Loading flashcards...</p>}

//       <div className="domains">
//         {domains.map((domain) => (
//           <div
//             key={domain}
//             className={`domain-box ${selectedDomain === domain ? "selected" : ""}`}
//             onClick={() => handleDomainClick(domain)}
//           >
//             {domain}
//           </div>
//         ))}
//       </div>

//       {selectedDomain && (
//         <div className="flashcards">
//           <h3>{selectedDomain} Flashcards</h3>
//           {boxes.map((box) => (
//             <div key={box} className="box">
//               <h4>Box {box}</h4>
//               {filteredFlashcards
//                 .filter((flashcard) => flashcard.box === box)
//                 .map((flashcard) => (
//                   <div key={flashcard._id} className="flashcard">
//                     <h4>{flashcard.question}</h4>
//                     <p>{flashcard.answer}</p>
//                     <button className="correct-btn" onClick={() => handleAnswer(flashcard._id, true)}>Correct</button>
//                     <button className="incorrect-btn" onClick={() => handleAnswer(flashcard._id, false)}>Incorrect</button>
//                     <p>Next Review: {flashcard.nextReviewDate ? new Date(flashcard.nextReviewDate).toLocaleDateString() : "Not Set"}</p>
//                   </div>
//                 ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviseFlashcards;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Card, Alert, Form, Button, InputGroup } from "react-bootstrap"; // Import Bootstrap components

// const BASE_URL = "http://localhost:5832";

// const ReviseFlashcards = () => {
//   const [flashcards, setFlashcards] = useState([]);
//   const [selectedDomain, setSelectedDomain] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false); // For password visibility (if needed)

//   const domains = ["Math", "Science", "History"];

//   useEffect(() => {
//     const fetchFlashcards = async () => {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setError("Token is missing or expired.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const res = await axios.get(`${BASE_URL}/flashcards`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const formattedFlashcards = res.data.map((fc) => ({
//           ...fc,
//           nextReviewDate: fc.nextReviewDate ? new Date(fc.nextReviewDate).toISOString() : null,
//         }));

//         setFlashcards(formattedFlashcards);
//       } catch (err) {
//         setError(err.response?.data?.message || "Failed to load flashcards.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlashcards();
//   }, []);

//   const handleDomainClick = (domain) => {
//     setSelectedDomain(domain);
//   };

//   const handleAnswer = async (flashcardId, correct) => {
//     const flashcard = flashcards.find((fc) => fc._id === flashcardId);
//     if (!flashcard) return;

//     let newBox = correct ? Math.min(flashcard.box + 1, 4) : 1;
//     let nextReviewDate = new Date();

//     if (correct) {
//       nextReviewDate.setDate(nextReviewDate.getDate() + (newBox === 1 ? 1 : newBox * 3));
//     } else {
//       nextReviewDate.setDate(nextReviewDate.getDate() + 1);
//     }

//     try {
//       const response = await axios.put(`${BASE_URL}/flashcards/${flashcardId}`, {
//         box: newBox,
//         nextReviewDate: nextReviewDate.toISOString(),
//       }, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } // Include token in PUT request headers
//       });

//       if (!response.ok) { // Check for HTTP errors
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }


//       setFlashcards((prevFlashcards) =>
//         prevFlashcards.map((fc) =>
//           fc._id === flashcardId
//             ? { ...fc, box: newBox, nextReviewDate: nextReviewDate.toISOString() }
//             : fc
//         )
//       );
//     } catch (err) {

//       setError(err.response?.data?.message || err.message || "Failed to update flashcard."); // More specific error message
//       console.error("Update Error:", err);
//     }
//   };

//   const filteredFlashcards = flashcards.filter(
//     (flashcard) => flashcard.domain === selectedDomain
//   );

//   const boxes = [1, 2, 3, 4];

//   return (
//     <Container> {/* Bootstrap Container for responsiveness */}
//       <Row>
//         <Col md={{ span: 8, offset: 2 }}> {/* Center the content */}
//           <Card className="mt-5"> {/* Add margin top */}
//             <Card.Body>
//               <Card.Title>Revise Flashcards</Card.Title>
//               {error && <Alert variant="danger">{error}</Alert>}
//               {loading && <Alert variant="info">Loading flashcards...</Alert>}

//               <div className="mb-3"> {/* Add margin bottom for spacing */}
//                 {domains.map((domain) => (
//                   <Button
//                     key={domain}
//                     variant={selectedDomain === domain ? "primary" : "outline-primary"}
//                     className="me-2" // Add margin right for spacing
//                     onClick={() => handleDomainClick(domain)}
//                   >
//                     {domain}
//                   </Button>
//                 ))}
//               </div>

//               {selectedDomain && (
//                 <div>
//                   <h3>{selectedDomain} Flashcards</h3>
//                   {boxes.map((box) => (
//                     <div key={box} className="mb-4"> {/* Add margin bottom for spacing */}
//                       <h4>Box {box}</h4>
//                       {filteredFlashcards
//                         .filter((flashcard) => flashcard.box === box)
//                         .map((flashcard) => (
//                           <Card key={flashcard._id} className="mb-2"> {/* Card for each flashcard */}
//                             <Card.Body>
//                               <Card.Title>{flashcard.question}</Card.Title>
//                               <Card.Text>{flashcard.answer}</Card.Text>
//                               <Button
//                                 variant="success"
//                                 className="me-2"
//                                 onClick={() => handleAnswer(flashcard._id, true)}
//                               >
//                                 Correct
//                               </Button>
//                               <Button
//                                 variant="danger"
//                                 onClick={() => handleAnswer(flashcard._id, false)}
//                               >
//                                 Incorrect
//                               </Button>
//                               <p className="mt-2">
//                                 Next Review:{" "}
//                                 {flashcard.nextReviewDate
//                                   ? new Date(flashcard.nextReviewDate).toLocaleDateString()
//                                   : "Not Set"}
//                               </p>
//                             </Card.Body>
//                           </Card>
//                         ))}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ReviseFlashcards;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Alert, Button } from "react-bootstrap";

const BASE_URL = "http://localhost:5832";

const ReviseFlashcards = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const domains = ["Math", "Science", "History"];

  // Fetch flashcards on component mount
  useEffect(() => {
    const fetchFlashcards = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Token is missing or expired.");
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
    };

    fetchFlashcards();
  }, []);

  // Handle domain selection
  const handleDomainClick = (domain) => {
    setSelectedDomain(domain);
  };

  // Handle answering a flashcard
  const handleAnswer = async (flashcardId, correct) => {
    const flashcard = flashcards.find((fc) => fc._id === flashcardId);
    if (!flashcard) return;

    let newBox = correct ? Math.min(flashcard.box + 1, 4) : 1;
    let nextReviewDate = new Date();

    if (correct) {
      // Increment the next review date based on the new box value
      nextReviewDate.setDate(nextReviewDate.getDate() + (newBox === 1 ? 1 : newBox * 3));
    } else {
      // If incorrect, reset the box to 1 and set the next review date to tomorrow
      nextReviewDate.setDate(nextReviewDate.getDate() + 1);
    }

    try {
      const response = await axios.put(
        `${BASE_URL}/flashcards/${flashcardId}`,
        {
          box: newBox,
          nextReview: nextReviewDate.toISOString(), // Use `nextReview` to match backend
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        // Use the updated flashcard data returned from the backend
        const updatedFlashcard = response.data.flashcard;

        // Update the flashcards state with the updated flashcard
        setFlashcards((prevFlashcards) =>
          prevFlashcards.map((fc) =>
            fc._id === updatedFlashcard._id ? updatedFlashcard : fc
          )
        );
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to update flashcard.");
      console.error("Update Error:", err);
    }
  };

  // Filter flashcards by selected domain
  const filteredFlashcards = flashcards.filter(
    (flashcard) => flashcard.domain === selectedDomain
  );

  const boxes = [1, 2, 3, 4];

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="mt-5">
            <Card.Body>
              <Card.Title>Revise Flashcards</Card.Title>
              {error && <Alert variant="danger">{error}</Alert>}
              {loading && <Alert variant="info">Loading flashcards...</Alert>}

              <div className="mb-3">
                {domains.map((domain) => (
                  <Button
                    key={domain}
                    variant={selectedDomain === domain ? "primary" : "outline-primary"}
                    className="me-2"
                    onClick={() => handleDomainClick(domain)}
                  >
                    {domain}
                  </Button>
                ))}
              </div>

              {selectedDomain && (
                <div>
                  <h3>{selectedDomain} Flashcards</h3>
                  {boxes.map((box) => (
                    <div key={box} className="mb-4">
                      <h4>Box {box}</h4>
                      {filteredFlashcards
                        .filter((flashcard) => flashcard.box === box)
                        .map((flashcard) => (
                          <Card key={flashcard._id} className="mb-2">
                            <Card.Body>
                              <Card.Title>{flashcard.question}</Card.Title>
                              <Card.Text>{flashcard.answer}</Card.Text>
                              <Button
                                variant="success"
                                className="me-2"
                                onClick={() => handleAnswer(flashcard._id, true)}
                              >
                                Correct
                              </Button>
                              <Button
                                variant="danger"
                                onClick={() => handleAnswer(flashcard._id, false)}
                              >
                                Incorrect
                              </Button>
                              <p className="mt-2">
                                Next Review:{" "}
                                {flashcard.nextReview
                                  ? new Date(flashcard.nextReview).toLocaleDateString()
                                  : "Not Set"}
                              </p>
                            </Card.Body>
                          </Card>
                        ))}
                    </div>
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviseFlashcards;