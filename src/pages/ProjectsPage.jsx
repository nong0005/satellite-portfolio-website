import React from "react";
import { motion } from "framer-motion";
import ProjectCards from "../components/ProjectCards";

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <ProjectCards showViewAll={false} />
    </motion.div>
  );
};

export default ProjectsPage;