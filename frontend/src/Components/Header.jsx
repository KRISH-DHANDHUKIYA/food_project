import { useState } from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <Navbar expand="lg" className="bg-dark py-3 px-5"  sticky="top" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
                <Container fluid>
                    <Link to="/" className="text-decoration-none">
                        <Navbar.Brand className="text-light header1">FoodExpress</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="m-auto my-3 my-lg-0 text-center">
                            <Link to="/" className="text-decoration-none px-3 py-2 text-light" onClick={() => setExpanded(false)}>
                                Home
                            </Link>
                            <Link to="/menu" className="text-decoration-none px-3 py-2 text-light" onClick={() => setExpanded(false)}>
                                Menu
                            </Link>
                            <Link to="/contactus" className="text-decoration-none px-3 py-2 text-light" onClick={() => setExpanded(false)}>
                                Contact Us
                            </Link>
                        </Nav>
                        <div className="d-grid gap-3 d-lg-flex ms-lg-3" >
                            <Button variant="primary" className="w-lg-auto me-lg-2">
                                Items <Badge bg="light" text="dark">3</Badge>
                                <span className="visually-hidden">unread messages</span>
                            </Button>
                            <Button variant="danger" className="w-lg-auto">
                                Login
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default App;