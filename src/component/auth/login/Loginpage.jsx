import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Loginpage() {
  
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  // Hook for navigation
  const navigate = useNavigate();
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email||!password){
      toast.error("Fill the details  !!!")

    }
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });
     
       const token = response.data.token;
       const role=response.data.role; 
       //It is working it give me name and role
      //  console.log(response.data.name);
      //  console.log(response.data.role);
         
       
        
       if (token) {
       // Save the token in localStorage
       localStorage.setItem("token", token);
       localStorage.setItem("role",role);
      // console.log(token);
          setError("");
      // navigate("/home");
      
       navigate("/home");

      } else {
                         
        setError("Login failed. Please try again.");
        
      }

    } catch (err) {
      toast.error("Invalid credentials !!!")
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      
    <div className=" bg-pink-400 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
        <h2 className='m-0.5'> If you are not register , <Link to="/register" className=' m-0.5 text-blue-500 underline hover:text-blue-800' >Register</Link></h2>
        
      </form>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      { !email||error&& <h2 className='m-0.5'> Forgot Password, <Link to="/foremail" className=' m-0.5 text-blue-500 underline hover:text-blue-800' > Forgot</Link></h2>
        }
       </div>
      
  </div>
  
  )
}

export default Loginpage;

