
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
import Getdata from './component/pages/Getdata';
import Holiday from './component/pages/Holiday';
import UpdateButton from './component/pages/UpdateButton';
import ProfileUpload from './component/pages/ProfileUpload';
import FindProfile from './component/pages/FindProfile';
import HumanResources from './component/pages/HumanResources';
import EmailSender from './component/pages/EmailSender';
import { Toaster } from 'react-hot-toast'

function App() {
  

  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register"];
  const isLocalStorageEmpty = !localStorage.getItem('token');
  return (
    <>
     {!isLocalStorageEmpty && !hideHeaderFooter.includes(location.pathname) && <Header />}
      
    

     <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Loginpage />} />
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
           <Route path='/humanresources' element={<Privateroute>
             <HumanResources />
            </Privateroute>} />
            
           <Route path='/calendar' element={<Privateroute>
             <Holiday/>
            </Privateroute>} />
            <Route path="/employee/update/:id" element={
              <Privateroute> <UpdateButton/> </Privateroute>
              } />
            <Route path="/employee/update/:id" element={
              <Privateroute> <FindProfile/> </Privateroute>
              } />
            <Route path="/profile-upload/:id" element={
              <Privateroute> <ProfileUpload/> </Privateroute>
              } />
            
           <Route path='/getdata' element={<Privateroute>
             <Getdata />
            </Privateroute>} /> 
            <Route path='/email' element={<Privateroute>
             <EmailSender />
            </Privateroute>} /> 

           <Route path='/logout' element={
             <Logout />} />


      </Routes>
    
      
           {!isLocalStorageEmpty&&!hideHeaderFooter.includes(location.pathname) && <Footer />}
      
      
     <Toaster/>
         </>
  )
}

export default App
