import { useState } from "react";
import {Alert, Button, Carousel, Col, Form, Modal, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

function Login({ show, handleClose, switchToSignup }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setAlertMessage("All fields are required!");
      return;
    }

    console.log("Login Data:", {email: form.email, password: form.password,});

    setAlertMessage("Login data logged to console!");
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Body className="p-0">
        <Row className="g-0 flex-column flex-md-row">
          <Col md={6} className="d-none d-md-block">
            <Carousel fade controls={false} indicators={false} interval={null}>
             
            </Carousel>
          </Col>
          <Col xs={12} md={6} className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Login</h5>
              <Button variant="light" size="sm" onClick={handleClose}>✕</Button>
            </div>

            {alertMessage && <Alert variant="info">{alertMessage}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" value={form.email} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" value={form.password} onChange={handleChange} />
              </Form.Group>

              <div className="text-end mb-3">
                <Link to="/" style={{ fontSize: "0.9rem" }}>Forgot Password?</Link>
              </div>

              <Button type="submit" variant="primary" className="w-100">Login</Button>
            </Form>

            <div className="text-center mt-3">
              Don’t have an account? <span onClick={switchToSignup} style={{ cursor: "pointer", color: "blue" }}>Sign Up</span>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default Login;