const usermodel = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utilities/config');

// Helper: create JWT token
const createToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d' });
};

// User Register Controller
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({ status: false, data: { message: "All fields are mandatory" } });
        }

        // Check if user already exists
        const existingUser = await usermodel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ status: false, data: { message: "User already exists with this email" } });
        }

        // Password hash
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Create new user
        const newUser = new usermodel({
            name,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        // Token creation
        const token = createToken(savedUser._id);

        return res.status(200).json({ status: true, data: { message: "User created successfully", user: savedUser, token: token } });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, data: { message: "Internal server error", error: error.message } });
    }
};

// user login route
const loginUser = async (req, res) => {
    try {
        const user = req.body; // Extract email and password from body

        const dbuser = await usermodel.findOne({ email: user.email }); // Find user by email
        if (!dbuser) {
            return res.status(404).json({ status: false, data: { message: 'Email not found, apply changes' } })
        }

        const match = bcrypt.compareSync(user.password, dbuser.password); // Compare passwords
        if (match) {
            const token = jwt.sign({ id: dbuser._id }, JWT_SECRET); // Create token

            // Remove password before sending user data
            const data1 = dbuser.toObject();
            delete data1.password;

            return res.status(200).json({ status: true, data: { message: 'Login successfully', data: data1, token: token } })
        }
        else {
            return res.status(401).json({ status: false, data: { message: 'Incorrect password , apply changes' } })
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, data: { message: 'Internal server error', data: error.message } })
    }
};

// user login route
// const adminUser = async (req, res) => {
//     try {
//         const { email, password } = req.body
//         if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
//             const token = jwt.sign(email + password, process.env.JWT_SECRET)
//             res.json({ success: true, token })
//         }
//         else {
//             res.json({ success: false, message: "Invalid Credentials" })
//         }
//     }
//     catch (error) {
//         console.log(error);
//         return res.status(500).json({ status: false, data: { message: 'Internal server error', data: error.message } })
//     }
// }
const adminUser = async (req, res) => {
    //     try {
    //         const { email, password } = req.body;

    //         // Validate input
    //         if (!email || !password) {
    //             return res.status(400).json({ status: false, data: { message: 'Email and password are required' } })
    //         }

    //         // Check against admin credentials in .env
    //         if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
    //             const token = jwt.sign({ role: "admin", email }, process.env.JWT_SECRET);

    //             return res.status(200).json({ status: true, data: { message: "Admin login successful", admin: { email }, token } })
    //         } else {
    //             return res.status(401).json({ status: false, data: { message: "Invalid admin credentials" } })
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ status: false, data: { message: "Internal server error", error: error.message } });
    //     }
    // };
    try {
        const { email, password } = req.body;

        // Check credentials
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
            const token = jwt.sign({ email, password }, JWT_SECRET, { expiresIn: "7d" });

            return res.status(200).json({
                success: true,
                token,
                message: "Admin logged in successfully"
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Invalid admin credentials"
            });
        }
    } catch (error) {
        console.error("Admin Login Error:", error.message);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};


module.exports = { registerUser, loginUser, adminUser }