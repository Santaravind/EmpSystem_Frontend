import React from 'react'
import Header from './Header'
import { Outlet ,useLocation} from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register"];
  
  return (
    <>
   
    {/* Show Header only if the current path is not in `hideHeaderFooter` */}
    {!hideHeaderFooter.includes(location.pathname) && <Header />}
       <main>
       <Outlet/>
       </main>
      
         {/* Show Footer only if the current path is not in `hideHeaderFooter` */}
         {!hideHeaderFooter.includes(location.pathname) && <Footer />}
    </>
  )
}

export default Layout
