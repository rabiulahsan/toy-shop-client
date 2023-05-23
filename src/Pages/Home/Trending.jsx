// import React from 'react';

import { useEffect, useState } from "react";
import SingleCard from "../../Shared/SingleCard";

const Trending = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://toy-shop-server-xi.vercel.app/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const discountProducts = products.filter((prod) => prod.trending === true);
  console.log(discountProducts);
  console.log(products);
  return (
    <div className="py-[5%]">
      <p className="text-4xl text-center my-[5%] font-semibold text-gray-500">
        Toys in <span className="text-white font-bold">Trending</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-[5%]">
        {discountProducts.map((product) => (
          <SingleCard key={product._id} product={product}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Trending;
