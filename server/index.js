import  express from "express";
import connection from "./database/db.js";
const app=express();
const port =8000;

connection();
app.listen(port,()=>console.log("ypur server is running succesfully "))