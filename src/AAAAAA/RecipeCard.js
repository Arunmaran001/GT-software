import React from 'react';
import Customimage from "../Body/Customimage";
import { Button, Container } from 'react-bootstrap';

export default function RecipeCard({ image, authorImg, title, onAddToCart }) {
  const handleAddToCart = () => {

    if (onAddToCart) {
      onAddToCart({ image, authorImg, title });
    }
  };

  return (
   
    <div className="recipe-card">
       <Container>
      <Customimage imgSrc={image} pt="65%" />
      <div className="recipe-card-info">
        <img className="author-img" src={authorImg} alt="Author" />
        <p className="recipe-title">{title}</p>
        <p className="recipe-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <Button style={{padding:"right"}} onClick={handleAddToCart}>
          ADD
        </Button>
      </div>
      </Container>
    </div>
    
  );
}
