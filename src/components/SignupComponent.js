import React from "react";
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import {
  FormControl,
  TextField,
  Button,
  Alert
} from "@mui/material";
import { useDispatch } from "react-redux";
import { signupUserAsync } from "../redux/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

     
export default function SignupComponent() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        register,
        formState: { errors },
        formState: { isSubmitting },
        formState: { isValid },
        formState: { isSubmitSuccessful },
        handleSubmit,
      } = useForm({
        mode: 'onTouched',
      })
      const onSubmit = async (data) => {
      
          await sleep(2000)
          console.log(data)
          try {
            dispatch(signupUserAsync(data))
            console.log(data)
    
            return data
          } catch (error) {
            console.error(error)
          }
        
        }
     
      
  return (
    <div >
        <form onSubmit={handleSubmit(onSubmit)}>
        {isSubmitSuccessful && (
            <Alert severity="success">User Registered successfuly!</Alert>
      )}
      <FormControl >
        <TextField
         {...register('name', { required: 'This is required.' })}
          id="outlined-basic"
          type="text"
          label="name"
          variant="outlined"
        />
         <ErrorMessage
          errors={errors}
          name='username'
          render={({ message }) => <p>{message}</p>}
        />
        <TextField
         {...register('email', { required: 'This is required.' })}
          id="filled-basic"
          type="text"
          label="email"
          variant="filled"
        />
        <TextField
          {...register('password', { required: 'This is required.' })}
        id="standard-basic" type="password" label="password" variant="standard" />
        <Button  disabled={isSubmitting || !isValid}
            type='submit' onClick={() => handleSubmit(onSubmit)} >Done</Button>
      </FormControl>
      </form>
    </div>
  );
}
