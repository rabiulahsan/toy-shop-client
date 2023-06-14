/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleCard from "../../Shared/SingleCard";
import { useEffect, useState } from "react";
const ToyTabs = () => {
  const [alltoy, setAlltoy] = useState([]);
  const [marvel, setMarvel] = useState([]);
  const [dc, setDc] = useState([]);
  const [pirates, setPirates] = useState([]);

  const handleMarvel = () => {};
  const handleDc = () => {};
  const handlePirates = () => {};

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setAlltoy(data));
    const remaining = alltoy.filter((toy) => toy?.category === "marvel");
    setMarvel(remaining);
  }, [handleMarvel]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setAlltoy(data));
    const remaining = alltoy.filter((toy) => toy?.category === "dc");
    setDc(remaining);
  }, [handleDc]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setAlltoy(data));
    const remaining = alltoy.filter((toy) => toy?.category === "pirates");
    setPirates(remaining);
  }, [handlePirates]);

  return (
    <div className="my-[5%] px-[8%] text-white">
      <p className="text-3xl text-white text-center font-semibold mb-[5%]">
        Toy Tabs
      </p>
      <Tabs>
        <TabList className="my-[5%]">
          <Tab onClick={handleMarvel}>Marvel</Tab>
          <Tab onClick={handleDc}>DC</Tab>
          <Tab onClick={handlePirates}>Pirates of the Carrebean</Tab>
        </TabList>

        {/* panel 1 */}
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-[5%]">
            {marvel.map((product) => (
              <SingleCard key={product._id} product={product}></SingleCard>
            ))}
          </div>
          <h2>Any content 1</h2>
        </TabPanel>

        {/* panel 2 */}

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-[5%]">
            {dc.map((product) => (
              <SingleCard key={product._id} product={product}></SingleCard>
            ))}
          </div>
        </TabPanel>

        {/* panel 3  */}
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-[5%]">
            {pirates.map((product) => (
              <SingleCard key={product._id} product={product}></SingleCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToyTabs;
