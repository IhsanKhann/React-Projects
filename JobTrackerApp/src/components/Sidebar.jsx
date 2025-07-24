import { NavLink } from 'react-router-dom';
import { FaHome, FaFileAlt, FaSearch, FaBriefcase } from 'react-icons/fa';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>
        <FaHome className="icon" />
      </NavLink>

      <NavLink to="/resumeBuilder" className={({ isActive }) => isActive ? 'link active' : 'link'}>
        <FaFileAlt className="icon" />
      </NavLink>

      <NavLink to="/JobSearch" className={({ isActive }) => isActive ? 'link active' : 'link'}>
        <FaSearch className="icon" />
      </NavLink>

      <NavLink to="/Tracker" className={({ isActive }) => isActive ? 'link active' : 'link'}>
        <FaBriefcase className="icon" />
      </NavLink>
    </div>
  );
}

export default Sidebar;
