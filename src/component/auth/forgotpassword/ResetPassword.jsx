import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoPlayBack } from "react-icons/io5";
function ResetPassword() {
  const email = useSelector((state) => state.email.email);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || password !== repeatPassword) {
      toast.error("Passwords do not match! Enter the same password.");
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:8080/forgotpassword/${email}/changepassword`,
        {
          password,
          repeatPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Password reset successfully!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data || "Something went wrong!");
      } else {
        toast.error("Network error. Please try again.");
      }
    }
  };
      const handlclick=(e)=>{
        e.preventDefault();
        navigate("/")

      }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-pink-400 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-center text-2xl bg-white p-2 border-2 rounded-md">
            {email}
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Re-enter Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
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
            className=' mt-2 text-0.5xl hover:text-blue-500 flex'
            >  <IoPlayBack  className=' mt-2 mr-1 '/> Back
            
            </button>
      </div>
    </div>
  );
}

export default ResetPassword;
