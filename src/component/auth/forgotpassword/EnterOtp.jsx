import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function EnterOtp() {
  
    const navigate= useNavigate();
    const email= useSelector((state)=>state.email.email)
     const [otp,setOtp]=  useState("")

    console.log(email);

    const handleSubmit= async (e)=>{
        e.preventDefault();
    
        try {
          const response= await axios.post(`http://localhost:8080/forgotpassword/verifyOtp/${otp}/${email}`);
      
           if (response.status===200) {
             setTimeout(()=>{
              navigate("/reset")
            },5000)
            toast.success("Otp is varifyed !!!")
           }else{
            toast.error("Enter valid otp !!!")
           }
        } catch (error) {
          if (error.response.status===403) {
            toast.error("Verification not completed !!!  ")            
          }    
          
          if(error.response.status===417)toast.error("Password Expectation Failed !!!")
        }    
      }

      const handlclick=(e)=>{
              e.preventDefault();
              navigate("/foremail")
      }
      return (
       
          <div className="flex justify-center items-center h-screen ">
            
          <div className=" bg-pink-400 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 text-center text-2xl bg-white p-2">
                 {email}
              </div>
              <div className="mb-4">
            <input
              type="password"
              placeholder="Enter otp "
               value={otp}
               onChange={(e)=>{setOtp(e.target.value)}}
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
            <button onClick={handlclick}
            className=' mt-2 text-0.5xl hover:text-blue-500'
            >Back</button>
             </div>
            
        </div>
  )
}

export default EnterOtp
