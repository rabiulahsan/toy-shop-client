// import React from 'react';

import { useEffect, useState } from "react";
import SingleCard from "../../Shared/SingleCard";

const Discount = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const discountProducts = products.filter((prod) => prod.discount >= 15);
  console.log(discountProducts);
  console.log(products);
  return (
    <div className="pb-[5%]">
      <p className="text-4xl text-center my-[5%] font-semibold">
        Toys in offer
      </p>

      <div className="grid grid-cols-3 gap-6 px-[5%]">
        {discountProducts.map((product) => (
          <SingleCard key={product._id} product={product}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Discount;
