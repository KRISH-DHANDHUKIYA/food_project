const express = require("express")
const { addProduct, removeProduct, listProduct, singleProduct } = require("../controllers/productController")
const upload = require("../utilities/multer")
const adminAuth = require("../middleware/adminAuth")
const productRouter = express.Router()

productRouter.post("/add", adminAuth, upload.single('image'), addProduct)
productRouter.post("/remove", adminAuth, removeProduct)
productRouter.get("/list", listProduct)
productRouter.post("/single", singleProduct)

module.exports = productRouter