import express from "express";
import dotenv from "dotenv"
import morgan from "morgan"
// import bcrypt from "bcrypt"
import mongoose from "mongoose"
import router from "./router.js"
import cors from "cors"
const app = express();

dotenv.config(({path:"./dev.env"}))
let port = process.env.PORT 
let dburl = process.env.DBURL
console.log(port)
console.log(dburl)
app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",router)
app.get("/",(req,res)=>{
    res.send("this is server")
})
const connectDb = async()=>{
    try{
        await mongoose.connect(dburl)
        console.log("database connected successfully")
    }catch(error){
        console.error("error connecting database",error)
        process.exit(1)
    }
    
}
connectDb();

app.listen(port,(err)=>{
    if(err){
        console.error("this is error in connecting server",err)
    }else{
        console.log(`server is connected at port ${port}`)
    }
})