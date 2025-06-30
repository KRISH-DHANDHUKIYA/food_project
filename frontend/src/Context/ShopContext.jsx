import { createContext } from "react"
import { foods } from "../assets/data"
import { useNavigate } from "react-router-dom"

export const ShopContext = createContext()

export const ShopContextProvider = (props) => {

    const currency = "$"
    const delivery_chargers = 10
    const navigate = useNavigate();

    const contextValue = { foods, currency, delivery_chargers, navigate };


    return (
        <>
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        </>
    )
}

export default ShopContextProvider