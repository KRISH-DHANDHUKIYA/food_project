const orderModel = require("../models/orderModel")
const userModel = require("../models/user_model")
const Stripe = require("stripe")

//global variables
const currency = 'inr'
const Delivery_Charges = 10

//stripe gateway
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

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
                unit_amount: item.price[item.size] * 100 * 86 // converting in inr
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Delivery_Charges'
                },
                unit_amount: Delivery_Charges * 100 * 86 // convert in inr
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment'
        })

        res.json({ success: true, session_url: session.url })

    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}

// verify stripe payment (temporary method)
// const verifyStripe = async (req, res) => {

//     const { orderId, success, userId } = req.body

//     try {
//         if (success === "true") {
//             await orderModel.findByIdAndUpdate(orderModel, { payment: true })
//             await userModel.findByIdAndUpdate(userId, { cartData: {} })
//         }
//         else {
//             await orderModel.findByIdAndDelete(orderId)
//             res.json({ success: false })
//         }
//     }
//     catch (error) {
//         console.log(error)
//         res.status(500).json({ success: false, message: error.message });
//     }
// }
// Example backend controller:
const verifyStripe = async (req, res) => {
    try {
        const { success, orderId } = req.body;
        if (!success || !orderId) {
            return res.status(400).json({ success: false, message: "Missing success or orderId" });
        }

        // Validate orderId, find order, mark as paid, etc.
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


// all orders data for admin panel 
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({ success: true, orders })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// user orders for frotend
// const userOrders = async (req, res) => {
//     try {
//         const { userId } = req.body
//         const orders = await orderModel.find({ userId })

//         res.json({ success: true, orders })
//     }
//     catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }
// const userOrders = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     if (!userId) {
//       return res.status(400).json({ success: false, message: "User ID is required" });
//     }

//     const orders = await orderModel.find({ userId }).sort({ date: -1 });

//     res.status(200).json({ success: true, message: "Orders fetched successfully", orders });
//   } catch (error) {
//     console.error("Error fetching user orders:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };
// const userOrders = async (req, res) => {
//     try {
//         const { userId } = req.body;

//         // if (!userId) {
//         //     return res.status(400).json({ success: false, message: "User ID is required" });
//         // }

//         const orders = await orderModel.find({
//             userId: new mongoose.Types.ObjectId(userId),
//         }).sort({ date: -1 });

//         res.status(200).json({ success: true, message: "Orders fetched successfully", orders });
//     } catch (error) {
//         console.error("Error fetching user orders:", error);
//         res.status(500).json({ success: false, message: error.message });
//     }
// };
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



// user order ststus from admin panel
// const updateStatus = async (req, res) => {
//     try {
//         const { orderId, status } = req.body
//         await orderModel.findByIdAndDelete(orderId, { status })

//         res.json({ success: true, message: "Status Updated" })
//     }
//     catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }
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
