import './SideBar.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

function SideBar() {
    const { Theme } = useContext(ThemeContext);

    return (
        <div className={`SideBar-left ${Theme}`}> 
            <nav>
                <NavLink to="/" className="Link">Home</NavLink>
                <NavLink to="/search" className="Link">Search</NavLink>
                <NavLink to="/explore" className="Link">Explore</NavLink>
                <NavLink to="/reels" className="Link">Reels</NavLink>
                <NavLink to="/messages" className="Link">Messages</NavLink>
                <NavLink to="/notifications" className="Link">Notifications</NavLink>
                <NavLink to="/create" className="Link">Create</NavLink>
                <NavLink to="/profile" className="Link">Profile</NavLink>
                <NavLink to="/more" className="Link">More</NavLink>
            </nav>
        </div>
    );
}

export default SideBar;
