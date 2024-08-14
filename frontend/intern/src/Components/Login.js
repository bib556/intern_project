import React from "react"
import {useNavigate} from "react-router-dom"
import logo from "./common/logointern.jpg"
export default function Login(){
    const navigate = useNavigate();
    function buttonHandle(){
        navigate("/Home");
    }
    return(
        <>
        <div className="container mx-0">
        <a className="navbar-brand mx-0" href="/">
          <img src={logo} alt="Bootstrap" width="50" height="34"/>
        </a>
      </div>
 <form style={{height:"50vh" ,width:"50vw",justifyItems:"center" ,margin:"auto",marginTop:"5vh"}} >
  <div className="row mb-5 ">
    <label for="inputUserName" className="col-sm-2 col-form-label">UserName</label>
    <div className="col-sm-10">
      <input type="Text" className="form-control w-75" placeholder= "enter username" id="inputUserName"/>
    </div>

  </div>
  <div className="row mb-5 ">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control w-75" placeholder = "enter your password" id="inputPassword3"/>
    </div>

  </div>
  <button type="submit" className=" btn btn-primary"  onClick ={buttonHandle}style={{width:"20vw",marginTop:"10vh",marginLeft:"10vw"}}>Login</button>
</form>

        </>
    )
}