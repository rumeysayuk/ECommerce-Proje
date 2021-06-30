const mongoose = require("mongoose");
const {REQUIRED_ERROR} = require("../constants/messages/globalMessages");
const {MIN_LENGTH_ERROR} = require("../constants/messages/categoryMessages");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
   products: [
      {
         type: mongoose.Schema.ObjectId,
         ref: "Products"
      }
   ],

   user: {
      type: mongoose.Schema.ObjectId,
      required: [true, REQUIRED_ERROR(this)],
      ref: "Users"
   },

   name: {
      type: String,
      required: [true, REQUIRED_ERROR(this)],
      minlength: [3, MIN_LENGTH_ERROR]
   },

   createdAt: {
      type: Date,
      default: Date.now
   },
})

module.exports = mongoose.model("Categories", CategorySchema);
