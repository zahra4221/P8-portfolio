import React from "react";
import Header from "../components/Header";
import { MdPerson, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faPersonCircleQuestion } from "@fortawesome/free-solid-svg-icons";

import "../sass/presentation.scss";

const Présentation = () => {
  return (
    <div>
      <Header />
      <div className="background-gradient">
        <div className="container">
          <div className="right-container">
            <h1 className="name">ZS</h1>
            <p className="nom">Zahra SHAKIL</p>
            <p className="metier">Developpeur web</p>
            <div className="information_line">
              <p>
                <MdPerson /> Âge : 29 ans
              </p>
              <p>
                <MdEmail /> Email : shakilzahra1@gmail.com
              </p>
              <p>
                <MdPhone /> Téléphone : +33619022879
              </p>
              <p>
                <MdLocationOn /> Lieu : Grenoble
              </p>
            </div>
          </div>
          <div className="left-container">
            <div className="service">
              <h1>Mes services</h1>
              <div className="service_line">
                <div className="service_item">
                  <FontAwesomeIcon icon={faLaptopCode} className="fa-flip" />
                  <p>
                    Front-end
                    <br />
                    développeur
                  </p>
                </div>
                <div className="service_item">
                  <FontAwesomeIcon icon={faDatabase} bounce />
                  <p>
                    Back-end
                    <br />
                    développeur
                  </p>
                </div>
                <div className="service_item">
                  <FontAwesomeIcon icon={faGear} spin />
                  <p>Optimisation et debug</p>
                </div>
                <div className="service_item">
                  <FontAwesomeIcon icon={faPersonCircleQuestion} beat />
                  <p>Gestion de projet et outils de developpeur</p>
                </div>
              </div>
            </div>
            <div className="competences">
              <h1>Mes compétences</h1>
              <div className="competence_line">
                <div className="competence_item">
                  <p>Html</p>
                </div>
                <div className="competence_item">
                  <p>CSS</p>
                </div>
                <div className="competence_item">
                  <p>JavaScript</p>
                </div>
                <div className="competence_item">
                  <p>React</p>
                </div>
                <div className="competence_item">
                  <p>Sass</p>
                </div>
                <div className="competence_item">
                  <p>Node.js</p>
                </div>
                <div className="competence_item">
                  <p>MongoDB</p>
                </div>
                <div className="competence_item">
                  <p>Postman</p>
                </div>
                <div className="competence_item">
                  <p>Github</p>
                </div>
                <div className="competence_item">
                  <p>Vscode</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Présentation;
