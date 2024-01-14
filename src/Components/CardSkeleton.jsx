/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

//for skeleton style
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//ekhane number = ekta specific number dite hobe echara hbe na cz products.length dile kaj kore na
const CardSkeleton = ({ number }) => {
  const skeletonElements = [];

  for (let i = 0; i < number; i++) {
    skeletonElements.push(
      <div key={i}>
        <div className="my-7">
          <Skeleton height={200}></Skeleton>
        </div>
        <div className="">
          <Skeleton count={4} style={{ marginBottom: "12px" }}></Skeleton>
        </div>
      </div>
    );
  }

  return <>{skeletonElements}</>;

  //   return Array(number)
  //     .fill(0)
  //     .map((_, i) => (
  //       <div key={i}>
  //         <div className="my-7">
  //           <Skeleton height={200}></Skeleton>
  //         </div>
  //         <div className="">
  //           <Skeleton count={4.8} style={{ marginBottom: "12px" }}></Skeleton>
  //         </div>
  //       </div>
  //     ));
};

export default CardSkeleton;
