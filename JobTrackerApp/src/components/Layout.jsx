import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
// import './Layout.css'; // Optional for layout styling

function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '1rem' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
