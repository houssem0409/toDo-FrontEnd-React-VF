import React, { useEffect } from "react";
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useNavigate } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import {
  FormControl,
  TextField,
  Button,
  Alert
} from "@mui/material";
import { useDispatch } from "react-redux";
import { signinUserAsync } from "../redux/authSlice";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default function SigninComponent() {

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
            dispatch(signinUserAsync(data)).then((user) => {
            })
            console.log(data)
            
             navigate('/home')
            return data
          } catch (error) {
            console.error(error)
          }
         
        }
       
      
  return (
    <div >
    <form onSubmit={handleSubmit(onSubmit)}>
    {isSubmitSuccessful && (
        <Alert severity="success">User Signed in  successfuly!</Alert>
  )}
  <FormControl >
   
    
    <TextField
     {...register('email', { required: 'This is required.' })}
      id="filled-basic"
      type="text"
      label="email"
      variant="filled"
    />
     <ErrorMessage
      errors={errors}
      name='username'
      render={({ message }) => <p>{message}</p>}
    />
    <TextField
      {...register('password', { required: 'This is required.' })}
    id="standard-basic" type="password" label="password" variant="standard" />
     <ErrorMessage
      errors={errors}
      name='username'
      render={({ message }) => <p>{message}</p>}
    />
    <Button  disabled={isSubmitting || !isValid}
        type='submit' onClick={() => handleSubmit(onSubmit)} >Done</Button>
  </FormControl>
  </form>
</div>
  );
}
