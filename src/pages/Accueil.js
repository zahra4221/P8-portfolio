import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Background from "../components/Background";
import "../sass/accueil.scss";

const Accueil = () => {
  const [typedTextH1, setTypedTextH1] = useState("");
  const [typedTextP, setTypedTextP] = useState("");
  const textToTypeH1 = "Bonjour, je m'appelle Zahra SHAKIL.";
  const textToTypeP = "Bienvenue sur mon portfolio de développeur !";
  const [isH1Typed, setIsH1Typed] = useState(false);

  useEffect(() => {
    let currentIndexH1 = 0;

    const typeTextH1 = () => {
      if (currentIndexH1 <= textToTypeH1.length) {
        setTypedTextH1(textToTypeH1.slice(0, currentIndexH1) + "|");
        currentIndexH1++;
        setTimeout(typeTextH1, 100);
      } else {
        setTypedTextH1(textToTypeH1);
        setIsH1Typed(true); //
      }
    };

    typeTextH1();
  }, []);

  useEffect(() => {
    if (isH1Typed) {
      let currentIndexP = 0;

      const typeTextP = () => {
        if (currentIndexP <= textToTypeP.length) {
          setTypedTextP(textToTypeP.slice(0, currentIndexP) + "|");
          currentIndexP++;
          setTimeout(typeTextP, 50);
        } else {
          setTypedTextP(textToTypeP);
        }
      };

      typeTextP();
    }
  }, [isH1Typed]);

  return (
    <div>
      <Header />
      <div className="message">
        <Background />
        <div className="presentation">
          <h1>{typedTextH1}</h1>
          <p>{typedTextP}</p>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
