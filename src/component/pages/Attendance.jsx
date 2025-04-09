import axios from 'axios';
import React from 'react'
import { useState } from "react";
import toast from 'react-hot-toast';

function Attendance() {
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
     
    },
  };


  
    const startAttendance = async () => {
      try {
      const res = await axios.post('http://localhost:8080/api/attendance/start',null,config);
      setMessage(res.data);
      toast.success("Your attendance is started !!!")
    } catch (error) {
      toast.error("Employee not found !!!")
      toast.error("You are not register as employee!!! ")
    }
    };


  const stopAttendance = async () => {
    try{
    const res = await axios.put("http://localhost:8080/api/attendance/stop",null,config);
    setMessage(res.data);
  }
  catch(error){
    toast.error("Your are not start attendance !!!")
    toast.success("First start the attendance!!!")

  }
  };

  return (
   <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
   style={{ backgroundImage: `url('https://images.pexels.com/photos/25747107/pexels-photo-25747107/free-photo-of-mountain-valley-covered-with-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}>  
     <div className="bg-rose-500 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full space-y-6 text-center shadow-rose-500">
    
        <h2 className="text-2xl font-bold text-black-600">Attendance Portal</h2>

        <div className="flex justify-center gap-6">
          <button
            onClick={startAttendance}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg transition"
          >
            Start
          </button>
          <button
            onClick={stopAttendance}
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg transition"
          >
            Stop
          </button>
        </div>

        {message && (
          <p className="text-gray-800 text-xl bg-white p-3 rounded-lg shadow-md hover:bg-purple-500">{message}</p>
        )}
      </div>
    </div>
   
  );
}
export default Attendance;