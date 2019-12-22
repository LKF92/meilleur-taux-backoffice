import React from "react";
import Logo from "./logo.jpg";

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="brand logo" />
      <p>Crédit immobilier : 5 mn pour obtenir le meilleur taux</p>
    </nav>
  );
}
