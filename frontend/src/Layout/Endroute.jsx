import { Route, Routes } from "react-router-dom"
import Endlayout from "./Endlayout"
import Home from "../Pages/Home"
import Menu from "../Pages/Menu"
import Contactus from "../Pages/Contactus"
import Card from "../Pages/Card"
import Login from "../Pages/Login"
import Placeorder from "../Pages/Placeorder"
import Orders from "../Pages/Orders"
import Verify from "../Pages/Verify"
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
                    <Route index element={<Card />} />
                    <Route index element={<Login />} />
                    <Route index element={<Placeorder />} />
                    <Route index element={<Orders />} />
                    <Route index element={<Verify />} />
                    <Route index element={<Admin />} />
                    <Route index element={<Notpage />} />
                </Route>
            </Routes>
        </>
    )
}

export default Endroute