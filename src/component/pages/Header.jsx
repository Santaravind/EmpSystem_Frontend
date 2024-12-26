import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

function Header() {
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
      <Link to="/home" class="hover:text-indigo-400">Home</Link>
      <Link to="/Employee" class="hover:text-indigo-400">Employee</Link>
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
