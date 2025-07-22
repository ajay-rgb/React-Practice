
import '../App.css'


import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
            />
          </Link>
          <div className="nav-buttons">
            <Link to="#" className="login">
              Log in
            </Link>
            <Link to="#" className="start">
              Get started
            </Link>
          </div>
          <div className="nav-menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {/* Add more nav links here if needed */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
