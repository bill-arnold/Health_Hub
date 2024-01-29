
import React from "react";
import { Link } from "react-router-dom";
import Home from "./pages/Home";


const Header = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
