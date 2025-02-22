
import React, { useState, useEffect } from "react";
import axios from "axios";

const BattleMode = () => {
    const [quiz, setQuiz] = useState(null); // Single-player quiz
    const [answer, setAnswer] = useState("");
    const [timer, setTimer] = useState(5); // 5-second timer
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [isQuizComplete, setIsQuizComplete] = useState(false); // Track quiz completion

    useEffect(() => {
        // Start the quiz when the component mounts
        const startQuiz = async () => {
            try {
                const response = await axios.post("/api/battles/start", {
                    player: "User1", // Replace with the actual user ID
                    category: "General", // Replace with the selected category
                });
                setQuiz(response.data.quiz);
                startTimer(); // Start the timer when the quiz starts
            } catch (err) {
                console.error("Failed to start quiz:", err);
            }
        };

        startQuiz();
    }, []);

    useEffect(() => {
        // Handle the timer countdown
        if (isTimerRunning && timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(interval);
        } else if (timer === 0) {
            // Automatically submit the answer when the timer runs out
            submitAnswer();
        }
    }, [isTimerRunning, timer]);

    const startTimer = () => {
        setTimer(5); // Reset the timer to 5 seconds
        setIsTimerRunning(true); // Start the timer
    };

    const submitAnswer = async () => {
        setIsTimerRunning(false); // Stop the timer

        try {
            const response = await axios.put(`/api/battles/${quiz._id}/answer`, {
                player: "User1", // Replace with the actual user ID
                userAnswer: answer,
            });

            // Update the quiz state with the new data
            setQuiz(response.data.quiz);

            // Check if the quiz is complete
            if (response.data.isComplete) {
                setIsQuizComplete(true);
            } else {
                setAnswer(""); // Reset the answer field
                startTimer(); // Restart the timer for the next question
            }
        } catch (err) {
            console.error("Failed to submit answer:", err);
        }
    };

    if (!quiz) return <p className="text-center mt-10">Loading quiz...</p>;

    if (isQuizComplete) {
        return (
            <div className="text-center mt-10">
                <h2 className="text-xl font-bold">Quiz Complete!</h2>
                <p className="mt-4">Your final score: {quiz.score}</p>
            </div>
        );
    }

    const currentFlashcard = quiz.flashcards[quiz.currentFlashcardIndex];

    return (
        <div className="text-center mt-10">
            <h2 className="text-xl font-bold">Flashcard Quiz Mode</h2>

            <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-lg">{currentFlashcard.question}</h3>

                <input
                    className="mt-4 p-2 border rounded"
                    type="text"
                    placeholder="Your Answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />

                <p className="mt-2">Time remaining: {timer} seconds</p>

                <button
                    onClick={submitAnswer}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Submit Answer
                </button>
            </div>
        </div>
    );
};

export default BattleMode;