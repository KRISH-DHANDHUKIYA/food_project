import Sidebar from "./components/Sidebar";
import Add from "./Pages/Add";
import List from "./Pages/List";
import Orders from "./Pages/Orders";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Login from "./components/Login";

export const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:1000";
console.log("Backend URL:", backendUrl);

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <main>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className="bg-light text-dark" style={{ minHeight: "100vh", overflow: "hidden" }}>
          <Container fluid className="p-0" style={{ height: "100vh" }}>
            <Row className="g-0" style={{ height: "100%" }}>
              {/* Sidebar fixed width */}
              <Col
                xs={12}
                sm={3}
                md={2}
                style={{
                  height: "100vh",
                  minWidth: "220px",
                  maxWidth: "220px",
                  overflow: "hidden",
                  padding: 0,
                }}
              >
                <Sidebar setToken={setToken} />
              </Col>

              {/* Main content fills rest, scrollable */}
              <Col
                xs={12}
                sm={9}
                md={10}
                style={{
                  height: "100vh",
                  overflowY: "auto",
                  padding: "2rem",
                }}
              >
                <Routes>
                  <Route path="/" element={<Add token={token} />} />
                  <Route path="/list" element={<List token={token} />} />
                  <Route path="/orders" element={<Orders token={token} />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </main>
  );
}

export default App;
