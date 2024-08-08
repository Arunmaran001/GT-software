
import React from 'react';
import "./ChiefSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function ChiefCard({ chief }) {
    console.log("chief",chief);
  return (
    <div className="chief-card">
        
      <img src={chief.img} alt={chief.name}  />
      <div className="chief-card-info">
        <h3 className="chief-card-name">{chief.name}</h3>
        <span className="chief-recipe-count">Recipes: <b>{chief.recipesCount}</b></span>
        <span className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></span>
        <div className="chief-icons">
          <a href={`https://www.facebook.com/${chief.name}`} aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={`https://twitter.com/${chief.name}`} aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} style={{color:"#13b4ff"}}/>
          </a>
          <a href={`https://www.instagram.com/${chief.name}`} aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} style={{color:"#ff0056"}}/>
          </a>
        </div>
      </div>
    </div>
  );
}



