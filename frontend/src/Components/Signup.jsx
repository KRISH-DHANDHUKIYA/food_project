import { useState } from "react";
import { Alert, Button, Carousel, Col, Form, Modal, Row } from "react-bootstrap";


function Signup({ show, handleClose, switchToLogin }) {
  const [form, setForm] = useState({firstname: "", lastname: "",email: "",password: "",phone: ""});

  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateUsername = (e) => {
    const value = e.target.value;
    const lastChar = value.charCodeAt(value.length - 1);
    const field = e.target.name;
    if (lastChar >= 48 && lastChar <= 57) {
      setErrors({ ...errors, [field]: "Numbers not allowed in name" });
    }
  };

  const validateEmail = () => {
    setErrors({
      ...errors,
      email:
        form.email.includes("@") && form.email.endsWith("gmail.com") ? "" : "Email must be a valid @gmail.com address",});
  };

  const validatePassword = () => {
    setErrors({
      ...errors,
      password: form.password.length < 8 ? "Password must be at least 8 characters" : "" });
  };

  const validatePhone = () => {
    setErrors({
      ...errors,
      phone:
        form.phone.length === 10 && !isNaN(form.phone)
          ? ""
          : "Phone must be exactly 10 digits and numeric only",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password, phone } = form;

    if (!firstname || !lastname || !email || !password || !phone) {
      setAlertMessage("All fields are required!");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      setErrors({ ...errors, phone: "Phone must be exactly 10 digits" });
      return;
    }

    setAlertMessage("");
    console.log("Signup Data:", form);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered dialogClassName="fullscreen-modal">
      <Modal.Body className="p-0">
        <Row className="g-0 flex-column flex-md-row" style={{ height: "600px", overflow: "hidden" }}>
          <Col md={6} className="d-none d-md-block overflow-hidden">
            <div className="h-100 w-100">
              <Carousel fade interval={2500} controls={false} indicators={false} className="h-100">
                {/* <Carousel.Item className="h-100">
                  <img src={slide1} alt="Slide 1" className="d-block w-100 h-100"  style={{ objectFit: "cover" }} />
                </Carousel.Item> */}
                {/* <Carousel.Item className="h-100">
                  <img src={slide2} alt="Slide 2" className="d-block w-100 h-100" style={{ objectFit: "cover" }}/>
                </Carousel.Item> */}
              </Carousel>
            </div>
          </Col>

          <Col xs={12} md={6} className="p-4 d-flex flex-column justify-content-center" style={{ height: "600px", overflowY: "auto" }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0 fw-bold">Create Account</h4>
              <Button variant="light" size="sm" onClick={handleClose}>✕</Button>
            </div>

            {alertMessage && <Alert variant="warning">{alertMessage}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <Form.Label className="form-label">First Name</Form.Label>
                  <Form.Control className="underline-input" name="firstname" value={form.firstname} onChange={handleChange} onKeyUp={validateUsername} isInvalid={!!errors.firstname}/>
                  <Form.Control.Feedback type="invalid">{errors.firstname}</Form.Control.Feedback>
                </Col>
                <Col>
                  <Form.Label className="form-label">Last Name</Form.Label>
                  <Form.Control className="underline-input" name="lastname" value={form.lastname} onChange={handleChange} onKeyUp={validateUsername} isInvalid={!!errors.lastname}/>
                  <Form.Control.Feedback type="invalid">{errors.lastname}</Form.Control.Feedback>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label className="form-label">Email</Form.Label>
                  <Form.Control className="underline-input" type="email" name="email" value={form.email} onChange={handleChange} onBlur={validateEmail} isInvalid={!!errors.email}/>
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Col>
                <Col>
                  <Form.Label className="form-label">Password</Form.Label>
                  <Form.Control className="underline-input" type="password" name="password" value={form.password} onChange={handleChange} onBlur={validatePassword} isInvalid={!!errors.password}/>
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col>
                  <Form.Label className="form-label">Phone Number</Form.Label>
                  <Form.Control className="underline-input" type="text" name="phone" value={form.phone} onChange={handleChange} onBlur={validatePhone} isInvalid={!!errors.phone} maxLength={10}/>
                  <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                </Col>
              </Row>

              <Button type="submit" variant="primary" className="w-100 fw-semibold">
                Sign Up
              </Button>
            </Form>

            <div className="text-center mt-4">
              Already have an account?{" "}
              <span onClick={switchToLogin} style={{ cursor: "pointer", color: "#007bff", textDecoration: "underline" }} >
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