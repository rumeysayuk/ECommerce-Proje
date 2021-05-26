const Product= require("../models/Product.js")
const getAllProducts=async (req,res)=>{
    const products=await  Product.find();
    return res.status(200).json({
        success:true,
        data:products,
    })
}
const addProduct=async ()=>{
   await Product.create({
        name:"keyboard",
        unitPrice:123,
        description:"ışıklı klavye",
        quantiyPerUnit:"2"
    });
}
module.exports={
    getAllProducts,
    addProduct,
}
