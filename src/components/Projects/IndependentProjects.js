import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/indProjectsData";

import "./IndependentProjects.css";
import SingleProject from "./SingleProject/IndProject";

function IndependentProjects() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Independent Projects</h1>
          </div>
          <div className="projects--body">
            <div className="projects--newBodyContainer">
              {projectsData.map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IndependentProjects;
