// import React from 'react';

const Banner = () => {
  // Hero&apos;s House
  return (
    <div className="flex   items-center mt-[4%] mb-[8%]  p-[5%] ">
      <div className="w-[40%]">
        <p className="text-6xl font-bolder my-5">Find your superheroes</p>
        <p>
          A place of superheroes, where you can buy your favoutite superheroes
          at a best deal in your area...
        </p>
      </div>
      <div className="w-1/2 flex relative">
        <img
          className="h-[400px] mx-auto z-10"
          src="https://www.pngmart.com/files/16/Infinity-War-Iron-Man-PNG-Photos.png"
          alt=""
        />
        <img
          className="h-[400px] mx-auto absolute left-[45%] "
          src="https://www.pngmart.com/files/22/Captain-Jack-Sparrow-PNG.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;