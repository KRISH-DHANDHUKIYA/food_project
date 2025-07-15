import { useContext, useState } from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { TbArrowNarrowRight, TbUserCircle } from "react-icons/tb";
import Login from "../Components/Login"

const Header = () => {
    const { getCartCount, token } = useContext(ShopContext);
    const [expanded, setExpanded] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const navigate = useNavigate();

    const handleNavLinkClick = () => {
        setExpanded(false);
        setShowDropdown(false);
    };

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
    };

    return (
        <>
            <Navbar
                expand="lg"
                bg="dark"
                variant="dark"
                sticky="top"
                className="py-3 shadow-sm"
                expanded={expanded}
                onToggle={() => setExpanded(!expanded)}
            >
                <Container>
                    <Link to="/" onClick={handleNavLinkClick} className="navbar-brand fw-bold fs-4 text-decoration-none text-light">
                        FoodExpress
                    </Link>

                    {/* Mobile Cart */}
                    <div className="d-lg-none d-flex align-items-center me-2">
                        <Link
                            to="/cart"
                            onClick={handleNavLinkClick}
                            className="btn btn-primary py-1 px-2 d-flex align-items-center"
                        >
                            Cart <Badge bg="light" text="dark" className="ms-2">{getCartCount()}</Badge>
                        </Link>
                    </div>

                    <Navbar.Toggle aria-controls="navbarScroll" className="bg-dark" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="m-auto my-3 my-lg-0 text-center">
                            <Link to="/" onClick={handleNavLinkClick} className="nav-link px-3 py-2 text-light">
                                Home
                            </Link>
                            <Link to="/aboutus" onClick={handleNavLinkClick} className="nav-link px-3 py-2 text-light">
                                About Us
                            </Link>
                            <Link to="/menu" onClick={handleNavLinkClick} className="nav-link px-3 py-2 text-light">
                                Menu
                            </Link>
                            <Link to="/contactus" onClick={handleNavLinkClick} className="nav-link px-3 py-2 text-light">
                                Contact Us
                            </Link>

                            {/* Mobile Login/Profile */}
                            <div className="d-lg-none mt-3">
                                {token ? (
                                    <div className="my-2 text-center">
                                        <Link to="/profile" onClick={handleNavLinkClick}>
                                            <TbUserCircle style={{ fontSize: "29px", color: "white" }} />
                                        </Link>
                                    </div>
                                ) : (
                                    <Button
                                        onClick={() => {
                                            setShowAuthModal(true);
                                            handleNavLinkClick();
                                        }}
                                        className="btn btn-danger w-100"
                                    >
                                        Login
                                    </Button>
                                )}
                            </div>
                        </Nav>

                        {/* Desktop Login and Cart */}
                        <div className="d-none d-lg-flex align-items-center ms-lg-3 position-relative">
                            <Link
                                to="/cart"
                                onClick={handleNavLinkClick}
                                className="btn btn-primary me-2 d-flex align-items-center"
                            >
                                Cart <Badge bg="light" text="dark" className="ms-2">{getCartCount()}</Badge>
                            </Link>

                            {token ? (
                                <>
                                    <div
                                        className="me-2"
                                        onClick={() => setShowDropdown(!showDropdown)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <TbUserCircle style={{ fontSize: "29px", color: "white" }} />
                                    </div>

                                    {showDropdown && (
                                        <ul
                                            className="list-unstyled mb-0 bg-white p-2 rounded position-absolute"
                                            style={{
                                                width: '8rem',
                                                top: '100%',
                                                right: 0,
                                                zIndex: 1000,
                                                boxShadow: '0 0 0 1px rgba(15, 23, 42, 0.15)'
                                            }}
                                        >
                                            <li
                                                onClick={() => {
                                                    handleNavLinkClick();
                                                    navigate("/orders");
                                                }}
                                                style={{ cursor: "pointer" }}
                                                className="d-flex align-items-center"
                                            >
                                                <span className="me-2">Orders</span>
                                                <TbArrowNarrowRight style={{ opacity: 0.5, fontSize: "19px" }} />
                                            </li>
                                            <li
                                                onClick={() => {
                                                    handleNavLinkClick();
                                                    logout();
                                                }}
                                                style={{ cursor: "pointer" }}
                                                className="d-flex align-items-center"
                                            >
                                                <span className="me-2">Logout</span>
                                                <TbArrowNarrowRight style={{ opacity: 0.5, fontSize: "19px" }} />
                                            </li>
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <Button
                                    onClick={() => setShowAuthModal(true)}
                                    className="btn btn-danger"
                                >
                                    Login
                                </Button>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Auth Modal */}
            <Login show={showAuthModal} handleClose={() => setShowAuthModal(false)} />
        </>
    );
};

export default Header;
