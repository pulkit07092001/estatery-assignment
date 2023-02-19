import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <i class="fa-solid fa-building estatery"></i> Estatery
      </div>
      <ul className="navlinks">
        <li className="navlink active">Rent</li>
        <li className="navlink">Buy</li>
        <li className="navlink">Sell</li>
        <li className="navlink">Manage Property</li>
        <li className="navlink">Resources</li>
      </ul>
      <div className="navbtns">
        <button className="btn login">Login</button>
        <button className="btn signup">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
