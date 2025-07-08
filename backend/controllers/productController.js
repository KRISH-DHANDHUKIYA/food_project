const cloudinary = require('cloudinary').v2;
const productModel = require("../models/productModel")

//function for adding products
const addProduct = async (req, res) => {
    try {
        const { name, description, category, prices, popular } = req.body;
        const image = req.file;

        if (!name || !description || !category || !prices) {
            return res.status(400).json({
                status: false,
                data: { message: "All fields are mandatory – apply changes" }
            });
        }

        // Upload image or set default image
        let imageUrl = "https://avatars.mds.yandex.net/i?id=9593ea4ac82d0924313698155220fa046de9b8aa-5869256-images-thumbs&n=13"; // default
        if (image) {
            const result = await cloudinary.uploader.upload(image.path, {
                resource_type: "image"
            });
            imageUrl = result.secure_url;
        }

        const parsedPrices = JSON.parse(prices);

        const price = parsedPrices.reduce((acc, curr) => {
            acc[curr.size] = Number(curr.price);
            return acc;
        }, {});

        const sizes = parsedPrices.map(item => item.size);

        const productData = {
            name,
            description,
            category,
            price,
            popular: popular === "true",
            sizes,
            image: imageUrl,
            date: Date.now()
        };

        const product = new productModel(productData);
        await product.save();
        console.log("Saved product:", product);

        return res.status(201).json({
            status: true,
            data: { message: "Food added successfully", productData }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            data: { message: "Internal server error", error: error.message }
        });
    }
};


//function for removing products
// const removeProduct = async (req, res) => {
//     try {
//         await productModel.findByIdAndDelete(req.body.id)
//         res.json({ success: true, message: "Food Removed" })
//     }
//     catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             status: false,
//             data: { message: "Internal server error", error: error.message }
//         });
//     }
// }
const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({
                status: false,
                data: { message: "Product ID is required" }
            });
        }

        const deletedProduct = await productModel.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({
                status: false,
                data: { message: "Product not found" }
            });
        }

        return res.status(200).json({
            status: true,
            data: { message: "Food removed successfully", product: deletedProduct }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            data: { message: "Internal server error", error: error.message }
        });
    }
};




//function for List products
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find().sort({ date: -1 }); // latest first
        return res.status(200).json({
            status: true,
            data: {
                message: "Product list fetched successfully",
                products
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            data: {
                message: "Internal server error",
                error: error.message
            }
        });
    }
};




//function for single product information
// const singleProduct = async (req, res) => {
//     try {
//         const {productId} = req.body
//         const product = await productModel.findById(productId)
//         res.json({success:true,product})
//     }
//     catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             status: false,
//             data: {
//                 message: "Internal server error",
//                 error: error.message
//             }
//         });
//     }
// }
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({
                status: false,
                data: { message: "Product ID is required" }
            });
        }

        const product = await productModel.findById(productId);

        if (!product) {
            return res.status(404).json({
                status: false,
                data: { message: "Product not found" }
            });
        }

        return res.status(200).json({
            status: true,
            data: {
                message: "Product fetched successfully",
                product
            }
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            data: {
                message: "Internal server error",
                error: error.message
            }
        });
    }
};


module.exports = { addProduct, removeProduct, listProduct, singleProduct }