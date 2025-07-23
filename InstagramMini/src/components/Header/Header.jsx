import './Header.css';
import { NavLink } from 'react-router-dom';
import { FiHome, FiSend, FiCompass, FiHeart } from 'react-icons/fi';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
  const {Theme} = useContext(ThemeContext) ;

  return (
     <header className={`header ${Theme}`}>
      <div className={`logo ${Theme}`}>MyGram</div>

      <div className={`search-bar ${Theme}`}>
        <input type="text" placeholder="Search" />
      </div>

      <nav className={`nav-icons ${Theme}`}>
        <NavLink to="/home" className="icon"><FiHome /></NavLink>
        <NavLink to="/messages" className="icon"><FiSend /></NavLink>
        <NavLink to="/explore" className="icon"><FiCompass /></NavLink>
        <NavLink to="/notifications" className="icon"><FiHeart /></NavLink>

        <NavLink to="/profile" className={`profile-pic ${Theme}`}>
          <img src="https://i.pravatar.cc/150?img=8" alt="Profile" />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
