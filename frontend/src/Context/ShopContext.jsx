import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_charges = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:1000";
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState({});
    const [foods, setFoods] = useState([]);
    const [token, setToken] = useState("");

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

        if (token) {
            try {
                await axios.post(
                    `${backendUrl}/api/cart/add`,
                    { itemId, size },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            } catch (error) {
                console.error(error);
                toast.error(error.message || "Failed to add to cart");
            }
        }
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const size in cartItems[items]) {
                try {
                    if (cartItems[items][size] > 0) {
                        totalCount += cartItems[items][size];
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;

        for (const items in cartItems) {
            const filtered = foods.find((food) => food._id === items);
            if (!filtered) continue;

            for (const size in cartItems[items]) {
                try {
                    if (cartItems[items][size] > 0) {
                        totalAmount += filtered.price[size] * cartItems[items][size];
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return totalAmount;
    };

    const getProductsData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`);
            if (response.data.status) {
                setFoods(response.data.data.products);
            } else {
                toast.error(response.data.data.message || "Failed to fetch product list");
            }
        } catch (error) {
            console.error(error);
            // toast.error(error.message || "Failed to fetch products");
        }
    };

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
        }

        getProductsData();
    }, []);

    const contextValue = {
        foods,
        currency,
        delivery_charges,
        navigate,
        addToCart,
        getCartCount,
        cartItems,
        setCartItems,
        updateQuantity,
        getCartAmount,
        backendUrl,
        token,
        setToken
    };

    return (
        <>
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        </>
    );
};

export default ShopContextProvider;