// src/pages/projects/ux-design/UXDesignPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const uxProjects = [
  {
    title: "Algonquin College Makerspace Project",
    path: "/projects/ux-design/ac-makerspace",
    image: "/images/project-banners/ac-makerspace-banner-resized.jpg",
    description: "UX workflow + immersive environment design for AC Makerspace.",
  },
  {
    title: "Tailgators Website Redesign",
    path: "/projects/ux-design/tailgators",
    image: "/images/project-banners/tailgators-banner-resized.jpeg",
    description: "A fresh redesigned website improving clarity & navigation.",
  },
];

const UXDesignPage = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 text-secondary font-body">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Page Title */}
        <h1 className="text-5xl font-bold mb-12 text-center font-heading text-secondary">
          UX Design <sup className="text-2xl align-super">2</sup>
        </h1>

        {/* CARD GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {uxProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden shadow-lg bg-[var(--color-accent-light)] cursor-pointer 
                         border border-white hover:border-black hover:shadow-2xl transition-all"
              onClick={() => navigate(project.path)}
            >
              {/* Banner Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <h2 className="text-2xl font-semibold text-secondary">
                  {project.title}
                </h2>

                <p className="text-secondary opacity-80 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Button */}
                <button
                  className="btn-primary mt-4 w-fit"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(project.path);
                  }}
                >
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UXDesignPage;