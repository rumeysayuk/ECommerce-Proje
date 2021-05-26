const mongoose=require("mongoose")
const  databaseConnectionHelper=()=>{
    mongoose
        .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(()=>{
            console.log("mongodb bağlantısı başarılı")
        })
        .catch((error)=>{
            console.error(error);
        })
}
module.exports=databaseConnectionHelper;
