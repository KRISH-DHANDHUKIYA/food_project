// const userModel = require('../models/user_model');

// //adding producs to the cart
// const addToCart = async (req, res) => {
//     try {
//         const { userId, itemId, size } = req.body

//         const userData = await userModel.findById(userId)
//         const cartData = await userData.cartData

//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1
//             }
//             else {
//                 cartData[itemId][size] = 1
//             }
//         }
//         else {
//             cartData[itemId] = {}
//             cartData[itemId][size] = 1
//         }
//         await userModel.findByIdAndUpdate(userId, { cartData })
//         res.json({ success: true, message: "Added to Cart" })
//     }
//     catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message })
//     }
// }

// //update user cart data
// const updateCart = async (req, res) => {
//     try {

//         const { userId, itemId, size, quantity } = req.body

//         const userData = await userModel.findById(userId)
//         const cartData = await userData.cartData

//         cartData[itemId][size] = quantity

//         await userModel.findByIdAndUpdate(userId, { cartData })
//         res.json({ success: true, message: "Upadated theCart" })

//     }
//     catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message })
//     }
// }

// //getting user cart data
// const getUserCart = async (req, res) => {
//     try {
//         const { userId } = req.body

//         const userData = await userModel.findById(userId)
//         const cartData = await userData.cartData

//         res.json({ success: true, cartData })
//     }
//     catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message })
//     }
// }

// module.exports = { addToCart, updateCart, getUserCart }

const usermodel = require('../models/user_model');

//#region Add Item to Cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;

        if (!userId || !itemId || !size) {
            return res.status(400).json({ status: false, data: { message: 'userId, itemId, and size are required' } });
        }

        const userData = await usermodel.findById(userId);
        const cartData = userData.cartData || {};

        if (cartData[itemId]) {
            cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
        } else {
            cartData[itemId] = { [size]: 1 };
        }

        await usermodel.findByIdAndUpdate(userId, { cartData });
        return res.status(200).json({ status: true, data: { message: "Item added to cart successfully" } });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, data: { message: "Internal server error", data: error } });
    }
};
//#endregion

//#region Update Cart Item Quantity
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;

        if (!userId || !itemId || !size || quantity === undefined) {
            return res.status(400).json({ status: false, data: { message: 'userId, itemId, size, and quantity are required' } });
        }

        const userData = await usermodel.findById(userId);
        const cartData = userData.cartData || {};

        if (!cartData[itemId] || !cartData[itemId][size]) {
            return res.status(404).json({ status: false, data: { message: "Item not found in cart" } });
        }

        cartData[itemId][size] = quantity;

        await usermodel.findByIdAndUpdate(userId, { cartData });
        return res.status(200).json({ status: true, data: { message: "Cart updated successfully" } });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, data: { message: "Internal server error", data: error } });
    }
};
//#endregion

//#region Get User Cart
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({ status: false, data: { message: 'userId is required' } });
        }

        const userData = await usermodel.findById(userId);
        const cartData = userData.cartData || {};

        return res.status(200).json({ status: true, data: { message: "Cart fetched successfully", cartData } });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, data: { message: "Internal server error", data: error } });
    }
};
//#endregion

module.exports = { addToCart, updateCart, getUserCart };
