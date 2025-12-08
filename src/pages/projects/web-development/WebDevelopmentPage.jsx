// src/pages/projects/web-development/WebDevelopmentPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react"; // Code icon

const webProjects = [
  {
    title: "SOES School App",
    description: "A React Native application for managing student online education schedules, tracking progress, and notifications.",
  },
];

const WebDevelopmentPage = () => {
  const handleOngoingProject = () => {
    alert("Ongoing Project"); // Show message when user clicks
  };

  return (
    <section className="py-20 text-secondary font-body">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Page Title */}
        <h1 className="text-5xl font-bold mb-12 text-center font-heading text-secondary">
          Web Development <sup className="text-2xl align-super">1</sup>
        </h1>

        {/* CARD GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {webProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden shadow-lg bg-[var(--color-accent-light)] cursor-pointer 
                         border border-white hover:border-black hover:shadow-2xl transition-all"
            >
              {/* Banner Icon */}
              <div className="w-full h-48 flex items-center justify-center bg-gray-100">
                <Code size={64} className="text-gray-500" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <h2 className="text-2xl font-semibold text-secondary">
                  {project.title}
                </h2>

                <p className="text-secondary opacity-80 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Button shows ongoing message */}
                <button
                  className="btn-primary mt-4 w-fit"
                  onClick={handleOngoingProject}
                >
                  Ongoing Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentPage;