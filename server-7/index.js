const express = require("express");
const app = express();
require("dotenv").config();
const userRoute = require("./routes/userRoutes");
const connectDB = require("./config/database");
const cors = require("cors");

const PORT = process.env.PORT || 4000;


// middleware
app.use(express.json());



// cors
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)

// mount
app.use("/api/v1/user", userRoute);

// DB Connection
connectDB();

app.listen(PORT, () => {
    console.log(`App is running at PORT no ${PORT}`);
})

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: 'Your server is up and running....'
    });
});