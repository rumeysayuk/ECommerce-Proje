const express = require("express")
const mongoose=require("mongoose")
const app = express();
const dotenv = require("dotenv")
const databaseConncetionHelper = require("./helpers/database/databaseConnectionHelper")
const routers = require("./routers")

dotenv.config({
    path: "./config/environment/config.env",
})



app.use("/api",routers);
databaseConncetionHelper(app);


