const Product = require("../models/Product.js");

const getAllProducts = async (req, res) => {
    const products = await Product.find();
    return res.status(200).json({
        success: true,
        products: products,
    })
}

const addProduct = async () => {
    await Product.create({
        name: "Keyboard",
        unitPrice: 230,
        description: "Güzel Bir Klavye",
        quantityPerUnit: "1",
    });
}

module.exports = {
    getAllProducts,
    addProduct,
}
