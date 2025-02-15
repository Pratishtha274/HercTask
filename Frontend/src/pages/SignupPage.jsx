// import React, { useState } from "react";
// import { Form, Button, Container, Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const SignupPage = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("User signed up:", formData);
//     navigate("/login"); // Redirect to login page after signup
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center min-vh-100">
//       <Card style={{ width: "400px" }} className="p-4 shadow">
//         <h3 className="text-center mb-3">Signup</h3>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
//           </Form.Group>

//           <Button variant="primary" type="submit" className="w-100">Signup</Button>
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default SignupPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const SignupPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5832/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup Successful!");
        navigate("/login"); // Redirect to login
      } else {
        alert(data.error || "Signup Failed");
      }
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="primary">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default SignupPage;
