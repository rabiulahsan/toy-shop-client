// import React from 'react';

import Banner from "./Banner";
import Discount from "./Discount";

import Trending from "./Trending";
import Service from "./Service";

const Home = () => {
  return (
    <div className="px-[8%]">
      {/* banner section */}
      <Banner></Banner>
      {/* discount  */}
      <Discount></Discount>
      {/* trending section  */}
      <Trending></Trending>
      {/* service section  */}
      <Service></Service>
    </div>
  );
};

export default Home;
