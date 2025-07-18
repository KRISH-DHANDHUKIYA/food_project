// require('dotenv').config()

// module.exports =
// {
//     MONGODB_URL: process.env.MONGODB_URL,
//     JWT_SECRET: process.env.JWT_SECRET
// }

require('dotenv').config(); 

module.exports = {
    MONGODB_URL: process.env.MONGODB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
};

// Initialize Stripe client wherever you need it, for example:

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
