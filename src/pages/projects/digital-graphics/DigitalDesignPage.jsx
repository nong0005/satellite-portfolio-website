// src/pages/projects/digital-graphics/DigitalDesignPage.jsx

import React from "react";
import { motion } from "framer-motion";

const digitalProjects = [
  {
    title: "Algonquin College OTFT Faculty Handbook",
    image: "/images/digital-design/otft-handbook-banner.jpeg",
    link: "https://drive.google.com/file/d/1mdaYzB2xfyc4ILiTl4LouUqbYNEY0yu1/view?usp=drive_link",
    description: "A fully designed handbook for Faculty under Algonquin College’s OTFT department."
  },
  {
    title: "Algonquin College Immersive Lab Guidebook",
    image: "/images/digital-design/immersive-handbook-banner.jpeg",
    link: "https://drive.google.com/file/d/1Ev5XZF8ILEmexc1aJG9RPgfyHBu4mSnh/view?usp=drive_link",
    description: "A clean guidebook created for the new immersive lab at Algonquin College."
  },
  {
    title: "Course Progression Flow Chart",
    image: "/images/digital-design/progression-chart-banner.jpeg",
    link: "https://drive.google.com/file/d/17Gt4lOc4GbK0x31gzdxcZjahh5JRP4pD/view?usp=drive_link",
    description: "A detailed course progression flow chart created for student academic guidance."
  },
  {
    title: "Movie Poster Design",
    image: "/images/digital-design/movie-poster-banner.jpeg",
    link: "https://drive.google.com/file/d/1gD1DGBdVdDiK364PvhQfu1CaXckVW-lE/view?usp=drive_link",
    description: "A custom conceptual movie poster created as a digital graphics project."
  }
];

const DigitalDesignPage = () => {
  return (
    <section className="py-20 text-secondary font-body">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold mb-12 text-center font-heading text-secondary flex justify-center items-center">
          Digital <br />
          Graphics
          <sup className="text-2xl w-8 h-8 inline-flex items-center justify-center rounded-full bg-primary text-secondary">4</sup>
        </h1>

        {/* PAGE DESCRIPTION */}
        <p className="text-center text-secondary-300 max-w-2xl mx-auto mb-12 text-lg sm:text-xl">
          Explore my digital graphics portfolio, featuring creative designs, illustrations,
          and visual concepts that showcase my skills in digital art and visual storytelling.
        </p>

        {/* CARD GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {digitalProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden shadow-lg bg-[var(--color-accent-light)] cursor-pointer
                         border border-white hover:border-black hover:shadow-2xl transition-all"
              onClick={() => window.open(project.link, "_blank")}
            >
              {/* FIXED ---- TALLER BANNER IMAGE */}
              <div className="w-full h-64 sm:h-72 md:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
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
                    window.open(project.link, "_blank");
                  }}
                >
                  View Project
                </button>
                <p className="text-[var(--color-secondary)] text-sm">
              Opens in a new tab · PDF format
            </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DigitalDesignPage;