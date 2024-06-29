import React from 'react';
import "./infos.scss";

const Infos = ({user}) => {
  return (
    <div className="infos">
          
    <div className="nutrition-details">
      <div className="nutrition-item">
        <div className="icon">
          <img  src= "assets/calories-icon.png" />
        </div>
        <div className="text">
          <span>{user.data.keyData.calorieCount}KCal</span>
          <p className="title">Calories</p>
        </div>
      </div>
      <div className="nutrition-item">
        <div className="icon">
        <img  src= "assets/protein-icon.png" />
        </div>
        <div className="text">
          <span>{user.data.keyData.proteinCount}g</span>
          <p className="title">Protéines</p>
        </div>
      </div>
      <div className="nutrition-item">
        <div className="icon">
        <img  src= "assets/carbs-icon.png" />

        </div>
        <div className="text">
          <span>{user.data.keyData.carbohydrateCount}g</span>
          <p className="title">Glucides</p>
        </div>
      </div>
      <div className="nutrition-item">
        <div className="icon">
        <img  src= "assets/fat-icon.png" />

        </div>
        <div className="text">
          <span>{user.data.keyData.lipidCount}g</span>
          <p className="title">Lipides</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Infos