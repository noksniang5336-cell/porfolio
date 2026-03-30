import React from "react";
import { useParams } from "react-router-dom";

// ✅ Reprends EXACTEMENT les mêmes données que dans Project
const projects = [
  {
    id: 1,
    img: "/reala.jpg",
    title: "Site E-commerce",
    description: "React + Laravel",
    github: "#",
    site: "#",
    techno: "React, Laravel, MySQL",
  },
  {
    id: 2,
    img: "/portfolio.jpg",
    title: "Portfolio",
    description: "Design moderne",
    github: "#",
    site: "#",
    techno: "React, CSS",
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

const Detail = () => {
  const { id } = useParams();

  // ⚠️ convertir id en nombre
  const le_projet = projects.find((projet) => projet.id === parseInt(id));

  if (!le_projet) {
    return <p>Projet introuvable</p>;
  }

  return (
    <div className="detail">
      <h1 className="title">Détail du projet</h1>

      <div className="box_detail">
        {/* Image */}
        <div className="image_container">
          <img src={le_projet.img} alt={le_projet.title} />
        </div>

        {/* Infos */}
        <div className="info_container">
          <h2>{le_projet.title}</h2>

          <p className="desc">
            {le_projet.description ||
              "Projet moderne développé avec les meilleures pratiques."}
          </p>

          <div className="links">
            <a href={le_projet.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={le_projet.site} target="_blank" rel="noreferrer">
              Voir le site
            </a>
          </div>

          <div className="techno">
            <strong>Technologies :</strong>
            <p>{le_projet.techno}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;