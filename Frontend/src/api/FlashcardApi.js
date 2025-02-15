//const BASE_URL = "http://localhost:5832"; // ✅ Backend URL

const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
};

export const addFlashcard = async (flashcardData, token) => {
    try {
        const response = await fetch(`${BASE_URL}/flashcards`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(flashcardData),
        });

        return await handleResponse(response);
    } catch (error) {
        console.error("Add Flashcard Error:", error.message);
        return { error: error.message };
    }
};

export const getFlashcards = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/flashcards`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return await handleResponse(response);
    } catch (error) {
        console.error("Get Flashcards Error:", error.message);
        return { error: error.message };
    }
};

export const deleteFlashcard = async (id, token) => {
    try {
        const response = await fetch(`${BASE_URL}/flashcards/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return await handleResponse(response);
    } catch (error) {
        console.error("Delete Flashcard Error:", error.message);
        return { error: error.message };
    }
};

export const updateFlashcard = async (id, isCorrect, token) => {
    try {
        const response = await fetch(`${BASE_URL}/flashcards/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ isCorrect }),
        });

        return await handleResponse(response);
    } catch (error) {
        console.error("Update Flashcard Error:", error.message);
        return { error: error.message };
    }
};
