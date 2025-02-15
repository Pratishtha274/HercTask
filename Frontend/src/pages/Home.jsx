import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center mt-10">
            <h2 className="text-2xl font-bold">Welcome to Flashcard Battle App!</h2>
            <p className="mt-4 text-lg">Improve your learning with the Leitner System or challenge friends in Battle Mode.</p>

            <div className="mt-6 space-x-4">
                <Link to="/flashcards" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md">Study Flashcards</Link>
                <Link to="/battle" className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md">Start a Battle</Link>
            </div>
        </div>
    );
};

export default Home;
