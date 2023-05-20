// import React from 'react';

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row  items-center mt-[4%] mb-[5%]  p-[5%] ">
      <div className="lg:w-[40%]">
        <p className="text-6xl font-bolder my-5">
          {" "}
          <span className="text-gray-500 text-5xl">Find your</span> Superheroes
        </p>
        <p className="my-3">
          A place of superheroes, where you can buy your favoutite superheroes
          at a best deal in your area...
        </p>
        <button className="button-style">Shop Now</button>
      </div>
      <div className="lg:w-1/2 flex relative">
        <img
          className="h-[300px] lg:h-[400px]  lg:mx-auto z-10"
          src="https://www.pngmart.com/files/16/Infinity-War-Iron-Man-PNG-Photos.png"
          alt=""
        />
        <img
          className="h-[300px] lg:h-[400px] mx-auto absolute left-[60%] lg:left-[45%] "
          src="https://www.pngmart.com/files/22/Captain-Jack-Sparrow-PNG.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
