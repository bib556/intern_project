import express from "express"
import {User,Employee} from "./models/models.js"
const router = express.Router();
router.get("/",(req,res)=>{
    res.send("this is router")
})
// localhost:9000/login --api
router.post("/login",async(req,res)=>{
    const{userName,password}= req.body;
    console.log("this is the requested body",req.body)
    if(!userName || !password){
        return res.send({message:"all fields are required"})

    }
    try{
        const user = await User.findOne({userName:userName});
        if(user){
            if(password === user.password){
                return res.send({message:"login successful"})
            }else{
                return res.send({message:"password didnt match"})
            }

        }else{
            return res.send({message:"user not registered"})
        }

    }catch(error){
        console.error("error during login",error);
        return res.send({message:"Internal server error"})
    }
})
//localhost:9000/create
router.post("/create",async(req,res)=>{
    const{uniqueId,name,email,mobileNo,designation,gender,course,img} = req.body
    console.log(req.body);
    try{
        const existingEmployee = await Employee.findOne({name:name})
        if(existingEmployee){
            return res.status(200).json({"message0":"the employee already exists"})
        }
        let employee = new Employee({uniqueId,name,email,mobileNo,designation,gender,course,img})
        await employee.save();
        return res.status(200).json({"message":"new employee added"})
    }catch(error){
        return res.status(401).json({"message":error})
    }
})
// localhost:9000/pulldata/items
router.get("/pullData/items",async(req,res)=>{
    try{
        let items = await Employee.find();
        res.json(items)
    }catch(error){
        res.status(401).json({"message":error})
    }
})


// localhost:9000/update/id
router.put("/update/:Id",async(req,res)=>{
    try{
        let emp_Id = req.params.Id;
        console.log("emp_name",emp_Id)
        const body  = req.body;
        console.log("this is body",body)
        let existingId = await Employee.findOne({"uniqueId":emp_Id})
        if(!existingId){
            return res.status(401).json({"message":"Id not found"})
        }
        await Employee.findByIdAndUpdate(existingId._id,{$set:{uniqueId:body.uniqueId,name:body.name,email:body.email,mobileNo:body.mobileNo,designation:body.designation,gender:body.gender,course:body.course}})
        return res.status(200).json({"message":"existing employee added successfully"})

    }catch(error){
        return res.status(401).json({"error message":error})
    }
})

// localhost:9000/delete/:id
router.delete("/delete/:Id",async(req,res)=>{
    try{
        const emp_Id = req.params.Id
        console.log(emp_Id)
        let existingEmployee = await Employee.findOne({"uniqueId":emp_Id})
        console.log(existingEmployee)
        if(!existingEmployee){
            return res.status(200).json({"message":"id not found"})
        }
        await Employee.findByIdAndDelete(existingEmployee._id)
        return res.status(200).json({"message":"deleted item successfully"})
    }catch(error){
        return res.status(201).json({"error":error})
    }
})

router.get("/search/:name",async(req,res)=>{
   
    try{
        const emp_name = req.params.name;
        let totalSearch = await Employee.findOne({"name":emp_name})
        if(!totalSearch){
            res.status(200).json({"message":" searched item not found "})
        }
        res.json(totalSearch)

    }catch(error){
        res.status(201).json({"error":error})
    }
})
export default router;