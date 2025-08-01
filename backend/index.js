// const express = require("express");
// const cors = require("cors");
// const conn = require("./utilities/connectdb")
// const userrouter = require("./routes/use_routes")
// const connectCloudinary = require("./utilities/cloudinary");
// const productRouter = require("./routes/productRouter");
// const cartRouter = require("./routes/cartRouter");
// const orderRouter = require("./routes/orderRoute");

// const app = express();
// app.use(cors());
// app.use(express.json());
// connectCloudinary()

// app.use('/api', userrouter)
// app.use('/api/product', productRouter)
// app.use('/api/cart', cartRouter)
// app.use('/api/order', orderRouter)



// const startserver = async () => {
//     try {
//         await conn()
//         app.listen(1000, () => {
//             console.log('Server is starting on the port 1000')
//         })
//     }
//     catch (error) {
//         console.log("failed to start server.", error);
//     }
// }

// startserver()

const express = require("express");
const cors = require("cors");
const conn = require("./utilities/connectdb");
const userrouter = require("./routes/use_routes");
const connectCloudinary = require("./utilities/cloudinary");
const productRouter = require("./routes/productRouter");
const cartRouter = require("./routes/cartRouter");
const orderRouter = require("./routes/orderRoute");

const app = express();
app.use(cors());
app.use(express.json());

connectCloudinary();
conn();

app.use("/api", userrouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Backend is working");
});

if (process.env.NODE_ENV !== "production") {
  const PORT = 1000;
  app.listen(PORT, () => {
    console.log(`Local server running on port ${PORT}`);
  });
}
else
{
    console.log("failed to start server");
}

module.exports = app;
