import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Add from "./Pages/Add";
import List from "./Pages/List";
import Orders from "./Pages/Orders";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBars } from "react-icons/fa";

export const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:1000";
export const currency = "$";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const closeSidebar = () => setShowSidebar(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768 && showSidebar) {
        setShowSidebar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showSidebar]);

  const desktopSidebarWidth = "220px"; // Define desktop sidebar width

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className="d-flex flex-column min-vh-100">
          {/* Top Navbar for Mobile */}
          <div className="d-md-none d-flex align-items-center justify-content-between bg-dark text-white px-3 py-2">
            <FaBars onClick={toggleSidebar} style={{ cursor: "pointer" }} />
            <strong className="fs-5 fs-md-4">FoodExpress</strong>
            <div style={{ width: '24px' }} />
          </div>

          <div className="d-flex flex-grow-1">
            {/* Sidebar Component */}
            {/* The Sidebar component now handles its own display logic (fixed vs. relative) */}
            <Sidebar
              setToken={setToken}
              onClose={closeSidebar}
              isOpen={showSidebar}
              windowWidth={windowWidth}
            />

            {/* Main Content */}
            <div
              className="flex-grow-1 p-3"
              style={{
                // Adjust margin-left based on screen size and sidebar state
                marginLeft: windowWidth < 768
                  ? (showSidebar ? "70vw" : 0) // Mobile: adjust when sidebar is open
                  : desktopSidebarWidth, // Desktop: always account for fixed sidebar width
                transition: "margin-left 0.3s ease",
                // This will make only the main content scrollable vertically
                overflowY: "auto",
                height: "100vh", // Ensures the main content takes full height to enable scroll
              }}
            >
              <Routes>
                <Route path="/" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>

            {/* Optional: Overlay when sidebar is open on mobile */}
            {windowWidth < 768 && showSidebar && (
              <div
                className="position-fixed top-0 bottom-0 left-0 right-0"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1040,
                  width: "100vw",
                  height: "100vh",
                }}
                onClick={closeSidebar}
              ></div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;