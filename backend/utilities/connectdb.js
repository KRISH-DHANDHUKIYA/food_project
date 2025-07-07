const { MONGODB_URL } = require("./config")
const mongoose = require('mongoose')
const usermodel = require("../models/user_model")

const connectdb = async () => {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("Database is connected successfully.")
    }
    catch (error) {
        if (error.name === 'MongooseServerSelectionError') {
            console.log('Please check your server is start or not.')
        }
        else {
            console.log("Failed to connect database")
        }
    }
}
module.exports = connectdb