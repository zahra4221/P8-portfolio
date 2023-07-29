import React from "react";
import Header from "../components/Header";
import ProjetList from "../components/ProjetList";

const Projet = () => {
  return (
    <div>
      <Header />
      <div className="background_color">
        <ProjetList />
      </div>
    </div>
  );
};

export default Projet;
