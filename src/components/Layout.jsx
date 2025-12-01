import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navbar */}
      <Header />

      {/* Page content */}
      <main className="flex-grow">
        <Outlet />   {/* Renders the current route component */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;