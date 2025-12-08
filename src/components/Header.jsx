import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";
// Ensure this path is correct for your custom CSS rules
import "../styles/header.css"; 
import "../styles/globals.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to close the menu
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-6 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-20">
        
        {/* Navbar container */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-md rounded-xl flex justify-between items-center py-4 px-6 relative z-20">
          
          {/* Logo - Using <a> for full page refresh to Home */}
          <div className="flex-shrink-0">
            <a href="/"> 
              <Logo className="h-16 sm:h-20 w-auto" />
            </a>
          </div>

          {/* 1. DESKTOP NAVIGATION (Uses .desktop-nav from custom CSS) */}
          <nav className="desktop-nav items-center space-x-8"> 
            {navLinks.map((link) => (
              // Use <a> for Home to force refresh, <Link> for others
              link.path === '/' ? (
                <a 
                  key={link.name}
                  href={link.path}
                  className="text-secondary font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-secondary font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}

            <Link to="/contact" className="btn-primary">
              Contact Me
            </Link>
          </nav>

          {/* 2. MOBILE HAMBURGER TOGGLE (Uses .mobile-toggle from custom CSS) */}
          <div className="mobile-toggle items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary focus:outline-none z-30 relative" 
            >
              {isOpen ? <X size={44} /> : <Menu size={44} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown (Controlled by isOpen state and Framer Motion) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-[112.5px] z-10 flex justify-center px-4 sm:px-6"
            >
              <motion.div
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="
                  bg-accent-light rounded-xl shadow-md 
                  w-full max-w-[1150px] 
                  mx-auto my-6 p-6 
                  flex flex-col items-center space-y-4
                "
              >
                {navLinks.map((link) => (
                  // Use <a> for Home to force refresh, <Link> for others
                  link.path === '/' ? (
                    <a 
                      key={link.name}
                      href={link.path}
                      onClick={closeMenu}
                      className="text-secondary font-medium text-lg hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={closeMenu}
                      className="text-secondary font-medium text-lg hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )
                ))}

            <Link to="/contact" onClick={closeMenu} className="btn-primary">
              Contact Me
            </Link>
              </motion.div>
            </motion.div> 
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;