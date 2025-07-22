import { Outlet } from "react-router-dom";
import SideBar from "../Sidebar/SideBar.jsx"; // Matches the file exactly
import { useContext } from "react";
import ToggleTheme  from "../ToggleTheme/ToggleTheme.jsx" ;
import Login from "../Login/Login.jsx";
import UserContext from "../Context/UserContext.jsx";

function Layout() {
  // let {user} = useContext(UserContext)
  let {isLoggedIn} = useContext(UserContext);

  if(isLoggedIn){
    return(
      <> 
       <div className="main-content">
        <ToggleTheme/>
          <SideBar />
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </>
      
    )
  }
  else{
     return(
      <div>
        <Login/>
      </div>
     ); 
  }
}

export default Layout;
