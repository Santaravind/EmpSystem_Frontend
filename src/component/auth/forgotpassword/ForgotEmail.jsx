import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { storeEmail } from '../../../redux/emailSlice';

import { useDispatch } from "react-redux";

function ForgotEmail() {
   const navigate= useNavigate();
   const [error,setError]=useState(null);
   const [email, setEmail] = useState("");
   const dispatch=useDispatch();
  const handleSubmit= async (e)=>{
    e.preventDefault();

    if (!email) {
     toast.success("Please enter your registered email.",{
      position:"top-center"
     });
      return;
    }
    
   try {
    
     const response= await axios.post(`http://localhost:8080/forgotpassword/verifyMail/${email}`);
    
    // console.log(email);
      
     setEmail('');
     dispatch(storeEmail(email));

     if (response.status === 200) {
        toast.success("Email sent for varification !!!")
      navigate("/otp"); 
    }    else {
      setError("Error sending verification email. Please try again.");
    }
   } catch (err) {
    if(err.response.status===403){
      toast.error("Email not register !!!")
      toast.error("Give me valid email !!!")

    }
    setError("Found some error !!!")
    
   }

  }
  return (
   
      <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{backgroundImage:'url("https://images.pexels.com/photos/28905003/pexels-photo-28905003/free-photo-of-giraffes-crossing-rail-tracks-in-african-savanna.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}>
        
      <div className=" bg-pink-400 p-8 rounded-lg shadow-lg w-full  max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your register email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default ForgotEmail
