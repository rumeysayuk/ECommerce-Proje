const express = require("express");
const router = express.Router();
const {signIn, signUp, addToCart} = require("../controllers/usersController");

router.post("/signin", signIn);
router.post("/signup", signUp);
router.post("/addtocart", addToCart);

module.exports = router;
