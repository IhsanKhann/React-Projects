import {NavLink} from 'react-router-dom' ;
function Header(){
    return(
        <>
            <NavLink to="/" className={({isActive}) => isActive ? "active" : ""} >
                Home
            </NavLink>

            <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""} >
                About
            </NavLink>

            <NavLink to="/contactus" className={({isActive}) => isActive ? "active" : ""} >
                Contact us
            </NavLink>
        </>
    )
}

export default Header;