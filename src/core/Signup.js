import Navbar from "../components/Navbar";
import SignupComponent from "../components/SignupComponent";

import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const Signup = () => {
    const navigate = useNavigate()

    useEffect(() => {
       
     }, [])
  return (
    <div className="App">
        <Navbar />
      <div className="signup-form">
        <h2>Signup page </h2>
        <SignupComponent />
      </div>
    </div>
  );
};
export default Signup;
