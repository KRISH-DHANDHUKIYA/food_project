import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";

function Signup({ show, handleClose, switchToLogin }) {
    const [form, setForm] = useState({ firstname: "", email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateFirstname = () => {
        setErrors((prev) => ({
            ...prev,
            firstname: form.firstname.trim()
                ? ""
                : "First name is required",
        }));
    };


    const validateEmail = () => {
        setErrors({
            ...errors,
            email: form.email.includes("@") && form.email.endsWith("gmail.com")
                ? ""
                : "Email must be a valid @gmail.com address",
        });
    };

    const validatePassword = () => {
        setErrors({
            ...errors,
            password: form.password.length < 8
                ? "Password must be at least 8 characters"
                : ""
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstname, email, password } = form;
        const newErrors = {};

        if (!firstname.trim()) newErrors.firstname = "First name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        if (!password.trim()) newErrors.password = "Password is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log("Signup Data:", form);
        setAlertMessage("");
        setErrors({});
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} size="md" centered>
            <Modal.Body className="p-0">
                <Row className="g-0">
                    <Col xs={12} className="p-4 d-flex flex-column justify-content-center">
                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="mb-0 fw-bold">Create Account</h4>
                            <Button variant="light" size="sm" onClick={handleClose}>✕</Button>
                        </div>

                        {/* Alert Message */}
                        {alertMessage && <Alert variant="warning">{alertMessage}</Alert>}

                        {/* Signup Form */}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    name="firstname"
                                    value={form.firstname}
                                    onChange={handleChange}
                                    onKeyUp={validateFirstname}
                                    onBlur={validateFirstname}  
                                    isInvalid={!!errors.firstname}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.firstname}
                                </Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    onBlur={validateEmail}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    onBlur={validatePassword}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button type="submit" variant="primary" className="w-100 fw-semibold">
                                Sign Up
                            </Button>
                        </Form>

                        {/* Switch to Login */}
                        <div className="text-center mt-4">
                            Already have an account?{" "}
                            <span
                                onClick={switchToLogin}
                                style={{ cursor: "pointer", color: "#0d6efd", fontWeight: "500" }}
                            >
                                Login
                            </span>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default Signup;
