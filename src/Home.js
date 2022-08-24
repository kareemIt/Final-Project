import React from 'react';
import TShirtPost from './components/TShirtPost';
import HoodiesPost from './components/HoodiesPost';
import { shirts, hoodies } from './utils/Shirts';

const Home = () => {
  return (
    <div className="Home">
      <h1>Ts4Teens</h1>
      <div className="picture-container">
        <img
          className="happy-people"
          src="https://i0.wp.com/www.dailycal.org/assets/uploads/2019/06/coloredited_emilybi_fashion-900x580.jpg"
        />
      </div>
      <section className="inventory">
        {shirts.map((shirt, index) => (
          <TShirtPost arrShirts={shirt} index={index} />
        ))}
        {hoodies.map((shirt, index) => (
          <HoodiesPost arrHoodies={shirt} key={index} />
        ))}
      </section>
    </div>
  );
};
export default Home;
