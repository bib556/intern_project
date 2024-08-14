import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName:String,
    password:String
})
const employeeSchema = new mongoose.Schema({
    uniqueId:Number,
    name:String,
    email:String,
    mobileNo:Number,
    designation:String,
    gender:String,
    course:String,
    img:String,
    date: {
        type: Date,
        default: Date.now // Set default value to current date
    }
})
const Employee = mongoose.model("Employee",employeeSchema)
const User = mongoose.model("User",userSchema)
export   {User,Employee};