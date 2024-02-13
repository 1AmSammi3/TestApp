import React from 'react';
import Style from './Navbar.css';
import Bot from './Bot';
import Menu from './Menu';

const Navbar = () => {
  return(
    <div className="nav">
      <div className = "logo">
        <Bot />
        <span>Logo Header</span>
      </div>
      <Menu />
    </div>  
  );
}

export default Navbar;