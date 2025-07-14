// // import { useState } from "react";
// // import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
// // import { Link } from "react-router-dom";

// // function Login({ show, handleClose, switchToSignup }) {
// //     const [form, setForm] = useState({ email: "", password: "" });
// //     const [alertMessage, setAlertMessage] = useState("");
// //     const [errors, setErrors] = useState({});

// //     const handleChange = (e) => {
// //         setForm({ ...form, [e.target.name]: e.target.value });
// //         setErrors({ ...errors, [e.target.name]: "" });
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         const newErrors = {};

// //         if (!form.email.trim()) newErrors.email = "Email is required";
// //         if (!form.password.trim()) newErrors.password = "Password is required";

// //         if (Object.keys(newErrors).length > 0) {
// //             setErrors(newErrors);
// //             return;
// //         }

// //         console.log("Login Data:", form);
// //         setAlertMessage("");
// //         setErrors({});
// //         handleClose();
// //     };

// //     return (
// //         <>
// //             <Modal show={show} onHide={handleClose} size="md" centered>
// //                 <Modal.Body className="p-0">
// //                     <Row className="g-0">
// //                         <Col xs={12} className="p-4">
// //                             {/* Modal Header */}
// //                             <div className="d-flex justify-content-between align-items-center mb-3">
// //                                 <h4 className="mb-0 fw-semibold">Login</h4>
// //                                 <Button variant="light" size="sm" onClick={handleClose}>✕</Button>
// //                             </div>

// //                             {/* Alert Message */}
// //                             {alertMessage && <Alert variant="info">{alertMessage}</Alert>}

// //                             {/* Login Form */}
// //                             <Form onSubmit={handleSubmit}>
// //                                 <Form.Group className="mb-3">
// //                                     <Form.Label>Email</Form.Label>
// //                                     <Form.Control type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} isInvalid={!!errors.email} />
// //                                     <Form.Control.Feedback type="invalid">
// //                                         {errors.email}
// //                                     </Form.Control.Feedback>
// //                                 </Form.Group>

// //                                 <Form.Group className="mb-4">
// //                                     <Form.Label>Password</Form.Label>
// //                                     <Form.Control type="password" name="password" placeholder="Enter your password" value={form.password} onChange={handleChange} isInvalid={!!errors.password} />
// //                                     <Form.Control.Feedback type="invalid">
// //                                         {errors.password}
// //                                     </Form.Control.Feedback>
// //                                 </Form.Group>

// //                                 <div className="text-end mb-3">
// //                                     <Link to="/" style={{ fontSize: "0.9rem" }}>
// //                                         Forgot Password?
// //                                     </Link>
// //                                 </div>

// //                                 <Button type="submit" variant="primary" className="w-100 py-2">
// //                                     Login
// //                                 </Button>
// //                             </Form>

// //                             {/* Switch to Sign Up */}
// //                             <div className="text-center mt-4">
// //                                 Don’t have an account?{" "}
// //                                 <span
// //                                     onClick={switchToSignup}
// //                                     style={{ cursor: "pointer", color: "#0d6efd", fontWeight: "500" }}>
// //                                     Sign Up
// //                                 </span>
// //                             </div>
// //                         </Col>
// //                     </Row>
// //                 </Modal.Body>
// //             </Modal>
// //         </>
// //     );
// // }

// // export default Login;



// import loginimg from '../Assets/login.png';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useState, useContext } from 'react';
// import { ShopContext } from '../Context/ShopContext';

// const Login = () => {
//     const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

//     const [currState, setCurrState] = useState("Login");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");

//     const onSubmitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             if (currState === "Sign Up") {
//                 const response = await axios.post(`${backendUrl}/api/user/signup`, {
//                     name,
//                     email,
//                     password,
//                 });
//                 toast.success(response.data.message || "Signup successful!");
//             } else {
//                 const response = await axios.post(`${backendUrl}/api/user/login`, {
//                     email,
//                     password,
//                 });
//                 setToken(response.data.token);
//                 toast.success("Login successful!");
//                 navigate("/");
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error(error.response?.data?.message || error.message);
//         }
//     };

//     return (
//         <section className="absolute top-0 left-0 w-full h-full z-50 bg-white">
//             <div className="flex h-full w-full">
//                 {/* image side */}
//                 <div className="w-1/2 hidden sm:block">
//                     <img src={loginimg} alt="login-img" className="object-cover h-full w-full" />
//                 </div>

