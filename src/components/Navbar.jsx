import React from "react";
import airbnbLogo from "../assets/airbnb-logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={airbnbLogo} alt="airbnb logo" className="nav--logo" />
    </nav>
  );
};

export default Navbar;
