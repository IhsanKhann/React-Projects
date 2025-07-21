import "./NavBar.css" ;
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <> 
            <NavLink to="/"
    className={({isActive}) => isActive ? "active" : ""}>
        Home
    </NavLink>

    <NavLink to="/about"
     className={({isActive}) => isActive ? "active" : ""}> 
     About
     </NavLink>
    
    <NavLink to="/contactus"
     className={({isActive}) => isActive ? "active" : ""}>
        ContactUs
    </NavLink>
        </>
    
    )
}

export default NavBar ;