
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card, Alert, Row, Col, Spinner } from "react-bootstrap";

const SignupPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5832/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup Successful!");
        navigate("/login");
      } else {
        setError(data.error || "Signup Failed");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setError("A network error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="shadow p-4">
            <Card.Title className="text-center mb-3">Signup</Card.Title>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name" // Placeholder added
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email" // Placeholder added
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password" // Placeholder added
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : "Sign Up"}
              </Button>
            </Form>
            <div className="text-center mt-3">
              <p>
                Already have an account?{" "}
                <Button variant="link" onClick={() => navigate("/login")}>
                  Login
                </Button>
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;