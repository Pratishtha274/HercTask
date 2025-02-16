// // // // import React from "react";
// // // // import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
// // // // import { useNavigate } from "react-router-dom";

// // // // const LoginPage = () => {
// // // //   const navigate = useNavigate();

// // // //   const handleLogin = (e) => {
// // // //     e.preventDefault();
// // // //     // TODO: Add authentication logic here
// // // //     console.log("Login submitted");
// // // //     navigate("/dashboard"); // Redirect after login
// // // //   };

// // // //   return (
// // // //     <Container className="d-flex justify-content-center align-items-center vh-100">
// // // //       <Row className="w-100">
// // // //         <Col md={{ span: 6, offset: 3 }}>
// // // //           <Card className="shadow p-4">
// // // //             <Card.Title className="text-center mb-3">Login</Card.Title>
// // // //             <Form onSubmit={handleLogin}>
// // // //               <Form.Group controlId="formBasicEmail" className="mb-3">
// // // //                 <Form.Label>Email address</Form.Label>
// // // //                 <Form.Control type="email" placeholder="Enter email" required />
// // // //               </Form.Group>

// // // //               <Form.Group controlId="formBasicPassword" className="mb-3">
// // // //                 <Form.Label>Password</Form.Label>
// // // //                 <Form.Control type="password" placeholder="Password" required />
// // // //               </Form.Group>

// // // //               <Button variant="primary" type="submit" className="w-100">
// // // //                 Login
// // // //               </Button>
// // // //             </Form>

// // // //             <div className="text-center mt-3">
// // // //               <p>
// // // //                 Don't have an account?{" "}
// // // //                 <Button variant="link" onClick={() => navigate("/signup")}>
// // // //                   Sign up
// // // //                 </Button>
// // // //               </p>
// // // //             </div>
// // // //           </Card>
// // // //         </Col>
// // // //       </Row>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default LoginPage;
// // // import React, { useState } from "react";
// // // import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
// // // import { useNavigate } from "react-router-dom";

// // // const LoginPage = () => {
// // //   const navigate = useNavigate();
// // //   const [formData, setFormData] = useState({ email: "", password: "" });
// // //   const [error, setError] = useState("");

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();
// // //     setError(""); // Clear previous errors

// // //     try {
// // //       const response = await fetch("http://localhost:5832/auth/login", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(formData),
// // //       });

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         localStorage.setItem("token", data.token); // Store JWT token
// // //         alert("Login Successful!");
// // //         navigate("/dashboard"); // Redirect to dashboard
// // //       } else {
// // //         setError(data.error || "Invalid credentials");
// // //       }
// // //     } catch (error) {
// // //       setError("An error occurred. Please try again.");
// // //       console.error("Login Error:", error);
// // //     }
// // //   };

// // //   return (
// // //     <Container className="d-flex justify-content-center align-items-center vh-100">
// // //       <Row className="w-100">
// // //         <Col md={{ span: 6, offset: 3 }}>
// // //           <Card className="shadow p-4">
// // //             <Card.Title className="text-center mb-3">Login</Card.Title>

// // //             {error && <Alert variant="danger">{error}</Alert>} {/* Show error message */}

// // //             <Form onSubmit={handleLogin}>
// // //               <Form.Group controlId="formBasicEmail" className="mb-3">
// // //                 <Form.Label>Email address</Form.Label>
// // //                 <Form.Control
// // //                   type="email"
// // //                   name="email"
// // //                   placeholder="Enter email"
// // //                   value={formData.email}
// // //                   onChange={handleChange}
// // //                   required
// // //                 />
// // //               </Form.Group>

// // //               <Form.Group controlId="formBasicPassword" className="mb-3">
// // //                 <Form.Label>Password</Form.Label>
// // //                 <Form.Control
// // //                   type="password"
// // //                   name="password"
// // //                   placeholder="Password"
// // //                   value={formData.password}
// // //                   onChange={handleChange}
// // //                   required
// // //                 />
// // //               </Form.Group>

// // //               <Button variant="primary" type="submit" className="w-100">
// // //                 Login
// // //               </Button>
// // //             </Form>

// // //             <div className="text-center mt-3">
// // //               <p>
// // //                 Don't have an account?{" "}
// // //                 <Button variant="link" onClick={() => navigate("/signup")}>
// // //                   Sign up
// // //                 </Button>
// // //               </p>
// // //             </div>
// // //           </Card>
// // //         </Col>
// // //       </Row>
// // //     </Container>
// // //   );
// // // };

// // // export default LoginPage;
// // import React, { useState } from "react";
// // import { Form, Button, Container, Row, Col, Card, Alert, InputGroup } from "react-bootstrap";
// // import { useNavigate } from "react-router-dom";

// // const LoginPage = () => {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({ email: "", password: "" });
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [showPassword, setShowPassword] = useState(false);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setLoading(true);

