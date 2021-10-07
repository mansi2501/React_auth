import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
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
            <NavLink to="/">
              <FaHome />
            </NavLink>
          </li>
          <li>
            <NavLink to="/allusers">All Users</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// <li>Logout</li>

export default Navbar;
