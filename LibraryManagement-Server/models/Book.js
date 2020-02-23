const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Books", BookSchema)