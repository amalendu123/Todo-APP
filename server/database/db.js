import mongoose, { disconnect } from "mongoose";

export const connection=()=>{
    const mongodb_uri="mongodb+srv://amalendu:bangalore12@cluster1.s0yskih.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connect(mongodb_uri)
    mongoose.connection.on("connected",()=>{
        console.log("connected succesfully")
    })
    mongoose.connection.on('disconnect',()=>{
        console.log("database is disconnected")
    })
    mongoose.connection.on('error',()=>{
        console.log("not connected")
    })
}

export default connection;