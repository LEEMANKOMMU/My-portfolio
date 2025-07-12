import React from 'react';
import './Navbar.css';

const Navbar = () => {
 return (
  <nav className="navbar">
  <div className="nav-left">
    <h2 className="brand">Leeman's Portfolio</h2>
  </div>

  <div className="nav-right">
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#Certificates">Certificates</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>

 );
};

export default Navbar;
