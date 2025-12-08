import React from "react";
import { motion } from "framer-motion";
import ProjectCards from "../components/ProjectCards";

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}        // Start slightly above and invisible
      animate={{ opacity: 1, y: 0 }}          // Animate to visible and original position
      transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth, natural easing
    >
      {/* Display project categories without the bottom "View All Projects" button */}
      <ProjectCards showViewAll={false} />
    </motion.div>
  );
};

export default ProjectsPage;