import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Main pages
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// UX Project Pages
import UXDesignPage from "./pages/projects/ux-design/UXDesignPage";
import ACMakerspace from "./pages/projects/ux-design/ACMakerspace";
import TailgatorsPage from "./pages/projects/ux-design/TailgatorsPage";
import OutlookDemoPage from "./pages/projects/ux-design/OutlookDemoPage";

// Web Development Pages
import WebDevelopmentPage from "./pages/projects/web-development/WebDevelopmentPage";
import SoesAppPage from "./pages/projects/web-development/SoesAppPage";
import SoesWebsitePage from "./pages/projects/web-development/SoesWebsitePage";

// Digital Design Page
import DigitalDesignPage from "./pages/projects/digital-graphics/DigitalDesignPage";

// Photo & Video Page
import PhotoVideoPage from "./pages/projects/photo-video/PhotoVideoPage";

function App() {
  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <Routes>
        {/* Layout wrapper */}
        <Route element={<Layout />}>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Main */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* UX */}
          <Route path="/projects/ux-design" element={<UXDesignPage />} />
          <Route path="/projects/ux-design/ac-makerspace" element={<ACMakerspace />} />
          <Route path="/projects/ux-design/tailgators" element={<TailgatorsPage />} />
          <Route path="/projects/ux-design/outlook-demo" element={<OutlookDemoPage />} />

          {/* Web Dev */}
          <Route path="/projects/web-development" element={<WebDevelopmentPage />} />
          <Route path="/projects/web-development/soes-app" element={<SoesAppPage />} />
          <Route path="/projects/web-development/soes-website" element={<SoesWebsitePage />} />

          {/* Digital */}
          <Route path="/projects/digital-design" element={<DigitalDesignPage />} />

          {/* Photo/Video */}
          <Route path="/projects/photo-video" element={<PhotoVideoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;