import React from "react";
import { Link } from "react-router-dom";
import "../sass/header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/presentation">Presentation</Link>
          </li>
          <li>
            <Link to="/projet">Projets</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
