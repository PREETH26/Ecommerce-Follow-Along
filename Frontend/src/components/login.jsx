import React,{useState} from 'react'
import '../App.css'
import styles from "../styles/styles.js";

import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setemail } from "../store/userAction.js";

axios.defaults.withCredentials = true;


function login() {
  const {register,handleSubmit,formState:{errors},reset} = useForm();
  const [error, setError] = useState(""); 
  const [submit,setSubmit] = useState(false);
  const dispatch = useDispatch();

 
  
  const doneSubmit = async(data)=>{
    console.log(data)
    setSubmit(true);
    reset()
    
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v2/user/login",
        { email: email.toLowerCase(), password }, // Convert email to lowercase
        { headers: { "Content-Type": "application/json" } }
        
      );
      dispatch(setemail(email));

      console.log("Login Success:", response.data);
      localStorage.setItem("token", response.data.token); // Save token if needed
      alert("Login successful!");
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Invalid email or password");
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-200">
      
    <div className="max-w-lg  m-5 p-4 text-center bg-white rounded-lg shadow-2xl shadow-black  h-0.5 w-screen">
    <h1 className='text-blue-500 text-2xl pb-3 font-bold' >LOGIN</h1>
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit(doneSubmit)}>
        <input placeholder="Email" className='p-3 border-2 rounded-md' {...register("email",{required:"Email is required"})}/>
        {errors.email && <span className='flex justify-start pl-3 text-red-500'>{errors.email.message}</span>}

        <input placeholder="Password" type="password" className='p-3 border-2 rounded-md' {...register("password",{required:"Password is required"})}/>
        {errors.password && <span className='flex justify-start pl-3 text-red-500'>{errors.password.message}</span>}
        
        <div className='flex gap-2 pl-1'>
        <input type='checkbox' className='ml-2'/>
        <p className='text-gray-700'>Remember me</p>
        </div>

        
        <div className='flex justify-end'>
        <a href='#' className='p-1 text-sm  hover:underline text-blue-600'>Forgot password?</a>
        </div>
        <button className='p-2 bg-gradient-to-r from-blue-500 to-indigo-600 h-50 rounded-md hover:bg-blue-600 text-white' type='submit'>LOGIN</button>

      <div className='flex items-center justify-center gap-2'>
      <div className={`${styles.noramlFlex}`}>
              <h4>Not have any account?</h4>
            </div>
            
      <Link to="/signup" className="text-blue-600 hover:underline text-sm">
        Sign up
      </Link>
      </div>
      </form>
    </div>
  </div>
    
  )
}

export default login
