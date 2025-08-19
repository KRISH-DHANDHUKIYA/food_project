import { NavLink } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";
import { MdFactCheck } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaListAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ setToken, onClose, isOpen, windowWidth }) => {
    const isMobile = windowWidth < 768;

    return (
        <>
            <div
                className="bg-dark text-white d-flex flex-column p-3"
                style={{
                    height: "100vh",
                    overflowY: "auto",
                    position: isMobile ? "fixed" : "fixed",
                    top: 0,
                    left: isMobile ? (isOpen ? "0" : "-100%") : "0",
                    bottom: 0,
                    width: isMobile ? "70vw" : "220px",
                    maxWidth: isMobile ? "70vw" : "220px",
                    zIndex: isMobile ? 1050 : 1000,
                    transition: "left 0.3s ease-in-out",
                    display: isMobile && !isOpen ? "none" : "flex",
                }}
            >
                <div className="d-md-none text-end mb-2">
                    <IoClose size={24} onClick={onClose} style={{ cursor: "pointer" }} />
                </div>

                <div className="fw-bold fs-5 text-center mb-4">
                    <span>FoodExpress</span>
                </div>

                <div className="d-flex flex-column gap-3 flex-grow-1">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `d-flex align-items-center gap-2 px-2 py-2 rounded ${isActive ? "bg-white text-dark" : "text-white"
                            }`
                        }
                        style={{ textDecoration: "none" }}
                        onClick={onClose}
                    >
                        <FaSquarePlus />
                        <span>Add Item</span>
                    </NavLink>

                    <NavLink
                        to="/list"
                        className={({ isActive }) =>
                            `d-flex align-items-center gap-2 px-2 py-2 rounded ${isActive ? "bg-white text-dark" : "text-white"
                            }`
                        }
                        style={{ textDecoration: "none" }}
                        onClick={onClose}
                    >
                        <FaListAlt />
                        <span>List</span>
                    </NavLink>

                    <NavLink
                        to="/orders"
                        className={({ isActive }) =>
                            `d-flex align-items-center gap-2 px-2 py-2 rounded ${isActive ? "bg-white text-dark" : "text-white"
                            }`
                        }
                        style={{ textDecoration: "none" }}
                        onClick={onClose}
                    >
                        <MdFactCheck />
                        <span>Orders</span>
                    </NavLink>
                </div>

                <Button
                    variant="danger"
                    onClick={() => {
                        setToken("");
                        onClose();
                    }}
                    className="d-flex align-items-center gap-2 w-100 mt-auto"
                >
                    <BiLogOut className="fs-5" />
                    <span>Logout</span>
                </Button>
            </div>
        </>
    );
};

export default Sidebar;