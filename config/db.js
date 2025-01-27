const mongoose = require("mongoose")

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://sahil1si18ec083:Msdhoni7781@cluster-dev-tinder.zdhhj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-dev-tinder")
}



module.exports=connectDB;