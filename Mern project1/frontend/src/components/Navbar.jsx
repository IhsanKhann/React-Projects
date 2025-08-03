import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <>
    <div className='Navbar'> 
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : 'nonactive')}
      >
        Products
      </NavLink>

      <NavLink
        to="/addproducts"
        className={({ isActive }) => (isActive ? 'active' : 'nonactive')}
      >
        Add Product
      </NavLink>
      </div>
    </>
  );
}

export default Navbar;
