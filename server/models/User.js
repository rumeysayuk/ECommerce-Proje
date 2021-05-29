const mongoose = require('mongoose')
import {EMAIL_UNIQUE_ERROR, INVALID_EMAIL, REQUIRED_ERROR} from "../constants/messages/globalMessages";
import {PASSWORD_MIN_LENGTH_ERROR} from "../constants/messages/authMessages";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, REQUIRED_ERROR("İsim")]
    },
    lastName: {
        type: String,
        required: [true, REQUIRED_ERROR("Soyisim")]

    },
    email: {
        type: String,
        required: [true, REQUIRED_ERROR("Email")],
        unique: [true, EMAIL_UNIQUE_ERROR],
        match: [/^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/, INVALID_EMAIL],
    },
    password: {
        type: String,
        minlength: [6, PASSWORD_MIN_LENGTH_ERROR],
        required: [true, REQUIRED_ERROR("Şifre")],
        select: false,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    blocked: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model("Users", UserSchema);
