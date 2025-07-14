import { createContext, useEffect, useState } from "react"
// import { foods } from "../assets/data"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const ShopContext = createContext()

export const ShopContextProvider = (props) => {

    const currency = "$"
    const delivery_charges = 10
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:1000";
    const navigate = useNavigate()

    const [cartItems, setCartItems] = useState({})
    const [foods, setFoods] = useState([])
    const [token, setToken] = useState("");

    // adding items to card:
    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    };

    // getting total cart count on header

    const getCartCount = () => {
        let totalCount = 0
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                    }
                }
                catch (error) {
                    console.log(error)
                }
            }
        }
        return totalCount
    }

    // useEffect(() => {
    //     console.log(cartItems);
    // }, [cartItems]);

    // updating the item quantities
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)

        cartData[itemId][size] = quantity
        setCartItems(cartData)
    }

    // getting cart amount

    const getCartAmount = () => {
        let totalAmount = 0

        for (const items in cartItems) {
            let filtered = foods.find((food) => food._id === items)
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += filtered.price[item] * cartItems[items][item]
                    }
                }
                catch (error) {
                    console.log(error)
                }
            }
        }
        return totalAmount
    }

    // get all foods data
    const getProductsData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`);
            if (response.data.status) {
                setFoods(response.data.data.products);
            } else {
                toast.error(response.data.data.message || "Failed to fetch list");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };


    useEffect(() => {
        getProductsData();
    }, [])

    const contextValue = { foods, currency, delivery_charges, navigate, addToCart, getCartCount, cartItems, setCartItems, updateQuantity, getCartAmount, backendUrl, token, setToken };

    return (
        <>
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        </>
    )
}

export default ShopContextProvider