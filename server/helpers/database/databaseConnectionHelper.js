const mongoose = require("mongoose")
const databaseConnectionHelper = (app) => {
    const PORT = process.env.PORT
    try {
        mongoose
            .connect(process.env.MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(() => {
            app.listen(PORT, () => {
                console.log(`Server running on port: ${PORT}`)})
        })
    } catch (e) {
        console.log(e.message);
    }

}
module.exports = databaseConnectionHelper;
