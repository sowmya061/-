import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";  // Import the CSS file

const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <h3>MEDICARE</h3>
      </NavLink>

      <div className="navbar-heading">
        <NavLink to="/book_appt" activeClassName="active">
          <span>Appointment</span>
        </NavLink>
        <NavLink to="/med_info" activeClassName="active">
          <span>Education Center</span>
        </NavLink>
        <NavLink to="/ai_assist" activeClassName="active">
          <span>AI Assistant</span>
        </NavLink>
      </div>

      <div className="auth-button-container">
        <NavLink to="/user/login">
          <button className="auth-button">LOGIN</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
