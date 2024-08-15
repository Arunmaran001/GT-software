import React from 'react';
import "../AAAAAA/Recipessection.css";
import PreviousSearches from '../AAAAAA/PreviousSearches';
import RecipeCard from '../AAAAAA/RecipeCard';
import pc1 from "../images/image1.jpg";
import pc2 from "../images/image2.jpg";
import pc3 from "../images/image3.jpg";
import pc4 from "../images/image4.jpg";
import pc5 from "../images/image5.jpg";
import pc6 from "../images/image6.jpg";
import pc7 from "../images/image7.jpg";
import pc8 from "../images/image8.jpg";
import pc9 from "../images/image9.jpg";
import a from "../images/chief1.jpg";
import b from "../images/chief2.jpg";
import c from "../images/chief3.jpg";
import d from "../images/chief4.jpg";
import e from "../images/chief5.jpg";
import f from "../images/chief6.jpg";
import { Container } from 'react-bootstrap';


export default function Recipes() {
  const recipes = [
    { title: "Chicken Pan Pizza", image: pc1, authorImg: a },
    { title: "Spaghetti and Meatballs", image: pc2, authorImg: b },
    { title: "American Cheese Burger", image: pc3, authorImg: c },
    { title: "Mutton Biriyani", image: pc4, authorImg: d },
    { title: "Japanese Sushi", image: pc5, authorImg: e },
    { title: "Chicken Pan Pizza", image: pc6, authorImg: f },
    { title: "Spaghetti and Meatballs", image: pc7, authorImg: d },
    { title: "American Cheese Burger", image: pc8, authorImg: c },
    { title: "Mutton Biriyani", image: pc9, authorImg: a },
    { title: "Japanese Sushi", image: pc5, authorImg: c },
    { title: "American Cheese Burger", image: pc5, authorImg: e },
    { title: "Mutton Biriyani", image: pc5, authorImg: d }
  ].sort(() => Math.random() - 0.5);

  

  return (
    <div>
      <Container fluid>
        <PreviousSearches />
        <div className="recipes-header">
          
          
        </div>
        <div className="recipes-change">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      </Container>
    </div>
  );
}
