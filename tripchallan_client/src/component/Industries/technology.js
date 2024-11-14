import React from "react";
import technologypage from "../images/tech.jpg";
import technologypage14 from "../images/techban.jpg";
import technologypage15 from "../images/javascript.png";
import technologypage16 from "../images/html.png";
import technologypage17 from "../images/tailwind.png";
import technologypage18 from "../images/nodejs.png";
import technologypage20 from "../images/react.png";
import technologypage21 from "../images/mongodb.jpg";
import technologypage22 from "../images/sql.png";
import { useNavigate } from "react-router-dom";
import {
  FaLightbulb,
  FaCog,
  FaRobot,
  FaAngular,
  FaVuejs,
} from "react-icons/fa";

export default function Technology() {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="">
        <div
          className="bg-indigo-950 p-8 sm:p-16 md:p-24 lg:p-44 relative flex flex-col items-center justify-center  lg:h-[400px] xl:h-[400px] text-white"
          style={{
            backgroundImage: `url(${technologypage})`,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
          }}
        >
          {/* Background Image */}
          {/* <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${technologypage})` }}
          /> */}

          {/* Heading */}
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10 text-center m-2 p-2">
            <span className="text-white font-bold">
              Leading The <span className="text-orange-500">Technology</span>{" "}
              Revolution
            </span>
          </h1>

          {/* Features List */}
          <ul className="flex flex-col sm:flex-row gap-4 text-center relative z-10 mt-4">
            <li className=" group text-white border border-t-gray-50 p-2 rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg hover:bg-white">
              <FaLightbulb className="mr-2 text-xl sm:text-2xl md:text-3xl  text-yellow-400" />
              <span className="group-hover:text-black leading-5">
                Scalability On Demand
              </span>
            </li>
            <li className="group  text-white border border-t-gray-50 p-2 rounded-full flex items-center justify-center sm:mt-0 text-sm sm:text-base md:text-lg hover:bg-white">
              <FaCog className="mr-2 text-xl sm:text-2xl md:text-3xl  text-red-600" />
              <span className="group-hover:text-black leading-4">
                Seamless Integration
              </span>
            </li>
          </ul>

          {/* Call to Action Button */}
          <div className="text-center relative z-10 mt-6">
            <button
              onClick={contact}
              className="text-white bg-orange-500 hover:bg-orange-600 rounded-full px-6 py-2 text-sm sm:text-base md:text-lg"
            >
              Connect Now
            </button>
          </div>
        </div>

        <div className="container mb-9">
          <h2 className="flex justify-center font-bold m-5">
            Our Technology Expertise{" "}
          </h2>
          <div className=" mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Custom Software Development */}
            <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="text-purple-600 text-4xl">
                  <i className="fas fa-code"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Custom Software Development
              </h3>
              <p>
                We create custom business technology solutions that align
                precisely with your specific needs and objectives. Our software
                development services include robust enterprise application, a
                specialized management system, custom-focused platform to
                deliver you envision.
              </p>
            </div>

            {/* Web and Mobile App Development */}
            <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="text-purple-600 text-4xl">
                  <i className="fas fa-mobile-alt"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Web and Mobile App Development
              </h3>
              <p>
                Our team craft visually appealing and highly functional websites
                and mobile applications that captivate users and drive
                engagement. The designs we create are responsive, intuitive,
                geared towards converting visitors into satisfied customers.
              </p>
            </div>

            {/* Data Analytics and Business Intelligence */}
            <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="text-purple-600 text-4xl">
                  <i className="fas fa-chart-line"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Data Analytics and Business Intelligence
              </h3>
              <p>
                Extracting valuable insights from your data is essential. Our
                data analytics and business intelligence solutions turn raw
                information into actionable knowledge. You can enhance
                efficiency, optimize processes, and improve customer
                experiences.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="text-purple-600 text-4xl">
                  <i className="fas fa-cloud"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Iot nad Smart Solution
              </h3>
              <p>
                We create custom business technology solutions that align
                precisely with your specific needs and objectives. Our software
                development services include robust enterprise application, a
                specialized management system, custom-focused platform to
                deliver you envision.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="text-purple-600 text-4xl">
                  <i className="fas fa-shield-alt"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Cybersecurity and Compliance
              </h3>
              <p>
                Our cybersecurity and compliance solutions safeguard your
                organization from digital threats while ensuring adherence to
                regulatory standards. We provide end-to-end protection and help
                you meet industry-specific compliance requirements.
              </p>
            </div>

            {/* Data Analytics and Business Intelligence */}
            <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="text-purple-600 text-4xl">
                  <FaRobot />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Ai and Machine Learning
              </h3>
              <p>
                Extracting valuable insights from your data is essential. Our
                data analytics and business intelligence solutions turn raw
                information into actionable knowledge. You can enhance
                efficiency, optimize processes, and improve customer
                experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-950 relative   h-full p-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50 rounded-2xl"
            style={{ backgroundImage: `url(${technologypage14})` }}
          />
          <h1 className="text-white text-5xl font-bold relative z-10 text-center m-2 p-2">
            Transfer{" "}
            <span className="text-orange-500 font-bold">
              Your Tech Business
            </span>
          </h1>
          <p className="text-white text-bold text-xl text-center z-10 relative">
            Lets discuss How To our Business technology can Fuel YOur Success
          </p>
          <div className="text-center relative z-10">
            <button
              onClick={contact}
              className="text-white bg-orange-500 rounded-full p-2 inline-block"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="mt-5 container">
          <h3 className="text-center text-4xl font-bold">
            Our Technology Toolbox
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
            <div className="border border-white shadow rounded-xl ">
              <h4 className="text-white bg-indigo-800 p-2 rounded-t-xl">
                Programming Languages
              </h4>
              <ul className="space-y-2 p-0 px-2">
                <li className="flex items-center cursor-pointer">
                  <img
                    src={technologypage15}
                    className="w-6 h-6 mr-2"
                    alt="Javascript"
                  />
                  Javascript
                </li>
                <li className="flex items-center cursor-pointer">
                  <img
                    src={technologypage16}
                    className="w-6 h-6 mr-2"
                    alt="HTML/CSS"
                  />
                  Html/CSS
                </li>
                <li className="flex items-center cursor-pointer">
                  <img
                    src={technologypage17}
                    className="w-6 h-6 mr-2"
                    alt="Tailwind CSS"
                  />
                  Tailwind CSS
                </li>
                <li className="flex items-center cursor-pointer">
                  <img
                    src={technologypage18}
                    className="w-6 h-6 mr-2"
                    alt="Node JS"
                  />
                  Node Js
                </li>
              </ul>
            </div>
            <div className="border border-white shadow rounded-xl ">
              <h4 className="text-white bg-indigo-800 p-2 rounded-t-xl">
                Frameworks
              </h4>
              <ul className="space-y-2 p-0 px-2">
                <li className="flex items-center cursor-pointer">
                  <img
                    src={technologypage20}
                    className="w-6 h-6 mr-2"
                    alt="React JS"
                  />
                  React Js
                </li>
                <li className="flex items-center cursor-pointer">
                  <FaAngular className="w-6 h-6 mr-2" />
                  Angular
                </li>
                <li className="flex items-center cursor-pointer">
                  <FaVuejs className="w-6 h-6 mr-2" />
                  Vue
                </li>
                <li className="flex items-center cursor-pointer">
                  <span className="w-6 h-6 mr-2 font-bold text-gray-500 text-xl">
                    eX
                  </span>
                  Express
                </li>
              </ul>
            </div>
            <div className="border border-white shadow rounded-xl ">
              <h4 className="text-white bg-indigo-800 p-2 rounded-t-xl">
                Database
              </h4>
              <ul className="space-y-2 p-0 px-2">
                <li className="flex items-center cursor-pointer">
                  <img
                    src={technologypage21}
                    className="w-6 h-6 mr-2"
                    alt="MongoDB"
                  />
                  MongoDB
                </li>
                <li className="flex items-center cursor-pointer">
                  <img
                    src={technologypage22}
                    className="w-6 h-6 mr-2"
                    alt="SQL"
                  />
                  SQL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
