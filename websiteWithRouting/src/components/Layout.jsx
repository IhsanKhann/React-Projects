import { Outlet, Link } from "react-router-dom"
import Header from "./Header"  // 👈 Import your custom header
import Footer from "./Footer"
function Layout() {
  return (
    <div>
      <Header /> {/* ✅ Your navigation bar here */}
      <Outlet />  {/* ✅ All pages render here */} 
      <Footer /> {/* ✅ Your footer here */}
    </div>
  )
}

export default Layout

// <Header /> 
// <Outlet /> this means that the nested routes of the Layout page will be rendered here. And the header and footer will stay the same. If outlet used under footer the outlet will be after footer. and similarly if on top it will render content on top. 
// <Footer /> 


