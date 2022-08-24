import React from 'react';
import HoodiesPost from './components/HoodiesPost';
import { hoodies } from './utils/Shirts';

const Hoodies = () => {
  return (
    <div className="Hoodies">
      <h1>Hoodies Content</h1>
      <section className="inventory">
        {hoodies.map((hoodie, index) => (
          <HoodiesPost arrHoodies={hoodie} key={index} />
        ))}
      </section>
    </div>
  );
};
export default Hoodies;
