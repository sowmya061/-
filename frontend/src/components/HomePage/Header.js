import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";  // Import the CSS file

const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <h3>SwasthyaSetu</h3>
      </NavLink>

      <div className="navbar-heading">
        <NavLink to="/book_appt" activeClassName="active">
          <span>Online Consultation</span>
        </NavLink>
        <NavLink to="/med_info" activeClassName="active">
          <span>Education Center</span>
        </NavLink>
        <NavLink to="/ai_assist" activeClassName="active">
          <span>AI Assistant</span>
        </NavLink>
        <NavLink to="/med_diag" activeClassName="active">
          <span>Medical Diagnosis</span>
        </NavLink>
        <NavLink to="/nearby_hospitals" activeClassName="active">
          <span>Hospitals Nearby</span>
        </NavLink>
      </div>

      <div className="appt-container">
        <NavLink to="/user/login">
          <button className="appt-button">Book Appointment</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
