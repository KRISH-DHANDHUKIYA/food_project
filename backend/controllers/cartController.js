const userModel = require('../models/user_model');

const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body

        const userData = await userModel.findById(userId)
        const cartData = await userData.cartData

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1
            }
        }
        else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        await userModel.findByIdAndUpdate(userId, { cartData })
        res.status(200).json({ success: true, message: "Added to Cart" })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message })
    }
}

const updateCart = async (req, res) => {
    try {

        const { userId, itemId, size, quantity } = req.body

        const userData = await userModel.findById(userId)
        const cartData = await userData.cartData

        cartData[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId, { cartData })
        res.status(200).json({ success: true, message: "Upadated theCart" })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message })
    }
}

const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body

        const userData = await userModel.findById(userId)
        const cartData = await userData.cartData

        res.status(200).json({ success: true, cartData })
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ success: false, message: error.message })
    }
}

module.exports = { addToCart, updateCart, getUserCart }