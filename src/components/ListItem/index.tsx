import React from 'react';
import { itemType } from 'types';
import './ListItem.scss';
import 'styles/buttons.scss';

type ListItemProps = {
  itemPosition: any,
  id: number,
  title: string,
  description?: string,
  image?: string,
  type?: itemType,
  onRemoveItemFromCart?: any,
}

const ListItem: React.FC<ListItemProps> = ({ itemPosition, id, title, description, image, type, onRemoveItemFromCart }) => {

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