// //     try {
// //       const response = await fetch("http://localhost:5832/auth/login", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         localStorage.setItem("token", data.token);
// //         alert("Login Successful!");
// //         navigate("/dashboard");
// //       } else {
// //         setError(data.error || "Invalid email or password.");
// //       }
// //     } catch (err) {
// //       setError("Network error! Please try again.");
// //       console.error("Login Error:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <Container className="d-flex justify-content-center align-items-center vh-100">
// //       <Row className="w-100">
// //         <Col md={{ span: 6, offset: 3 }}>
// //           <Card className="shadow p-4">
// //             <Card.Title className="text-center mb-3">Login</Card.Title>

// //             {error && <Alert variant="danger">{error}</Alert>}

// //             <Form onSubmit={handleLogin}>
// //               <Form.Group controlId="formBasicEmail" className="mb-3">
// //                 <Form.Label>Email address</Form.Label>
// //                 <Form.Control
// //                   type="email"
// //                   name="email"
// //                   placeholder="Enter email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </Form.Group>

// //               <Form.Group controlId="formBasicPassword" className="mb-3">
// //                 <Form.Label>Password</Form.Label>
// //                 <InputGroup>
// //                   <Form.Control
// //                     type={showPassword ? "text" : "password"}
// //                     name="password"
// //                     placeholder="Enter password"
// //                     value={formData.password}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                   <Button
// //                     variant="outline-secondary"
// //                     onClick={() => setShowPassword(!showPassword)}
// //                   >
// //                     {showPassword ? "Hide" : "Show"}
// //                   </Button>
// //                 </InputGroup>
// //               </Form.Group>

// //               <Button variant="primary" type="submit" className="w-100" disabled={loading}>
// //                 {loading ? "Logging in..." : "Login"}
// //               </Button>
// //             </Form>

// //             <div className="text-center mt-3">
// //               <p>
// //                 Don't have an account?{" "}
// //                 <Button variant="link" onClick={() => navigate("/signup")}>
// //                   Sign up
// //                 </Button>
// //               </p>
// //             </div>
// //           </Card>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default LoginPage;
// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col, Card, Alert, InputGroup } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5832/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       console.log("Server Response:", data); // Debugging log

//       if (response.ok && data.token) {
//         sessionStorage.setItem("token", data.token); // Store securely in sessionStorage
//         alert("Login Successful!");
//         navigate("/dashboard");
//       } else {
//         setError(data.error || "Invalid email or password.");
//       }
//     } catch (err) {
//       setError("Network error! Please try again.");
//       console.error("Login Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Row className="w-100">
//         <Col md={{ span: 6, offset: 3 }}>
//           <Card className="shadow p-4">
//             <Card.Title className="text-center mb-3">Login</Card.Title>

//             {error && <Alert variant="danger">{error}</Alert>}

//             <Form onSubmit={handleLogin}>
//               <Form.Group controlId="formBasicEmail" className="mb-3">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Enter email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group controlId="formBasicPassword" className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <InputGroup>
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     placeholder="Enter password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                   />
//                   <Button
//                     variant="outline-secondary"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? "Hide" : "Show"}
//                   </Button>
//                 </InputGroup>
//               </Form.Group>

//               <Button variant="primary" type="submit" className="w-100" disabled={loading}>
//                 {loading ? "Logging in..." : "Login"}
//               </Button>
//             </Form>

//             <div className="text-center mt-3">
//               <p>
//                 Don't have an account?{" "}
//                 <Button variant="link" onClick={() => navigate("/signup")}>
//                   Sign up
//                 </Button>
//               </p>
//             </div>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LoginPage;
// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col, Card, Alert, InputGroup } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const LoginPage = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5832/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       console.log("Server Response:", data); // Debugging log

//       if (response.ok && data.token) {
//         localStorage.setItem("token", data.token); // Store token in localStorage
//         setIsAuthenticated(true); // Update authentication state
//         alert("Login Successful!");
//         navigate("/flashcards"); // Redirect to flashcards page
//       } else {
//         setError(data.error || "Invalid email or password.");
//       }
//     } catch (err) {
//       setError("Network error! Please try again.");
//       console.error("Login Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Row className="w-100">
//         <Col md={{ span: 6, offset: 3 }}>
//           <Card className="shadow p-4">
//             <Card.Title className="text-center mb-3">Login</Card.Title>

//             {error && <Alert variant="danger">{error}</Alert>}

//             <Form onSubmit={handleLogin}>
//               <Form.Group controlId="formBasicEmail" className="mb-3">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Enter email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group controlId="formBasicPassword" className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <InputGroup>
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     placeholder="Enter password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                   />
//                   <Button
//                     variant="outline-secondary"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? "Hide" : "Show"}
//                   </Button>
//                 </InputGroup>
//               </Form.Group>

