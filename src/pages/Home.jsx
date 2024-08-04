import React from "react";
import Banner from "../assets/Banner.jpg";
import Products from "./Products";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../gqloperations/queries";

const Home = () => {
  const { loading,error, data } = useQuery(GET_ALL_PRODUCTS);
  if (loading) return
  <h1>loading</h1> ;

  if (data) {
    console.log(data);
  }
  return (
    <>
      <div>
        <div className="w-auto md:w-auto h-auto lg:w-auto lg:h-auto lg:pl-8 lg:pr-8 -mt-10">
          <img src={Banner} alt="" />
        </div>
        <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
                <p className="font w-10/12 my-4 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Our Menu</p>
            </div>
            <div className=" py-6 lg:px-10 md:px-6 px-4">
            <p className=" font-normal text-sm leading-3 text-gray-600 ">Home / Menu / Items</p>
                <hr className=" w-full bg-gray-200 my-6" />

                <div className=" flex justify-between items-center">
                    
                    <p className="cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600 text-right">Showing 11 items</p>
                </div>
                </div>
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          
        {data.products.data.map(({ id, attributes }) => {
            return (
              <Products
                id={id}
                key={id}
                name={attributes.name}
                price={attributes.price}
                description={attributes.description}
                type={attributes.type}
                img={attributes.image.data.attributes.url}
              />
            );
          })}
          
        </div>
        <div className="w-auto md:w-auto h-auto lg:w-auto lg:h-auto lg:pl-8 lg:pr-8 -mt-10 lg:my-16">
          <img src={Banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
