import { Routes, Route } from "react-router-dom";
import Endlayout from "./Layout/Endlayout";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contactus from "./Pages/Contactus";
import Notpage from "./Pages/Notpage";
import Cart from "./Pages/Cart";
import Login from "./Components/Login";
import Placeorder from "./Pages/Placeorder";
import Orders from "./Pages/Orders";
import Verify from "./Pages/Verify";
import Aboutus from "./Pages/Aboutus";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      <Routes>
        <Route path="/" element={<Endlayout />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="*" element={<Notpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
