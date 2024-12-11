
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import './App.css'
import EmployeeDelail from './component/EmployeeDetail'
import Header from './component/Header'
import Home from './component/Home';
import HrDetail from './component/HrDetail'
import Loginpage from './component/Loginpage';
import Registerpage from './component/Registerpage';
import Layout from './component/Layout';


function App() {
  // const token = localStorage.getItem("token");


  return (
    <>

     {/* //Second chanse that give proper  */}

     <BrowserRouter>
   <Routes>
        {/* //Routes under the Layout  */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="employee" element={<EmployeeDelail />} />
          <Route path="hr" element={<HrDetail />} />
        </Route>

        {/* // Routes outside the Layout  */}
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
      </Routes>
        
      </BrowserRouter> 
 



        
       { /*   
       //First chanse
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='' element={<Home/>} />
        <Route path='employee' element={<EmployeeDelail/>} />
        <Route path='hr' element={<HrDetail/>} />
        <Route path='login' element={<Loginpage/>} />
        <Route path='register' element={<Registerpage/>} />
       </Routes> 
       </BrowserRouter>
       */
      }
      
     
         </>
  )
}

export default App
