import React, { useEffect, useState } from 'react';
import { item } from './types';
import ItemCard from './components/ItemCard';
import ListItem from './components/ListItem';
import './App.scss';
import axios from 'axios';

const App: React.FC = () => {

  const [items, setItems] = useState<Array<item>>([]);
  const [shoppingCart, setShoppingCart] = useState<Array<item>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios('http://localhost:3001/items');
        setItems(data);
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  const addItemToCart = (itemId: number): void => {
    const newCartItem = items.find((item: item) => item.id === itemId);
    if(newCartItem) {
      setShoppingCart([...shoppingCart, newCartItem]);
    }
  };

  const removeItemFromCart = (itemId: number): void => {
    const removedCartItem = items.find((item: item) => item.id === itemId);

    if(removedCartItem) {
      const mutableShoppingCart = [ ...shoppingCart ];
      const removedCartItemIndex = items.indexOf(removedCartItem);

      mutableShoppingCart.splice(removedCartItemIndex, 1);

      setShoppingCart(mutableShoppingCart);
    }
  };

  return (
    <div className="App">
      <div className="store-list-container">
        {
          items.map((item, key) =>
            <div key={key} style={{'width': '780px'}}>
              <ItemCard
                id={item.id}
                title={item.name}
                description={item.description}
                image={item.imageUrl}
                type={item.type}
                onAddItemToCart={(itemId: number) => addItemToCart(itemId)}
              />
            </div>
          )
        }
      </div>
      <div className="shopping-cart-container">
        {
          shoppingCart.map((item, key) =>
            <ListItem
              key={key}
              id={item.id}
              title={item.name}
              image={item.imageUrl}
              onRemoveItemFromCart={(itemId: number) => removeItemFromCart(itemId)}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