//               <Button variant="primary" type="submit" className="w-100" disabled={loading}>
//                 {loading ? "Logging in..." : "Login"}
//               </Button>
//             </Form>

//             <div className="text-center mt-3">
//               <p>
//                 Don't have an account?{" "}
//                 <Button variant="link" onClick={() => navigate("/signup")}>
//                   Sign up
//                 </Button>
//               </p>
//             </div>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LoginPage;
// import axios from "axios";
// import { useState } from "react";

// const LoginPage = ({ setAuth }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5832/login", {
//         email,
//         password,
//       });

//       const { token } = response.data;
//       if (token) {
//         console.log("Token received:", token);
//         sessionStorage.setItem("token", token);
//         setAuth(true); // Update auth state
//       } else {
//         throw new Error("Invalid token received.");
//       }
//     } catch (error) {
//       console.error("Login failed:", error.response?.data || error.message);
//       setError("Invalid email or password. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default LoginPage;
// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col, Card, Alert, InputGroup } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const LoginPage = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5832/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       console.log("Server Response:", data); // Debugging log

//       if (response.ok && data.token) {
//         localStorage.setItem("token", data.token); // Store token in localStorage
//         setIsAuthenticated(true); // Update authentication state
//         alert("Login Successful!");
//         navigate("/flashcards"); // Redirect to flashcards page
//       } else {
//         setError(data.error || "Invalid email or password.");
//       }
//     } catch (err) {
//       setError("Network error! Please try again.");
//       console.error("Login Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Row className="w-100">
//         <Col md={{ span: 6, offset: 3 }}>
//           <Card className="shadow p-4">
//             <Card.Title className="text-center mb-3">Login</Card.Title>

//             {error && <Alert variant="danger">{error}</Alert>}

//             <Form onSubmit={handleLogin}>
//               <Form.Group controlId="formBasicEmail" className="mb-3">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Enter email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group controlId="formBasicPassword" className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <InputGroup>
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     placeholder="Enter password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                   />
//                   <Button
//                     variant="outline-secondary"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? "Hide" : "Show"}
//                   </Button>
//                 </InputGroup>
//               </Form.Group>

//               <Button variant="primary" type="submit" className="w-100" disabled={loading}>
//                 {loading ? "Logging in..." : "Login"}
//               </Button>
//             </Form>

//             <div className="text-center mt-3">
//               <p>
//                 Don't have an account?{" "}
//                 <Button variant="link" onClick={() => navigate("/signup")}>
//                   Sign up
//                 </Button>
//               </p>
//             </div>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LoginPage;
// import React, { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";

// const LoginPage = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5832/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok && data.token) {
//         localStorage.setItem("token", data.token);
//         window.location.href = "/flashcards";
//       } else {
//         setError(data.error || "Invalid email or password.");
//       }
//     } catch (err) {
//       setError("Network error! Please try again.");
//       console.error("Login Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600">
//       <div className="container mx-auto px-4"> {/* Container for responsiveness */}
//         <div className="max-w-md mx-auto bg-zinc-900 text-white p-8 rounded-xl shadow-xl"> {/* Centered and sized card */}
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold uppercase mb-2">LOGIN</h2>
//             <p className="text-zinc-400">Please enter your login and password!</p>
//           </div>

//           {error && (
//             <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg mb-6">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleLogin} className="space-y-6">
//             <div className="space-y-2">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full h-12 px-4 bg-zinc-800 border border-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>

//             <div className="space-y-2">
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="w-full h-12 px-4 bg-zinc-800 border border-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12"
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-0 top-0 h-12 w-12 text-zinc-400 hover:text-white flex items-center justify-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full h-12 bg-white text-black hover:bg-zinc-200 transition-colors rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Logging in..." : "LOGIN"}
//             </button>


//             {/* Removed social login buttons */}

//             <div className="text-center">
//               <p className="text-zinc-400">
//                 Don't have an account?{" "}
//                 <button
//                   type="button"
//                   className="text-white hover:text-zinc-200 font-semibold"
//                   onClick={() => (window.location.href = "/signup")}
//                 >
//                   Sign Up
//                 </button>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card, Alert, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5832/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Server Response:", data); // Debugging log

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token); // Store token in localStorage
        setIsAuthenticated(true); // Update authentication state
        alert("Login Successful!");
        navigate("/flashcards"); // Redirect to flashcards page
      } else {
        setError(data.error || "Invalid email or password.");
      }
    } catch (err) {
      setError("Network error! Please try again.");
      console.error("Login Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="shadow p-4">
            <Card.Title className="text-center mb-3">Login</Card.Title>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputGroup>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </Form>

            <div className="text-center mt-3">
              <p>
                Don't have an account?{" "}
                <Button variant="link" onClick={() => navigate("/signup")}>
                  Sign up
                </Button>
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;