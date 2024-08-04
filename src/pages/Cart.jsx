import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { FaUserTimes } from "react-icons/fa";
import CheckoutForm from "../components/CheckoutForm";

const Cart = () => {
  const [checkout, setCheckout] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const [show, setShow] = useState(false);
  const { isEmpty, items, cartTotal, removeItem } = useCart();
  if (isEmpty) return <h1>Cart Is empty</h1>;
  if (items) console.log(items);

  if (checkout) {
    return (
      <div className="">
        <h1 className="text-center text-4xl font-bold">Address</h1>

        <CheckoutForm />
        <button className=" lg:ml-16 ml-8 focus:outline-none bg-[#E50914] transition duration-150 ease-in-out hover:bg-red-700 rounded text-white px-8 py-3 text-sm leading-6" onClick={() => setCheckout(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="flex items-center justify-center py-8">
          <button
            onClick={() => setShow(!show)}
            className="py-2 px-10 rounded hover:bg-[#e4a914] bg-[#FFBF1B] text-white duration-500"
          >
            Open Cart
          </button>
        </div>
        {show && (
          <div
            className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
            id="chec-div"
          >
            <div
              className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
              id="checkout"
            >
              <div className="flex md:flex-row flex-col justify-end" id="cart">
                <div
                  className="lg:auto w-full md:pl-10 lg:py-32 pl-4 pr-10 md:pr-4 md:py-12 py-32 bg-white overflow-y-auto overflow-x-hidden h-screen"
                  id="scroll"
                >
                  <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <Link to="/">
                      <p className="text-sm pl-2 leading-none">Back</p>
                    </Link>
                  </div>
                  <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                    Bag
                  </p>
                  {items.map((item) => {
                    return (
                      <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                        <div className="w-1/4">
                          <img
                            src={item.img}
                            alt
                            className="w-full h-full object-center object-cover rounded"
                          />
                        </div>
                        <div className="md:pl-3 md:w-3/4">
                          <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                            {item.type}
                          </p>
                          <div className="flex items-center justify-between w-full pt-1">
                            <p className="text-base font-black leading-none text-gray-800">
                              {item.name}
                            </p>
                            <div className="py-2 px-1 border border-yellow-400 mr-6 focus:outline-none">
                              <span className="text-sm font-bold">qty:</span>{" "}
                              {item.quantity}
                            </div>
                          </div>

                          <p className="text-base leading-3 text-gray-600 py-4">
                            Weight: 1kg
                          </p>
                          <div className="flex items-center justify-between pt-5 pr-6">
                            <div className="flex itemms-center">
                              <p
                                onClick={() => {
                                  removeItem(item.id);
                                }}
                                className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                              >
                                Remove
                              </p>
                            </div>
                            <p className="text-base font-black leading-none text-gray-800">
                              PKR {item.price} × {item.quantity} ={" "}
                              {item.itemTotal}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="xl:w-1/2 md:w-1/3 w-full bg-gray-100 h-full">
                  <div className="flex flex-col md:h-screen px-14 pb-20 pt-32 justify-between overflow-y-auto">
                    <div>
                      <p className="text-4xl font-black leading-9 text-gray-800">
                        Summary
                      </p>
                      <div className="flex items-center justify-between pt-16">
                        <p className="text-base leading-none text-gray-800">
                          Subtotal
                        </p>
                        <p className="text-base leading-none text-gray-800">
                          PKR {cartTotal}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-5">
                        <p className="text-base leading-none text-gray-800">
                          Shipping
                        </p>
                        <p className="text-base leading-none text-gray-800">
                          PKR 50
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                        <p className="text-2xl leading-normal text-gray-800">
                          Total
                        </p>
                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                          PKR {cartTotal}
                        </p>
                      </div>
                      {jwt ? (
                        <button
                          onClick={() => setCheckout(true)}
                          className="text-base leading-none w-full py-5 hover:bg-[#e4a914] bg-[#FFBF1B] duration-500 rounded  border-yellow-500 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 text-white"
                        >
                          Checkout
                        </button>
                      ) : (
                        <div className="bg-[#E50914] p-3 rounded text-white w-auto">
                          Please Login/Register to proceed.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {` /* width */
        #scroll::-webkit-scrollbar {
            width: 1px;
        }

        /* Track */
        #scroll::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        #scroll::-webkit-scrollbar-thumb {
            background: rgb(133, 132, 132);
        }
`}
      </style>
    </>
  );
};

export default Cart;
