import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavScrollExample from './Navbar';

const Layout = () => {
  return (
    <div className="body1">
      <NavScrollExample />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
