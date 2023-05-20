// import React from "react";

import { useLoaderData } from "react-router-dom";
import Trending from "./../Home/Trending";
import { Rating } from "@smastrom/react-rating";

const ToyDetails = () => {
  const loadedData = useLoaderData();
  const { title, photoURL, ratings, price, description } = loadedData;
  console.log(loadedData);
  return (
    <div>
      <div className="flex my-[5%] px-[8%]">
        <div className="w-1/2 p-6 border border-white">
          <img src={photoURL} alt="" className="h-[400px] mx-auto" />
        </div>
        <div className="w-1/2 p-10">
          <p className="font-semibold text-2xl my-4">{title}</p>
          <p className="text-gray-400 mb-6">{description}</p>

          <Rating
            className="h-[36px] w-[30px]"
            style={{ maxWidth: 80 }}
            value={ratings}
            readOnly={true}
          />
          <p>Ratings: {ratings}</p>
          <p className="text-2xl font-semibold my-4">${price}</p>
          <button className="button-style"> Buy Now</button>
        </div>
      </div>
      {/* trending section  */}
      <Trending></Trending>
    </div>
  );
};

export default ToyDetails;
