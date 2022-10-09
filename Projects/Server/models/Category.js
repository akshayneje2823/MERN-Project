const mongoose = require('mongoose');

const CategoryScema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        }
    },
    { timestamps: true }
)
module.exports = mongoose.model("Category", CategoryScema)