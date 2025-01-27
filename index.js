console.log("hello")

const express = require("express");
const connectDB = require("./config/db");

const app  = express();
const authRouter= require("./router/auth.route")

connectDB().then(()=>{
    console.log("connecting to DB")
    app.listen(8080,()=>{
        console.log("listening  to server")
    })


}).catch((err)=>{
    console.log(`Error Message is ${err.message}`)
    console.log("Unable to connect to DB")
})


app.use("/auth", authRouter);

