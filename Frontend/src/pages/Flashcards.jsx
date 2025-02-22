
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
