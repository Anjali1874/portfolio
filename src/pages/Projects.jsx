import { useState } from "react";
import "../styles/Projects.css";
import portfolioVideo from "../assets/portfolio.mp4";


function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      name: "AI Chat Bot",
      description: "Intelligent chatbot using LangChain",
      video: portfolioVideo,
    },
    {
      id: 2,
      name: "Portfolio Website",
      description: "Creative portfolio with animations",
      video: portfolioVideo,
    },
  ];

  const filteredProjects = projectsData.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      id="projects"
      className="projects-container"
      style={{
        backgroundImage: "url(/src/assets/project.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-overlay"></div>

      <div className="laptop-screen">
        <div className="projects-content">
          {!selectedProject ? (
            <>
              <h2 className="projects-title text-4xl font-bold">My Projects</h2>

              <div className="search-container">
                <input
                  type="text"
                  className="search-box"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="search-icon">🔍</span>
              </div>

              <div className="projects-grid">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="project-card"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="project-name">{project.name}</div>
                    <div className="project-description">
                      {project.description}
                    </div>
                  </div>
                ))}
              </div>
              <h1>Click on a project card to watch the video</h1>
            </>
          ) : (
            <div className="video-player">
              <button
                className="back-btn"
                onClick={() => setSelectedProject(null)}
              >
                ⬅ Back
              </button>

              <video
                src={selectedProject.video}
                controls
                autoPlay
                className="project-video"
              />

              <h3>{selectedProject.name}</h3>
              <p>{selectedProject.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
