// import { useContext, useState } from "react";
// import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { ShopContext } from "../Context/ShopContext";
// import { useDispatch, useSelector } from "react-redux";
// import { changeState } from "../redux/Slice/count_slice";
// import Login from "./Login";
// import Signup from "./Signup";

// const Header = () => {
//     const { getCartCount } = useContext(ShopContext);
//     const dispatch = useDispatch();
//     const isSignup = useSelector((state) => state.Signup.isSignup);
//     const [showModal, setShowModal] = useState(false);

//     const handleLoginClick = () => {
//         setShowModal(true);
//         if (isSignup) dispatch(changeState()); // switch to Login
//     };

//     const handleSignupClick = () => {
//         setShowModal(true);
//         if (!isSignup) dispatch(changeState()); // switch to Signup
//     };

//     const handleClose = () => setShowModal(false);

//     const switchToSignup = () => dispatch(changeState());
//     const switchToLogin = () => dispatch(changeState());

//     return (
//         <>
//             <Navbar expand="lg" bg="dark" sticky="top" className="py-3 shadow-sm">
//                 <Container>
//                     <Link to="/" className="text-decoration-none">
//                         <Navbar.Brand className="text-light fw-bold fs-4">FoodExpress</Navbar.Brand>
//                     </Link>

//                     <div className="d-lg-none d-flex align-items-center me-2">
//                         <Link to="/cart">
//                             <Button variant="primary" className="py-1 px-2">
//                                 Cart <Badge bg="light" text="dark">{getCartCount()}</Badge>
//                             </Button>
//                         </Link>
//                     </div>

//                     <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav className="m-auto my-3 my-lg-0 text-center">
//                             <Link to="/" className="nav-link-custom text-decoration-none px-3 py-2 text-light">Home</Link>
//                             <Link to="/aboutus" className="nav-link-custom text-decoration-none px-3 py-2 text-light">About Us</Link>
//                             <Link to="/menu" className="nav-link-custom text-decoration-none px-3 py-2 text-light">Menu</Link>
//                             <Link to="/contactus" className="nav-link-custom text-decoration-none px-3 py-2 text-light">Contact Us</Link>
//                             <div className="d-lg-none mt-3">
//                                 <Button variant="danger" className="w-100" onClick={handleLoginClick}>Login</Button>
//                             </div>
//                         </Nav>

//                         <div className="d-none d-lg-flex align-items-center ms-lg-3">
//                             <Link to="/cart">
//                                 <Button variant="primary" className="me-2">
//                                     Cart <Badge bg="light" text="dark">{getCartCount()}</Badge>
//                                 </Button>
//                             </Link>
//                             <Button variant="danger" onClick={handleLoginClick}>Login</Button>
//                             {/* You can add a Signup button here as well if you want */}
//                         </div>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>

//             {showModal && (
//                 <>
//                     {!isSignup ? (
//                         <Login show={true} handleClose={handleClose} switchToSignup={switchToSignup} />
//                     ) : (
//                         <Signup show={true} handleClose={handleClose} switchToLogin={switchToLogin} />
//                     )}
//                 </>
//             )}
//         </>
//     );
// };

// export default Header;

import { useContext, useState } from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../redux/Slice/count_slice";
import Login from "./Login";
import Signup from "./Signup";

const Header = () => {
    const { getCartCount } = useContext(ShopContext);
    const dispatch = useDispatch();
    const isSignup = useSelector((state) => state.Signup.isSignup);
    const [showModal, setShowModal] = useState(false);
    const [expanded, setExpanded] = useState(false); // control navbar

    const handleLoginClick = () => {
        setShowModal(true);
        if (isSignup) dispatch(changeState()); // switch to Login
    };

    const handleSignupClick = () => {
        setShowModal(true);
        if (!isSignup) dispatch(changeState()); // switch to Signup
    };

    const handleClose = () => setShowModal(false);

    const switchToSignup = () => dispatch(changeState());
    const switchToLogin = () => dispatch(changeState());

    // Close navbar and modal on link click
    const handleNavLinkClick = () => {
        setExpanded(false);
        handleClose();
    };

    return (
        <>
            <Navbar
                expand="lg"
                bg="dark"
                sticky="top"
                className="py-3 shadow-sm"
                expanded={expanded}
                onToggle={() => setExpanded(!expanded)}
            >
                <Container>
                    <Link
                        to="/"
                        className="text-decoration-none"
                        onClick={handleNavLinkClick}
                    >
                        <Navbar.Brand className="text-light fw-bold fs-4">
                            FoodExpress
                        </Navbar.Brand>
                    </Link>

                    <div className="d-lg-none d-flex align-items-center me-2">
                        <Link to="/cart" onClick={handleNavLinkClick}>
                            <Button variant="primary" className="py-1 px-2">
                                Cart <Badge bg="light" text="dark">{getCartCount()}</Badge>
                            </Button>
                        </Link>
                    </div>

                    <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="m-auto my-3 my-lg-0 text-center">
                            <Link
                                to="/"
                                className="nav-link-custom text-decoration-none px-3 py-2 text-light"
                                onClick={handleNavLinkClick}
                            >
                                Home
                            </Link>
                            <Link
                                to="/aboutus"
                                className="nav-link-custom text-decoration-none px-3 py-2 text-light"
                                onClick={handleNavLinkClick}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/menu"
                                className="nav-link-custom text-decoration-none px-3 py-2 text-light"
                                onClick={handleNavLinkClick}
                            >
                                Menu
                            </Link>
                            <Link
                                to="/contactus"
                                className="nav-link-custom text-decoration-none px-3 py-2 text-light"
                                onClick={handleNavLinkClick}
                            >
                                Contact Us
                            </Link>
                            <div className="d-lg-none mt-3">
                                <Button variant="danger" className="w-100" onClick={() => {
                                    setExpanded(false); // close navbar on login click in mobile menu
                                    handleLoginClick();
                                }}>
                                    Login
                                </Button>
                            </div>
                        </Nav>

                        <div className="d-none d-lg-flex align-items-center ms-lg-3">
                            <Link to="/cart" onClick={handleNavLinkClick}>
                                <Button variant="primary" className="me-2">
                                    Cart <Badge bg="light" text="dark">{getCartCount()}</Badge>
                                </Button>
                            </Link>
                            <Button
                                variant="danger"
                                onClick={() => {
                                    setExpanded(false);
                                    handleLoginClick();
                                }}
                            >
                                Login
                            </Button>
                            {/* You can add a Signup button here as well if you want */}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {showModal && (
                <>
                    {!isSignup ? (
                        <Login
                            show={true}
                            handleClose={handleClose}
                            switchToSignup={switchToSignup}
                        />
                    ) : (
                        <Signup
                            show={true}
                            handleClose={handleClose}
                            switchToLogin={switchToLogin}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default Header;
