
import { BrowserRouter, Route, Routes,Navigate, useLocation } from 'react-router-dom';
import './App.css'

import Loginpage from './component/auth/Loginpage';
import Registerpage from './component/auth/Registerpage';
import Layout from './component/pages/Layout';
import Home from './component/pages/Home';
import EmployeeDetail from './component/pages/EmployeeDetail';
import HrDetail from './component/pages/HrDetail';
import Privateroute from './component/route/Privateroute';
import Footer from './component/pages/Footer';
import Header from './component/pages/Header';
import Logout from './component/auth/Logout';


function App() {
  

  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register"];
  
  return (
    <>
     {!hideHeaderFooter.includes(location.pathname) && <Header />}

     <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
      
           

           <Route path='/home' element={
            <Privateroute>
             <Home />
            </Privateroute>
           } />
           <Route path='/employee' element={<Privateroute>
             <EmployeeDetail />
            </Privateroute>} />
           <Route path='/hr' element={<Privateroute>
             <HrDetail />
            </Privateroute>} />
           <Route path='/logout' element={
             <Logout />} />


      </Routes>
    


           {!hideHeaderFooter.includes(location.pathname) && <Footer />}
      
      
     
         </>
  )
}

export default App
