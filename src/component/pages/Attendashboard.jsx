import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Attendashboard() {
    const [activeEmployees, setActiveEmployees] = useState([]);
    const [allAttendance, setAllAttendance] = useState([]);
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
       
      },
    };
  
    const fetchActive = async () => {
      const res = await axios.get("http://localhost:8080/api/attendance/active",config);
      setActiveEmployees(res.data);
      //console.log(activeEmployees)
    };
  
    const fetchAll = async () => {
      const res = await axios.get("http://localhost:8080/api/attendance/all-attendance",config);
      setAllAttendance(res.data);
      //console.log(allAttendance)
    };
  
    useEffect(() => {
      fetchActive();
      fetchAll();
    }, []);
  
    return (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">HR/Admin Attendance Dashboard</h2>
    
          {/* Active Employees Table */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-2">🟢 Active Employees</h3>
            <div className="overflow-x-auto shadow rounded-lg">
              <table className="min-w-full text-sm text-left border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border">ID</th>
                    <th className="py-2 px-4 border">Name</th>
                    <th className="py-2 px-4 border">Email</th>
                    <th className="py-2 px-4 border">Start Time</th>
                  </tr>
                </thead>
                <tbody>
                  {activeEmployees.map((emp) => (
                    <tr key={emp.id} className="bg-white hover:bg-gray-50">
                      <td className="py-2 px-4 border">{emp.id}</td>
                      <td className="py-2 px-4 border">{emp.employeeName}</td>
                      <td className="py-2 px-4 border">{emp.employeeEmailId}</td>
                      <td className="py-2 px-4 border">
                        {new Date(emp.startTime).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  {activeEmployees.length === 0 && (
                    <tr>
                      <td colSpan="4" className="text-center py-3 text-gray-500">No active employees</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
    
          {/* All Attendance Table */}
          <div>
            <h3 className="text-xl font-semibold mb-2">📋 All Attendance Records</h3>
            <div className="overflow-x-auto shadow rounded-lg">
              <table className="min-w-full text-sm text-left border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border">ID</th>
                    <th className="py-2 px-4 border">Name</th>
                    
                    <th className="py-2 px-4 border">Email</th>
                    <th className="py-2 px-4 border">Start Time</th>
                    <th className="py-2 px-4 border">End Time</th>
                    <th className="py-2 px-4 border">Duration(Minutes)</th>
                  </tr>
                </thead>
                <tbody>
                  {allAttendance.map((att) => (
                    <tr key={att.id} className="bg-white hover:bg-gray-50">
                      <td className="py-2 px-4 border">{att.id}</td>
                      <td className="py-2 px-4 border">{att.employeeName}</td>
                      <td className="py-2 px-4 border">{att.employeeEmailId}</td>
                      <td className="py-2 px-4 border">{new Date(att.startTime).toLocaleString()}</td>
                      <td className="py-2 px-4 border">
                        {att.endTime ? new Date(att.endTime).toLocaleString() : "⏳ Active"}
                      </td>
                      <td className="py-2 px-4 border">
                        {att.duration ? att.duration : "-"}
                      </td>
                    </tr>
                  ))}
                  {allAttendance.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center py-3 text-gray-500">No attendance records</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
}

export default Attendashboard
