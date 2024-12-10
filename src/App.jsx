
import './App.css'
import EmployeeDelail from './component/EmployeeDetail'
import Header from './component/Header'
import Home from './component/Home';
import HrDetail from './component/HrDetail'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <>
     <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<EmployeeDelail />} />
          <Route path="/hr" element={<HrDetail />} />
          {/* <Route path="/calendar" element={<Calendar />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/document" element={<Document />} /> */}
        </Routes>
      </div>
    </Router>
    {/* <Header/>

     <EmployeeDelail/>
     <HrDetail/> */}
         </>
  )
}

export default App
