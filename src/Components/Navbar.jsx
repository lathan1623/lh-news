import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <h4 className="logo">L<span className="logospan">N</span></h4>
    <ul className="linklist">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/search">Search</NavLink></li>
    </ul>
  </div>
);
export default Navbar;
