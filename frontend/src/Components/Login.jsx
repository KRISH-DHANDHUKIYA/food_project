import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login({ show, handleClose, switchToSignup }) {
    const [form, setForm] = useState({ email: "", password: "" });
    const [alertMessage, setAlertMessage] = useState("");
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!form.email.trim()) newErrors.email = "Email is required";
        if (!form.password.trim()) newErrors.password = "Password is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log("Login Data:", form);
        setAlertMessage("");
        setErrors({});
        handleClose();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="md" centered>
                <Modal.Body className="p-0">
                    <Row className="g-0">
                        <Col xs={12} className="p-4">
                            {/* Modal Header */}
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="mb-0 fw-semibold">Login</h4>
                                <Button variant="light" size="sm" onClick={handleClose}>✕</Button>
                            </div>

                            {/* Alert Message */}
                            {alertMessage && <Alert variant="info">{alertMessage}</Alert>}

                            {/* Login Form */}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} isInvalid={!!errors.email} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Enter your password" value={form.password} onChange={handleChange} isInvalid={!!errors.password} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="text-end mb-3">
                                    <Link to="/" style={{ fontSize: "0.9rem" }}>
                                        Forgot Password?
                                    </Link>
                                </div>

                                <Button type="submit" variant="primary" className="w-100 py-2">
                                    Login
                                </Button>
                            </Form>

                            {/* Switch to Sign Up */}
                            <div className="text-center mt-4">
                                Don’t have an account?{" "}
                                <span
                                    onClick={switchToSignup}
                                    style={{ cursor: "pointer", color: "#0d6efd", fontWeight: "500" }}>
                                    Sign Up
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Login;
