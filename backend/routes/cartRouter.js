const express = require('express')
const { addToCart, getUserCart, updateCart } = require("../controllers/cartController")
const cartRouter = express.Router()

cartRouter.post('/add', addToCart)
cartRouter.post('/update', updateCart)
cartRouter.post('/get', getUserCart)

module.exports = cartRouter;