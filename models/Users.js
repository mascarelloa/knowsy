const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;