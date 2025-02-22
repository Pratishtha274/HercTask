
import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5832";

const FlashcardForm = ({ onAddFlashcard }) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [domain, setDomain] = useState("");
    const [error, setError] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!question.trim() || !answer.trim() || !domain.trim()) {
            setError("All fields (question, answer, domain) are required.");
            return;
        }

        const token = localStorage.getItem("token");

        try {
            const res = await axios.post(
                `${BASE_URL}/flashcards`,
                { question, answer, domain },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (res.status === 201) { // Check for successful creation (201)
              onAddFlashcard(res.data.flashcard); // Access flashcard from res.data
              setQuestion("");
              setAnswer("");
              setDomain("");
              setError("");
            } else {
              setError(res.data.error || "Failed to add flashcard.");
            }
        } catch (err) {
            setError(err.response?.data?.message || "A network error occurred.");
            console.error("Error adding flashcard:", err); // Log the error for debugging
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 ${isDarkMode ? "bg-gray-900" : "bg-purple-50"}`}>
            <div className={`w-full max-w-md p-6 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
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
                        required // Added required attribute
                    />

                    <textarea
                        placeholder="Enter answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className={`w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode ? "bg-gray-700 border-gray-600 focus:ring-purple-500" : "bg-purple-50 border-purple-200 focus:ring-purple-500"}`}
                        rows="4"
                        required // Added required attribute
                    />

                    <select
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        className={`w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode ? "bg-gray-700 border-gray-600 focus:ring-purple-500" : "bg-purple-50 border-purple-200 focus:ring-purple-500"}`}
                        required // Added required attribute
                    >
                        <option value="">Select Domain</option>
                        <option value="Geography">Geography</option>
                        <option value="History">History</option>
                        <option value="Science">Science</option>
                        {/* ... more options ... */}
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