// const jwt = require("jsonwebtoken")
// const { JWT_SECRET } = require("../utilities/config")

// const adminAuth = async (req, res, next) => {
//     try {
//         const { token } = req.headers
//         if (!token) {
//             return res.json({ success: false, message: "Not Authorized please login" })
//         }
//         const token_decode = jwt.verify(token, process.env, JWT_SECRET)
//         if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASS) {
//             return res.json({ success: false, message: "Not Authorized please login" })
//         }
//         next()
//     }
//     catch (error) {
//         console.log(error);
//         return res.json({ success: false, message: error.message })
//     }
// }

// module.exports = adminAuth

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utilities/config");

const adminAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Not Authorized, please login" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, JWT_SECRET);

        // Check if decoded email matches admin email
        if (
            decoded.email !== process.env.ADMIN_EMAIL ||
            decoded.password !== process.env.ADMIN_PASS
        ) {
            return res.status(403).json({ success: false, message: "Access denied" });
        }

        req.admin = decoded;
        next();
    } catch (error) {
        console.error("Admin Auth Error:", error.message);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = adminAuth;
