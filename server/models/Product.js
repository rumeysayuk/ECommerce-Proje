const mongoose= require("mongoose");
const {MINLENGTH_ERROR, MIN_PRICE_ERROR, MIN_QUANTITY_PER_UNIT_ERROR} = "../constants/messages/productMessages";

const {REQUIRED_ERROR} =require("../constants/messages/globalMessages") ;

const Schema = mongoose.Schema;
const ProductSchema = new Schema({

    // categoryId: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Categories",
    //     required: [true, REQUIRED_ERROR(this)]
    // },
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Users",
    //     required: [true, REQUIRED_ERROR(this)]
    // },
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        minlength: [10, MINLENGTH_ERROR],
        required: [true, REQUIRED_ERROR("Açıklama")]
    },
    quantiyPerUnit: {
        type: String,
        required: [true, REQUIRED_ERROR("Birim adedi")],
        min: [1, MIN_QUANTITY_PER_UNIT_ERROR]
    },

    name: {
        type: String,
        minlength: [3, MINLENGTH_ERROR],
        required: [true, REQUIRED_ERROR("Ürün ismi")]
    },
    unitPrice: {
        type: Number,
        required: [true, REQUIRED_ERROR("Ürün fiyatı")],
        min: [0, MIN_PRICE_ERROR]
    }

})

module.exports = mongoose.model("Products", ProductSchema);
