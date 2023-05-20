// import React from 'react';

import Banner from "./Banner";
import Discount from "./Discount";
import Footer from "./Footer";
import Trending from "./Trending";

const Home = () => {
  return (
    <div className="px-[8%]">
      {/* banner section */}
      <Banner></Banner>
      {/* discount  */}
      <Discount></Discount>
      {/* trending section  */}
      <Trending></Trending>
      {/* footer section  */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
