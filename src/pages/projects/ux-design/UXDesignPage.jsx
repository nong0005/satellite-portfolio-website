// src/pages/projects/ux-design/UXDesignPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Copy } from "lucide-react";

const uxProjects = [
  {
    title: "Algonquin College Makerspace Project",
    path: "/projects/ux-design/ac-makerspace",
    image: "/images/project-banners/ac-makerspace-banner-resized.jpeg",
    description:
      "UX workflow + immersive environment design for AC Makerspace.",
    external: false,
  },
  {
    title: "SN Creative Solutions E-commerce Website",
    link: "https://sncreativesolutions.myshopify.com/",
    image: "/images/project-banners/shopify-mockup.png",
    description:
      "A UX-focused e-commerce website showcasing product browsing, visual hierarchy, and a polished online shopping experience.",
    external: true,
    password: "Store@123",
    icon: <ShoppingBag size={18} />,
  },
];

const UXDesignPage = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    if (project.external) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    } else {
      navigate(project.path);
    }
  };

  const handleCopyPassword = async (password) => {
    try {
      await navigator.clipboard.writeText(password);
      alert("Store password copied.");
    } catch (error) {
      console.error("Failed to copy password:", error);
      alert("Could not copy password.");
    }
  };

  return (
    <section className="py-20 text-secondary font-body">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12 text-center font-heading text-secondary">
          UX Design{" "}
          <sup className="text-2xl w-8 h-8 inline-flex flex-shrink-0 items-center justify-center rounded-full bg-primary text-secondary">
            2
          </sup>
        </h1>

        <p className="text-center text-secondary-300 max-w-2xl mx-auto mb-12 text-lg sm:text-xl">
          A showcase of my UX design projects, highlighting user-centered
          workflows, interface improvements, and design thinking applied to
          real-world digital products.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {uxProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden shadow-lg bg-[var(--color-accent-light)] cursor-pointer border border-white hover:border-black hover:shadow-2xl transition-all flex flex-col"
              onClick={() => handleProjectClick(project)}
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-3">
                {project.icon && (
                  <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
                    {project.icon}
                    <span>E-commerce UX</span>
                  </div>
                )}

                <h2 className="text-2xl font-semibold text-secondary">
                  {project.title}
                </h2>

                <p className="text-secondary opacity-80 text-sm leading-relaxed">
                  {project.description}
                </p>

                {project.external && project.password && (
                  <div className="mt-2 flex flex-col gap-2 rounded-lg border border-black/10 bg-white/70 p-3">
                    <p className="text-sm text-secondary">
                      <span className="font-semibold">Store password:</span>{" "}
                      <span className="font-mono">{project.password}</span>
                    </p>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyPassword(project.password);
                      }}
                      className="group inline-flex w-fit items-center gap-2 rounded-md border border-black px-3 py-2 text-sm font-medium  transition-all duration-300 hover:bg-black hover:text-white"
                    >
                      <Copy
                        size={16}
                        className="transition-colors duration-300 group-hover:text-white"
                      />
                      Copy Password
                    </button>
                  </div>
                )}

                {project.external ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-4 w-fit"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Live Store
                  </a>
                ) : (
                  <button
                    className="btn-primary mt-4 w-fit"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(project.path);
                    }}
                  >
                    View Case Study
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UXDesignPage;