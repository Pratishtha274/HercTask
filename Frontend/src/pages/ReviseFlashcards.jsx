
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



const domains = ["Geography", "Science", "History"];



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