import React from "react"
import logo from "./logointern.jpg"
export default function Navbar(){
    return (
        <>
  <div className="container mx-0">
    <a className="navbar-brand mx-0" href="/">
      <img src={logo} alt="Bootstrap" width="50" height="34"/>
    </a>
  </div>
       <ul className="nav nav-pills nav-justified" style = {{fontSize:"24px",backgroundColor:"gray"}}>
  <li className="nav-item">
    <a className="nav-link "  style = {{color:"white"}}  href="/Home">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" style = {{color:"white"}}  href="/Employee">Employee List</a>
  </li>
  <li className="nav-item">
    <a className="nav-link"  style = {{color:"white"}} href="/Home">Hukum Gupta-</a>
  </li>
  <li className="nav-item">
    <a className="nav-link "  style = {{color:"white"}} href= "/" >Log-Out</a>
  </li>
</ul>
      </>
    )

}