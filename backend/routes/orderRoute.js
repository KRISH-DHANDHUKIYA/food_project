// const express = require('express')
// const { placeOrder, placeOrderStripe, verifyStripe, allOrders, userOrders, updateStatus } = require("../controllers/orderController")
// const adminAuth = require("../middleware/adminAuth")
// const authUser = require("../middleware/auth")
// const orderRouter = express.Router()

// orderRouter.post('/list', adminAuth, allOrders)
// orderRouter.post('/status', adminAuth, updateStatus)
// orderRouter.post('/place', authUser, placeOrder)
// orderRouter.post('/stripe', authUser, placeOrderStripe)
// orderRouter.post('/userorders', authUser, userOrders)
// orderRouter.post('/verifystripe', authUser, verifyStripe)

// module.exports = orderRouter 

const express = require('express');
const {
    placeOrder, placeOrderStripe, verifyStripe,
    allOrders, userOrders, updateStatus
} = require("../controllers/orderController");
const adminAuth = require("../middleware/adminAuth");
const authUser = require("../middleware/auth");

const orderRouter = express.Router();

orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/verifystripe', authUser, verifyStripe);
orderRouter.post('/userorders', authUser, userOrders); // ✅ your working route

module.exports = orderRouter;
