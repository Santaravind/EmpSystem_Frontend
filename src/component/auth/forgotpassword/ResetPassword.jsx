import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ResetPassword() {

    const navigate= useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/")             
    
      }


      return (
       
          <div className="flex justify-center items-center h-screen ">
            
          <div className=" bg-pink-400 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your register email"
                  
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
            <input
              type="number"
              placeholder="New Password "
              
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type='number'
              placeholder="Re-enter password "
              
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit
              </button>
             
            </form>
           
             </div>
            
        </div>
  )
}

export default ResetPassword
