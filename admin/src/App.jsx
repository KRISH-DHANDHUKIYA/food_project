import Sidebar from "./components/Sidebar";
import Add from "./Pages/Add";
import List from "./Pages/List";
import Orders from "./Pages/Orders";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const[token, setToken] = useState("");
  return (
    <main>
      {
        token === "" ? (
          <Login setToken={setToken} />
        ) : (
      <div className="bg-light text-dark">
        <Container fluid>
          <Row>
            {/* Sidebar on the left */}
            <Col xs={12} sm={3} md={2} className="p-0">
              <Sidebar />
            </Col>

            {/* Main content area */}
            <Col xs={12} sm={9} md={10} className="p-4">
              <Routes>
                <Route path="/" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/orders" element={<Orders />} />
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
