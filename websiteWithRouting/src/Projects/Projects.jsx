import { Outlet, useParams } from "react-router-dom";

function Projects() {
  const { type } = useParams() || {}; // won't throw error on `/projects`

  return (
    <div>
      <h1>Our Projects</h1>
      {type && <h2>Showing {type} Projects</h2>}
      <Outlet /> {/* Loads WebProjects or MobileProjects */}
    </div>
  );
}

export default Projects;
