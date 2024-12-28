import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileUpload from "./ProfileUpload";

const UpdateButton = () => {
    const token = localStorage.getItem("token");
      
    
  const { id } = useParams(); // Extract employee ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_Name: "",
    last_Name: "",
    emailId: "",
    phone_Number: "",
    department: "",
    position: "",
    date_of_Birth:""
  });

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
     
    },
  };

  useEffect(() => {
    // Fetch employee details
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/get-employees/${id}`,config
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8080/api/update-employee/${id}`, formData,config);
      alert("Employee updated successfully!");
      navigate("/home"); // Redirect to home or employee list
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleProfileUpload = () => {
    // Navigate to the ProfileUpload component
    navigate(`/profile-upload/${id}`);
  };
  
  return (
       
    <div className="flex justify-center items-center min-h-screen bg-gray-100 m-2">
    <div className="bg-white shadow-lg rounded-lg flex w-11/12 md:w-2/3">
      {/* Left Part: Photo */}
      <div className="w-1/2 hidden md:flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-l-lg">
        <img
          src=""
          alt="Employee Avatar"
          className="rounded-full w-2/3 shadow-lg"
        />
        <button
          onClick={handleProfileUpload}
          className="mt-4 px-4 py-2 bg-white text-purple-500 font-bold rounded shadow hover:bg-purple-100"
        >
          Upload Profile Photo
        </button>
      </div>
  
      {/* Right Part: Update Form */}
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Update Your Details
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">First Name</label>
            <input
              type="text"
              name="first_Name"
              value={formData.first_Name}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Last Name</label>
            <input
              type="text"
              name="last_Name"
              value={formData.last_Name}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">DOB</label>
            <input
              type="date"
              name="dob"
              value={formData.date_of_Birth}
              onChange={handleChange}
              placeholder="dob"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Phone Number</label>
            <input
              type="text"
              name="phone_Number"
              value={formData.phone_Number}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Department"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Position"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Update Employee
          </button>
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default UpdateButton;


