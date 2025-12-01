import React from "react";
import AboutMe from "../components/About";
import AboutDetails from "../components/AboutDetails";


const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Add top and bottom padding so content doesn't overlap layout/header */}
      <main className="pt-28 pb-16 px-4 md:px-8 w-full">
        <AboutMe />
        <AboutDetails />

      </main>
    </div>
  );
};

export default AboutPage;