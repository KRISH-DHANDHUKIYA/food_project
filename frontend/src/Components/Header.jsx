// import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function App() {
//     return (
//         <>
//             <Navbar expand="lg" className="bg-dark py-3">
//                 <Container fluid>
//                     <Link to="/" className="text-decoration-none">
//                         <Navbar.Brand className="text-light header1" >
//                             FoodExpress
//                         </Navbar.Brand>
//                     </Link>
//                     <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav className="m-auto my-3 my-lg-0 text-center">
//                             <Link to="/" className="text-decoration-none px-3 py-2 text-light">
//                                 Home
//                             </Link>
//                             <Link to="/menu" className="text-decoration-none px-3 py-2 text-light">
//                                 Menu
//                             </Link>
//                             <Link to="/contactus" className="text-decoration-none px-3 py-2 text-light">
//                                 Contact Us
//                             </Link>
//                         </Nav>
//                         <div className="d-grid gap-3 d-lg-flex ms-lg-3" style={{ minWidth: '200px' }}>
//                             <Button variant="primary" className="w-lg-auto me-lg-2">
//                                 Items <Badge bg="light" text="dark">3</Badge>
//                                 <span className="visually-hidden">unread messages</span>
//                             </Button>
//                             <Button variant="danger" className="w-lg-auto">
//                                 Login
//                             </Button>
//                         </div>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </>
//     );
// }

// export default App



// import { useState } from "react";
// import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";

// function App() {
//     const [expanded, setExpanded] = useState(false);
//     const closeNavbar = () => setExpanded(false);

//     return (
//         <>
//             <Navbar
//                 expanded={expanded}
//                 expand="lg"
//                 bg="dark"
//                 variant="dark"
//                 className="py-3"
//             >
//                 <Container fluid>
//                     <Link to="/" className="text-decoration-none">
//                         <Navbar.Brand className="text-light header1">FoodExpress</Navbar.Brand>
//                     </Link>

//                     <Navbar.Toggle
//                         aria-controls="navbarScroll"
//                         onClick={() => setExpanded(expanded ? false : "expanded")}
//                         className="border-0"
//                     >
//                         {expanded ? (
//                             <span style={{ fontSize: "1.5rem", color: "white" }}>&times;</span>
//                         ) : (
//                             <span
//                                 style={{
//                                     display: "inline-block",
//                                     width: "1.5rem",
//                                     height: "1.5rem",
//                                     borderTop: "2px solid white",
//                                     borderBottom: "2px solid white",
//                                     position: "relative",
//                                 }}
//                             >
//                                 <span
//                                     style={{
//                                         position: "absolute",
//                                         top: "50%",
//                                         left: 0,
//                                         right: 0,
//                                         height: "2px",
//                                         backgroundColor: "white",
//                                         transform: "translateY(-50%)",
//                                     }}
//                                 ></span>
//                             </span>
//                         )}
//                     </Navbar.Toggle>

//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav className="m-auto my-3 my-lg-0 text-center" navbarScroll>
//                             <NavLink
//                                 to="/"
//                                 className={({ isActive }) =>
//                                     "text-decoration-none px-3 py-2 " +
//                                     (isActive ? "text-warning" : "text-light")
//                                 }
//                                 onClick={closeNavbar}
//                             >
//                                 Home
//                             </NavLink>
//                             <NavLink
//                                 to="/menu"
//                                 className={({ isActive }) =>
//                                     "text-decoration-none px-3 py-2 " +
//                                     (isActive ? "text-warning" : "text-light")
//                                 }
//                                 onClick={closeNavbar}
//                             >
//                                 Menu
//                             </NavLink>
//                             <NavLink
//                                 to="/contactus"
//                                 className={({ isActive }) =>
//                                     "text-decoration-none px-3 py-2 " +
//                                     (isActive ? "text-warning" : "text-light")
//                                 }
//                                 onClick={closeNavbar}
//                             >
//                                 Contact Us
//                             </NavLink>
//                         </Nav>

//                         <div
//                             className="d-grid gap-3 d-lg-flex ms-lg-3"
//                             style={{ minWidth: "200px" }}
//                         >
//                             <Button variant="primary" className="w-lg-auto me-lg-2">
//                                 Items <Badge bg="light" text="dark" className="ms-2">3</Badge>
//                                 <span className="visually-hidden">unread messages</span>
//                             </Button>
//                             <Button variant="danger" className="w-lg-auto">
//                                 Login
//                             </Button>
//                         </div>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </>
//     );
// }

// export default App;
