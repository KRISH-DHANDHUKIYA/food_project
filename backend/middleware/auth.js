// const jwt = require('jsonwebtoken')
// const { JWT_SECRET } = require("../utilities/config");

// const authUser = async (req, res, next) => {
//     const { token } = req.headers
//     if (!token) {
//         return res.json({ success: false, message: 'Not Authorized please login again' })
//     }

//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET)
//         req.body.userId = token_decode.id
//         next()
//     }
//     catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message })
//     }
// }

// module.exports = authUser

// middlewares/auth.js

const jwt = require('jsonwebtoken');
const userModel = require('../models/user_model');
const { JWT_SECRET } = require('../utilities/config');

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await userModel.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error("Auth Middleware Error:", error);
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

module.exports = authMiddleware;
