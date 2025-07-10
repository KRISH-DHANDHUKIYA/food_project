import { NavLink } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";
import { MdFactCheck } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaListAlt } from "react-icons/fa";

const Sidebar = ({ setToken }) => {
    return (
        <div
            className="bg-dark text-white d-flex flex-column"
            style={{ height: "100vh", padding: "1.5rem", minWidth: "220px" }}
        >
            {/* Logo */}
            <div className="fw-bold fs-4 text-center mb-5">FoodExpress</div>

            {/* Navigation Links */}
            <div className="d-flex flex-column gap-3 flex-grow-1">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `d-flex align-items-center gap-2 px-3 py-2 rounded ${isActive ? "bg-white text-dark" : "text-white"
                        }`
                    }
                >
                    <FaSquarePlus />
                    <span className="d-none d-lg-inline">Add Item</span>
                </NavLink>

                <NavLink
                    to="/list"
                    className={({ isActive }) =>
                        `d-flex align-items-center gap-2 px-3 py-2 rounded ${isActive ? "bg-white text-dark" : "text-white"
                        }`
                    }
                >
                    <FaListAlt />
                    <span className="d-none d-lg-inline">List</span>
                </NavLink>

                <NavLink
                    to="/orders"
                    className={({ isActive }) =>
                        `d-flex align-items-center gap-2 px-3 py-2 rounded ${isActive ? "bg-white text-dark" : "text-white"
                        }`
                    }
                >
                    <MdFactCheck />
                    <span className="d-none d-lg-inline">Orders</span>
                </NavLink>
            </div>

            {/* Logout at bottom */}
            <div>
                <button
                    onClick={() => setToken("")}
                    className="btn btn-outline-light d-flex align-items-center gap-2 w-100"
                    style={{ marginTop: "auto" }}
                >
                    <BiLogOut className="fs-5" />
                    <span className="d-none d-lg-inline">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
