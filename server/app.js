const express = require("express");
const dotenv = require("dotenv");
const databaseConnectionHelper = require("./helpers/database/databaseConnectionHelper");
const routers = require("./routes")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();

dotenv.config({
   path: "./Config/env/config.env",
})

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(cors())

app.use("/api", routers)

databaseConnectionHelper(app);
