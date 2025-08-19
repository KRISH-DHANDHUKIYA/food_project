import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(backendUrl + "/api/admin", { email, password });

            if (response.data.status) {
                toast.success("Login successful");
                setToken(response.data.data.token);
            } else {
                toast.error(response.data.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Login failed: " + (error.response?.data?.data?.message || error.message));
        }
    };

    return (
        <>
            <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
                            <Form onSubmit={onSubmitHandler} className="bg-white p-4 p-md-5 rounded shadow">
                                <h3 className="text-center mb-4 fw-bold">Admin Login</h3>

                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mb-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </Form.Group>

                                <Button variant="dark" type="submit" className="w-100 py-2">
                                    Login
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Login;