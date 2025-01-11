import axios from 'axios';
import React, { useEffect, useState } from 'react'

function HumanResources() {
     const token = localStorage.getItem("token"); // Retrieve token from localStorage
      const [users, setUsers] = useState([]); // Store user data
      const [error, setError] = useState(false); // Track API errors
      const [loading, setLoading] = useState(false); // Track loading state
    
      useEffect(() => {
        // Fetch data on component mount
        (async () => {
          try {
            setLoading(true); // Start loading
            setError(false); // Reset error state
    
            // API call to fetch users
            const response = await axios.get(
              "http://localhost:8080/manager/hr",
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
    
            console.log(response.data)

            // Check if data exists and update state
            if (response.data) {
              setUsers(response.data);
            } else {
              setUsers([]);
            }
    
            setLoading(false); // Stop loading
          } catch (error) {
            console.error("Error fetching data:", error);
            setError(true); // Set error state
            setLoading(false); // Stop loading
          }
        })();
      }, []);
    
      // Error State UI
      if (error) {
        return (
          <div className="flex justify-center items-center h-screen bg-indigo-200 ">
      <h1 className="w-1/2 box-content bg-pink-300 p-3 rounded-lg text-lg shadow-lg shadow-rose-400 animate-float">
        You are not Admin Or HR 
      </h1>
    </div>
    
        );
      }
    
      // Loading State 
      if (loading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-blue-500 font-bold text-xl">Loading...</h1>
          </div>
        );
      }
  return (
    <div className="p-5">
      <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl">
        Human Resource 
      </p>

      <div className="grid grid-cols-3 gap-5 mt-5">
        {/* Render user cards */}
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-start p-4 border rounded-lg shadow-sm bg-white"
          >
            {/* Profile Picture */}
            <div>
              <img
                src="https://picsum.photos/seed/2/200/200"
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
            </div>

            {/* User Details */}
            <div className="ml-4">
              <p className="text-sky-500 font-bold text-xs">{user.position || "Position Unavailable"}</p>
              <p className="text-gray-600 font-bold"><b> 
              {user.first_Name  || "No Name"}
              {user.last_Name  || "No Name"}
              </b>
               
              </p>
              <p className="text-black"> Email : {user.emailId || "No Email"}</p>
              <p className="text-black"> Phone Nome : {user.phone_Number || "No Phone"}</p>
              <p className="text-black"> Joining Date :  {user.joining_Date || "No Joinig date"}</p>
              {/* <p className="text-gray-400">{user.department || "No Department"}</p> */}
            </div>

            {/* Status */}
            <div className="ml-auto">
              <p className={`rounded-lg text-sky-500 font-bold bg-sky-100 py-1 px-3 text-sm w-fit h-fit${user.status === "Active" ? "bg-green-100 text-green-500" : " bg-sky-100"}`}>
                {user.status || "Unknown"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default HumanResources
