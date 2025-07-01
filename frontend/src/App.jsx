import { Routes, Route } from "react-router-dom";
import Endlayout from "./Layout/Endlayout";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contactus from "./Pages/Contactus";
import Admin from "./Pages/Admin";
import Notpage from "./Pages/Notpage";
import Card from "./Pages/Card";
import Login from "./Pages/Login";
import Placeorder from "./Pages/Placeorder";
import Orders from "./Pages/Orders"
import Verify from "./Pages/Verify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Endlayout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/card" element={<Card />} />
          <Route path="/login" element={<Login />} />
        
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Notpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
