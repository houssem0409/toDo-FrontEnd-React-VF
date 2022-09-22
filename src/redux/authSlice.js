import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
export const signupUserAsync = createAsyncThunk(
   
    "users/signupUserAsync",
    async (payload) => {
      const response = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            name: payload.name,
            email : payload.email,
            password : payload.password

        }),
      });
      if (response.ok) {
        
        const user = await response.json(); // why await , response.json() is async function ?
        return { user };
      }
    }
  );
  
  export const signinUserAsync = createAsyncThunk(
    "users/signinUserAsync",
    async (payload) => {
      const response = await fetch("http://localhost:8000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            email : payload.email,
            password : payload.password

        }),
      });
      if (response.ok) {
       
        const user = await response.json(); // why await , response.json() is async function ?
        localStorage.setItem('token' , JSON.stringify( user.token.split(" ")[1]))
        localStorage.setItem('userInfo' , JSON.stringify({id : user.id , name : user.name}))
        
        return { user };
      }
      
    }
  );
 
  
const authSlice = createSlice({
    name: "auth",
    initialState: [],

    extraReducers: {
      [signupUserAsync.fulfilled]: (state, action) => {
        state.push(action.payload.user);
      },
      [signinUserAsync.fulfilled]: (state, action) => {
        state.push(action.payload.user);
      },
     
    },
  });
  
  
  export default authSlice.reducer;