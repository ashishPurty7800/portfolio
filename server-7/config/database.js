const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectDB;