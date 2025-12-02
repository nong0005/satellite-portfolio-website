// src/components/Logo.jsx
import React from "react";

const Logo = ({ className }) => {
  return <img src="/logo/logo.svg" alt="Logo" className={className || "h-10 w-auto"} />;
};

export default Logo;