const mongoose= require("mongoose");
import {REQUIRED_ERROR} from "../constants/messages/globalMessages";
import {MINLENGTH_ERROR} from "../constants/messages/categoryMessages";
const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    products: [{
        type: mongoose.Schema.ObjectId,
        ref:"Products"
    }],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "Users",
        required: [true, REQUIRED_ERROR("Kullanıcı")]
    },
    name: {
        type:String,
        required: [true, REQUIRED_ERROR("İsim")],
        minlength:[3,MINLENGTH_ERROR]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Categories", CategorySchema);
