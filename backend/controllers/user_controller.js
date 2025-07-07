const usermodel = require('../models/user_model')


// user register route
const registerUser = async (req, res) => {
    try {
        const user = req.body;
        if (!user) {
            return res.status(404).json({ status: false, data: { message: 'all filed mandatory' } });
        }

        const dbuser = new usermodel({ name: user.name, email: user.email, password: user.password })
        await dbuser.save()
        return res.status(200).json({ status: true, data: { message: "user created successfully.", data: dbuser } })

    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, data: { message: "Internal server error", data: error } })
    }
}



// user login route
const loginUser = async (req, res) => {

}


// user login route
const adminUser = async (req, res) => {

}

module.exports = { registerUser, loginUser, adminUser }