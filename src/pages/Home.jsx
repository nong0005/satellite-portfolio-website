import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectCards from "../components/ProjectCards";
import AboutMe from "../components/About";
import ContactCTA from "../components/ContactCTA";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";


const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <div className="bg-[var(--color-white)] min-h-screen">

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ProjectCards />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AboutMe />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactCTA />
      </motion.div>

    </div>
  );
};

export default Home;