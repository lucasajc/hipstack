import React from 'react';
import './ItemCard.scss';
import '../../styles/buttons.scss';

type ItemCardProps = {
  title: string,
  description: string,
  image: string,
}

const ItemCard: React.FC<ItemCardProps> = ({ title, description, image }) => {

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
          </div>
          <span className="limited-lines-text item-card-description">
            {description}
          </span>
        </div>
        <div className="item-card-details-actions">
          <button className="button primary add-to-cart-button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
