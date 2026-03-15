import React from "react";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">DoctorCare</h2>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/signup">Signup</a>
        <a href="/login">Login</a>
        <a href="/search">Find Doctor</a>
        <a href="/profile">Profile</a>
      </div>
    </nav>
  );
}

export default Navbar;