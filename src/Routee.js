import React from "react";
import { BrowserRouter,  Routes, Route} from "react-router-dom";
import Signup from "../src/core/Signup";
import Home  from "../src/core/Home";
import Signin from "./core/Signin";


const Routee = () => {
  return (
    <BrowserRouter>

    <Routes>


         <Route path="/home" element={<Home/>} exact  />
         <Route path="/signup" element={<Signup/>}   />
         <Route path="/signin" element={<Signin/>}   />



     </Routes>
     </BrowserRouter>
  );
}

export default Routee;