import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function CartItem({ item, onEdit, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(item.title);

    const handleEdit = () => {
        if (isEditing) {
            onEdit({ ...item, title: updatedTitle });
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt="Recipe" />
            <img src={item.authorImg} alt="Author" />
            {isEditing ? (
                <input
                    type="text"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                />
            ) : (
                <p>{item.title}</p>
            )}
            <Button onClick={handleEdit}>
                {isEditing ? 'Save' : 'Edit'}
            </Button>
            <Button onClick={onDelete}>Delete</Button>
        </div>
    );
}

export default CartItem;
