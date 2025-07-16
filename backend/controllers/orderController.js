const orderModel = require("../models/orderModel")
const userModel = require("../models/user_model")

// placing order using cod metheod
// const placeOrder = async (req, res) => {
//     try {
//         const { userId, items, amount, address } = req.body
//         const orderData = {
//             userId,
//             items,
//             amount,
//             address,
//             paymentMethod: "COD",
//             payment: false,
//             date: Date.now()
//         }

//         const newOrder = new orderModel(orderData)
//         await newOrder.save()

//         await userModel.findByIdAndUpdate(userId, { cartData: {} })
//         res.json({ success: true, message: "Order Placed" })
//     }
//     catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        if (!userId || !items || items.length === 0 || !amount || !address) {
            return res.status(400).json({ success: false, message: "Missing order details" });
        }

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Clear user's cart after placing order
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.status(200).json({ success: true, message: "Order Placed", order: newOrder });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// placing order using stripe method
const placeOrderStripe = async (req, res) => {
    try {

    }
    catch (error) {
        console.log(error)
    }
}

// verify stripe payment (temporary method)
const verifyStripe = async (req, res) => {
    try {

    }
    catch (error) {
        console.log(error)
    }
}

// all orders data for admin panel 
const allOrders = async (req, res) => {
    try {

    }
    catch (error) {
        console.log(error)
    }
}

// user orders for frotend
const userOrders = async (req, res) => {
    try {

    }
    catch (error) {
        console.log(error)
    }
}

// user order ststus from admin panel
const updateStatus = async (req, res) => {
    try {

    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { placeOrder, placeOrderStripe, verifyStripe, allOrders, userOrders, updateStatus }
