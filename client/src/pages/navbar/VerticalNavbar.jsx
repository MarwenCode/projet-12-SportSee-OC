import React from 'react';
import "./verticalnavbar.scss";

const VerticalNavbar = () => {
  return (
    <div className="verticalnavbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <img src="/assets/yoga.png" alt="Yoga" className="navbar-icon" />
        </li>
        <li className="navbar-item">
          <img src="/assets/natation.png"alt="Vélo" className="navbar-icon" />
        </li>
        <li className="navbar-item">
          <img src="/assets/velo.png" alt="Natation" className="navbar-icon" />
        </li>
        <li className="navbar-item">
          <img src="/assets/muscu.png" alt="Musculation" className="navbar-icon" />
        </li>
      </ul>

      <div className="copie">
        <p>Copyright, SportSee 2024</p>
      </div>
    </div>
  )
}

export default VerticalNavbar