// import React from 'react';
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-lg text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="alltoys" className="link link-hover">
            All Toys
          </Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <span className="text-2xl">
              <Link to="">
                <AiFillFacebook></AiFillFacebook>
              </Link>
            </span>
            <span className="text-2xl">
              <Link to="">
                <AiFillInstagram></AiFillInstagram>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by Rabiul Ahsan</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
