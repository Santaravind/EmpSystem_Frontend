import axios from "axios";
import React, { useEffect, useState } from "react";

function Getdata() {
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
          "http://localhost:8080/admin/get-all-users",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // Check if data exists and update state
        if (response.data?.ourUsersList) {
          setUsers(response.data.ourUsersList);
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
      <div className="flex justify-center items-center h-screen bg-gray-200">
  <h1 className="w-1/2 box-content bg-pink-300 p-3 rounded-lg text-lg shadow-lg shadow-rose-400 animate-float">
    You are not Admin.
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
        All Users
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
              <p className="text-gray-600 font-bold">
                {user.name || "No Name"}
              </p>
              <p className="text-gray-400">{user.email || "No Email"}</p>
              <p className="text-gray-400">{user.phone_Number || "No Phone"}</p>
              <p className="text-gray-400">{user.department || "No Department"}</p>
            </div>

            {/* Status */}
            <div className="ml-auto">
              <p className={`rounded-lg py-1 px-3 text-sm w-fit h-fit ${user.role === "Active" ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}>
                {user.role || "Unknown"}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* {new cord introduces } */}
         

        {/* <div class="mt-3 max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div class="px-4 py-6">
                <div class="text-center my-4">
                    <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                        src="https://randomuser.me/api/portraits/men/29.jpg" alt="" />
                    <div class="py-2">
                        <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">Ronald Potter</h3>
                        <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                            <svg class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path class=""
                                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            </svg>
                            Glendale, BF
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
   

    </div>
  );
}



export default Getdata;
