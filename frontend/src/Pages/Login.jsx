// import { useState, useContext } from 'react';
// import { Form, Button, Card, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function Login() {
    // const [form, setForm] = useState({ email: '', password: '' });
    // const { login } = useContext(AuthContext);
    // // const navigate = useNavigate();

    // const handleChange = (e) => {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const users = JSON.parse(localStorage.getItem('users')) || [];
    //     const user = users.find(
    //         (u) => u.email === form.email && u.password === form.password
    //     );

    //     if (user) {
    //         login(user);
    //         // navigate('/');
    //     } else {
    //         alert('Invalid Email or Password!');
    //     }
    // };

    return (
        <>
            <h1>login</h1>
            {/* <Container className="d-flex justify-content-center align-items-center vh-100">
                <Card style={{ width: '28rem', padding: '2rem', boxShadow: '0 0 10px #ccc' }}>
                    <h3 className="text-center mb-4">Login</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" required onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" required onChange={handleChange} />
                        </Form.Group>

                        <Button variant="warning" type="submit" className="w-100">
                            Login
                        </Button>
                    </Form>
                    <p className="text-center mt-3">
                        Don't have an account? <Link to="/signup">Create your account</Link>
                    </p>
                </Card>
            </Container> */}
        </>
    )
}

export default Login