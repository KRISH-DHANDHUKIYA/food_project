import { Route, Routes } from "react-router-dom"
import Endlayout from "./Endlayout"
import Home from "../Pages/Home"
import Menu from "../Pages/Menu"
import Contactus from "../Pages/Contactus"
import Admin from "../Pages/Admin"
import Notpage from "../Pages/Notpage"

const Endroute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Endlayout />}>
                    <Route index element={<Home />} />
                    <Route index element={<Menu />} />
                    <Route index element={<Contactus />} />
                    <Route index element={<Admin />} />
                    <Route index element={<Notpage />} />
                </Route>
            </Routes>
        </>
    )
}

export default Endroute