//                 {/* form side */}
//                 <div className="flex w-full sm:w-1/2 items-center justify-center">
//                     <form onSubmit={onSubmitHandler} className="flex w-full sm:w-1/2 flex-col gap-3">
//                         <h3 className="text-xl font-bold mb-3">{currState}</h3>

//                         {currState === "Sign Up" && (
//                             <div>
//                                 <label>Name</label>
//                                 <input
//                                     type="text"
//                                     onChange={(e) => setName(e.target.value)}
//                                     value={name}
//                                     placeholder="Name"
//                                     className="w-full px-3 py-1 ring-1 rounded bg-primary mt-1"
//                                 />
//                             </div>
//                         )}

//                         <div>
//                             <label>Email</label>
//                             <input
//                                 type="email"
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 value={email}
//                                 placeholder="Email"
//                                 className="w-full px-3 py-1 ring-1 rounded bg-primary mt-1"
//                             />
//                         </div>

//                         <div>
//                             <label>Password</label>
//                             <input
//                                 type="password"
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 value={password}
//                                 placeholder="Password"
//                                 className="w-full px-3 py-1 ring-1 rounded bg-primary mt-1"
//                             />
//                         </div>

//                         <button type="submit" className="w-full px-3 py-1 bg-blue-600 text-white rounded">
//                             {currState === "Sign Up" ? "Sign Up" : "Login"}
//                         </button>

//                         <div className="text-sm text-center mt-2">
//                             {currState === "Login" ? (
//                                 <p>
//                                     Don't have an account?{" "}
//                                     <span onClick={() => setCurrState("Sign Up")} className="text-blue-600 cursor-pointer">
//                                         Create Account
//                                     </span>
//                                 </p>
//                             ) : (
//                                 <p>
//                                     Already have an account?{" "}
//                                     <span onClick={() => setCurrState("Login")} className="text-blue-600 cursor-pointer">
//                                         Login
//                                     </span>
//                                 </p>
//                             )}
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Login;

import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row, Image } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { ShopContext } from "../Context/ShopContext";
import loginimg from "../Assets/login.png";

const Login = () => {
    const { setToken, navigate, backendUrl } = useContext(ShopContext);
    const [currState, setCurrState] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (currState === "Sign Up") {
                // Signup API call
                const response = await axios.post(`${backendUrl}/api/register`, {
                    name,
                    email,
                    password,
                });

                if (response.data.status) {
                    toast.success(response.data.data.message || "Signup successful!");
                    setToken(response.data.data.token);
                    navigate("/");
                    // Optional: reset form
                    setName("");
                    setEmail("");
                    setPassword("");
                } else {
                    toast.error(response.data.data.message || "Signup failed");
                }
            } else {
                // Login API call
                const response = await axios.post(`${backendUrl}/api/login`, {
                    email,
                    password,
                });

                if (response.data.status) {
                    toast.success(response.data.data.message || "Login successful!");
                    setToken(response.data.data.token);
                    navigate("/");
                    // Optional: reset form
                    setEmail("");
                    setPassword("");
                } else {
                    toast.error(response.data.data.message || "Login failed");
                }
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.data?.message || error.message);
        }
    };

    return (
        <section className="bg-white vh-100 d-flex align-items-center">
            <Container fluid>
                <Row className="h-100">
                    {/* Image side */}
                    <Col md={6} className="d-none d-md-block p-0">
                        <Image src={loginimg} alt="Login" fluid className="h-100 w-100 object-fit-cover" />
                    </Col>

                    {/* Form side */}
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="w-100 px-4" style={{ maxWidth: "400px" }}>
                            <h3 className="text-center mb-4 fw-bold">{currState}</h3>

                            <Form onSubmit={onSubmitHandler}>
                                {currState === "Sign Up" && (
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                )}

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Button type="submit" variant="primary" className="w-100 mb-3">
                                    {currState === "Sign Up" ? "Sign Up" : "Login"}
                                </Button>
                            </Form>

                            <div className="text-center">
                                {currState === "Login" ? (
                                    <p>
                                        Don’t have an account?{" "}
                                        <span
                                            className="text-primary fw-semibold"
                                            role="button"
                                            onClick={() => setCurrState("Sign Up")}
                                        >
                                            Create Account
                                        </span>
                                    </p>
                                ) : (
                                    <p>
                                        Already have an account?{" "}
                                        <span
                                            className="text-primary fw-semibold"
                                            role="button"
                                            onClick={() => setCurrState("Login")}
                                        >
                                            Login
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;
