import React from "react";
import { GrCertificate } from "react-icons/gr";
import { FaThumbsUp } from "react-icons/fa";
import { BiHappyBeaming } from "react-icons/bi";
import { RiMailSettingsFill } from "react-icons/ri";
import {
  FaSearch,
  FaChartLine,
  FaShareAlt,
  FaUserShield,
  FaEnvelope,
  FaGoogle,
} from "react-icons/fa";
export default function Digitalmark() {
  return (
    <div className="w-full">
      <section className="w-full bg-[#3e1572]   ">
        <div className=" container flex flex-col max-w-[1440px]  md:flex-row items-center justify-center mx-auto p-8 space-x-8 ">
          <div className="text-white w-full ">
            <h1 className="font-bold text-5xl mb-6">
              Digital Marketing Services
            </h1>
            <p className="font-medium text-base tracking-wider leading-relaxed">
              {" "}
              Attain a top brand position with strategic &amp; best digital
              marketing services in India from industry leaders.Trip challan
              Book is one of the leading digital marketing companies you can
              trust on. Get comprehensive services package in one place.
            </p>
            <ul className="flex flex-wrap mt-3 p-0 gap-2">
              <li className="px-3 cursor-pointer py-2 border rounded-full font-bold mr-2 flex items-center hover:bg-white hover:text-black justify-center">
                <FaSearch className="mr-2 text-blue-500" />
                SEO
              </li>
              <li className="px-3 cursor-pointer py-2 border rounded-full font-bold mr-2 flex items-center hover:bg-white hover:text-black justify-center">
                <FaChartLine className="mr-2 text-green-500" />
                PPC
              </li>
              <li className="px-3 cursor-pointer py-2 border rounded-full font-bold mr-2 flex items-center hover:bg-white hover:text-black justify-center">
                <FaShareAlt className="mr-2 text-purple-500" />
                SMO
              </li>
              <li className="px-3 cursor-pointer py-2 border rounded-full font-bold mr-2 flex items-center hover:bg-white hover:text-black justify-center">
                <FaUserShield className="mr-2 text-red-500" />
                ORM
              </li>
              <li className="px-3 cursor-pointer py-2 border rounded-full font-bold mr-2 flex items-center hover:bg-white hover:text-black justify-center">
                <FaEnvelope className="mr-2 text-orange-500" />
                Email Marketing
              </li>
              <li className="px-3 cursor-pointer py-2 border rounded-full font-bold mr-2 flex items-center hover:bg-white hover:text-black justify-center">
                <FaGoogle className="mr-2 text-indigo-500" />
                Google Analytics
              </li>
            </ul>
          </div>
          <div className=" w-full  mx-0 my-16">
            <div className="max-w-[450px] mx-auto bg-[#ffffff] flex flex-col items-center justify-center px-3 py-4 rounded-lg">
              <h1 className="mb-4 text-2xl">Digital marketing</h1>
              <form className="w-full flex flex-col items-center justify-center">
                <input
                  className="block w-full px-3 py-2 bg-[#f4f4f4] mb-2 rounded-lg"
                  placeholder="Full Name*"
                />
                <input
                  className="block w-full px-3 py-2 bg-[#f4f4f4] mb-2 rounded-lg"
                  placeholder="Business Email Address*"
                />
                <input
                  className="block w-full px-3 py-2 bg-[#f4f4f4] mb-2 rounded-lg"
                  placeholder="Full Name*"
                />
                <input
                  className="block w-full px-3 py-2 bg-[#f4f4f4] mb-2 rounded-lg"
                  placeholder="Phone Number*"
                />
                <textarea
                  className="block w-full px-3 py-2 bg-[#f4f4f4] border-0 rounded-md"
                  placeholder="messages*"
                />
                <button className="w-full px-6 py-2 mt-10 bg-[#ef5523] text-white rounded-full hover:bg-[#ff6e3e]">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#ffff] flex  p-8 ">
        <div className=" container flex flex-col md:flex-row items-center justify-center max-w-[1280px] mx-auto ">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-semibold mb-4 ">
              Get Significant Boost to Your Business with Digital Marketing
              Company
            </h1>
            <p className="text-base font-normal ">
              Trip Management System is the right strategic digital marketing
              agency to provide you with a solution that brings the desired
              digital presence to your business. We empower your digital
              marketing website to get desired engagement, sales, and overall
              revenue across different platforms.
              <br />
              From lead generation and brand awareness to customer acquisition
              and retention, our digital marketing company does it all for you.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap items-center justify-center gap-4">
            <div className=" h-[200px] w-[250px] border rounded-xl flex flex-col p-4 shadow-md shadow-gray-300 ">
              <GrCertificate className=" text-5xl text-white p-2 bg-[#3e1572] rounded-lg" />
              <h1 className="  text-5xl  font-bold text-[#3e1572]">10+</h1>
              <span className="text-base font-semibold">
                years of Experience
              </span>
            </div>
            <div className=" h-[200px] w-[250px] border rounded-xl flex flex-col p-4 shadow-md shadow-gray-300 ">
              <FaThumbsUp className="text-5xl text-white p-2 bg-[#3e1572] rounded-lg" />
              <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold text-[#3e1572]">
                50+
              </h1>
              <span className="text-base font-semibold">
                Global Top Brands & Enterprises Served
              </span>
            </div>
            <div className=" h-[200px] w-[250px] border rounded-xl flex flex-col p-4 shadow-md shadow-gray-300 ">
              <RiMailSettingsFill className="text-5xl text-white p-2 bg-[#3e1572] rounded-lg" />
              <h1 className="text-5xl font-bold text-[#3e1572]">300+</h1>
              <span className="text-base font-semibold">
                Industry-best tech professionals
              </span>
            </div>
            <div className=" h-[200px] w-[250px] border rounded-xl flex flex-col p-4 shadow-md shadow-gray-300 ">
              <BiHappyBeaming className="text-5xl text-white p-2 bg-[#3e1572] rounded-lg" />
              <h1 className="text-5xl font-bold text-[#3e1572]">100+</h1>
              <span className="text-base font-semibold">Happy Clients</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-50 py-4 ">
        <div className="container w-full max-w-[1440px] mx-auto p-8">
          <h1 className="text-center text-4xl font-semibold mb-10">
            360- Degree Digital Marketing Services for Companies of All Kinds
          </h1>
          <p className="text-center text-base font-medium text-gray-700 mb-12">
            As your value-driven digital marketing agency in India, we are here
            to meet all your brand’s advertising needs with our expert-level
            services. Our extensive services for your digital marketing website
            will allow you to grow your business immensely.{" "}
          </p>
          <div className="w-full flex flex-wrap  justify-center items-center gap-4 p-8">
            <div className="group  w-full md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-300 ease-out hover:bg-[#3e1572] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className=" text-white text-5xl fill-white  p-2 bg-[#3e1572] rounded-lg transition-all group-hover:bg-white group-hover:fill-[#3e1572]" />
              <h1 className="text-3xl font-semibold mb-3 group-hover:text-white">
                Search Engine Optimization
              </h1>
              <p className="text-base font-medium text-gray-600 group-hover:text-white">
                Attain the required website traffic and ranking on the Search
                Engine Page Results (SERP). Our SEO services are not just
                relevant for adding most searched keywords but further increase
                leads and conversion rates extensively.
              </p>
            </div>
            <div className="group  w-full md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-300 ease-out hover:bg-[#3e1572] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className=" text-white text-5xl fill-white  p-2 bg-[#3e1572] rounded-lg transition-all group-hover:bg-white group-hover:fill-[#3e1572]" />
              <h1 className="text-3xl font-semibold mb-3 group-hover:text-white">
                Search Engine Optimization
              </h1>
              <p className="text-base font-medium text-gray-600 group-hover:text-white">
                Attain the required website traffic and ranking on the Search
                Engine Page Results (SERP). Our SEO services are not just
                relevant for adding most searched keywords but further increase
                leads and conversion rates extensively.
              </p>
            </div>
            <div className="group  w-full md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-300 ease-out hover:bg-[#3e1572] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className=" text-white text-5xl fill-white  p-2 bg-[#3e1572] rounded-lg transition-all group-hover:bg-white group-hover:fill-[#3e1572]" />
              <h1 className="text-3xl font-semibold mb-3 group-hover:text-white">
                Search Engine Optimization
              </h1>
              <p className="text-base font-medium text-gray-600 group-hover:text-white">
                Attain the required website traffic and ranking on the Search
                Engine Page Results (SERP). Our SEO services are not just
                relevant for adding most searched keywords but further increase
                leads and conversion rates extensively.
              </p>
            </div>
            <div className="group  w-full md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-300 ease-out hover:bg-[#3e1572] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className=" text-white text-5xl fill-white  p-2 bg-[#3e1572] rounded-lg transition-all group-hover:bg-white group-hover:fill-[#3e1572]" />
              <h1 className="text-3xl font-semibold mb-3 group-hover:text-white">
                Search Engine Optimization
              </h1>
              <p className="text-base font-medium text-gray-600 group-hover:text-white">
                Attain the required website traffic and ranking on the Search
                Engine Page Results (SERP). Our SEO services are not just
                relevant for adding most searched keywords but further increase
                leads and conversion rates extensively.
              </p>
            </div>
            <div className="group  w-full md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-300 ease-out hover:bg-[#3e1572] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className=" text-white text-5xl fill-white  p-2 bg-[#3e1572] rounded-lg transition-all group-hover:bg-white group-hover:fill-[#3e1572]" />
              <h1 className="text-3xl font-semibold mb-3 group-hover:text-white">
                Search Engine Optimization
              </h1>
              <p className="text-base font-medium text-gray-600 group-hover:text-white">
                Attain the required website traffic and ranking on the Search
                Engine Page Results (SERP). Our SEO services are not just
                relevant for adding most searched keywords but further increase
                leads and conversion rates extensively.
              </p>
            </div>
            <div className="group  w-full md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-300 ease-out hover:bg-[#3e1572] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className=" text-white text-5xl fill-white  p-2 bg-[#3e1572] rounded-lg transition-all group-hover:bg-white group-hover:fill-[#3e1572]" />
              <h1 className="text-3xl font-semibold mb-3 group-hover:text-white">
                Search Engine Optimization
              </h1>
              <p className="text-base font-medium text-gray-600 group-hover:text-white">
                Attain the required website traffic and ranking on the Search
                Engine Page Results (SERP). Our SEO services are not just
                relevant for adding most searched keywords but further increase
                leads and conversion rates extensively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
