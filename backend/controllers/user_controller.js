const usermodel = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utilities/config');
const { Sendmail } = require('../utilities/nodemailer')

const createToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d' });
};

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ status: false, data: { message: "All fields are mandatory" } });
        }

        const existingUser = await usermodel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ status: false, data: { message: "User already exists with this email" } });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = new usermodel({
            name,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        const token = createToken(savedUser._id);


        await Sendmail(
            newUser.email,
            `WELCOME TO FOOD EXPRESS, ${newUser.name} 🍽️`,
            'WE ARE HAPPY TO HAVE YOU AS A USER',
            `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #fefefe;">
      <h2 style="color: #ff5722;">Hey ${newUser.name}, welcome to <span style="color:#222;">Food Express!</span> 🍕</h2>
      <p>We're thrilled to have you on board. Get ready to explore our delicious menu, place orders with ease, and enjoy fast delivery to your doorstep!</p>

      <a 
        href="http://localhost:5173/"
        style="display: inline-block; padding: 12px 24px; background-color: #ff5722; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0;"
      >
        🍔 Start Ordering Now
      </a>

      <p>New here? Watch how Food Express works:</p>
      <a 
        href="https://www.youtube.com/watch?v=o1BhCIRYnWI&t=1653s" 
        target="_blank"
        style="color: #2196f3;"
      >
        ▶ CLICK TO WATCH VIDEO
      </a>

      <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />
      <p style="font-size: 0.9em; color: #777;">If you didn’t create an account, no worries — just ignore this email.</p>
    </div>
  `
        );


        return res.status(200).json({ status: true, data: { message: "User created successfully", user: savedUser, token: token } });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, data: { message: "Internal server error", error: error.message } });
    }
};

const loginUser = async (req, res) => {
    try {
        const user = req.body;

        const dbuser = await usermodel.findOne({ email: user.email });
        if (!dbuser) {
            return res.status(404).json({ status: false, data: { message: 'Email not found, apply changes' } })
        }

        const match = bcrypt.compareSync(user.password, dbuser.password);
        if (match) {
            const token = jwt.sign({ id: dbuser._id }, JWT_SECRET);

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

const adminUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ status: false, data: { message: 'Email and password are required' } })
        }

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
            const token = jwt.sign({ role: "admin", email }, process.env.JWT_SECRET);

            return res.status(200).json({ status: true, data: { message: "Admin login successful", admin: { email }, token } })
        } else {
            return res.status(401).json({ status: false, data: { message: "Invalid admin credentials" } })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, data: { message: "Internal server error", error: error.message } });
    }
};

module.exports = { registerUser, loginUser, adminUser }
