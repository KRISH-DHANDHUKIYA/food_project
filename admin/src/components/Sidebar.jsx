import { NavLink } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";
import { MdFactCheck } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaListAlt } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="bg-dark text-white p-3 min-vh-100 d-flex flex-column">
            {/* Logo */}
            <div className="fw-bold fs-4 text-center mb-5" >FoodExpress</div>

            {/* Navigation Links */}
            <div className="d-flex flex-column gap-3 flex-grow-1">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `d-flex align-items-center gap-2 px-3 py-2 rounded ${isActive ? "bg-white text-dark" : "text-white"}`
                    }
                >
                    <FaSquarePlus />
                    <span className="d-none d-lg-inline">Add Item</span>
                </NavLink>

                <NavLink
                    to="/list"
                    className={({ isActive }) =>
                        `d-flex align-items-center gap-2 px-3 py-2 rounded ${isActive ? "bg-white text-dark" : "text-white"}`
                    }
                >
                    <FaListAlt />
                    <span className="d-none d-lg-inline">List</span>
                </NavLink>

                <NavLink
                    to="/orders"
                    className={({ isActive }) =>
                        `d-flex align-items-center gap-2 px-3 py-2 rounded ${isActive ? "bg-white text-dark" : "text-white"}`
                    }
                >
                    <MdFactCheck />
                    <span className="d-none d-lg-inline">Orders</span>
                </NavLink>
            </div>

            {/* Logout at bottom */}
            <div className="mt-auto">
                <button className="btn btn-outline-light d-flex align-items-center gap-2 w-100">
                    <BiLogOut className="fs-5" />
                    <span className="d-none d-lg-inline">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
