import React from "react";
import { GrCertificate } from "react-icons/gr";
import { FaThumbsUp } from "react-icons/fa";
import { BiHappyBeaming } from "react-icons/bi";
import { RiMailSettingsFill } from "react-icons/ri";
import pic from "../images/card3.png";
import { FaSearch, FaChartLine, FaShareAlt, FaUserShield, FaEnvelope, FaGoogle } from "react-icons/fa";
export default function Ecommerce() {
  return (
    <div className="w-full">
      <section
        className=" w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 49, 0.8), rgba(90, 3, 56, 0.8)), url(${pic})`,
        }}
      >
        <div className=" container flex flex-col max-w-[1440px] md:flex-row items-center justify-center mx-auto p-4 sm:p-6 md:p-8 space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-white w-full md:w-1/2 lg:w-2/3">
            <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl mb-4 md:mb-6">
              Ecommerce Website Development That Matches Your Needs
            </h1>

            <ul className="flex flex-wrap mt-3 p-0 gap-2">
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center justify-center cursor-pointer">
                <FaSearch className="mr-2 text-blue-500" />
                SEO
              </li>
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center justify-center cursor-pointer">
                <FaChartLine className="mr-2 text-green-500" />
                PPC
              </li>
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center justify-center cursor-pointer">
                <FaShareAlt className="mr-2 text-purple-500" />
                SMO
              </li>
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center justify-center cursor-pointer">
                <FaUserShield className="mr-2 text-red-500" />
                ORM
              </li>
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center justify-center cursor-pointer">
                <FaEnvelope className="mr-2 text-orange-500" />
                Email Marketing
              </li>
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center justify-center cursor-pointer">
                <FaGoogle className="mr-2 text-indigo-500" />
                Google Analytics
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mx-0 md:my-0 my-8">
            <div className="max-w-[450px] mx-auto bg-white flex flex-col items-center justify-center pb-4 rounded-lg shadow-lg overflow-hidden">
              <h1 className="mb-4 text-xl sm:text-2xl bg-gradient-to-r from-[#000031] to-[#590338] w-full text-center text-white p-4">
                Contact Us
              </h1>
              <div className="w-full px-3">
                <form className="w-full flex flex-col items-center justify-center space-y-3">
                  <input
                    className="block w-full px-3 py-2 bg-[#f4f4f4] rounded-lg"
                    placeholder="Full Name*"
                  />
                  <input
                    className="block w-full px-3 py-2 bg-[#f4f4f4] rounded-lg"
                    placeholder="Business Email Address*"
                  />
                  <input
                    className="block w-full px-3 py-2 bg-[#f4f4f4] rounded-lg"
                    placeholder="Phone Number*"
                  />
                  <textarea
                    className="block w-full px-3 py-2 bg-[#f4f4f4] rounded-lg"
                    placeholder="Message*"
                    rows="3"
                  ></textarea>
                  <button className="w-full px-6 py-2 mt-4 bg-gradient-to-r from-[#000031] to-[#590338] text-white rounded-full">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-full bg-white p-4 sm:p-6 md:p-8">
        <div className="container flex flex-col md:flex-row items-center justify-center max-w-[1280px] mx-auto ">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
              Stay Digitally Competitive with Reliable eCommerce Website
              Development Services
            </h1>
            <p className="text-sm sm:text-base font-normal mb-4">
              The secret to winning the e-commerce game lies in having an online
              presence that matches the expectations of your audience and
              compels them to convert. And it calls for eCommerce website
              development expertise laser-focused on UX. To attract the desired
              audience, you need an e-commerce store that is visually stunning
              and conversion-focused.
            </p>
            <p className="text-sm sm:text-base font-normal">
              We not only assist businesses in creating e-commerce solutions
              that give them a solid foundation but also ensure that they run
              seamlessly through their evolution.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap items-center justify-center gap-4">
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center">
              <GrCertificate className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                15+
              </h1>
              <span className="text-base font-semibold">Years in Market</span>
            </div>
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center">
              <FaThumbsUp className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                250+
              </h1>
              <span className="text-base font-semibold">
                eCommerce Specialists
              </span>
            </div>
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center">
              <RiMailSettingsFill className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                90%
              </h1>
              <span className="text-base font-semibold">Customers NPS</span>
            </div>
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center">
              <BiHappyBeaming className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                400+
              </h1>
              <span className="text-base font-semibold">Projects Launched</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-4">
        <div className="container w-full max-w-[1440px] mx-auto p-8">
          <h1 className="text-center text-4xl font-semibold mb-10">
            eCommerce Development Platform We Use
          </h1>
          <p className="text-center text-base font-medium text-gray-700 mb-12">
            As your value-driven digital marketing agency in India, we are here
            to meet all your brand’s advertising needs with our expert-level
            services. Our extensive services for your digital marketing website
            will allow you to grow your business immensely.
          </p>
          <div className="w-full flex flex-wrap justify-center items-center gap-4 p-4 md:p-6 lg:p-8">
            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className="text-white mx-auto text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-2xl font-semibold mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce
              </h1>
              <p className="text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered eCommerce
                solutions that provide your customer with immersive services.
              </p>
            </div>

            {/* Repeat this block for each item */}
            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className="text-white mx-auto text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-2xl font-semibold mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce
              </h1>
              <p className="text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered eCommerce
                solutions that provide your customer with immersive services.
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className="text-white mx-auto text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-2xl font-semibold mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce
              </h1>
              <p className="text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered eCommerce
                solutions that provide your customer with immersive services.
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className="text-white mx-auto text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-2xl font-semibold mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce
              </h1>
              <p className="text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered eCommerce
                solutions that provide your customer with immersive services.
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className="text-white mx-auto text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-2xl font-semibold mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce
              </h1>
              <p className="text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered eCommerce
                solutions that provide your customer with immersive services.
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className="text-white mx-auto text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-2xl font-semibold mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce
              </h1>
              <p className="text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered eCommerce
                solutions that provide your customer with immersive services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
