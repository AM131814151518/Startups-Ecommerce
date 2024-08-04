import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const footer = () => {
  return (
    <>
      <div className=" w-full  border-t-4 border-[#FFBF1B] text-center mt-20"></div>
      <footer className="bg-gray-100">
        <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6  px-4 py-12">
          <div className="flex flex-col items-center justify-center">
            <div>
              <Link>
                <img className="h-16" src={logo} alt="footer-image" />
              </Link>
            </div>
            <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
              <Link to="/">
                <a className="hover:text-[#E50914]  duration-500  text-base cursor-pointer leading-4 text-gray-800">
                  Menu
                </a>
              </Link>
              <Link to="/Contact">
                <a className="hover:text-[#E50914]  duration-500 text-base cursor-pointer leading-4 text-gray-800">
                  Contact us
                </a>
              </Link>
              <Link to="/About">
                <a className="hover:text-[#E50914] duration-500  text-base cursor-pointer leading-4 text-gray-800">
                  About Us
                </a>
              </Link>
            </div>
            <div className="flex items-center gap-x-8 mt-6">
              <div className="cursor-pointer">
                <a href="https://www.facebook.com/grizzlyfries" target="_blank">
                  <FaFacebookF className="text-4xl bg-[#FFBF1B] p-2 rounded-full text-white hover:animate-bounce hover:bg-[#E50914] duration-500" />
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  href="https://www.instagram.com/grizzly_fries/"
                  target="_blank"
                >
                  <AiOutlineInstagram className="text-4xl bg-[#FFBF1B] p-1 rounded-full text-white hover:animate-bounce hover:bg-[#E50914] duration-500" />
                </a>
              </div>

              <div className="cursor-pointer">
                <a
                  href="https://api.whatsapp.com/send/?phone=923189416906&text=Hello%2C+I%27m+interested+to+buy&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <BsWhatsapp className="text-4xl bg-[#FFBF1B] p-2 rounded-full text-white hover:animate-bounce hover:bg-[#E50914] duration-500" />
                </a>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <p className="text-base leading-4 text-gray-800">
                2021 <span className="font-semibold">Grizzly Fries</span>
              </p>
              <div className="border-l border-gray-800 pl-2 ml-2">
                <p className="text-base leading-4 text-gray-800">
                  Inc. All righys reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
