import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signoutUserAsync } from "../redux/authSlice";
import { useEffect , useState } from "react";

const token = localStorage.getItem("token")

const Navbar = () => {
   const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const token = JSON.stringify(localStorage.getItem("token"))

    const [isAuth,setIsAuth] = useState(false)

    const signout = () => {
        if(typeof window !== 'undefined') {
            localStorage.removeItem('token' );
            localStorage.removeItem('userInfo' );
            setIsAuth(false)
        
            return fetch(`http://localhost:8000/api/signout`, {
                method: "GET",
    
            })
            .then(response => {
                console.log('signout' , response)
             

            })
            .catch(err => console.log(err))
        }
     }
  const isAuthenticated = () => {
    if(typeof window == 'undefined') {
        console.log("Iam here 1");
        setIsAuth(false)

        return false
    }
    if(localStorage.getItem('userInfo')){
        console.log("Iam here 2");
        setIsAuth(true)
        return true

    }else {
        console.log("Iam here 3");
        setIsAuth(false)

        return false
    }
}
useEffect(() => {
  
    
    if(isAuthenticated()){
        setIsAuth(true)
    }else{
        setIsAuth(false)
    }

}, [isAuth , setIsAuth])
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to="/home">Home</Link>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hello
            </Typography>
            {isAuth  ?  (
              <Button color="inherit" onClick={() => signout()}>
                <Link >SignOut</Link>
              </Button>
            )  :
         (

              <div>
                <Button color="inherit">
                  <Link to="/signup">Signup</Link>
                </Button>
                <Button color="inherit">
                  <Link to="/signin">Signin</Link>
                </Button>
              </div>
         )
            
            }
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default Navbar;
