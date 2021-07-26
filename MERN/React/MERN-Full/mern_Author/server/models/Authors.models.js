const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required : [true, "First Name is required."]
    },
    lastName:{
        type: String,
        required : [true, "Last Name is required."]
    }
})

module.exports = mongoose.model("Author", AuthorSchema);