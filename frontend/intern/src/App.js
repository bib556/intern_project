import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/common/Navbar"
import Login from "./Components/Login";
import Home from "./Components/Home";
import Employee from "./Components/Employee";
import Create from "./Components/Create";
import Edit from "./Components/Edit"
// import Search from "./Components/Search"
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <Employee/>*/}
    {/* <Create/> */}
    {/* <Edit/> */}
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Login/>}/> 
      <Route path = "home" element ={<Home/>}/>
      <Route path = "employee" element = {<Employee/>}/>
      <Route path = "create" element ={<Create/>}/>
      <Route path = "edit" element ={<Edit/>}/>
      {/* <Route path = "search" element ={<Search/>}/> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
