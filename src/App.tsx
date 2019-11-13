import React, { useEffect, useState } from 'react';
import { item } from './types';
import ItemCard from './components/ItemCard';
import './App.scss';
import axios from 'axios';

const App: React.FC = () => {

  const [items, setItems] = useState<Array<item>>([]);

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

  return (
    <div className="App">
      {
        items.map((item, key) =>
          <div key={key} style={{'width': '780px'}}>
            <ItemCard
              title={item.name}
              description={item.description}
              image={item.imageUrl}
            />
          </div>
        )
      }
    </div>
  );
}

export default App;
