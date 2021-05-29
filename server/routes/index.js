const express=require("express")
const productRoutes=require("./productRoutes")
const router= express.Router();
const userRoutes=require("userRoutes")
router.use("/products",productRoutes);
router.use("/users",userRoutes);

module.exports=router;
