# Flashcard App - README

This document provides a concise overview of the Flashcard application's architecture, features, and setup instructions.

## Overview

The Flashcard app is a web application designed to help users learn and memorize information using flashcards and a spaced repetition system. It features user authentication, flashcard management, and a battle/quiz mode. It's built using a MERN stack (MongoDB, Express.js, React, Node.js) architecture.

## Features

*   **User Authentication:** Secure signup and login functionality using JWT.
*   **Flashcard Management:** Create, view, update, and delete flashcards with a spaced repetition system (SRS) for optimized learning. Flashcards can be categorized by domain.
*   **Battle/Quiz Mode:** Test your knowledge in a timed battle against yourself.
*   **Spaced Repetition Review:** A dedicated review mode to focus on flashcards due for review, organized into review boxes.
*   **Responsive Design:** Accessible on various devices.

## Technologies Used

*   **Frontend:** React, React Router, React Bootstrap
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB with Mongoose
*   **Authentication:** JWT (JSON Web Tokens)

## Architecture

The application follows a MERN stack architecture:

*   **Frontend (React):** Handles user interface and interactions.
*   **Backend (Express.js/Node.js):** Manages API requests, database interactions, and authentication.
*   **Database (MongoDB):** Stores user data, flashcards, and battle information.

## Database Schema

*   **User:** Stores user information (name, email, password, battle statistics).
*   **Flashcard:** Stores flashcard data (question, answer, domain, SRS box level, next review date).
*   **Battle:** Stores battle information (player, category, flashcards, score).

## API Endpoints

(See detailed API documentation within the code for a complete list.) Key endpoints include:

*   `/auth/signup`, `/auth/login`: User authentication.
*   `/flashcards`: CRUD operations for flashcards.
*   `/battles`: Start and answer quiz questions.

## Frontend Components

*   `LoginPage`, `SignupPage`: Authentication components.
*   `Home`: Landing page (currently placeholder).
*   `Flashcards`: Manages flashcard display and interactions.
*   `BattleMode`: Handles the flashcard quiz/battle functionality.
*   `ReviseFlashcards`: Component for reviewing flashcards using the SRS.

## Setup Instructions

### Backend

1.  Clone the repository.
2.  Navigate to the backend directory.
3.  Install dependencies: `npm install`
4.  Create a `.env` file and configure environment variables (e.g., `MONGO_URL`, `JWT_SECRET`).
5.  Start the server: `npm start`

### Frontend

1.  Navigate to the frontend directory.
2.  Install dependencies: `npm install`
3.  Create a `.env` file and configure environment variables (e.g., `REACT_APP_API_URL`).
4.  Start the development server: `npm start`

## Running the Application

1.  Start the backend server.
2.  Start the frontend development server.
3.  Access the application in your browser.

## BattleMode Component

The `BattleMode` component implements the flashcard quiz functionality. It features:

*   Quiz initialization on component mount.
*   5-second timer for each question.
*   Automatic answer submission when the timer expires.
*   Quiz completion tracking and score display.
*   Dynamic question display.

## ReviseFlashcards Component

The `ReviseFlashcards` component handles the spaced repetition review process:

*   Fetches flashcards from the backend, including date formatting.
*   Allows users to select a domain for review.
*   Implements "Correct" and "Incorrect" buttons to update the SRS box level and next review date.
*   Displays flashcards grouped by SRS box.
*   Provides feedback on review progress.

## Spaced Repetition System (SRS) Implementation

The application uses a spaced repetition system to optimize learning. Flashcards are organized into review boxes, with the review schedule based on the box level.

*   **Box Levels:** Flashcards progress through boxes as they are answered correctly. Incorrect answers reset the flashcard to Box 1.
*   **Review Scheduling:** The time between reviews increases as the flashcard moves to higher boxes.
*   **`ReviseFlashcards` Component:** This component facilitates the SRS by displaying flashcards grouped by their current box and allowing users to mark answers as correct or incorrect, which updates the box level and next review date.



The `App` component sets up the routing and navigation for the application. Key features:

*   Uses `react-router-dom` for navigation.
*   Implements protected routes using `Navigate`. Unauthenticated users are redirected to the login page.
*   Provides a navigation bar with links to different sections.
*   Handles user authentication status and logout functionality.


![App_Preview](https://github.com/user-attachments/assets/61169e32-431d-4e8e-ae43-3daaeddf7772)
