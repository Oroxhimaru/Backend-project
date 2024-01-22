// require('dotenv').config({path: './env'})  //it is fine totally
import dotenv from "dotenv" //for using this go to package and add experimental -r dotenv/config --experimental-json-modules
import connectDB from "./db/index.js";


dotenv.config({
    path: './.env'  
})

connectDB()









/*
first approach of connecting database
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express"
const app = express()
//using iife
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/