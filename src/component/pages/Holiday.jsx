import React, { useState } from 'react'
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
function Holiday() {
  const [date, setdate] = useState(new Date());

   const onChange=date=>{
    setdate(date);
   }
  

   
  // return (
  //   <div>
  //     Calendar
  //     <Calendar onChange={onChange} value={date} />
  //     {date.toString()}
  //   </div>
  // )
  return(
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 bg-cover bg-center"  style={{backgroundImage:'url("https://images.pexels.com/photos/28905003/pexels-photo-28905003/free-photo-of-giraffes-crossing-rail-tracks-in-african-savanna.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}} >
      <h1 className="text-2xl font-bold text-black mb-4">Holiday Calendar</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <Calendar
          onChange={onChange}
          value={date}
          className="rounded-lg shadow-sm" 
        />
      </div>
     
    </div>
  )
}

export default Holiday
