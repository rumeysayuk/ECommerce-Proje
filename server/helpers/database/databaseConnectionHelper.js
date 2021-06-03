const mongoose = require("mongoose");

const databaseConnectionHelper = (app) => {
    const PORT = process.env.PORT;
    try {
        mongoose
            .connect(process.env.MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => app.listen(PORT, () =>
                console.log(`Server Running on Port : ${PORT}`)))
    } catch (e) {
        console.log(e);
    }
}

module.exports = databaseConnectionHelper;
