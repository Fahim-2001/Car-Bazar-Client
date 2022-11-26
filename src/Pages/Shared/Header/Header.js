import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="navbar bg-base-100 p-5">
      <div className="flex-1">
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="Logo" style={{ width: "100px" }} />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link>
              Categories
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 bg-base-100">
              <li>
                <Link to="/category/101">Sedan</Link>
              </li>
              <li>
                <Link to="/category/102">SUV</Link>
              </li>
              <li>
                <Link to="/category/103">Microbus</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
