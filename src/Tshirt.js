import React from 'react';
import TShirtPost from './components/TShirtPost';
import { shirts } from './utils/Shirts';

const Tshirt = () => {
  return (
    <div className="home">
      <h1>T-shirts Content</h1>
      <section className="inventory">
        {shirts.map((shirt, index) => (
          <TShirtPost arrShirts={shirt} index={index} />
        ))}
      </section>
    </div>
  );
};
export default Tshirt;
