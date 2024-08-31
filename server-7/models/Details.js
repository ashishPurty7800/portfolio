const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Details", detailsSchema);