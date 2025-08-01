// import { useContext, useState } from "react";
// import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { ShopContext } from "../Context/ShopContext";
// import { TbArrowNarrowRight, TbUserCircle } from "react-icons/tb";
// import Login from "../Components/Login";

// const Header = () => {
//     const { getCartCount, token } = useContext(ShopContext);
//     const [expanded, setExpanded] = useState(false);
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [showAuthModal, setShowAuthModal] = useState(false);

//     const navigate = useNavigate();
//     const location = useLocation();

//     const handleNavLinkClick = () => {
//         setExpanded(false);
//         setShowDropdown(false);
//     };

//     const logout = () => {
//         localStorage.removeItem("token");
//         navigate("/");
//         window.location.reload();
//     };

//     const isActive = (path) =>
//         location.pathname === path ? "text-success fw-bold" : "text-light";

//     return (
//         <>
//             <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="py-3 shadow-sm" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
//                 <Container>
//                     <Link to="/" onClick={handleNavLinkClick} className="navbar-brand fw-bold fs-4 text-decoration-none text-light">
//                         FoodExpress<i className="bi bi-bag-plus-fill bg-light"></i>
//                     </Link>

//                     <div className="d-lg-none d-flex align-items-center">
//                         <Link
//                             to="/cart"
//                             onClick={handleNavLinkClick}
//                             className="btn btn-light py-1 px-2 d-flex align-items-center me-2"
//                         >
//                             Cart
//                             <Badge bg="dark" text="light" className="ms-2">
//                                 {getCartCount()}
//                             </Badge>
//                         </Link>

//                         <Navbar.Toggle
//                             aria-controls="navbarScroll"
//                             className="bg-dark"
//                         />
//                     </div>

//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav className="m-auto my-3 my-lg-0 text-center">
//                             <Link to="/" onClick={handleNavLinkClick} className={`nav-link px-3 py-2 ${isActive("/")}`}>
//                                 Home
//                             </Link>
//                             <Link to="/aboutus" onClick={handleNavLinkClick} className={`nav-link px-3 py-2 ${isActive("/aboutus")}`}>
//                                 About Us
//                             </Link>
//                             <Link to="/menu" onClick={handleNavLinkClick} className={`nav-link px-3 py-2 ${isActive("/menu")}`}>
//                                 Menu
//                             </Link>
//                             <Link to="/contactus" onClick={handleNavLinkClick} className={`nav-link px-3 py-2 ${isActive("/contactus")}`}>
//                                 Contact Us
//                             </Link>

//                             <div className="d-lg-none mt-3 position-relative text-center">
//                                 {token ? (
//                                     <>
//                                         <div className="my-2" onClick={() => setShowDropdown(!showDropdown)} style={{ cursor: "pointer" }}>
//                                             <TbUserCircle style={{ fontSize: "29px", color: "white" }} />
//                                         </div>

//                                         {showDropdown && (
//                                             <ul
//                                                 className="list-unstyled mb-0 bg-white p-2 rounded position-absolute start-50 translate-middle-x"
//                                                 style={{ top: '100%', zIndex: 1000, width: '10rem', boxShadow: '0 0 0 1px rgba(15, 23, 42, 0.15)' }} >
//                                                 <li
//                                                     onClick={() => { handleNavLinkClick(); navigate("/orders"); setShowDropdown(false); }}
//                                                     style={{ cursor: "pointer" }} className="d-flex align-items-center justify-content-between">
//                                                     <span>Orders</span>
//                                                     <TbArrowNarrowRight style={{ opacity: 0.5, fontSize: "19px" }} />
//                                                 </li>
//                                                 <li
//                                                     onClick={() => { handleNavLinkClick(); logout(); setShowDropdown(false); }}
//                                                     style={{ cursor: "pointer" }} className="d-flex align-items-center justify-content-between mt-2" >
//                                                     <span>Logout</span>
//                                                     <TbArrowNarrowRight style={{ opacity: 0.5, fontSize: "19px" }} />
//                                                 </li>
//                                             </ul>
//                                         )}
//                                     </>
//                                 ) : (
//                                     <Button
//                                         onClick={() => { setShowAuthModal(true); handleNavLinkClick(); }} className="btn btn-light w-100" >
//                                         Login
//                                     </Button>
//                                 )}
//                             </div>
//                         </Nav>

//                         <div className="d-none d-lg-flex align-items-center ms-lg-3 position-relative">
//                             {/* <Link to="/cart" onClick={handleNavLinkClick} className="btn btn-light me-2 d-flex align-items-center" >
//                                 Cart <Badge bg="dark" text="light" className="ms-2">{getCartCount()}</Badge>
//                             </Link> */}
//                             <Link
//                                 to="/cart"
//                                 onClick={handleNavLinkClick}
//                                 className="text-decoration-none text-dark position-relative d-inline-block"
//                             >
//                                 <i className="bi bi-bag-fill fs-4"></i>

//                                 <Badge
//                                     bg="danger"
//                                     className="position-absolute top-0 start-100 translate-middle rounded-circle"
//                                     style={{
//                                         minWidth: '1.3rem',
//                                         height: '1.3rem',
//                                         fontSize: '0.75rem',
//                                         display: 'flex',
//                                         justifyContent: 'center',
//                                         alignItems: 'center'
//                                     }}
//                                 >
//                                     {getCartCount()}
//                                     <span className="visually-hidden">items in cart</span>
//                                 </Badge>
//                             </Link>

//                             {token ? (
//                                 <>
//                                     <div className="me-2" onClick={() => setShowDropdown(!showDropdown)} style={{ cursor: "pointer" }}>
//                                         <TbUserCircle style={{ fontSize: "29px", color: "white" }} />
//                                     </div>

//                                     {showDropdown && (
//                                         <ul
//                                             className="list-unstyled mb-0 bg-white p-2 rounded position-absolute"
//                                             style={{ width: '8rem', top: '100%', right: 0, zIndex: 1000, boxShadow: '0 0 0 1px rgba(15, 23, 42, 0.15)' }}>
//                                             <li onClick={() => { handleNavLinkClick(); navigate("/orders"); setShowDropdown(false); }}
//                                                 style={{ cursor: "pointer" }} className="d-flex align-items-center">
//                                                 <span className="me-2">Orders</span>
//                                                 <TbArrowNarrowRight style={{ opacity: 0.5, fontSize: "19px" }} />
//                                             </li>
//                                             <li
//                                                 onClick={() => { handleNavLinkClick(); logout(); setShowDropdown(false); }}
//                                                 style={{ cursor: "pointer" }} className="d-flex align-items-center"  >
//                                                 <span className="me-2">Logout</span>
//                                                 <TbArrowNarrowRight style={{ opacity: 0.5, fontSize: "19px" }} />
//                                             </li>
//                                         </ul>
//                                     )}
//                                 </>
//                             ) : (
//                                 <Button onClick={() => setShowAuthModal(true)} className="btn btn-light">
//                                     Login
//                                 </Button>
//                             )}
//                         </div>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>

//             <Login show={showAuthModal} handleClose={() => setShowAuthModal(false)} />
//         </>
//     );
// };

// export default Header;

