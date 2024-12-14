import React from 'react'
import logo from '../assets/logo.png'
import {BrowserRouter, Link, Outlet, Route, Routes} from 'react-router-dom'
import Home from './Home'
import EmployeeDelail from './EmployeeDetail'
import HrDetail from './HrDetail'
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
      <Link to="/" class="hover:text-indigo-400">Home</Link>
      <Link to="/Employee" class="hover:text-indigo-400">Employee</Link>
      <Link to="/hr" class="hover:text-indigo-400">HR</Link>
      <a href="#" class="hover:text-indigo-400">Calendar</a>
      <a href="#" class="hover:text-indigo-400">Meeting</a>
      <a href="#" class="hover:text-indigo-400">Document</a> 
      <Link to="/register" class="hover:text-indigo-400">Register</Link>
      <Link to="/login" class="hover:text-indigo-400">Login</Link>
      
      </div>

      </nav> 
      
   

    
    
     
    
    </header>
  )
}

export default Header
