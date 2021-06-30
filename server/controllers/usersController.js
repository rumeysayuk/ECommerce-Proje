const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CustomError = require("../CustomError");
const mongoose = require("mongoose");

const secret = "test";

const signIn = async (req, res) => {
   const {email, password} = req.body;
   const oldUser = await User.findOne({email}).select("+password");
   if (!oldUser) return res.status(404).json({message: "Böyle Bir Kullanıcı Bulunamadı"})

   const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
   if (!isPasswordCorrect) return res.status(400).json({message: "Hatalı Şifre"});
   const token = jwt.sign({email: oldUser.email, id: oldUser._id}, secret, {expiresIn: "1h"})

   return res.status(200).json({result: oldUser, token})
}

const signUp = async (req, res, next) => {
   const {firstName, lastName, email, password, confirmPassword} = req.body;
   if (password !== confirmPassword) return res.status(404).json({message: "Şifreler birbirinden farklı olamaz"})

   const oldUser = await User.findOne({email})
   if (oldUser) return res.status(400).json({message: "Bu Email'e Kayıtlı Kullanıcı Mevcut"})

   const hashedPassword = await bcrypt.hash(password, 12);
   const result = await User.create({email, password: hashedPassword, firstName, lastName});
   const token = jwt.sign({email: result.email, id: result._id}, secret, {expiresIn: "1h"})
   return res.status(201).json({result, token})
}

const addToCart = async (req, res) => {
   _id = "60b6a0251a0ffb08d0d9a159";
   const cartItem = req.body;

   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`Bu Id'ye uygun kullanıcı bulunamadı.. ${_id}`);
   const user = await User.findOne({ _id })
   if (!user) return res.status(404).send(`Bu Id'ye uygun kullanıcı bulunamadı.. ${_id}`);

   await user.addToCart(cartItem)
      .then(response => {
         user.populate("cart.items.productId")
            .execPopulate()
            .then(response => {
               return res.status(200).json({message: "Sepete Ekleme Başarılı", cart: response.cart})
            })
      });
}

module.exports = {
   signIn,
   signUp,
   addToCart
}
