import { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { ShopContext } from "../Context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const Login = ({ show, handleClose }) => {
    const { backendUrl, setToken, token, navigate, getUserCart } = useContext(ShopContext);

    const [mode, setMode] = useState("Login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (mode === "Sign Up") {
                const res = await axios.post(`${backendUrl}/api/register`, {
                    name,
                    email,
                    password,
                });

                const tokenReceived = res.data.token || res.data.data?.token;
                if (res.data?.status && tokenReceived) {
                    setToken(tokenReceived);
                    localStorage.setItem("token", tokenReceived);
                    toast.success("Signup successful!");
                    handleClose();
                    navigate("/");
                } else {
                    toast.error(res.data.message || "Signup failed");
                }
            } else {
                const res = await axios.post(`${backendUrl}/api/login`, {
                    email,
                    password,
                });

                const tokenReceived = res.data.token || res.data.data?.token;
                if (res.data?.status && tokenReceived) {
                    setToken(tokenReceived);
                    localStorage.setItem("token", tokenReceived);
                    toast.success("Login successful!");
                    handleClose();
                    navigate("/");
                    await getUserCart(response.data.data.token)
                } else {
                    toast.error(res.data.message || "Login failed");
                }
            }
        } catch (error) {
            if (error.response?.status === 409) {
                toast.error("Email already registered. Please login.");
            } else {
            }
        }
    };

    useEffect(() => {
        if (token) handleClose();
    }, [token]);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="mb-0 fw-bold">{mode}</h4>
                    <Button variant="light" size="sm" onClick={handleClose}>✕</Button>
                </div>

                <Form onSubmit={handleSubmit}>
                    {mode === "Sign Up" && (
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                autoComplete="name"
                            />
                        </Form.Group>
                    )}

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete={mode === "Sign Up" ? "new-password" : "current-password"}
                        />
                    </Form.Group>

                    <Button type="submit" className="w-100 mb-3" variant="primary">
                        {mode}
                    </Button>
                </Form>

                <div className="text-center">
                    {mode === "Login" ? (
                        <p>
                            Don’t have an account?{" "}
                            <span
                                className="text-primary fw-semibold"
                                style={{ cursor: "pointer" }}
                                onClick={() => setMode("Sign Up")}
                            >
                                Sign Up
                            </span>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{" "}
                            <span
                                className="text-primary fw-semibold"
                                style={{ cursor: "pointer" }}
                                onClick={() => setMode("Login")}
                            >
                                Login
                            </span>
                        </p>
                    )}
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default Login
