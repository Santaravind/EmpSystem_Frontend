

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import FindProfile from "./FindProfile";

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageDataMap, setImageDataMap] = useState({}); // Map empId to imageData

  const auth = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // Fetch all employees on component mount
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(`http://localhost:8080/api/get-all-employees`, auth);
        setUsers(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-blue-500 font-bold text-4xl">Something went wrong...</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-blue-500 font-bold text-4xl">Loading...</h1>
      </div>
    );
  }

  // Handle image data for a specific empId
  const handleImageData = (empId, data) => {
    setImageDataMap((prev) => ({ ...prev, [empId]: data })); 
  };

  // Update button handler
  const handleUpdateClick = (id) => {
    navigate(`/employee/update/${id}`);
  };

  // Delete button handler
  const handleDelete = async (id) => {
    //console.log(id);
    //it full working but comment for not delete any one data in davelopment phase 

  //   try {
  //     await axios.delete(`http://localhost:8080/api/delete-employees/${id}`, auth);
  //     alert("Deleted Successfully!");
  //     navigate('/home');
  //     window.location.reload();
  //   } catch (error) {
  //     alert("Not deleted!", error);
  //   }
   };

  return (
    <div>
      <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl">
        Company Family
      </p>

      {/* Employee Details */}
      <div className="grid grid-cols-3 gap-5 p-5">
        {users.map((user) => (
          <div key={user.employeeID} className="flex items-start p-4 border rounded-lg shadow-sm bg-white">
            {/* Profile Picture */}
            <div>
              {/* Fetch profile image for each employee */}
              <FindProfile empId={user.employeeID} onImageData={(data) => handleImageData(user.employeeID, data)} />

              {imageDataMap[user.employeeID] ? (
                <img
                  src={imageDataMap[user.employeeID]}
                  alt="Profile"
                  className="max-w-16 max-h-16 rounded-full"
                />
              ) : (
                <img
                  src={logo} // Fallback image
                  alt="No profile"
                  className="max-w-16 max-h-16 rounded-full"
                />
              )}
            </div>

            {/* Employee Details */}
            <div className="ml-4">
              <p className="text-sky-500 font-bold text-xs">{user.position}</p>
              <p className="text-gray-600 font-bold">
                {user.first_Name} {user.last_Name}
              </p>
              <p className="text-gray-400">{user.joining_Date}</p>
              <p className="text-gray-400">{user.emailId}</p>
              <p className="text-gray-400">{user.phone_Number}</p>
              <p className="text-gray-400">{user.department}</p>
              <p className="text-gray-400">{user.date_of_Birth}</p>

              <button
                className="p-2 border m-2 border-blue-600 text-white rounded-full bg-blue-600 hover:text-black"
                onClick={() => handleUpdateClick(user.employeeID)}
              >
                Update
              </button>

              <button
                className="p-2 border border-blue-600 text-white rounded-full bg-blue-600 hover:text-red-700"
                onClick={() => handleDelete(user.employeeID)}
              >
                Delete
              </button>
            </div>

            {/* Status */}
            <div className="ml-auto">
              <p className="rounded-lg text-sky-500 font-bold bg-sky-100 py-1 px-3 text-sm w-fit h-fit">
                {user.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
