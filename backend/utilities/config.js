require('dotenv').config();

module.exports = {
    MONGODB_URL: process.env.MONGODB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,

    SENDER_EMAIL: process.env.SENDER_EMAIL,
    PASSWORD: process.env.PASSWORD
};

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
