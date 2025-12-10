import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ContactCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 sm:px-6 bg-[var(--color-white)]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12 text-center">

        {/* Animated Gradient Heading with subtle light gray */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent 
                    leading-snug sm:leading-normal md:leading-relaxed pb-1"
          style={{
          backgroundImage: "linear-gradient(45deg, var(--color-secondary), #f0f0f0, var(--color-secondary))",
          backgroundSize: "400% 400%",
          fontFamily: "var(--font-heading)",
          animation: "gradientMove 20s ease infinite",
          WebkitTextStroke: "1px var(--color-white)", // subtle stroke
          }}
        >
          Let’s create something amazing together
        </motion.h2>

        {/* Reach Out Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
          className="btn-primary px-8 py-3 text-lg font-semibold"
        >
          Reach Out
        </motion.button>

      </div>

      {/* Gradient animation keyframes */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
        `}
      </style>
    </section>
  );
};

export default ContactCTA;