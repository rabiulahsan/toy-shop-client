/* eslint-disable react/prop-types */
// import React from 'react';

const SingleCard = ({ product }) => {
  const { _id } = product;

  return <div className="bg-red-500">{_id}</div>;
};

export default SingleCard;
