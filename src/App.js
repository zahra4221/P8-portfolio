import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Presentation from "./pages/Presentation";
import Projet from "./pages/Projet";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
