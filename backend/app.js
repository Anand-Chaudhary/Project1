import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
const app = express()

dotenv.config()

app.get('/', (req, res)=>{
    res.send("Working");
})

console.log(process.env.MONGO_URI);

app.get('/products', (req, res)=>{
    res.send("Products page")
})

app.listen(3000, ()=>{
    connectDB();
})


//1HVgmV8msqPOn4ft