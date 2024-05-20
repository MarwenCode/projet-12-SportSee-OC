import React from 'react';
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navbar-logo">
     
        <img src="../assets/logo-only.png" alt="Logo" className="logo-image" />
        <span className="navbar-title">SportSee</span>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">Accueil</li>
        <li className="navbar-item">Profil</li>
        <li className="navbar-item">Réglage</li>
        <li className="navbar-item">Communauté</li>
      </ul>
    </div>
  );
};

export default Navbar;
