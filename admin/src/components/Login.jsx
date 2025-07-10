import { Container, Row, Col, Form, Button, Toast } from "react-bootstrap";
import { useState } from "react";
import axios from "axios"
import { backendUrl } from "../App";
import { toast } from "react-toastify"

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
        <div className="bg-white min-vh-100 d-flex align-items-center justify-content-center">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <Form
                            onSubmit={onSubmitHandler}
                            className="p-4 bg-white rounded shadow-sm"
                        >
                            <h3 className="mb-4 fw-bold text-center">Admin Panel</h3>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter password" />
                            </Form.Group>

                            <Button
                                variant="dark"
                                type="submit"
                                className="w-100 mt-3 py-2 rounded"
                            >
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
