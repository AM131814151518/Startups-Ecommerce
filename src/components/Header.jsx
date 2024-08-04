import React, { useState } from "react";
import logo from "../assets/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("jwt");
    navigate("/Login");
  };

  const jwt = localStorage.getItem("jwt");

  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-10">
        <div className="md:flex flex items-center justify-between bg-white py-2 md:px-10 px-7">
          <div className="cursor-pointer sm:flex items-center">
            <Link to="/">
              <img className="h-16" src={logo} alt="logo" />
            </Link>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-4xl absolute right-8 top-6 cursor-pointer md:hidden hover:text-[#FFBF1B] duration-500"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#FFBF1B] md:bg-white lg:bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            <Link to="/">
              <a>
                <li className="md:ml-8 text-xl md:my-0 my-7 hover:text-[#E50914] duration-500">
                  Menu
                </li>
              </a>
            </Link>
            <Link to="About">
              <a>
                <li className="md:ml-8 text-xl md:my-0 my-7 hover:text-[#E50914] duration-500">
                  About Us
                </li>
              </a>
            </Link>
            <Link to="/Contact">
              <a>
                <li className="md:ml-8 text-xl md:my-0 my-7 hover:text-[#E50914] duration-500">
                  Contact Us
                </li>
              </a>
            </Link>
          </ul>
          <ol className="items-center flex gap-1">
            <Link to="/Cart">
              <li className="text-3xl text-gray-800 cursor-pointer lg:mr-3 hover:text-white rounded-full  hover:bg-[#FFBF1B] p-3 duration-500">
                <i>
                  <BsCart3 />
                </i>
              </li>
            </Link>
            {jwt ? (
              <>
                <li className="text-3xl mr-8 text-gray-800 hover:text-white cursor-pointer hover:bg-[#E50914] p-3 rounded-full duration-700">
                  <i onClick={logout}>
                    <HiOutlineLogout />
                  </i>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Login">
                    <div className="text-gray-700 hover:text-[#FFBF1B] cursor-pointer duration-500 text-3xl justify-end content-end items-end mr-14 hover:animate-bounce">
                      <FaUserCircle className="justify-end content-end items-end" />
                    </div>
                  </Link>
                </li>
              </>
            )}
          </ol>
        </div>
      </div>
      <div className="p-2 w-full pt-8 border-t-2 border-[#FFBF1B] text-center mt-20"></div>
    </>
  );
};
export default Header;
