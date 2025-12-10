import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ProjectCards from "../components/ProjectCards";
import AboutMe from "../components/About";
import ContactCTA from "../components/ContactCTA";

// Section animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Home = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="bg-[var(--color-white)] min-h-screen relative">

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isMobile ? "visible" : undefined}
        whileInView={isMobile ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        className="motion-smooth"
      >
        <Hero />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isMobile ? "visible" : undefined}
        whileInView={isMobile ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        className="motion-smooth"
      >
        <ProjectCards />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isMobile ? "visible" : undefined}
        whileInView={isMobile ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        className="motion-smooth"
      >
        <AboutMe />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isMobile ? "visible" : undefined}
        whileInView={isMobile ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        className="motion-smooth"
      >
        <ContactCTA />
      </motion.div>

    </div>
  );
};

export default Home;