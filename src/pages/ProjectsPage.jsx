import React from "react";
import ProjectCards from "../components/ProjectCards"; // correct import

const ProjectsPage = () => {
  return (
    <div>
      {/* Display project categories without the bottom "View All Projects" button */}
      <ProjectCards showViewAll={false} />
    </div>
  );
};

export default ProjectsPage;