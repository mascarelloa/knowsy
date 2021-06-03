const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    dob: Date
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', userSchema);