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
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-sky-500 mb-4">Holiday Calendar</h1>
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
