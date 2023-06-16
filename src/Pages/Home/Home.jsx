// import React from 'react';

import Banner from "./Banner";
import Discount from "./Discount";

import Trending from "./Trending";
import Service from "./Service";

// import ToyTabs from "./ToyTabs";

const Home = () => {
  return (
    <div className="px-[8%]">
      {/* banner section */}
      <Banner></Banner>

      {/* discount  */}
      <Discount></Discount>

      {/* trending section  */}
      <Trending></Trending>

      {/* alltoy section in tabs */}
      {/* <ToyTabs></ToyTabs> */}

      {/* service section  */}
      <Service></Service>
    </div>
  );
};

export default Home;
