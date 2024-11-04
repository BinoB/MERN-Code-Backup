import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();


const app = express()
app.use(express.json());



//Route Middleware

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}).catch(error => console.log(error)) 