// src/components/Logo.jsx
import React from "react";
import logo from "../assets/logo/logo.png";

const Logo = ({ className }) => {
  return <img src={logo} alt="Logo" className={className || "h-10 w-auto"} />;
};

export default Logo;