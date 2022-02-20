const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "Username already exists"]
    },
    password: {
        type: String,
        required: true,
        min: 4
    },
    sensitiveData: {
        type: String,
        required: false,
        default: "i am a dirty pig"
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    }
})

module.exports = mongoose.model("User", userSchema);