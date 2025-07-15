// import { NavLink } from "react-router-dom";
// import { FaSquarePlus } from "react-icons/fa6";
// import { MdFactCheck } from "react-icons/md";
// import { BiLogOut } from "react-icons/bi";
// import { FaListAlt } from "react-icons/fa";
// import { Button } from "react-bootstrap";
// import { IoClose } from "react-icons/io5";

// const Sidebar = ({ setToken, onClose }) => {
//     return (
//         <div
//             className="bg-dark text-white d-flex flex-column justify-content-between h-100 p-3"
//             style={{
//                 width: "100%",
//                 position: "relative",
//                 minHeight: "95vh",
//             }}
//         >
//             {/* Close icon (mobile only) */}
//             <div className="d-md-none text-end mb-2">
//                 <IoClose size={24} onClick={onClose} style={{ cursor: "pointer" }} />
//             </div>

//             {/* Logo */}
//             <div className="fw-bold fs-5 text-center mb-4">
//                 <span className="d-none d-md-inline">FoodExpress</span>
//             </div>

//             {/* Navigation */}
//             <div className="d-flex flex-column gap-3 flex-grow-1">
//                 <NavLink
//                     to="/"
//                     className={({ isActive }) =>
//                         `d-flex align-items-center gap-2 px-2 py-2 rounded ${isActive ? "bg-white " : "text-white"
//                         }`

//                     }  
//                     style={{ textDecoration: "none" }}
//                     onClick={onClose}
//                 >
//                     <FaSquarePlus />
//                     <span className="d-none d-md-inline">Add Item</span>
//                 </NavLink>

//                 <NavLink
//                     to="/list"
//                     className={({ isActive }) =>
//                         `d-flex align-items-center gap-2 px-2 py-2 rounded ${isActive ? "bg-white text-dark" : "text-white"
//                         }`
//                     }
//                     style={{ textDecoration: "none" }}
//                     onClick={onClose}
//                 >
//                     <FaListAlt />
//                     <span className="d-none d-md-inline">List</span>
//                 </NavLink>

//                 <NavLink
//                     to="/orders"
//                     className={({ isActive }) =>
//                         `d-flex align-items-center gap-2 px-2 py-2 rounded ${isActive ? "bg-white text-dark" : "text-white"
//                         }`
//                     }
//                     style={{ textDecoration: "none" }}
//                     onClick={onClose}
//                 >
//                     <MdFactCheck />
//                     <span className="d-none d-md-inline">Orders</span>
//                 </NavLink>
//             </div>

//             {/* Logout */}
//             <Button
//                 variant="danger"
//                 onClick={() => {
//                     setToken("");
//                     onClose();
//                 }}
//                 className="d-flex align-items-center gap-2 w-100 mt-auto"
//             >
//                 <BiLogOut className="fs-5" />
//                 <span className="d-none d-md-inline">Logout</span>
//             </Button>
//         </div>
//     );
// };


// export default Sidebar;
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
        <div
            className="bg-dark text-white d-flex flex-column p-3"
            style={{
                // Changed minHeight to height: '100vh' for fixed sidebar
                height: "100vh", // Sidebar always takes full viewport height
                overflowY: "auto", // Allows sidebar content to scroll if it overflows

                // Conditional styles for mobile overlay / desktop fixed
                position: isMobile ? "fixed" : "fixed", // Always fixed (mobile overlay or desktop fixed)
                top: 0,
                left: isMobile ? (isOpen ? "0" : "-100%") : "0", // Slide in/out on mobile, always 0 on desktop
                bottom: 0,
                width: isMobile ? "70vw" : "220px", // 70vw on mobile, 220px on desktop
                maxWidth: isMobile ? "70vw" : "220px", // Max width to prevent it from getting too wide on tablets
                zIndex: isMobile ? 1050 : 1000, // High z-index on mobile, still high for desktop
                transition: "left 0.3s ease-in-out", // Smooth animation for sliding
                // Display for desktop needs to be block for d-md-block (if used) or just 'flex'
                display: isMobile && !isOpen ? "none" : "flex",
            }}
        >
            {/* Close icon (mobile only) */}
            <div className="d-md-none text-end mb-2">
                <IoClose size={24} onClick={onClose} style={{ cursor: "pointer" }} />
            </div>

            {/* Logo */}
            <div className="fw-bold fs-5 text-center mb-4">
                <span>FoodExpress</span>
            </div>

            {/* Navigation */}
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

            {/* Logout */}
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
    );
};

export default Sidebar;