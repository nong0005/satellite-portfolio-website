import React from "react";
import AboutMe from "../components/About";
import AboutDetails from "../components/AboutDetails";
import ContactCTA from "../components/ContactCTA";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="pt-16 pb-16 px-4 md:px-8 w-full">

        {/* Animated Page Title */}
        <motion.h1
          className="text-5xl font-bold text-center text-secondary mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <AboutMe />
        <AboutDetails />
        <ContactCTA />

      </main>
    </div>
  );
};

export default AboutPage;