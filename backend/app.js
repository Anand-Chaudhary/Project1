import dotenv, { config } from "dotenv"
dotenv.config()
import express, { urlencoded } from "express"
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res)=>{
    res.send('Hello World!!');
})

export default app;