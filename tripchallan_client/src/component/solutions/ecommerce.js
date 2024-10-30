import React from "react";
import banimg from "../images/ecomban.png";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import card5 from "../images/card5.png";
import card6 from "../images/card6.png";
import card7 from "../images/card-section.jpg";
import teambg from "../images/teambg.jpg";
import mysql from "../images/mysql.png";
import mariadb from "../images/mariadb.png";
import mongodb from "../images/mongodb.png";
import { MdError } from "react-icons/md";
import { FaShoppingCart, FaSitemap } from "react-icons/fa";
import agile from "../images/agile.png";
import { SiVisualstudiocode, SiPhpstorm } from "react-icons/si";
import { SiLinux } from "react-icons/si";
// import { FaGit } from 'react-icons/fa';
import {
  FaApple,
  FaGit,
  FaGlobe,
  FaRocket,
  FaThumbsUp,
  FaTrophy,
  FaWindows,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaGifts } from "react-icons/fa6";
export default function Ecommerce() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <div
        className="h-[450px] "
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 49, 0.8), rgba(90, 3, 56, 0.6)), url(${banimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative flex items-center h-full">
          <div className="absolute left-0 right-0 text-center">
            <h1 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-semibold text-white">
              Reliable Trucking and <br /> Transportation Services.
            </h1>
            <button
              className="mt-4 px-4 py-2 border border-transparent text-white rounded-lg bg-gradient-to-r from-red-600 to-blue-700 hover:from-blue-700 hover:to-red-600 transition duration-300"
              onClick={handleClick}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <section className=" w-full bg-white p-4 sm:p-6 md:p-8">
        <div className=" flex flex-col md:flex-row items-center justify-center max-w-[1280px] mx-auto ">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#000031] to-[#7f0f54] text-transparent bg-clip-text">
              Stay Digitally Competitive with Reliable E-commerce Website
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
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center shadow-md shadow-gray-400">
              <FaGlobe className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                15+
              </h1>
              <span className="text-base font-semibold">Year In Market</span>
            </div>
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center shadow-md shadow-gray-400">
              <FaShoppingCart className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                250+
              </h1>
              <span className="text-base font-semibold">
                Ecommerce Specialists
              </span>
            </div>
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center shadow-md shadow-gray-400">
              <FaThumbsUp className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                90%
              </h1>
              <span className="text-base font-semibold">Customer NPS</span>
            </div>
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center shadow-md shadow-gray-400">
              <FaRocket className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                50+
              </h1>
              <span className="text-base font-semibold">Project Launched</span>
            </div>
          </div>
        </div>
      </section>
      {/* Card section */}
      <section
        className="py-16 px-4 bg-gray-100 object-cover size-full"
        style={{ backgroundImage: `url(${card7})` }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl mb-8 font-bold">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg cursor-pointer rounded-lg overflow-hidden ">
              <img
                src={card1}
                alt="firstimage"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg mb-3 text-[#821c1c] font-bold">
                  Fleet tracking and Management Software
                </h3>
                <p className="text-gray-600 mb-4">
                  Fleet Tracking and Management Software is a specialized
                  application designed to monitor and manage a fleet of vehicles
                  efficiently. It provides real-time tracking, route
                  optimization, and performance analytics, enabling fleet
                  operators to enhance operational efficiency, reduce costs, and
                  improve safety.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg cursor-pointer rounded-lg overflow-hidden ">
              <img
                src={card2}
                alt="firstimage"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg mb-3 text-[#821c1c] font-bold">
                  Field Service and Scheduling Management Software
                </h3>
                <p className="text-gray-600 mb-4">
                  Field Service and Scheduling Management Software is a digital
                  solution designed to optimize the planning, dispatching, and
                  management of field service operations. It enables businesses
                  to efficiently schedule appointments, allocate resources, and
                  track technician performance in real-time.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg cursor-pointer rounded-lg overflow-hidden ">
              <img
                src={card3}
                alt="firstimage"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg mb-3 text-[#821c1c] font-bold">
                  Suitable Mobile Tracking Services
                </h3>
                <p className="text-gray-600 mb-4">
                  Suitable Mobile Tracking Services provide users with effective
                  solutions for monitoring the location and movement of mobile
                  devices in real-time. These services are designed for various
                  applications, including personal safety, fleet management, and
                  asset tracking.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg cursor-pointer rounded-lg overflow-hidden ">
              <img
                src={card4}
                alt="firstimage"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg mb-3 text-[#821c1c] font-bold">
                  Fuel Mangement Software
                </h3>
                <p className="text-gray-600 mb-4">
                  Fuel Management Software is a specialized tool designed to
                  monitor and control fuel consumption, inventory, and expenses
                  in fleet operations. It helps businesses optimize fuel
                  efficiency by providing real-time data on fuel usage,
                  identifying potential waste, and tracking fuel purchases.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg cursor-pointer rounded-lg overflow-hidden ">
              <img
                src={card5}
                alt="firstimage"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg mb-3 text-[#821c1c] font-bold">
                  Online Monitoring and Backup history
                </h3>
                <p className="text-gray-600 mb-4">
                  Online Monitoring and Backup History refers to a digital
                  solution that allows users to oversee and track their data and
                  system activities in real-time, along with maintaining a
                  record of backup operations. This service ensures that
                  critical data is securely backed up regularly, enabling easy
                  recovery in case of data loss or system failure.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg cursor-pointer rounded-lg overflow-hidden ">
              <img
                src={card6}
                alt="firstimage"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg mb-3 text-[#821c1c] font-bold">
                  Route Optimizing
                </h3>
                <p className="text-gray-600 mb-4">
                  Route Optimizing is a process that uses technology to
                  determine the most efficient paths for vehicles to take while
                  traveling from one location to another. This method considers
                  various factors such as distance, traffic conditions, road
                  types, and delivery windows to minimize travel time and fuel
                  consumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-indigo-950 relative h-full p-6 sm:p-8 md:p-10 ">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 "
          style={{
            backgroundImage: `url(${teambg})`,
            backgroundColor: "rgba(0,0,0,0.6)",
            backgroundBlendMode: "multiply",
          }}
        />

        <h1 className="text-white  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative z-10 text-center m-2 p-2">
          Relay End-to-End{" "}
          <span className="text-orange-500 font-bold">
            E-commerce Development Services{" "}
          </span>
          to increase Retail Business sales
        </h1>

        <div className="text-center relative z-10 mt-4">
          <button
            onClick={handleClick}
            className="text-white bg-orange-500 hover:bg-orange-600 rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg inline-block"
          >
            Free Consultation
          </button>
        </div>
      </div>
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900">
              Technical Expertise for Mobile App
            </h2>
            <p className="mt-2 text-gray-700">
              We employ the most-advanced technical skills to get the best
              Mobile App developed.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Database */}
            <div className="bg-white rounded-lg shadow-lg ">
              <div className="bg-gradient-to-r from-blue-900 to-purple-700 text-white p-3 rounded-t-lg">
                <h3 className="text-xl font-bold">Database</h3>
              </div>
              <ul className="mt-2 space-y-2 p-2">
                <li className="flex items-center space-x-2 py-2 border-b-2">
                  <img src={mysql} className="w-6 h-6 text-red-600" />
                  <span>MYSQL</span>
                </li>
                <li className="flex items-center space-x-2 py-2 border-b-2">
                  <img src={mariadb} className="w-6 h-6 text-orange-500" />
                  <span>MariaDB</span>
                </li>
                <li className="flex items-center space-x-2 py-2">
                  <img src={mongodb} className="w-6 h-6" />
                  <span>MangoDB</span>
                </li>
              </ul>
            </div>

            {/* Methodology */}
            <div className="bg-white rounded-lg shadow-lg ">
              <div className="bg-gradient-to-r from-blue-900 to-purple-700 text-white p-3 rounded-t-lg">
                <h3 className="text-xl font-bold">Methodology</h3>
              </div>
              <ul className="mt-2 space-y-2 p-2">
                <li className="flex items-center space-x-2 border-b-2 py-2">
                  <MdError className="w-6 h-6 text-blue-500" />
                  <span>Oops</span>
                </li>
                <li className="flex items-center space-x-2 border-b-2 py-2">
                  <FaSitemap className="w-6 h-6 text-green-500" />
                  <span>MVC</span>
                </li>
                <li className="flex items-center space-x-2">
                  <img src={agile} className="w-6 h-6 text-purple-500" />
                  <span>AgileMethodology</span>
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-lg shadow-lg ">
              <div className="bg-gradient-to-r from-blue-900 to-purple-700 text-white p-3 rounded-t-lg">
                <h3 className="text-xl font-bold">Tools</h3>
              </div>
              <ul className="mt-2 space-y-2 p-2">
                <li className="flex items-center space-x-2 border-b-2 py-2">
                  <SiVisualstudiocode
                    className="w-6 h-6"
                    style={{ color: "#02569B" }}
                  />{" "}
                  {/* Flutter Blue */}
                  <span>Visual Studio Code</span>
                </li>
                <li className="flex items-center space-x-2 border-b-2 py-2">
                  <SiPhpstorm
                    className="w-6 h-6"
                    style={{ color: "#3880FF" }}
                  />{" "}
                  {/* Ionic Blue */}
                  <span>PhpStorm</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaGit className="w-6 h-6" style={{ color: "#3498DB" }} />{" "}
                  {/* Xamarin Blue */}
                  <span>Git</span>
                </li>
              </ul>
            </div>

            {/* Operating System */}
            <div className="bg-white rounded-lg shadow-lg ">
              <div className="bg-gradient-to-r from-blue-900 to-purple-700 text-white p-3 rounded-t-lg">
                <h3 className="text-xl font-bold">Operating System</h3>
              </div>
              <ul className="mt-2 space-y-2 p-2">
                <li className="flex items-center space-x-2 border-b-2 py-2">
                  <FaWindows
                    className="w-6 h-6 "
                    style={{ color: "#4CAF50" }}
                  />{" "}
                  {/* Green */}
                  <span>Window</span>
                </li>

                <li className="flex items-center space-x-2 border-b-2 py-2">
                  <SiLinux className="w-6 h-6 " style={{ color: "#2196F3" }} />{" "}
                  {/* Blue */}
                  <span>Unix/Linux</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaApple className="w-6 h-6" style={{ color: "#000" }} />{" "}
                  {/* Orange */}
                  <span>Mac</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
