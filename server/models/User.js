const {EMAIL_UNIQUE_ERROR, PLEASE_PROVIDE_EMAIL, REQUIRED_ERROR} = require("../constants/messages/globalMessages");
const {PASSWORD_MIN_LENGTH_ERROR} = require("../constants/messages/authMessages");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   firstName: {
      type: String,
      required: [true, REQUIRED_ERROR(this)],
   },

   lastName: {
      type: String,
      required: [true, REQUIRED_ERROR(this)],
   },

   email: {
      type: String,
      required: [true, REQUIRED_ERROR(this)],
      unique: [true, EMAIL_UNIQUE_ERROR],
      match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, PLEASE_PROVIDE_EMAIL],
   },

   password: {
      type: String,
      minlength: [6, PASSWORD_MIN_LENGTH_ERROR],
      required: [true, REQUIRED_ERROR(this)],
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

   cart: {
      items: [
         {
            productId: {
               type: mongoose.Schema.Types.ObjectId,
               ref: "Products",
               required: true,
            },
            quantity: {
               type: Number,
               required: true
            }
         }
      ]
   },

   createdAt: {
      type: Date,
      default: Date.now
   },
})

UserSchema.methods.addToCart = function (cartItem) {
   const index = this.cart.items.findIndex(ci=>{
      return ci.productId.toString() === cartItem._id.toString();
   })
   const updatedCartItems = [...this.cart.items]
   let itemQuantity = 1;

   if(index >= 0){
      itemQuantity = this.cart.items[index].quantity + 1;
      updatedCartItems[index].quantity = itemQuantity;
   }else{
      updatedCartItems.push({
         productId: cartItem._id,
         quantity: itemQuantity,
      })
   }
   this.cart = {
      items: updatedCartItems,
   }
   return this.save();
}




module.exports = mongoose.model("Users", UserSchema);

















