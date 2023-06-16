// import React from 'react';

const Service = () => {
  return (
    <>
      <p className="text-4xl font-semibold text-center">Our Services</p>
      <div className="p-[5%] flex flex-col lg:flex-row justify-around items-center gap-8">
        <div className="border border-white py-8 px-10 text-center rounded-lg card-hover">
          <p className="text-3xl font-bold my-2">4650+</p>
          <p className="text-lg font-semibold">Products</p>
        </div>
        <div className="border border-white py-8 px-10 text-center rounded-lg card-hover">
          <p className="text-3xl font-bold my-2">20k+</p>
          <p className="text-lg font-semibold">Sells</p>
        </div>
        <div className="border border-white py-8 px-10 text-center rounded-lg card-hover">
          <p className="text-3xl font-bold my-2">5k+</p>
          <p className="text-lg font-semibold">Customers</p>
        </div>
        <div className="border border-white py-8 px-10 text-center rounded-lg card-hover">
          <p className="text-3xl font-bold my-2">10+</p>
          <p className="text-lg font-semibold">Category</p>
        </div>
      </div>
    </>
  );
};

export default Service;
