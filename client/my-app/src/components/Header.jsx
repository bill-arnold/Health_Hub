// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import Home from "./pages/Home";


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* Add other navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
