import React from "react";
import { Link } from "react-router-dom";



const projects = [
  {
    img: "/reala.jpg", // ✅ On écrit directement le chemin relatif au dossier public
    alt: "reala",
    title: "Site E-commerce",
    description: "React + Laravel",
  },
  {
    img: "/portfolio.jpg",
    alt: "portfolio",
    title: "Portfolio",
    description: "Design moderne",
  },
  {
    img: "/gest.jpg",
    alt: "gest",
    title: "Application Gestion",
    description: "Dashboard admin",
  },
  {
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
        {projects.map((project, index) => (
          <div className="cad" key={index}>
            {/* L'image sera chargée directement via l'URL du site */}
            <img className="img" src={project.img} alt={project.alt} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;