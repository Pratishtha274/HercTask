
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