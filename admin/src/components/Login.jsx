import loginimg from "../assets/login.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
    // Form submit handler
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        // Add your login logic here, e.g., API call
        console.log("Form submitted!");
    };

    return (
        <div className="bg-white min-vh-100 d-flex align-items-center justify-content-center">
            <Container fluid className="h-100">
                <Row className="h-100">
                    {/* Image Sidebar */}
                    <Col
                        sm={6}
                        className="d-none d-sm-block p-0"
                        style={{ height: "100vh", overflow: "hidden" }}
                    >
                        <img
                            src={loginimg}
                            alt="login"
                            className="img-fluid h-100 w-100"
                            style={{ objectFit: "cover" }}
                        />
                    </Col>

                    {/* Form Side */}
                    <Col
                        xs={12}
                        sm={6}
                        className="d-flex align-items-center justify-content-center"
                        style={{ minHeight: "100vh" }}
                    >
                        <Form
                            onSubmit={handleSubmit}
                            className="w-100 p-4 bg-white rounded shadow-sm"
                            style={{ maxWidth: "400px" }}
                        >
                            <h3 className="mb-4 fw-bold text-center">Login</h3>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>

                            <Button variant="dark" type="submit" className="w-100 mt-3 py-2 rounded">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
