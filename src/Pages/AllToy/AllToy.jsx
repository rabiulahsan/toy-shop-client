// import React from 'react';

import { useEffect, useState } from "react";
import SingleCard from "../../Shared/SingleCard";

const AllToy = () => {
  const [products, setProducts] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    fetch("https://toy-shop-server-xi.vercel.app/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const slicedProducts = products.slice(0, 10);

  const handleShowAll = () => {
    setSeeAll(!seeAll);
  };
  return (
    <div>
      <div className="pb-[5%]">
        <p className="text-4xl text-center my-[5%] font-semibold text-gray-500">
          <span className="text-white font-bold">All Toys</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-[5%] mb-[5%]">
          {seeAll
            ? products.map((product) => (
                <SingleCard key={product._id} product={product}></SingleCard>
              ))
            : slicedProducts.map((product) => (
                <SingleCard key={product._id} product={product}></SingleCard>
              ))}
        </div>
        <div className="flex justify-center items-center">
          {seeAll ? (
            <button className="button-style" onClick={handleShowAll}>
              See Less
            </button>
          ) : (
            <button className="button-style" onClick={handleShowAll}>
              See All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllToy;
