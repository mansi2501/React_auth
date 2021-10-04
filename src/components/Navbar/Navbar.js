import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">My Site</div>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/signin">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
