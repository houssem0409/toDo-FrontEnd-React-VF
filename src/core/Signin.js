import Navbar from "../components/Navbar"
import SigninComponent from "../components/SigninComponent"

import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const Signin = () => {
    const navigate = useNavigate()

   
    return (
        <div className="App">
        <Navbar/>
        <div className="signin-form">
            <h2>Signin Page </h2>
            <SigninComponent/>
        </div>
        </div>
    )
}
export default Signin