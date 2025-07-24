import '../styles/Header.css';
import { FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <input type="text" placeholder="Search Job Title" className="header-input" />
      <input type="text" placeholder="Location" className="header-input" />
      
      <button className="header-icon-button">
        <FaSearch />
      </button>
      
      <select className="header-select">
        <option>Workplace</option>
        <option>Remote</option>
        <option>On-site</option>
        <option>Hybrid</option>
      </select>
      
      <select className="header-select">
        <option>Experience</option>
        <option>Fresher</option>
        <option>1-3 Years</option>
        <option>3+ Years</option>
      </select>

      <select className="header-select">
        <option>Salary</option>
        <option>$0 - $50k</option>
        <option>$50k - $100k</option>
        <option>$100k+</option>
      </select>

      <button className="header-advanced-search">Advanced Search</button>
    </header>
  );
}

export default Header;
