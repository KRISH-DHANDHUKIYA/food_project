// import { useState } from "react";
// import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function App() {
//     const [expanded, setExpanded] = useState(false);

//     return (
//         <>
//             <Navbar expand="lg" className="bg-dark py-3" sticky="top" expanded={expanded}>
//                 <Container>
//                     <Link to="/" className="text-decoration-none">
//                         <Navbar.Brand className="text-light header1">FoodExpress</Navbar.Brand>
//                     </Link>

//                     <div className="d-lg-none d-flex align-items-center me-2">
//                         <Button variant="primary" className="py-1 px-2">
//                             Items <Badge bg="light" text="dark">3</Badge>
//                             <span className="visually-hidden">unread messages</span>
//                         </Button>
//                     </div>

//                     <Navbar.Toggle aria-controls="navbarScroll" className="bg-light"
//                         onClick={() => setExpanded(!expanded)} />

//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav className="m-auto my-3 my-lg-0 text-center">
//                             <Link to="/" className="text-decoration-none px-3 py-2 text-light"
//                                 onClick={() => setExpanded(false)}>
//                                 Home
//                             </Link>
//                             <Link to="/menu" className="text-decoration-none px-3 py-2 text-light"
//                                 onClick={() => setExpanded(false)}>
//                                 Menu
//                             </Link>
//                             <Link to="/contactus" className="text-decoration-none px-3 py-2 text-light"
//                                 onClick={() => setExpanded(false)}>
//                                 Contact Us
//                             </Link>

//                             <div className="d-lg-none mt-3">
//                                 <Button variant="danger" className="w-100">Login</Button>
//                             </div>
//                         </Nav>

//                         <div className="d-none d-lg-flex align-items-center ms-lg-3">
//                             <Button variant="primary" className="me-2">
//                                 Items <Badge bg="light" text="dark">3</Badge>
//                             </Button>
//                             <Button variant="danger">Login</Button>
//                         </div>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </>
//     );
// }

// export default App;

import { useState } from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function AppHeader() {
    const [expanded, setExpanded] = useState(false);

    const navLinkClass = "text-decoration-none px-3 py-2 text-light";

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top" expanded={expanded} className="py-3 shadow-sm">
            <Container>
                {/* Brand */}
                <NavLink to="/" className="text-decoration-none">
                    <Navbar.Brand className="text-light fw-bold fs-4">FoodExpress</Navbar.Brand>
                </NavLink>

                {/* Mobile Cart Button */}
                <div className="d-lg-none d-flex align-items-center me-2">
                    <Button variant="primary" className="py-1 px-2">
                        Items <Badge bg="light" text="dark">3</Badge>
                    </Button>
                </div>

                {/* Navbar Toggle */}
                <Navbar.Toggle
                    aria-controls="navbarScroll"
                    className="bg-light"
                    onClick={() => setExpanded(!expanded)}
                />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="m-auto my-3 my-lg-0 text-center">
                        <NavLink to="/" className={navLinkClass} onClick={() => setExpanded(false)}>
                            Home
                        </NavLink>
                        <NavLink to="/menu" className={navLinkClass} onClick={() => setExpanded(false)}>
                            Menu
                        </NavLink>
                        <NavLink to="/contactus" className={navLinkClass} onClick={() => setExpanded(false)}>
                            Contact Us
                        </NavLink>

                        {/* Login button (mobile only) */}
                        <div className="d-lg-none mt-3">
                            <Button variant="danger" className="w-100">Login</Button>
                        </div>
                    </Nav>

                    {/* Cart and Login (desktop only) */}
                    <div className="d-none d-lg-flex align-items-center ms-lg-3">
                        <Button variant="primary" className="me-2">
                            Items <Badge bg="light" text="dark">3</Badge>
                        </Button>
                        <Button variant="danger">Login</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader;
