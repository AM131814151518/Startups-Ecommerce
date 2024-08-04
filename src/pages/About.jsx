import React from 'react'
import logo from '../assets/logo.webp'
import { ImCancelCircle } from "react-icons/im";
import { FaHeartbeat } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsFillChatTextFill } from "react-icons/bs";

const About = () => {
  return (
    <>
     <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">The Lahore-based Grizzly Fries Limited produces a wide range of frozen fries in Pakistan, all of which is sourced and processed locally. French fries are made from all-natural potatoes. You can get grizzly fries ordered online for a great price because they are easy to store at home and cook in just 5 minutes. These fries are golden and crispy on the outside but soft and fluffy on the inside, so you’ll keep coming back for more! So go ahead and eat some Grizzly Fries with Crave Much and Love</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src={logo} alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">MISSION</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Our mission is to be a leading frozen food processing company, providing high-quality products that are good for children or people and good for the environment while also boosting the country’s economy.m</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-gray-100 w-auto my-6'>
          <h1 className='font-bold text-5xl text-center py-4 text-[#FFBF1B]'>Why Choose Grizzly Fries</h1>
          <p className='text-center text-base font-medium py-3'>Get to know why you should go with our frozen foods</p>
          <div className="flex  justify-center items-center w-auto pl-[5rem] py-8">
          <div className="w-full sm:w-96 md:w-8/12 lg:w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-28 sm:gap-x-6 sm:gap-y-12 gap-y-12 sm:mt-14 mt-10">
            <div>
              <span className="text-gray-700 text-4xl">
              <ImCancelCircle />
              </span>
              <p className="font-semibold text-xl leading-5 text-gray-900 lg:mt-10 mt-9">
              No Preservatives

              </p>
              <p className="text-normal text-base leading-6 text-gray-600 mt-4">
Grizzly Frozen foods are 100% no preservatives.{" "}
              </p>
            </div>
            <div>
              <span className="text-4xl text-gray-700">
            <FaHeartbeat />
            </span>
              <p className="font-semibold text-xl leading-5 text-gray-900 lg:mt-10 mt-9">
                Health Friendly
              </p>
              <p className="text-normal text-base leading-6 text-gray-600 mt-4">
              Our food items are healthy friendly.{" "}
              </p>
            </div>
            <div>
            <span className="text-6xl text-gray-700">
            <FaHandshake />
            </span>
              <p className="font-semibold text-xl leading-5 text-gray-900 lg:mt-10 mt-9">
                Enviromental Friendly
              </p>
              <p className="text-normal text-base leading-6 text-gray-600 mt-4">
                {" "}
                100% enviromental friendly
              </p>
            </div>
            <div>
            <span className="text-5xl text-gray-700">
            <BiLike />
            </span>
              <p className="font-semibold text-xl leading-5 text-gray-900 lg:mt-10 mt-9">
                Super Tasty
              </p>
              <p className="text-normal text-base leading-6 text-gray-600 mt-4">
                Grizzly frozen items are super tasty crispy and delicious.{" "}
              </p>
            </div>
            <div>
            <span className="text-5xl text-gray-700">
            <FaRegMoneyBillAlt />
            </span>
              <p className="font-semibold text-xl leading-5 text-gray-900 lg:mt-10 mt-9">
              Low Cost
              </p>
              <p className="text-normal text-base leading-6 text-gray-600 mt-4">
              Best quality frozen foods at very reasonable price.{" "}
              </p>
            </div>
            <div>
            <span className="text-5xl text-gray-700">
            <BsFillChatTextFill />
            </span>
              <p className="font-semibold text-xl leading-5 text-gray-900 lg:mt-10 mt-9">
              24 /7 Support
              </p>
              <p className="text-normal text-base leading-6 text-gray-600 mt-4">
              We provide 24/7 support to customer{" "}
              </p>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default About
