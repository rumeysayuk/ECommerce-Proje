const express = require("express")

const app = express();
const dotenv = require("dotenv")
const databaseConncetionHelper = require("./helpers/database/databaseConnectionHelper")
const routers = require("./routers")

dotenv.config({
    path: "./config/environment/config.env",
})
const port = process.env.PORT
databaseConncetionHelper();

app.use("/api",routers);
app.listen(port, () => {
    console.log(`App started on ${port} : ${process.env.NODE_ENV}`)
})
