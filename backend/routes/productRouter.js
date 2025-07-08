const express = require("express")
const { addProduct, removeProduct, listProduct, singleProduct } = require("../controllers/productController")
const upload = require("../utilities/multer")
const productRouter = express.Router()

productRouter.post("/add", upload.single('image'), addProduct)
productRouter.post("/remove", removeProduct)
productRouter.get("/list", listProduct)
productRouter.post("/single", singleProduct)

module.exports = productRouter