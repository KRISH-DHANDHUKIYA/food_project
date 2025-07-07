const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    },
    cartData:
    {
        type: Object,
        default: {}
    },
}, { timestamps: true }, { minimize: false })

module.exports = mongoose.model('user', userSchema)