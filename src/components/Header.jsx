import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/header.css"; 
import "../styles/globals.css";

const navLinks = [
  { name: "Home", path: "/" },
  { 
    name: "Projects", 
    path: "/projects", 
    submenu: [
      { name: "All Projects", path: "/projects" },
      { name: "Digital Graphics", path: "/projects/digital-design" },
      { name: "UX Design", path: "/projects/ux-design" },
      { name: "Web Development", path: "/projects/web-development" },
      { name: "Photo & Video", path: "/projects/photo-video" },
    ]
  },
  { name: "About", path: "/about" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setIsMobileProjectsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setIsMobileProjectsOpen(false);
  };

  // Classes for main nav links
  const navLinkClass =
    "text-secondary font-medium relative after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-full";

  // Classes for submenu links
  const subMenuClass =
    "px-4 py-2 text-secondary relative after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-full";

  const isMainProjectsActive = () => {
    return navLinks[1].submenu.some((s) => s.path === location.pathname);
  };

  const isSubMenuActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-6  md:top-6 z-50"> {/* Increased top margin for mobile */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-20">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-md rounded-xl flex justify-between items-center py-4 px-6 relative z-20">
          
          <div className="flex-shrink-0">
            <Link to="/"> 
              <Logo className="h-16 sm:h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav items-center space-x-8 hidden md:flex">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.submenu ? (
                  <>
                    <button
                      className={`${navLinkClass} flex items-center gap-1 ${isMainProjectsActive() ? "after:w-full" : ""}`}
                      onMouseEnter={() => setIsProjectsOpen(true)}
                      onMouseLeave={() => setIsProjectsOpen(false)}
                    >
                      {link.name} <ChevronDown size={16} />
                    </button>

                    {/* Submenu */}
                    <AnimatePresence>
                      {isProjectsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setIsProjectsOpen(true)}
                          onMouseLeave={() => setIsProjectsOpen(false)}
                          className="absolute top-full left-0 mt-1 pb-2 w-max bg-[var(--color-accent-light)] backdrop-blur-md border border-white/30 shadow-lg rounded-xl flex flex-col z-50"
                        >
                          {link.submenu.map((sublink, subIndex) => (
                            <Link
                              key={subIndex}
                              to={sublink.path}
                              className={`${subMenuClass} ${isSubMenuActive(sublink.path) ? "after:w-full" : ""}`}
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`${navLinkClass} ${link.path === location.pathname ? "after:w-full" : ""}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <Link to="/contact" className="btn-primary">
              Contact Me
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="mobile-toggle md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary focus:outline-none z-30 relative" 
            >
              {isOpen ? <X size={44} /> : <Menu size={44} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-[140px] z-10 flex justify-center px-4 sm:px-6"
            >
              <motion.div
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="bg-white/80 backdrop-blur-md border border-white/30 shadow-md rounded-xl w-full max-w-[1150px] mx-auto my-6 p-6 flex flex-col items-center space-y-4"
              >
                {navLinks.map((link, index) => (
                  <div key={index} className="w-full flex flex-col items-center">
                    {link.submenu ? (
                      <>
                        <button
                          className={`text-secondary text-lg flex items-center gap-1 w-full justify-center ${isMainProjectsActive() ? "underline underline-offset-4" : ""}`}
                          onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                        >
                          {link.name} <ChevronDown size={16} />
                        </button>

                        {isMobileProjectsOpen && (
                          <div className="flex flex-col w-full mt-2">
                            {link.submenu.map((sublink, subIndex) => (
                              <Link
                                key={subIndex}
                                to={sublink.path}
                                onClick={closeMenu}
                                className={`text-secondary px-4 py-2 w-full text-center relative after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-full ${isSubMenuActive(sublink.path) ? "after:w-full" : ""}`}
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`text-secondary text-lg ${link.path === location.pathname ? "underline underline-offset-4" : ""}`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}

                <Link 
                  to="/contact" 
                  onClick={closeMenu} 
                  className="btn-primary"
                >
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