// import React from 'react';
import Navbar from "../../Shared/Navbar/Navbar";
import "./Main.css";

import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Main;
