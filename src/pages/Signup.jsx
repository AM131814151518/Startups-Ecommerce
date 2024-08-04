import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { SIGN_USER } from "../gqloperations/mutation";

const Singup = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    SignupUser({
      variables:{
        input:formData
      }
    })
  }

  const [formData, setFormData] = useState({})
  
  const [SignupUser, {loading, error, data}] = useMutation(SIGN_USER)
  if(loading) return <h1>Signing up.....</h1>
  if (data) {
    localStorage.setItem("jwt", data.register.jwt)
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
    
    <div className="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-32 w-full mt-10 md:mt-0">
              <h1 className="text-black text-3xl font-bold mb-5">Register</h1>
              <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  User Name <span className="text-[#E50914] text-lg">*</span>
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="username"
                  placeholder="User Name"
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
                  Email <span className="text-[#E50914] text-lg">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
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
              <button type="submit" className="text-white bg-[#FFBF1B]  duration-500 shadow-md hover:shadow-xl  border-0 py-2 px-8 focus:outline-none hover:bg-[#e4a914] rounded text-lg">
                Register
              </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p>
            </div>
            </>
  )
}

export default Singup
