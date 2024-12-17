import express from "express";
const app = express();

app.get('/', (req, res)=>{
    res.send("Server is ready")
});

app.get('/login', (req, res)=>{
    res.send('Login')
})

app.listen(5000, ()=>{
    console.log("Server Started At Port 5000");
})