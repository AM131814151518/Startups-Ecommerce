import React from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../helpers";

const products = ({ id, name, price, description, img, type }) => {
  return (
    <>
      <div className=" 2xl:container 2xl:mx-auto">
        <div className=" py-6 lg:px-10 md:px-6 px-4">
          
            <div className="relative">
              <div className=" bg-white shadow-lg bg-opacity-50 absolute top-0 right-0 px-2 py-1"></div>
              <div className="relative group">
                <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <img
                  className=" w-full rounded shadow-xl"
                  src={`${BACKEND_URL + img}`}
                  alt="Grizzly Fries Frozen food image"
                />
                <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                  <Link to={`/Product/${id}`}>
                    <button className="bg-[#FFBF1B] rounded-full hover:bg-[#e4a914] shadow hover:shadow-xl font-medium text-base leading-4 text-gray-100 hover:text-white py-3 w-full duration-500">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {type}
                  </h3>
                  <Link to={`/Product/${id}`}>
              <p className="font-semibold text-xl leading-5 text-gray-800 md:mt-6 mt-4 hover:text-[#FFBF1B] cursor-pointer">
                {name}
              </p>
              </Link>
              <p className=" font-medium text-xl leading-5 text-gray-800 mt-4">
                PKR {price}-680
              </p>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default products;


