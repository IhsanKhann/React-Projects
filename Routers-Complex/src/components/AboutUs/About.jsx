import Address from './Address'
import Teams from './Teams'
import {NavLink} from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function About(){
    return(
        <>  
            <nav>
                <h2> This is About page </h2>
                <NavLink to="about/address">
                    Address    
                </NavLink>

                <NavLink to="about/teams">
                    Teams
                </NavLink>             
            </nav>

            <Outlet/>   
          
        </>
    )
}

export default About ;