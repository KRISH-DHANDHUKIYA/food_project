const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/use_routes"); // ✅ Import route

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

app.get('/', (req, res) => {
    res.send("success");
});

app.listen(1000, () => {
    console.log('Server is starting on the port 1000');
});
