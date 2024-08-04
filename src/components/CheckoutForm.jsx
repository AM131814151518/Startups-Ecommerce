import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { BACKEND_URL } from "../helpers";

const Checkout = () => {
  const { cartTotal, items } = useCart();
  const { emptyCart } = useCart();
  const [formData, setFormData] = useState({});
  const [orderProcessing, setOrderProcessing] = useState(false);
  const makeOrderRequest = async (allformData) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/orders`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify(allformData),
      });
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const allformData = {
      ...formData,
      Amount: cartTotal,
      items: items,
    };
    console.log(allformData);
    setOrderProcessing(true);
    await makeOrderRequest(allformData);
    setOrderProcessing(false);
    emptyCart();
  };
  if (orderProcessing) return <h1>Your Order IS Processing Please wait!</h1>;

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="container mx-auto pt-16">
        <div className="lg:flex">
          <div className="xl:w-3/5 lg:w-3/5 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
            <form
              onSubmit={handleSubmit}
              className="bg-white py-4 px-8 rounded-tr rounded-br"
            >
              <h1 className="text-4xl text-gray-800 font-extrabold mb-6">
                Enter Details
              </h1>
              <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                  <div className="flex flex-col">
                    <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                      Name
                    </label>
                    <input
                      required
                      id="Full Name"
                      name="Name"
                      type="text"
                      onChange={handleChange}
                      className="focus:outline-none focus:border focus:border-yellow-400 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                  <div className="flex flex-col">
                    <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                      Address
                    </label>
                    <input
                      required
                      id="ShippingAdress"
                      name="ShippingAdress"
                      type="text"
                      onChange={handleChange}
                      className="focus:outline-none focus:border focus:border-yellow-400 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="Shipping Address"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <div className="w-2/4 max-w-xs">
                  <div className="flex flex-col">
                    <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                      Phone
                    </label>
                    <input
                      required
                      id="phone"
                      name="Phone"
                      type="tel"
                      onChange={handleChange}
                      className="focus:outline-none focus:border focus:border-yellow-400 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="03000-000000"
                    />
                  </div>
                </div>
                <div className="w-2/4 max-w-xs">
                  <div className="flex flex-col">
                    <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                      Pin Code
                    </label>
                    <input
                      required
                      id="pincode"
                      name="Pincode"
                      type="tel"
                      onChange={handleChange}
                      className="focus:outline-none focus:border focus:border-yellow-400 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="000000"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-6">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-semibold text-gray-800 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Any special note."
                    name="Message"
                    onChange={handleChange}
                    className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-yellow-400"
                    rows={8}
                    id="message"
                  />
                </div>
                <button
                  type="submit"
                  className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
