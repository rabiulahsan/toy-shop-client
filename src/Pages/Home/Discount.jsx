// import React from 'react';

import { useEffect, useState } from "react";
import SingleCard from "../../Shared/SingleCard";
import Aos from "aos";
import "aos/dist/aos.css";

const Discount = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://toy-shop-server-xi.vercel.app/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);

  const discountProducts = products.filter((prod) => prod.discount >= 15);
  console.log(discountProducts);
  console.log(products);
  return (
    <div className="pb-[5%]" data-aos="fade-right">
      <p className="text-4xl text-center my-[5%] font-semibold text-gray-500">
        Toys in <span className="text-white font-bold">Offer</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-[5%]">
        {discountProducts.map((product) => (
          <SingleCard key={product._id} product={product}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Discount;