import { useContext, useState } from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { TbArrowNarrowRight, TbUserCircle } from "react-icons/tb";
import Login from "../Components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
    const { getCartCount, token } = useContext(ShopContext);
    const [expanded, setExpanded] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavLinkClick = () => {
        setExpanded(false);
        setShowDropdown(false);
    };

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
    };

    const isActive = (path) =>
        location.pathname === path ? "text-success fw-bold" : "text-light";

    return (
        <>
            <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="py-3 shadow-sm" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
                <Container>
                    <Link to="/" onClick={handleNavLinkClick} className="navbar-brand fw-bold fs-4 text-decoration-none text-light">
                        FoodExpress
                    </Link>

                    <div className="d-lg-none d-flex align-items-center">
                        <Link
                            to="/cart"
                            onClick={handleNavLinkClick}
                            className="text-decoration-none text-dark position-relative d-inline-block me-3"
                        >
                            <i className="bi bi-bag-fill fs-4 text-light"></i>
                            <Badge
                                bg="danger"
                                className="position-absolute top-0 start-100 translate-middle rounded-circle"
                                style={{
                                    minWidth: '1.3rem',
                                    height: '1.3rem',
                                    fontSize: '0.75rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                {getCartCount()}
                                <span className="visually-hidden">items in cart</span>
                            </Badge>
                        </Link>

                        <Navbar.Toggle aria-controls="navbarScroll" className="bg-dark" />
                    </div>


                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="m-auto my-3 my-lg-0 text-center">
                            <Link to="/" onClick={handleNavLinkClick} className={`nav-link px-3 py-2 ${isActive("/")}`}>
                                Home
                            </Link>
                            <Link to="/aboutus" onClick={handleNavLinkClick} className={`nav-link px-3 py-2 ${isActive("/aboutus")}`}>
                                About Us
                            </Link>
                            <Link to="/menu" onClick={handleNavLinkClick} className={`nav-link px-3 py-2 ${isActive("/menu")}`}>
                                Menu
                            </Link>
                            <Link to="/contactus" onClick={handleNavLinkClick} className={`nav-link px-3 py-2 ${isActive("/contactus")}`}>
                                Contact Us
                            </Link>

                            <div className="d-lg-none mt-3 position-relative text-center">
                                {token ? (
                                    <>
                                        <div className="my-2" onClick={() => setShowDropdown(!showDropdown)} style={{ cursor: "pointer" }}>
                                            <TbUserCircle style={{ fontSize: "29px", color: "white" }} />
                                        </div>

                                        {showDropdown && (
                                            <ul
                                                className="list-unstyled mb-0 bg-white p-2 rounded position-absolute start-50 translate-middle-x"
                                                style={{ top: '100%', zIndex: 1000, width: '10rem', boxShadow: '0 0 0 1px rgba(15, 23, 42, 0.15)' }} >
                                                <li
                                                    onClick={() => { handleNavLinkClick(); navigate("/orders"); setShowDropdown(false); }}
                                                    style={{ cursor: "pointer" }} className="d-flex align-items-center justify-content-between">
                                                    <span>Orders</span>
                                                    <TbArrowNarrowRight style={{ opacity: 0.5, fontSize: "19px" }} />
                                                </li>
                                                <li
                                                    onClick={() => { handleNavLinkClick(); logout(); setShowDropdown(false); }}
                                                    style={{ cursor: "pointer" }} className="d-flex align-items-center justify-content-between mt-2" >
                                                    <span>Logout</span>
                                                    <TbArrowNarrowRight style={{ opacity: 0.5, fontSize: "19px" }} />
                                                </li>
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Button
                                        onClick={() => { setShowAuthModal(true); handleNavLinkClick(); }} className="btn btn-light w-100" >
                                        Login
                                    </Button>
                                )}
                            </div>
                        </Nav>

                        <div className="d-none d-lg-flex align-items-center ms-lg-3 position-relative">
                            <Link
                                to="/cart"
                                onClick={handleNavLinkClick}
                                className="text-decoration-none text-light position-relative d-inline-block me-5"
                            >
                                <i className="bi bi-bag-fill fs-4 text-light"></i>
                                <Badge
                                    bg="danger"
                                    className="position-absolute top-0 start-100 translate-middle rounded-circle"
                                    style={{
                                        minWidth: '1.3rem',
                                        height: '1.3rem',
                                        fontSize: '0.75rem',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    {getCartCount()}
                                    <span className="visually-hidden">items in cart</span>
                                </Badge>
                            </Link>


                            {token ? (
                                <>
                                    <div className="me-2" onClick={() => setShowDropdown(!showDropdown)} style={{ cursor: "pointer" }}>
                                        <TbUserCircle style={{ fontSize: "29px", color: "white" }} />
                                    </div>

                                    {showDropdown && (
                                        <ul
                                            className="list-unstyled mb-0 bg-white p-2 rounded position-absolute"
                                            style={{ width: '8rem', top: '100%', right: 0, zIndex: 1000, boxShadow: '0 0 0 1px rgba(15, 23, 42, 0.15)' }}>
                                            <li onClick={() => { handleNavLinkClick(); navigate("/orders"); setShowDropdown(false); }}
                                                style={{ cursor: "pointer" }} className="d-flex align-items-center">
                                                <span className="me-2">Orders</span>
                                                <TbArrowNarrowRight style={{ opacity: 0.5, fontSize: "19px" }} />
                                            </li>
                                            <li
                                                onClick={() => { handleNavLinkClick(); logout(); setShowDropdown(false); }}
                                                style={{ cursor: "pointer" }} className="d-flex align-items-center"  >
                                                <span className="me-2">Logout</span>
                                                <TbArrowNarrowRight style={{ opacity: 0.5, fontSize: "19px" }} />
                                            </li>
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <Button onClick={() => setShowAuthModal(true)} className="btn btn-light">
                                    Login
                                </Button>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Login show={showAuthModal} handleClose={() => setShowAuthModal(false)} />
        </>
    );
};

export default Header;