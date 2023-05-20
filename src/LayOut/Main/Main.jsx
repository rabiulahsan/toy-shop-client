// import React from 'react';
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import "./Main.css";

import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
