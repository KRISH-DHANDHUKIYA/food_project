const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utilities/config");

const authUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Not Authorized" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.body.userId = decoded.id;
        next();
    } catch (error) {
        console.error("JWT Error:", error);
        return res.status(401).json({ success: false, message: "Token Invalid" });
    }
};

module.exports = authUser;