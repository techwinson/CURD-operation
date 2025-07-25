import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    justifyContent: "space-between",
    padding: "10px 20px",
    color: "#000000",
    marginBottom: "20px",
    display: "flex",
    flexdirection: "column",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div style={navStyle}>
      <h1>
        <b>CRUD operation</b>
      </h1>
      <div style={{ display: "flex", gap: "120px", marginLeft: "300px", textAlign: "center" }}>
        <Link to="/" className="nav-link">
          Login
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/change-password" className="nav-link">
          Change Password
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
