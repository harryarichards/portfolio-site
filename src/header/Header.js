import React from "react";
import './header.css';

const Header = () => {
  return (
    <nav id="navbar">
      <ul class="flex start" style={{'margin-left': '10px'}}>
        <li><a href="#home">HOME</a></li>
      </ul>
      <ul class="flex end">
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#topics">BLOG</a></li>
      </ul>
    </nav>
  );
};

export default Header;
