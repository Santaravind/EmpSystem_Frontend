import { useRef } from "react";
import Reac from 'react'
import axios from "axios";

function HrDetail() {
    const namef=useRef(null);
    const namel=useRef(null);
    const emailf=useRef(null);
    const phnof=useRef(null);
    const addressf=useRef(null);
    const joindatef=useRef(null);
   // const departmentf=useRef(null);
    const positionf=useRef(null);
    const statusf=useRef(null);
    const DOBf=useRef(null);
  
    const handalsubmit=async (event)=>{
        event.preventDefault();
  
        const formData = {
          first_Name: namef.current.value,      
          last_Name: namel.current.value,       
          emailId: emailf.current.value,        
          phone_Number: parseInt(phnof.current.value, 10), 
          date_of_Birth: DOBf.current.value,    
          address: addressf.current.value,      
          joining_Date: joindatef.current.value, 
          //department: departmentf.current.value, 
          position: positionf.current.value,    
          status: statusf.current.value   
        };
  
        console.log(formData)
  
        if (!formData || Object.keys(formData).length === 0) {
          alert("Form is empty!!")
        }else{
          try {
            await axios.post("http://localhost:8080/api/hr",formData)
             alert("Form Data Submitted:",formData);
          
          } catch (error) {
    
            alert("Error submitting form data:", error);
          }
          
        }
         
     
  
        namef.current.value = "";
        namel.current.value = "";
        emailf.current.value = "";
        phnof.current.value = "";
        addressf.current.value = "";
        joindatef.current.value = "";
       // departmentf.current.value = "";
        positionf.current.value = "";
        statusf.current.value = "";
        DOBf.current.value = "";
    }
  
  
  
  
  
  
    return (
     
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">HR Detail</h2>
    <form action="" onSubmit={handalsubmit} className="space-y-4">
    
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            ref={namef}
            placeholder="First Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            ref={namel}
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
      </div>
  
   
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
        <input
          type="email"
          ref={emailf}
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
        />
      </div>
  
     
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone_number">Phone Number</label>
        <input
          type="number"
          ref={phnof}
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
        />
      </div>
  
     
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="DOB">Date of Birth</label>
        <input
          type="date"
          ref={DOBf}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
        />
      </div>
  
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="address">Address</label>
        <input
          type="text"
          ref={addressf}
          name="address"
          placeholder="House No, Street Name, City, State, Zip Code"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
        />
      </div>
  
     
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="joining-date">Joining Date</label>
        <input
          type="date"
          ref={joindatef}
          name="joining-date"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
        />
      </div>
  
    
      {/* <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="department">Department</label>
        <input
          type="text"
          ref={departmentf}
          name="department"
          placeholder="Department"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
        />
      </div>
   */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="position">Position</label>
        <input
          type="text"
          ref={positionf}
          name="position"
          placeholder="Position"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
        />
      </div>
  
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="status">Status</label>
        <input
          type="text"
          ref={statusf}
          name="status"
          placeholder="Status"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
        />
      </div>
  
     
      <div className="text-center">
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
    )
}

export default HrDetail
