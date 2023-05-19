// import React, { useState } from "react";
import { useState } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" z-20 sticky  top-[-40px] lg:top-[-28px]  flex justify-between items-center pt-10 pb-4 lg:pb-6  px-[8%] bg-black ">
      <div className="logo text-4xl font-bold text-blue-500">
        <Link to="/"> Hero&apos;s House</Link>
      </div>
      <div onClick={() => setMenu(!menu)} className=" lg:hidden ">
        <span>
          {menu ? (
            <div className="cursor-pointer text-xl">
              <RxCross2></RxCross2>
            </div>
          ) : (
            <div className="cursor-pointer text-xl">
              <AiOutlineMenu></AiOutlineMenu>
            </div>
          )}
        </span>
      </div>
      <div className="navlink hidden lg:block ">
        <ul className="flex gap-10 text-base text-[#757575]">
          <li className="nav-option-style">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li className="nav-option-style">
            <ActiveLink to="/a">All Toys</ActiveLink>
          </li>
          <li className="nav-option-style">
            <ActiveLink to="/a">My Toys</ActiveLink>
          </li>
          <li className="nav-option-style">
            <ActiveLink to="/a">Add Toy</ActiveLink>
          </li>
          <li className="nav-option-style">
            <ActiveLink to="/a">Blog</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="nav-btn hidden lg:block">
        <button className="all-btn">Start Applying</button>
      </div>

      {/* for responsive  */}

      <div
        className={` absolute  lg:hidden    text-center bg-black text-blue-400 w-full top-[80px]  duration-300 ${
          menu ? "left-[0%]" : "left-[-100%]"
        }`}
      >
        <ul className="flex flex-col  text-base text-[#757575] mt-5">
          <li className="nav-option-style ">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li className="nav-option-style">
            <ActiveLink to="/a">All Toys</ActiveLink>
          </li>
          <li className="nav-option-style">
            <ActiveLink to="/a">My Toys</ActiveLink>
          </li>
          <li className="nav-option-style">
            <ActiveLink to="/a">Add Toy</ActiveLink>
          </li>
          <li className="nav-option-style">
            <ActiveLink to="/a">Blog</ActiveLink>
          </li>
        </ul>
        <div className="  lg:hidden my-[3%]">
          <button className="button-style">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
