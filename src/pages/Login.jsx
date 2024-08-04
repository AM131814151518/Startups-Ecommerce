import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { LOGIN_USER } from "../gqloperations/mutation";
import Singup from "./Signup";


const Login = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    loginUser({
      variables:{
        input:formData
      }
    })
  }

  const [formData, setFormData] = useState({})
  
  const [loginUser, {loading, error, data}] = useMutation(LOGIN_USER)
  if(loading) return <h1>loging in.....</h1>
  if (data) {
    localStorage.setItem("jwt" , data.login.jwt)
    navigate("/")
  }

  const handleChange = (e) =>{
    setFormData ({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  return (
    <>
    {
      error && <div className="text-white bg-[#E50914] w-60 ml-4 p-4 rounded">{error.message}</div>
    }
      <div className="bg-white mx-2 mt-8 md:mb-20 md:mx-20 md:mt-20 shadow-black shadow-sm w-auto h-auto">
        <section className="text-gray-600 boßdy-font">
          <div className="container px-5 md:py-12 py-2 ml-2 md:flex  items-center">
            <div className="lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-32 w-full mt-10 md:mt-0">

              <h1 className="text-black text-3xl font-bold mb-5">Log In</h1>
              <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email or User Name <span className="text-[#E50914] text-lg">*</span>
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="identifier"
                  placeholder="Email or User Name"
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password <span className="text-[#E50914] text-lg">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              
                <div className="text-red-500 mb-2 hover:text-yellow-500 duration-500 cursor-pointer">
                  Forget Password?
                </div>
              
              <button type="submit" className="text-white bg-[#FFBF1B]  duration-500 border-0 py-2 px-8 focus:outline-none hover:bg-[#e4a914] rounded text-lg shadow-md hover:shadow-lg">
                Log In
              </button>
              </form>
              
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center md:hidden lg:hidden"></div>

            <Singup/>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
