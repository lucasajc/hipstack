import React from 'react';
import './ListItem.scss';
import 'styles/buttons.scss';

type ListItemProps = {
  itemPosition: any,
  title: string,
  image?: string,
  onRemoveItemFromCart?: any,
}

const ListItem: React.FC<ListItemProps> = ({ itemPosition, title, image, onRemoveItemFromCart }) => {

  const handleRemoveItemFromCart = (itemId: number) => {
    onRemoveItemFromCart(itemId);
  };

  return (
    <div className="item-list-container">
        <div className="item-list-image-container">
            <img src={image} className="item-card-image" />
        </div>
        <div className="item-list-details-text">
            <span>
                {title}
            </span>
        </div>
        <div className="item-list-actions">
          <button
            className="button danger add-to-cart-button"
            onClick={() => handleRemoveItemFromCart(itemPosition)}>
            Remove
          </button>
        </div>
    </div>
  );
}

export default ListItem;
