import React, { useState, useEffect } from "react";
import projetData from "../data/projet";
import "../sass/projet.scss";

const ProjetsList = () => {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    setProjets(projetData);
  }, []);

  return (
    <div>
      <h1 className="projet_title">Mes projets</h1>
      <div className="projets-list">
        {projets.map((projet) => (
          <div key={projet.id} className="projet-card">
            <div className="projet-image">
              <img
                src={projet.cover}
                alt={projet.title}
                className="projet-image-src"
              />
              <div className="projet-details">
                <h2 className="projet-title">{projet.title}</h2>
                <p className="projet-description">{projet.description}</p>
              </div>
            </div>
            <div className="link_projet">
              <a href={projet.link} target="_blank" rel="noopener noreferrer">
                Lien Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjetsList;
