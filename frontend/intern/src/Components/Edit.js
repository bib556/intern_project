import React from "react";
import Navbar from "./common/Navbar"
import {useState} from "react"
import axios from "axios"
export default function Edit(){
  const [employee,setEmployee] = useState({
    uniqueId:0,
    name: "",
    email: "",
    mobileNo: 0,
    designation: "",
    gender: "",
    course: "",
    img: 'img'
  })
  // const handleChange=(e)=>{
  //   const{name,value} = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value
  //   })
  //  }
  function handleChange(e){
  const{name,value} = e.target
  setEmployee({
    ...employee,
    [name]:value
  })
  }
  const EditEmployee=async()=>{
    const {uniqueId,name,email,mobileNo,designation,gender,course,img} = employee;
   try{
   let res = await axios.put(`http://localhost:9000/update/${employee.uniqueId}`,employee)
    console.log(res.data.message)
    alert(res.data.message)
   }catch(err){
    console.log(err)
    alert(err)
   }
  }
    return(
        <>
        <Navbar/>
        <form style={{ margin: 'auto', marginLeft: '25vw', width: '80vw',marginTop:"3vw", }}>
        <div className="row mb-3">
          <label htmlFor="uniqueId" className="col-sm-2 col-form-label">UniqueId</label>
          <div className="col-sm-10">
            <input type="Number" className="form-control w-50" id="Name" name ="uniqueId" value ={employee.uniqueId} onChange = {handleChange} />
          </div>
        </div>
        {/* Name Input */}
        <div className="row mb-3">
          <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control w-50" id="Name" name ="name" value ={employee.name} onChange = {handleChange} />
          </div>
        </div>

        {/* Email Input */}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control w-50" id="inputEmail3" name ="email" value ={employee.email} onChange = {handleChange} />
          </div>
        </div>

        {/* Mobile Number Input */}
        <div className="row mb-3">
          <label htmlFor="mobileNumber" className="col-sm-2 col-form-label">Mobile Number</label>
          <div className="col-sm-10">
            <input type="text" className="form-control w-50" id="mobileNumber" name ="mobileNo" value ={employee.mobileNo} onChange = {handleChange} />
          </div>
        </div>

        {/* Dropdown */}
        <div className="row mb-3">
          <label htmlFor="dropdown1" className="col-sm-2 col-form-label">Designation</label>
          <div className="col-sm-10">
          <select className="form-select w-50" id="drowdown1" name = "designation" value = {employee.designation} onChange ={handleChange}>
              <option value="Hr">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
        </div>


        {/* Radio Buttons */}
        <div className="gender me-5">
          <label htmlFor="gender" style={{ marginRight: '10vw', marginBottom: '3vw', marginTop: '1vw' }}>Gender</label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" checked ={employee.gender==="male"} onChange ={handleChange} />
            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" checked ={employee.gender==="female"} onChange ={handleChange} />
            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
          </div>
        </div>
  
        {/* Checkboxes */}
        <div className="course">
          <label htmlFor="course">Course</label>
          <div className="form-check form-check-inline" style={{ marginLeft: '10vw' }}>
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="mca" name ="course" checked= {employee.course==="mca"} onChange ={handleChange} />
            <label className="form-check-label" htmlFor="inlineCheckbox1">MCA</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="bca" name ="course" checked= {employee.course==="bca"} onChange ={handleChange} />
            <label className="form-check-label" htmlFor="inlineCheckbox2">BCA</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="bsc" name ="course" checked= {employee.course==="bsc"} onChange ={handleChange} />
            <label className="form-check-label" htmlFor="inlineCheckbox3">BSc</label>
          </div>
        </div>

        {/* Image Upload */}
        <div className="row mb-3">
          <label htmlFor="nputGroupFile02" className="col-sm-2 col-form-label">image upload</label>
         
          <div className="col-sm-10">
            {/* <input type="text" className="form-control w-50" id="mobileNumber" /> */}
            <input type="file" className="form-control w-50" id="inputGroupFile02" />
          </div>
        </div>
        
       

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary" style={{ marginLeft: '25vw', width: '10vw', marginTop: '4vw' }} onClick = {EditEmployee}>Update</button>
      </form>
       
        </>
    )
}
