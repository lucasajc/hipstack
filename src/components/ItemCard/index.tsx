import React from 'react';
import { itemType } from 'types';
import './ItemCard.scss';
import 'styles/buttons.scss';

type ItemCardProps = {
  id: number,
  title: string,
  description: string,
  image: string,
  type: itemType,
  onAddItemToCart: any,
}

const ItemCard: React.FC<ItemCardProps> = ({ id, title, description, image, type, onAddItemToCart }) => {

  const handleAddToCart = (itemId: number) => {
    onAddItemToCart(itemId);
  };

  return (
    <div className="item-card-container">
      <div className="item-card-image-container">
        <img src={image} className="item-card-image" />
      </div>
      <div className="item-card-details">
        <div className="item-card-details-text">
          <span className="limited-lines-text item-card-title">
            {title}
          </span>
          <div className="item-card-price-container">
            <span>
              Price:
            </span>
            <span className="item-card-price">
              $5.000,00
            </span>
            <span className="item-card-price">
              {type}
            </span>
          </div>
          <span className="limited-lines-text item-card-description">
            {description}
          </span>
        </div>
        <div className="item-card-details-actions">
          <button
            className="button primary add-to-cart-button"
            onClick={() => handleAddToCart(id)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
