import './Header.css';
import { NavLink } from 'react-router-dom';
import { FiHome, FiSend, FiCompass, FiHeart } from 'react-icons/fi';

function Header() {
  return (
    <header className="header">
      <div className="logo">MyGram</div>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>

      <nav className="nav-icons">
        <NavLink to="/home" className="icon"><FiHome /></NavLink>
        <NavLink to="/messages" className="icon"><FiSend /></NavLink>
        <NavLink to="/explore" className="icon"><FiCompass /></NavLink>
        <NavLink to="/notifications" className="icon"><FiHeart /></NavLink>

        <NavLink to="/profile" className="profile-pic">
          <img src="https://i.pravatar.cc/150?img=8" alt="Profile" />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
