import React from 'react';
import '../styles/project.css';

const Project = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="row">
        <div className="col-1-of-3">
          <div className="project">
            <div className="project-image"></div>
            <h3 className="project-title">Project 1</h3>
            <p className="project-description">P1</p>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="project">
            <div className="project-image"></div>
            <h3 className="project-title">Project 2</h3>
            <p className="project-description">p2</p>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="project">
            <div className="project-image"></div>
            <h3 className="project-title">Project 3</h3>
            <p className="project-description">p3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
