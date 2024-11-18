import React from "react";
import { GrCertificate } from "react-icons/gr";
import {
  FaCloud,
  FaCogs,
  FaDeskpro,
  FaHubspot,
  FaLaptopCode,
  FaThumbsUp,
} from "react-icons/fa";
import { BiHappyBeaming } from "react-icons/bi";
import { RiMailSettingsFill } from "react-icons/ri";
import pic from "../images/card3.png";
import mysql from "../images/mysql.png";
import mariadb from "../images/mariadb.png";
import mongodb from "../images/mongodb.png";
import { MdError } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";
import agile from "../images/agile.png";
import team1 from "../images/team1.jpg";
import { SiVisualstudiocode, SiPhpstorm, SiCakephp } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { FaApple, FaGit, FaWindows } from "react-icons/fa";
import {
  FaSearch,
  FaChartLine,
  FaShareAlt,
  FaUserShield,
  FaEnvelope,
  FaGoogle,
  FaShoppingCart,
} from "react-icons/fa";
import { FaCartShopping, FaNoteSticky, FaPhp } from "react-icons/fa6";

export default function Ecommerce() {
  const services = [
    {
      title: "CakePHP Development",
      icon: <SiCakephp className="text-5xl text-purple-700" />, // Icon for CakePHP Development
    },
    {
      title: "Custom PHP Development",
      icon: <FaPhp className="text-5xl text-purple-700" />, // Icon for Custom PHP Development
    },
    {
      title: "Ecommerce Solution",
      icon: <FaShoppingCart className="text-5xl text-purple-700" />, // Icon for Ecommerce Solution
    },
    {
      title: "B2B Website Development",
      icon: <FaLaptopCode className="text-5xl text-purple-700" />, // Icon for B2B Website Development
    },
  ];
  return (
    <div className="w-full">
      <section
        className=" w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 49, 0.8), rgba(90, 3, 56, 0.8)), url(${pic})`,
        }}
      >
        <div className=" flex flex-col max-w-[1440px] md:flex-row items-center justify-center mx-auto p-4 sm:p-6 md:p-8 space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-white w-full md:w-1/2 lg:w-2/3">
            <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl mb-4 md:mb-6">
              <span className="text-orange-500 leading-8">E-commerce</span>{" "}
              Website Development That Matches Your Needs
            </h1>

            <ul className="flex flex-wrap mt-3 p-0 gap-2">
              <li className="px-3 py-2 hover:bg-white hover:text-black border rounded-full font-bold mr-2 flex items-center justify-center  ">
                <FaSearch className="mr-2 text-blue-500" />
                SEO
              </li>
              <li className="px-3 py-2 hover:bg-white hover:text-black border rounded-full font-bold mr-2 flex items-center justify-center ">
                <FaChartLine className="mr-2 text-green-500" />
                PPC
              </li>
              <li className="px-3 py-2 hover:bg-white hover:text-black border rounded-full font-bold mr-2 flex items-center justify-center ">
                <FaShareAlt className="mr-2 text-purple-500" />
                SMO
              </li>
              <li className="px-3 py-2 hover:bg-white hover:text-black border rounded-full font-bold mr-2 flex items-center justify-center ">
                <FaUserShield className="mr-2 text-red-500" />
                ORM
              </li>
              <li className="px-3 py-2 hover:bg-white hover:text-black border rounded-full font-bold mr-2 flex items-center justify-center ">
                <FaEnvelope className="mr-2 text-orange-500" />
                Email Marketing
              </li>
              <li className="px-3 py-2 hover:bg-white hover:text-black border rounded-full font-bold mr-2 flex items-center justify-center ">
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
                    className="block w-full px-3 py-2 bg-[#f4f4f4] rounded-lg shadow-md shadow-gray-400"
                    placeholder="Full Name*"
                  />
                  <input
                    className="block w-full px-3 py-2 bg-[#f4f4f4] rounded-lg shadow-md shadow-gray-400"
                    placeholder="Business Email Address*"
                  />
                  <input
                    className="block w-full px-3 py-2 bg-[#f4f4f4] rounded-lg shadow-md shadow-gray-400"
                    placeholder="Phone Number*"
                  />
                  <textarea
                    className="block w-full px-3 py-2 bg-[#f4f4f4] rounded-lg shadow-md shadow-gray-400"
                    placeholder="Message*"
                    rows="3"
                  ></textarea>
                  <button className="w-full px-6 py-2 mt-4 bg-gradient-to-r from-[#000031] to-[#590338] text-white rounded-full hover:bg-gradient-to-l shadow-md shadow-gray-400">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-full bg-white p-4 sm:p-6 md:p-8">
        <div className=" flex flex-col md:flex-row items-center justify-center max-w-[1280px] mx-auto ">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
              Stay Digitally Competitive with Reliable E-commerce Website
              Development Services
            </h1>
            <p className="text-sm sm:text-base font-normal mb-4">
              The secret to winning the E-commerce game lies in having an online
              presence that matches the expectations of your audience and
              compels them to convert. And it calls for E-commerce website
              development expertise laser-focused on UX. To attract the desired
              audience, you need an E-commerce store that is visually stunning
              and conversion-focused.
            </p>
            <p className="text-sm sm:text-base font-normal">
              We not only assist businesses in creating E-commerce solutions
              that give them a solid foundation but also ensure that they run
              seamlessly through their evolution.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap items-center justify-center gap-4">
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center shadow-md shadow-gray-400">
              <GrCertificate className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                15+
              </h1>
              <span className="text-base font-semibold">Years in Market</span>
            </div>
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center shadow-md shadow-gray-400">
              <FaThumbsUp className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                250+
              </h1>
              <span className="text-base font-semibold">
                E-commerce Specialists
              </span>
            </div>
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center shadow-md shadow-gray-400">
              <RiMailSettingsFill className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                90%
              </h1>
              <span className="text-base font-semibold">Customers NPS</span>
            </div>
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center shadow-md shadow-gray-400">
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
        <div className=" w-full max-w-[1440px] mx-auto p-8">
          <h1 className="text-center text-4xl font-semibold mb-10">
            E-commerce Development Platform We Use
          </h1>
          <p className="text-center text-base font-medium text-gray-700 mb-12">
            As your value-driven digital marketing agency in India, we are here
            to meet all your brand’s advertising needs with our expert-level
            services. Our extensive services for your digital marketing website
            will allow you to grow your business immensely.
          </p>
          <div className="w-full flex flex-wrap justify-center items-center gap-4 p-4 sm:gap-6 sm:p-6 lg:p-8">
            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <FaCloud className="text-white mx-auto text-4xl sm:text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce
              </h1>
              <p className="text-sm sm:text-base text-center font-medium text-gray-600 group-hover:text-white">
              Cloud & Headless Commerce represents the future of digital commerce, enabling businesses to offer flexible, scalable, and personalized online shopping experiences.
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <FaCartShopping className="text-white mx-auto text-4xl sm:text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center group-hover:text-white">
                M-commerce Development
              </h1>
              <p className="text-sm sm:text-base text-center font-medium text-gray-600 group-hover:text-white">
              M-commerce (mobile commerce) is the buying and selling of goods and services through wireless handheld devices such as retaining critical data, retaining critical data, smartphones and tablets.
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <FaDeskpro className="text-white mx-auto text-4xl sm:text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center group-hover:text-white">
                E-commerce Platform Migration
              </h1>
              <p className="text-sm sm:text-base text-center font-medium text-gray-600 group-hover:text-white">
              E-commerce platform migration refers to the process of transitioning from one E-Commerce platform to another, ensuring that a business's  retaining critical data, functionality, and performance. 
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <FaCogs className="text-white mx-auto text-4xl sm:text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center group-hover:text-white">
                E-commerce maintainance & support
              </h1>
              <p className="text-sm sm:text-base text-center font-medium text-gray-600 group-hover:text-white">
              E-commerce maintenance and support are critical ongoing services that ensure the smooth operation, security, and performance of an E-Commerce website or platform.  platform running at peak performance.
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <FaNoteSticky className="text-white mx-auto text-4xl sm:text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center group-hover:text-white">
                B2B E-commerce portal Developemnt
              </h1>
              <p className="text-sm sm:text-base text-center font-medium text-gray-600 group-hover:text-white">
              B2B (Business-to-Business) E-Commerce portal development involves creating a secure, user-friendly, and feature-rich online platform designed to facilitate transactions and business. 
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <FaHubspot className="text-white mx-auto text-4xl sm:text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center group-hover:text-white">
                E-commerce CRM Integrations
              </h1>
              <p className="text-sm sm:text-base text-center font-medium text-gray-600 group-hover:text-white">
              E-commerce CRM  integrations enable businesses to synchronize their e-commerce platforms with CRM systems to enhance customer engagement, streamline sales processes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="flex flex-col items-center py-10"
        style={{
          backgroundImage: `url(${team1})`,
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Our Diverse Services
        </h2>
        <div className="flex flex-col items-center gap-4 p-4 w-full md:w-3/4 ">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white w-full sm:w-[300px] md:w-[250px] lg:w-[200px] xl:w-[250px] hover:shadow-xl transition-shadow"
              >
                {service.icon}
                <p className="text-center font-bold text-gray-800 text-base sm:text-lg mt-4">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900">
              Check Out The Technical Expertise for E-commerce Development
            </h2>
            <p className="mt-2 text-gray-700">
              We employ the most-advanced technical skills to get the best
              E-commerce Development .
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Database */}
            <div className="bg-white rounded-lg shadow-lg ">
              <div className="bg-gradient-to-r from-blue-900 to-purple-700 text-white p-3 rounded-t-lg text-center">
                <h3 className="text-xl font-bold">Database</h3>
              </div>
              <ul className="mt-2 space-y-2 p-2">
                <li className="flex items-center space-x-2 py-2 border-b-2">
                  <img src={mysql} className="w-6 h-6 text-red-600" alt="sql logo"/>
                  <span>MYSQL</span>
                </li>
                <li className="flex items-center space-x-2 py-2 border-b-2">
                  <img src={mariadb} className="w-6 h-6 text-orange-500" alt="mariadb logo"/>
                  <span>MariaDB</span>
                </li>
                <li className="flex items-center space-x-2 py-2">
                  <img src={mongodb} className="w-6 h-6" alt="mongodb logo" />
                  <span>MangoDB</span>
                </li>
              </ul>
            </div>

            {/* Methodology */}
            <div className="bg-white rounded-lg shadow-lg ">
              <div className="bg-gradient-to-r from-blue-900 to-purple-700 text-white p-3 rounded-t-lg text-center">
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
                  <img src={agile} className="w-6 h-6 text-purple-500" alt="agile logo"/>
                  <span>AgileMethodology</span>
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-lg shadow-lg ">
              <div className="bg-gradient-to-r from-blue-900 to-purple-700 text-white p-3 rounded-t-lg text-center">
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
              <div className="bg-gradient-to-r from-blue-900 to-purple-700 text-white p-3 rounded-t-lg text-center">
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
    </div>
  );
}
