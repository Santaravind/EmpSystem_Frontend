import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
   

<header class="bg-gray-800 text-white">
  <nav class="container mx-auto flex items-center justify-between p-4">
  
    <div class="flex items-center">
      <a href="#" class="flex items-center space-x-2 text-xl font-semibold">
        <img
          src= {logo}
          alt="Logo"
          class="h-8 w-20"
        />
        {/* <span>Galas IT Solutions</span> */}
      </a>
    </div>

  
     <div class="hidden space-x-6 md:flex">

     <Link to="/home" className="hover:text-indigo-400">Home</Link>
          
          {/* Employee Link with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-indigo-400 focus:outline-none flex items-center"
            >
              Employee
              <span className="ml-2">&#9660;</span> {/* Dropdown arrow */}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg">
                <Link
                  to="/Employee"
                  className="block px-4 py-2 hover:bg-indigo-400 hover:text-white"
                  onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                >
                   Details
                </Link>
                {/* <Link
                  to="/profile-image"
                  className="block px-4 py-2 hover:bg-indigo-400 hover:text-white"
                  onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                >
                  Profile Image
                </Link> */}
              </div>
            )}
          </div>

      {/* <Link to="/home" class="hover:text-indigo-400">Home</Link>
      <Link to="/Employee" class="hover:text-indigo-400">Employee</Link> */}
      <Link to="/hr" class="hover:text-indigo-400">HR</Link>
      <Link to="/getdata" class="hover:text-indigo-400">All Users </Link>
      <Link to="/calendar" class="hover:text-indigo-400">Calendar</Link>
      <a href="#" class="hover:text-indigo-400">Meeting</a>
      <a href="#" class="hover:text-indigo-400">Document</a> 
      <Link to="/register" class="hover:text-indigo-400">Register</Link>
      <Link to="/" class="hover:text-indigo-400">Login</Link>
      <Link to="/logout" class="hover:text-indigo-400">Logout</Link>
      
      </div>

      </nav> 
      
   

    
    
     
    
    </header>
  )
}

export default Header
