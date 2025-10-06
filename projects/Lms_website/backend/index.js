import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/connectDB.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoute.js';
dotenv.config();

const port = process.env.PORT;


const app = express();

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth",authRouter)


connectDb()

app.get("/",(req,res)=>{

    res.send("hello from server")

});


app.listen(port,()=>{

    
    console.log("server strated")
});

