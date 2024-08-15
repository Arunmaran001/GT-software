// import React from 'react'
// import RecipeCard from './RecipeCard';
// function Shopingcart() {
//     const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     setCart([...cart, item]);
//   };
//   return (
//     <div>Shopingcart
//         <div>
//       <RecipeCard
//         image="path/to/image.jpg"
//         authorImg="path/to/author.jpg"
//         title="Delicious Recipe"
//         onAddToCart={addToCart}
//       />
     
//     </div>
//     </div>
//   )
// }

// export default Shopingcart

import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import CartItem from './CartItem'; // Create this component in the next step

function Shopingcart() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const handleEdit = (index, updatedItem) => {
        const newCart = [...cart];
        newCart[index] = updatedItem;
        setCart(newCart);
    };

    const handleDelete = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>No items in the cart</p>
            ) : (
                cart.map((item, index) => (
                    <CartItem
                        key={index}
                        item={item}
                        onEdit={(updatedItem) => handleEdit(index, updatedItem)}
                        onDelete={() => handleDelete(index)}
                    />
                ))
            )}
            <RecipeCard
                image="path/to/image.jpg"
                authorImg="path/to/author.jpg"
                title="Delicious Recipe"
                onAddToCart={addToCart}
            />
        </div>
    );
}

export default Shopingcart;
