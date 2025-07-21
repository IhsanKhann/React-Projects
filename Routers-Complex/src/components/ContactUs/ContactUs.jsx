import {Outlet} from 'react-router-dom' ;
import { NavLink } from 'react-router-dom';
function Contact(){
    return(
        <>  
            <nav> 
                <h2> This is contact page </h2>

                <NavLink to="contact/owner">
                    Owner
                </NavLink>

                <NavLink to="contact/helpline">
                    Helpline
                </NavLink>
            </nav>
            
            <Outlet/>
        </>
    )
}

export default Contact 