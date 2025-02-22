
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Flashcards from "./pages/Flashcards";
import BattleMode from "./pages/BattleMode";
import ReviseFlashcards from "./pages/ReviseFlashcards";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { motion } from "framer-motion"; // Import Framer Motion

const AnimatedContainer = motion(Container); // Create a motion component
const AnimatedNavbar = motion(Navbar);
const AnimatedNavLink = motion(Nav.Link);
const AnimatedButton = motion(Button);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null); // State for username

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);

    // Get username if authenticated
    if (token) {
      const storedUsername = localStorage.getItem("username"); // Retrieve from local storage
      if (storedUsername) {
        setUsername(storedUsername);
      } else {
        // If not found in local storage, you might need to fetch it from the server
        // after verifying the token.  For this example, I'll keep it simple:
        const decodedToken = decodeToken(token); // You'll need a decodeToken function
        if (decodedToken && decodedToken.username) {
          setUsername(decodedToken.username);
          localStorage.setItem("username", decodedToken.username); // Store it
        }
      }
    } else {
      setUsername(null);
    }
  }, []);

  const decodeToken = (token) => {
    try {
      const decoded = jwt_decode(token); // Make sure you have jwt_decode installed
      return decoded;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username"); // Remove username on logout
    setIsAuthenticated(false);
    setUsername(null); // Clear username state
  };
  const showWelcomeMessage = location.pathname === "/";
  return (
    <Router>
      {showWelcomeMessage && ( // Conditional rendering based on initial load
        <Container className="text-center" style={{ paddingTop: "20px" }}>
          <h2>Welcome to the Flashcard Learning App</h2>
        </Container>
      )}



      <AnimatedNavbar bg="dark" variant="dark" expand="lg" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Container>
          <Navbar.Brand as={Link} to="/" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>Flashcard Learning App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isAuthenticated ? (
                <>
                  <AnimatedNavLink as={Link} to="/flashcards" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>Flashcards</AnimatedNavLink>
                  <AnimatedNavLink as={Link} to="/battle" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>Battle Mode</AnimatedNavLink>
                  <AnimatedNavLink as={Link} to="/revise-flashcards" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>Revise Flashcards</AnimatedNavLink>
                  <Navbar.Text className="me-3 text-light"> {/* Display username */}
                    Hi {username} !
                  </Navbar.Text>
                  <AnimatedButton variant="outline-light" onClick={handleLogout} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>Logout</AnimatedButton>
                </>
              ) : (
                <>
                  <AnimatedNavLink as={Link} to="/login" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>Login</AnimatedNavLink>
                  <AnimatedNavLink as={Link} to="/signup" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>Signup</AnimatedNavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </AnimatedNavbar>
      <div style={{ paddingTop: "40px" }}> {/* Padding for fixed navbar */}
        <AnimatedContainer className="mt-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}> {/* Reduced top margin */}
          <Routes>
            <Route path="/flashcards" element={isAuthenticated ? <Flashcards /> : <Navigate to="/login" />} />
            <Route path="/battle" element={isAuthenticated ? <BattleMode /> : <Navigate to="/login" />} />
            <Route path="/revise-flashcards" element={isAuthenticated ? <ReviseFlashcards /> : <Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </AnimatedContainer>
      </div>
      
    </Router>
  );
};

export default App;