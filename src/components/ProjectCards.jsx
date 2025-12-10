import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/featured-projects.css";
import AnimatedGradient from "./AnimatedGradient";

// Example project data
const projects = [
  { title: "Algonquin College Makerspace Project", category: "UX Design" },
  { title: "Tailgators Website Redesign", category: "UX Design" },
  { title: "SOES School management app", category: "Web Development" },
  { title: "AC-handbook", category: "Digital Graphics" },
  { title: "AC-flow-chart", category: "Digital Graphics" },
  { title: "AC-guide-book", category: "Digital Graphics" },
  { title: "AC-movie-poster", category: "Digital Graphics" },
  { title: "Story Telling Photography", category: "Photo & Videography" },
  { title: "Creative-Photography", category: "Photo & Videography" },
  { title: "Video-project-1", category: "Photo & Videography" },
  { title: "Video-project-2", category: "Photo & Videography" }
];

// Category page links
const categories = [
  { title: "UX Design", link: "/projects/ux-design" },
  { title: "Web Development", link: "/projects/web-development" },
  { title: "Digital Graphics", link: "/projects/digital-design" },
  { title: "Photo & Videography", link: "/projects/photo-video" }
];

// Featured Projects
const featuredProjects = [
  {
    title: "Tailgators Website Redesign",
    tag: "UX Design",
    image: "/images/project-banners/tailgators-banner-resized.jpeg",
    link: "/projects/ux-design/tailgators"
  },
  {
    title: "Algonquin Makerspace Project",
    tag: "UX Design",
    image: "/images/project-banners/ac-makerspace-banner-resized.jpeg",
    link: "/projects/ux-design/ac-makerspace"
  },
  {
    title: "Photo & Video Stories",
    tag: "Photo & Videography",
    image: "/images/project-banners/photo-video-banner-resized.jpeg",
    link: "/projects/photo-video"
  },
  {
    title: "Digital Graphics Showcase",
    tag: "Digital Graphics",
    image: "/images/project-banners/digital-design-banner-resized.jpeg",
    link: "/projects/digital-design"
  }
];

const ProjectCategoryCards = ({ showViewAll = true }) => {
  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat.title] = projects.filter((p) => p.category === cat.title).length;
    return acc;
  }, {});

  return (
    <section className="py-20 text-secondary" id="projects">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12 text-center font-heading text-secondary">
          Project Categories
        </h2>

        {/* Category Cards */}
        <div className="flex flex-wrap sm:flex-nowrap gap-8 items-center justify-center mt-6 w-full">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="card w-[90%] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[320px] relative flex flex-col justify-between p-6"
            >
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl mb-2">{cat.title}</h3>
                <p>{categoryCounts[cat.title]} Projects</p>
              </div>

              <Link
                to={cat.link}
                className="btn-primary text-center mt-3 py-2 px-3 rounded font-semibold transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold mb-12 text-center font-heading text-secondary">
            Featured Projects
          </h3>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((proj, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl overflow-hidden shadow-lg bg-[var(--color-accent-light)] cursor-pointer 
                           border border-white hover:border-black hover:shadow-2xl transition-all flex flex-col"
              >
                {/* Banner Image */}
                <div className="w-full overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3">
                  <span className="text-sm font-semibold text-secondary">
                    {proj.tag}
                  </span>
                  <h4 className="text-2xl font-semibold text-secondary">
                    {proj.title}
                  </h4>

                  {/* CONDITIONAL CTA BUTTON */}
                  <Link
                    to={proj.link}
                    className="btn-primary mt-4 w-fit"
                  >
                    {proj.title.includes("Tailgators") ||
                    proj.title.includes("Makerspace")
                      ? "View Case Study"
                      : "View Project"}
                  </Link>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom View All Projects */}
        {showViewAll && (
          <div className="flex justify-center mt-12">
            <Link
              to="/projects"
              className="btn-secondary text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectCategoryCards;