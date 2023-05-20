/* eslint-disable react/prop-types */
// import React from 'react';
import { AiFillHeart, AiOutlineArrowRight } from "react-icons/ai";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const SingleCard = ({ product }) => {
  const { _id, title, photoURL, ratings, price, description } = product;
  const [love, setLove] = useState(false);
  const handleBookmark = () => {
    setLove(!love);
  };
  return (
    <div className="card-hover p-4 rounded-lg border border-white">
      <img className="h-[200px] mx-auto rounded-lg" src={photoURL} alt="" />
      <div className="flex justify-between items-center my-2">
        <p className="font-semibold text-xl">{title}</p>
        <span
          className={`text-xl cursor-pointer ${love ? "text-red-600" : ""}`}
          onClick={handleBookmark}
        >
          <AiFillHeart></AiFillHeart>
        </span>
      </div>
      <p>
        {description.slice(0, 80)} <span>...</span>
      </p>

      <Rating
        className="h-[36px] w-[30px]"
        style={{ maxWidth: 80 }}
        value={ratings}
        readOnly={true}
      />
      <p className="mt-[-10px]">$ {price}</p>
      <div className="flex justify-center items-center">
        <Link to={`/${_id}`}>
          <button className="card-btn">
            <span className="flex gap-2 items-center">
              View Details <AiOutlineArrowRight></AiOutlineArrowRight>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
