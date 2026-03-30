import React from "react";
import { NavLink } from "react-router-dom";

const projects = [
  {
    id: 1,
    img: "/reala.jpg",
    alt: "reala",
    title: "Site E-commerce",
    description: "React + Laravel",
  },
  {
    id: 2,
    img: "/portfolio.jpg",
    alt: "portfolio",
    title: "Portfolio",
    description: "Design moderne",
  },
  {
    id: 3,
    img: "/gest.jpg",
    alt: "gest",
    title: "Application Gestion",
    description: "Dashboard admin",
  },
  {
    id: 4,
    img: "/hotel.jpg",
    alt: "hotel",
    title: "Gestion Hotel",
    description: "Dashboard admin",
  },
];

function Project() {
  return (
    <div className="proj">
      <h1>Mes Projets</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <NavLink
            key={project.id}
            to={`/projet/${project.id}`}
            className="un_projet"
          >
            <div className="cad">
              <img className="img" src={project.img} alt={project.alt} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Project;