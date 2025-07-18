const orderModel = require("../models/orderModel")
const userModel = require("../models/user_model")
const Stripe = require("stripe")
const mongoose = require("mongoose");

const currency = 'inr'
const Delivery_Charges = 10

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

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

        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.status(200).json({ success: true, message: "Order Placed", order: newOrder });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body
        const { origin } = req.headers

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();


        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price[item.size] * 100 * 86
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Delivery_Charges'
                },
                unit_amount: Delivery_Charges * 100 * 86
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment'
        })

        res.status(200).json({ success: true, session_url: session.url })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })

    }
}

const verifyStripe = async (req, res) => {
    try {
        const { success, orderId } = req.body;
        if (!success || !orderId) {
            return res.status(400).json({ success: false, message: "Missing success or orderId" });
        }

        const order = await orderModel.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        order.payment = true;
        await order.save();

        res.json({ success: true });
    } catch (err) {
        console.error("Error in verifyStripe:", err);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.status(200).json({ success: true, orders })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}


const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;

        const orders = await orderModel.find({
            userId
        })

        res.status(200).json({ success: true, message: "Orders fetched successfully", orders });
    } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;

        const updatedOrder = await orderModel.findByIdAndUpdate(orderId, { status });

        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        res.json({ success: true, message: "Status Updated" });
    } catch (error) {
        console.error("Update Status Error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};


module.exports = { placeOrder, placeOrderStripe, verifyStripe, allOrders, userOrders, updateStatus }
