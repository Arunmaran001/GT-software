// import React from 'react'
// import Customimage from "../Body/Customimage";


// export default function RecipeCard(recipe) {
    
//   return (
//     <div>
//       <div className="recipe-card">
//             <Customimage imgSrc={recipe.image} pt="65%"/>
//             <div className="recipe-card-info">
//                 <img className="auther-img" src={recipe.authorImg} alt=""/>
//                 <p className="recipe-title">{recipe.title}</p>
//                 <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                 <a className="view-btn" href="#!">VIEW RECIPE</a>
//             </div>
//         </div>
//     </div>
//   )
// }

import React from 'react';
import Customimage from "../Body/Customimage"; // Adjust path if necessary

export default function RecipeCard({ image, authorImg, title }) {
  return (
    <div className="recipe-card">
      <Customimage imgSrc={image} pt="65%" />
      <div className="recipe-card-info">
        <img className="author-img" src={authorImg} alt="Author" />
        <p className="recipe-title">{title}</p>
        <p className="recipe-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <a className="view-btn" href="#!">VIEW RECIPE</a>
      </div>
    </div>
  );
}
