const express = require("express");
const productRoutes = require("./productRoutes");
const usersRoutes = require("./usersRoutes");

const router = express.Router();

router.use("/products", productRoutes);
router.use("/users", usersRoutes);

module.exports = router;
