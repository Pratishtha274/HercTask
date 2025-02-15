// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import Flashcards from "./pages/Flashcards";
// import BattleMode from "./pages/BattleMode";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Navbar, Nav, Button } from "react-bootstrap";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check authentication status on mount
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token); // Converts to boolean
//   }, []);

//   // Logout Function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       {/* Navbar */}
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand as={Link} to="/">Flashcard Learning App</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               {isAuthenticated ? (
//                 <>
//                   <Nav.Link as={Link} to="/flashcards">Flashcards</Nav.Link>
//                   <Nav.Link as={Link} to="/battle">Battle Mode</Nav.Link>
//                   <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
//                 </>
//               ) : (
//                 <>
//                   <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                   <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
//                 </>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Page Content */}
//       <Container className="mt-4 text-center">
//         <Routes>
//           <Route path="/" element={<h2>Welcome to the Flashcard Learning App</h2>} />
          
//           {/* Protect Routes: Redirect to Login if not authenticated */}
//           <Route path="/flashcards" element={isAuthenticated ? <Flashcards /> : <Navigate to="/login" />} />
//           <Route path="/battle" element={isAuthenticated ? <BattleMode /> : <Navigate to="/login" />} />
          
//           {/* Public Routes */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

// export default App;
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./App.css";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import Flashcards from "./pages/Flashcards";
// import BattleMode from "./pages/BattleMode";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Navbar, Nav, Button } from "react-bootstrap";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check authentication status on mount
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token); // Converts to boolean
//   }, []);

//   // Logout Function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       {/* Navbar */}
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand as={Link} to="/">Flashcard Learning App</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               {isAuthenticated ? (
//                 <>
//                   <Nav.Link as={Link} to="/flashcards">Flashcards</Nav.Link>
//                   <Nav.Link as={Link} to="/battle">Battle Mode</Nav.Link>
//                   <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
//                 </>
//               ) : (
//                 <>
//                   <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                   <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
//                 </>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Page Content */}
//       <Container className="mt-4 text-center">
//         <Routes>
//           <Route path="/" element={<h2>Welcome to the Flashcard Learning App</h2>} />
          
//           {/* Protect Routes: Redirect to Login if not authenticated */}
//           <Route path="/flashcards" element={isAuthenticated ? <Flashcards /> : <Navigate to="/login" />} />
//           <Route path="/battle" element={isAuthenticated ? <BattleMode /> : <Navigate to="/login" />} />
          
//           {/* Public Routes */}
//           <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
//           <Route path="/signup" element={<SignupPage />} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

// export default App;
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./App.css";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import Flashcards from "./pages/Flashcards";
// import BattleMode from "./pages/BattleMode";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Navbar, Nav, Button } from "react-bootstrap";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check authentication status on mount
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token); // Converts to boolean
//   }, []);

//   // Logout Function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       {/* Navbar */}
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand as={Link} to="/">Flashcard Learning App</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               {isAuthenticated ? (
//                 <>
//                   <Nav.Link as={Link} to="/flashcards">Flashcards</Nav.Link>
//                   <Nav.Link as={Link} to="/battle">Battle Mode</Nav.Link>
//                   <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
//                 </>
//               ) : (
//                 <>
//                   <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                   <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
//                 </>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Page Content */}
//       <Container className="mt-4 text-center">
//         <Routes>
//           <Route path="/" element={<h2>Welcome to the Flashcard Learning App</h2>} />
          
//           {/* Protect Routes: Redirect to Login if not authenticated */}
//           <Route path="/flashcards" element={isAuthenticated ? <Flashcards /> : <Navigate to="/login" />} />
//           <Route path="/battle" element={isAuthenticated ? <BattleMode /> : <Navigate to="/login" />} />
          
//           {/* Public Routes */}
//           <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
//           <Route path="/signup" element={<SignupPage />} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

// export default App;
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./App.css";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import Flashcards from "./pages/Flashcards";
// import BattleMode from "./pages/BattleMode";
// import ReviseFlashcards from "./pages/ReviseFlashcards";  // Add your new component here
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Navbar, Nav, Button } from "react-bootstrap";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check authentication status on mount
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token); // Converts to boolean
//   }, []);

//   // Logout Function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       {/* Navbar */}
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand as={Link} to="/">Flashcard Learning App</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               {isAuthenticated ? (
//                 <>
//                   <Nav.Link as={Link} to="/flashcards">Flashcards</Nav.Link>
//                   <Nav.Link as={Link} to="/battle">Battle Mode</Nav.Link>
//                   <Nav.Link as={Link} to="/revise-flashcards">Revise Flashcards</Nav.Link> {/* Add link here */}
//                   <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
//                 </>
//               ) : (
//                 <>
//                   <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                   <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
//                 </>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Page Content */}
//       <Container className="mt-4 text-center">
//         <Routes>
//           <Route path="/" element={<h2>Welcome to the Flashcard Learning App</h2>} />
          
//           {/* Protect Routes: Redirect to Login if not authenticated */}
//           <Route path="/flashcards" element={isAuthenticated ? <Flashcards /> : <Navigate to="/login" />} />
//           <Route path="/battle" element={isAuthenticated ? <BattleMode /> : <Navigate to="/login" />} />
//           <Route path="/revise-flashcards" element={isAuthenticated ? <ReviseFlashcards /> : <Navigate to="/login" />} /> {/* Add this route */}
          
//           {/* Public Routes */}
//           <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
//           <Route path="/signup" element={<SignupPage />} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

// export default App;
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Flashcards from "./pages/Flashcards";
import BattleMode from "./pages/BattleMode";
import ReviseFlashcards from "./pages/ReviseFlashcards"; // Import the new component
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Converts to boolean
  }, []);

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Flashcard Learning App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isAuthenticated ? (
                <>
                  <Nav.Link as={Link} to="/flashcards">Flashcards</Nav.Link>
                  <Nav.Link as={Link} to="/battle">Battle Mode</Nav.Link>
                  <Nav.Link as={Link} to="/revise-flashcards">Revise Flashcards</Nav.Link> {/* Add link here */}
                  <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content */}
      <Container className="mt-4 text-center">
        <Routes>
          <Route path="/" element={<h2>Welcome to the Flashcard Learning App</h2>} />

          {/* Protect Routes: Redirect to Login if not authenticated */}
          <Route path="/flashcards" element={isAuthenticated ? <Flashcards /> : <Navigate to="/login" />} />
          <Route path="/battle" element={isAuthenticated ? <BattleMode /> : <Navigate to="/login" />} />
          <Route path="/revise-flashcards" element={isAuthenticated ? <ReviseFlashcards /> : <Navigate to="/login" />} /> {/* Add this route */}

          {/* Public Routes */}
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;