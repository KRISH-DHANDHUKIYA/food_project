import { Routes, Route } from "react-router-dom";
import Endlayout from "./Layout/Endlayout";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contactus from "./Pages/Contactus";
import Admin from "./Pages/Admin";
import Notpage from "./Pages/Notpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Endlayout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Notpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
