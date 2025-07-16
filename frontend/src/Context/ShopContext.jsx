// import { createContext, useEffect, useState } from "react"
// // import { foods } from "../assets/data"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// import { toast } from "react-toastify"

// export const ShopContext = createContext()

// export const ShopContextProvider = (props) => {

//     const currency = "$"
//     const delivery_charges = 10
//     const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:1000";
//     const navigate = useNavigate()

//     const [cartItems, setCartItems] = useState({})
//     const [foods, setFoods] = useState([])
//     const [token, setToken] = useState("");

//     // adding items to card:
//     const addToCart = async (itemId, size) => {
//         let cartData = structuredClone(cartItems);

//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             } else {
//                 cartData[itemId][size] = 1;
//             }
//         } else {
//             cartData[itemId] = {};
//             cartData[itemId][size] = 1;
//         }

//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(`${backendUrl}/api/cart/add`, { itemId, size }, { headers: { token } })
//             }
//             catch (error) {
//                 console.log(error);
//                 toast.error(error.message)
//             }
//         }
//     };

//     // getting total cart count on header

//     const getCartCount = () => {
//         let totalCount = 0
//         for (const items in cartItems) {
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalCount += cartItems[items][item]
//                     }
//                 }
//                 catch (error) {
//                     console.log(error)
//                 }
//             }
//         }
//         return totalCount
//     }

//     // useEffect(() => {
//     //     console.log(cartItems);
//     // }, [cartItems]);

//     // updating the item quantities
//     const updateQuantity = async (itemId, size, quantity) => {
//         let cartData = structuredClone(cartItems)

//         cartData[itemId][size] = quantity
//         setCartItems(cartData)
//     }

//     // getting cart amount

//     const getCartAmount = () => {
//         let totalAmount = 0

//         for (const items in cartItems) {
//             let filtered = foods.find((food) => food._id === items)
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalAmount += filtered.price[item] * cartItems[items][item]
//                     }
//                 }
//                 catch (error) {
//                     console.log(error)
//                 }
//             }
//         }
//         return totalAmount
//     }

//     // get all foods data
//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(`${backendUrl}/api/product/list`);
//             if (response.data.status) {
//                 setFoods(response.data.data.products);
//             } else {
//                 toast.error(response.data.data.message || "Failed to fetch list");
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error(error.message);
//         }
//     };


//     useEffect(() => {
//         if (!token && localStorage.getItem("token")) {
//             setToken(localStorage.getItem("token"));
//         }
//         getProductsData();
//     }, [])

//     const contextValue = { foods, currency, delivery_charges, navigate, addToCart, getCartCount, cartItems, setCartItems, updateQuantity, getCartAmount, backendUrl, token, setToken };

//     return (
//         <>
//             <ShopContext.Provider value={contextValue}>
//                 {props.children}
//             </ShopContext.Provider>
//         </>
//     )
// }

// export default ShopContextProvider

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

    // Add item to cart
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
                // Send token in Authorization header as 'Bearer <token>'
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

    // Get total count of items in cart
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

    // Update item quantity in cart
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);

        // Optionally update cart on backend here if needed
    };

    // Get total amount of cart
    const getCartAmount = () => {
        let totalAmount = 0;

        for (const items in cartItems) {
            const filtered = foods.find((food) => food._id === items);
            if (!filtered) continue; // Skip if food not found

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

    // Fetch products from backend
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
            toast.error(error.message || "Failed to fetch products");
        }
    };

    useEffect(() => {
        // Load token from localStorage if exists
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
        setToken,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;



// import { createContext, useEffect, useState } from "react"
// // import { foods } from "../assets/data"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// import { toast } from "react-toastify"

// export const ShopContext = createContext()

// export const ShopContextProvider = (props) => {

//     const currency = "$"
//     const delivery_charges = 10
//     const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:1000";
//     const navigate = useNavigate()

//     const [cartItems, setCartItems] = useState({})
//     const [foods, setFoods] = useState([])
//     const [token, setToken] = useState("");

//     // adding items to card:
//     const addToCart = async (itemId, size) => {
//         let cartData = structuredClone(cartItems);

//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             } else {
//                 cartData[itemId][size] = 1;
//             }
//         } else {
//             cartData[itemId] = {};
//             cartData[itemId][size] = 1;
//         }

//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(`${backendUrl}/api/cart/add`, { itemId, size }, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//             }
//             catch (error) {
//                 console.log(error);
//                 toast.error(error.message)
//             }
//         }
//     };

//     // getting total cart count on header

//     const getCartCount = () => {
//         let totalCount = 0
//         for (const items in cartItems) {
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalCount += cartItems[items][item]
//                     }
//                 }
//                 catch (error) {
//                     console.log(error)
//                 }
//             }
//         }
//         return totalCount
//     }

//     // useEffect(() => {
//     //     console.log(cartItems);
//     // }, [cartItems]);

//     // updating the item quantities
//     const updateQuantity = async (itemId, size, quantity) => {
//         let cartData = structuredClone(cartItems);

//         cartData[itemId][size] = quantity;
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(
//                     `${backendUrl}/api/cart/update`,
//                     { itemId, size, quantity },
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token}`
//                         }
//                     }
//                 );
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };


//     // getting cart amount

//     // const getCartAmount = () => {
//     //     let totalAmount = 0

//     //     for (const items in cartItems) {
//     //         let filtered = foods.find((food) => food._id === items)
//     //         for (const item in cartItems[items]) {
//     //             try {
//     //                 if (cartItems[items][item] > 0) {
//     //                     totalAmount += filtered.price[item] * cartItems[items][item]
//     //                 }
//     //             }
//     //             catch (error) {
//     //                 console.log(error)
//     //             }
//     //         }
//     //     }
//     //     return totalAmount
//     // }
//     const getCartAmount = () => {
//         let totalAmount = 0;
//         cartItems.forEach(cartItem => {
//             const product = products.find(p => p._id === cartItem.itemId); // Adjust key if needed
//             if (product) {
//                 totalAmount += product.price * cartItem.quantity;
//             }
//         });
//         return totalAmount;
//     };


//     // get all foods data
//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(`${backendUrl}/api/product/list`);
//             if (response.data.status) {
//                 setFoods(response.data.data.products);
//             } else {
//                 toast.error(response.data.data.message || "Failed to fetch list");
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error(error.message);
//         }
//     };

//     //get usercart data
//     const getUserCart = async (token) => {
//         try {
//             const response = await axios.post(
//                 backendUrl + '/api/cart/get',
//                 {},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 }
//             );

//             if (response.data.success) {
//                 setCartItems(response.data.cartData);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };



//     useEffect(() => {
//         if (!token && localStorage.getItem("token")) {
//             setToken(localStorage.getItem("token"));
//             getUserCart(localStorage.getItem('token'))
//         }

//         getProductsData();
//     }, [])

//     const contextValue = { foods, currency, delivery_charges, navigate, addToCart, getCartCount, cartItems, setCartItems, updateQuantity, getCartAmount, backendUrl, token, setToken, getUserCart };

//     return (
//         <>
//             <ShopContext.Provider value={contextValue}>
//                 {props.children}
//             </ShopContext.Provider>
//         </>
//     )
// }

// export default ShopContextProvider