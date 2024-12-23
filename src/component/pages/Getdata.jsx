import axios from "axios";
import React, { useEffect, useState } from "react";
//import {useQuery} from '@tanstack/react-router'
function Getdata() {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const respose = await axios.get(
          "http://localhost:8080/api/get-all-employees",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(respose.data);
        setLoading(false);
        setUsers(respose.data);
      } catch (error) {
        setError(true);
        //setLoading(false);
      }
    })();
  }, []);

  if (error) {
    return <h1>Some this wrong </h1>;
  }
  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      {/* <ul>
          {users.map((user,index) => (
            <li key={index}>Name:{user.first_Name}</li> 
          ))}
        </ul> */}

      <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl">
        Company family
      </p>

      {/* Employee Details */}
      <div className="grid grid-cols-3 gap-5 p-5">
        {/* Employee Card */}
        {users.map((user) => (
            
          <div  className="flex items-start p-4 border rounded-lg shadow-sm bg-white">
            {/* Profile Picture */}
            <div>
              <img
                src="https://picsum.photos/seed/2/200/200"
                className="max-w-16 max-h-16 rounded-full"
              />
            </div>
            {/* Description */}
            <div className="ml-4">
              <p className="text-sky-500 font-bold text-xs">{user.position}</p>
              <p className="text-gray-600 font-bold">
                {user.first_Name}
                {user.last_Name}
              </p>
              <p className="text-gray-400">{user.joining_Date}</p>
              <p className="text-gray-400">{user.emailId}</p>
              <p className="text-gray-400">{user.phone_Number}</p>
              <p className="text-gray-400">{user.department}</p>

              <p className="text-gray-400">{user.date_of_Birth}</p>
            </div>
            {/* Status */}
            <div className="ml-auto">
              <p className="rounded-lg text-sky-500 font-bold bg-sky-100 py-1 px-3 text-sm w-fit h-fit">
                {" "}
                {user.status}{" "}
              </p>
            </div>
          </div>
        )
        )}
      </div>
    </div>
  );
}

export default Getdata;
