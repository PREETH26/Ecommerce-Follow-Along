import React from 'react'
import '../App.css'

function login() {
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      
    <div className="max-w-lg  p-4 text-center bg-white rounded-lg shadow-lg  h-5/6 w-7/12">
    <h1 className='text-blue-500 text-2xl pb-3 font-bold'>LOGIN</h1>
      <form className="flex flex-col gap-4 ">
        <input placeholder="Email" className='p-3'/>
        <input placeholder="Password" className='p-3'/>
        <div className='flex gap-2 pl-1'>
        <input type='checkbox'/>
        <p className='text-gray-700'>Remember me</p>
        </div>
        
        <div className='flex justify-end'>
        <a href='#' className='p-1 text-sm text-gray-500 hover:underline text-blue-500'>Forgot password?</a>
        </div>
        <button className='p-2 bg-blue-400 h-50 rounded-md hover:bg-blue-600'>LOGIN</button>

      <div className='flex items-center justify-center gap-2'>
        <span className="text-sm text-gray-600">Don't have an account?</span>
      <a href="#" className="text-blue-500 hover:underline text-sm">
        Sign up
      </a>
      </div>
      </form>
    </div>
  </div>
    
  )
}

export default login
