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
const { JWT_SECRET } = require("../utilities/config");

const authUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: 'Not Authorized, please login again' });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.body.userId = decoded.id; // this line must exist
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};
