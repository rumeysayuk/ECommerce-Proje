const mongoose = require('mongoose');
const {REQUIRED_ERROR} = require("../constants/messages/globalMessages");
const {MIN_LENGTH_ERROR, MIN_PRICE_ERROR, MIN_QUANTITY_PER_UNIT_ERROR} = "../constants/messages/productMessages";

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    // categoryId: {
    //    type: mongoose.Schema.ObjectId,
    //    required: [true, REQUIRED_ERROR(this)],
    //    ref: "Categories"
    // },

    // user: {
    //    type: mongoose.Schema.ObjectId,
    //    required: [true, REQUIRED_ERROR(this)],
    //    ref: "Users"
    // },

    name: {
        type: String,
        required: [true, REQUIRED_ERROR(this)],
        minlength: [3, MIN_LENGTH_ERROR]
    },

    unitPrice : {
        type: Number,
        required: [true, REQUIRED_ERROR(this)],
        min: [0, MIN_PRICE_ERROR],
    },

    description : {
        type: String,
        required: [true, REQUIRED_ERROR(this)],
        minlength: [10, MIN_LENGTH_ERROR]
    },

    quantityPerUnit: {
        type: String,
        required: [true, REQUIRED_ERROR(this)],
        minlength: [1, MIN_QUANTITY_PER_UNIT_ERROR],
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Products", ProductSchema);
