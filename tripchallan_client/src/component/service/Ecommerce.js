import React from "react";
import { GrCertificate } from "react-icons/gr";
import { FaThumbsUp } from "react-icons/fa";
import { BiHappyBeaming } from "react-icons/bi";
import { RiMailSettingsFill } from "react-icons/ri";
import pic from "../images/card3.png";
import note from "../images/signature.png";
import cimg from "../images/c.png";
import {
  FaSearch,
  FaChartLine,
  FaShareAlt,
  FaUserShield,
  FaEnvelope,
  FaGoogle,
  FaCreditCard,
  FaVideo,
  FaComments,
  FaShoppingCart,
} from "react-icons/fa";
import { FaCartShopping, FaPhp } from "react-icons/fa6";
import {
  FaGlobe,
  FaHtml5,
  FaJava,
  FaMobile,
  FaRocket,
  FaAppStore,
  FaReact,
  FaSwift,
  FaTrophy,
  FaWifi,
  FaAppStoreIos,
  FaMobileAlt,
  FaSolarPanel,
  FaTools,
} from "react-icons/fa";
import { SiFlutter, SiIonic, SiXamarin } from "react-icons/si";
import { GiVrHeadset } from "react-icons/gi";
export default function Ecommerce() {
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
              E-commerce Website Development That Matches Your Needs
            </h1>

            <ul className="flex flex-wrap mt-3 p-0 gap-2">
              <li className="px-3 py-2 hover:bg-white hover:text-black border rounded-full font-bold mr-2 flex items-center justify-center cursor-pointer ">
                <FaSearch className="mr-2 text-blue-500" />
                SEO
              </li>
              <li className="px-3 py-2 hover:bg-white hover:text-black border rounded-full font-bold mr-2 flex items-center justify-center cursor-pointer">
                <FaChartLine className="mr-2 text-green-500" />
                PPC
              </li>
              <li className="px-3 py-2 hover:bg-white hover:text-black border rounded-full font-bold mr-2 flex items-center justify-center cursor-pointer">
                <FaShareAlt className="mr-2 text-purple-500" />
                SMO
              </li>
              <li className="px-3 py-2 hover:bg-white hover:text-black border rounded-full font-bold mr-2 flex items-center justify-center cursor-pointer">
                <FaUserShield className="mr-2 text-red-500" />
                ORM
              </li>
              <li className="px-3 py-2 hover:bg-white hover:text-black border rounded-full font-bold mr-2 flex items-center justify-center cursor-pointer">
                <FaEnvelope className="mr-2 text-orange-500" />
                Email Marketing
              </li>
              <li className="px-3 py-2 hover:bg-white hover:text-black border rounded-full font-bold mr-2 flex items-center justify-center cursor-pointer">
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
                  <button className="w-full px-6 py-2 mt-4 bg-gradient-to-r from-[#000031] to-[#590338] text-white rounded-full hover:bg-gradient-to-l ">
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
              <BiHappyBeaming className="text-white mx-auto text-4xl sm:text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce
              </h1>
              <p className="text-sm sm:text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered E-commerce
                solutions that provide your customer with immersive services.
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className="text-white mx-auto text-4xl sm:text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce
              </h1>
              <p className="text-sm sm:text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered E-commerce
                solutions that provide your customer with immersive services.
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className="text-white mx-auto text-4xl sm:text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce
              </h1>
              <p className="text-sm sm:text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered E-commerce
                solutions that provide your customer with immersive services.
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className="text-white mx-auto text-4xl sm:text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce
              </h1>
              <p className="text-sm sm:text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered E-commerce
                solutions that provide your customer with immersive services.
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className="text-white mx-auto text-4xl sm:text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce
              </h1>
              <p className="text-sm sm:text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered E-commerce
                solutions that provide your customer with immersive services.
              </p>
            </div>

            <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-500 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className="text-white mx-auto text-4xl sm:text-5xl fill-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce
              </h1>
              <p className="text-sm sm:text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered E-commerce
                solutions that provide your customer with immersive services.
              </p>
            </div>
          </div>
        </div>
      </section>
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
            {/* Languages Card */}
            <div className="bg-white rounded-lg shadow-lg ">
              <div className="bg-gradient-to-r from-blue-900 to-purple-700 text-white p-3 rounded-t-lg">
                <h3 className="text-xl font-bold">Languages</h3>
              </div>
              <ul className="mt-2 space-y-2 p-2 cursor-pointer">
                <li className="flex items-center space-x-2 ">
                  <FaJava className="w-6 h-6 text-red-600" />
                  <span>Java</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaHtml5 className="w-6 h-6 text-orange-500" />
                  <span>HTML5</span>
                </li>
                <li className="flex items-center space-x-2">
                  <img src={cimg} alt="C++" className="w-6 h-6" />
                  <span>C++</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaSwift className="w-6 h-6 text-sky-600" />
                  <span>Swift</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaPhp className="w-6 h-6 text-blue-700" />
                  <span>PHP</span>
                </li>
              </ul>
            </div>

            {/* Tools Card */}
            <div className="bg-white rounded-lg shadow-lg ">
              <div className="bg-gradient-to-r from-blue-900 to-purple-700 text-white p-3 rounded-t-lg">
                <h3 className="text-xl font-bold">Tools</h3>
              </div>
              <ul className="mt-2 space-y-2 p-2">
                <li className="flex items-center space-x-2">
                  <FaMobileAlt className="w-6 h-6 text-blue-500" />
                  <span>Apache Cordova</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaAppStoreIos className="w-6 h-6 text-green-500" />
                  <span>Appcelerator</span>
                </li>
                <li className="flex items-center space-x-2">
                  <img
                    src={note}
                    alt="note"
                    className="w-6 h-6 text-purple-500"
                  />
                  <span>WidgetPad</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaTools className="w-6 h-6 text-orange-500" />
                  <span>RhoMobile Suite</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaSolarPanel className="w-6 h-6 text-yellow-500" />

                  <span>Solar2D</span>
                </li>
              </ul>
            </div>

            {/* Frameworks Card */}
            <div className="bg-white rounded-lg shadow-lg ">
              <div className="bg-gradient-to-r from-blue-900 to-purple-700 text-white p-3 rounded-t-lg">
                <h3 className="text-xl font-bold">Frameworks</h3>
              </div>
              <ul className="mt-2 space-y-2 p-2">
                <li className="flex items-center space-x-2">
                  <SiFlutter className="w-6 h-6" style={{ color: "#02569B" }} />{" "}
                  {/* Flutter Blue */}
                  <span>Flutter</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiIonic className="w-6 h-6" style={{ color: "#3880FF" }} />{" "}
                  {/* Ionic Blue */}
                  <span>Ionic</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiXamarin className="w-6 h-6" style={{ color: "#3498DB" }} />{" "}
                  {/* Xamarin Blue */}
                  <span>Xamarin</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaAppStore
                    className="w-6 h-6"
                    style={{ color: "#0A84FF" }}
                  />{" "}
                  {/* App Store Blue as placeholder */}
                  <span>Felgo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaReact className="w-6 h-6" style={{ color: "#61DAFB" }} />{" "}
                  {/* React Native Cyan */}
                  <span>React Native</span>
                </li>
              </ul>
            </div>

            {/* Service Integrations Card */}
            <div className="bg-white rounded-lg shadow-lg ">
              <div className="bg-gradient-to-r from-blue-900 to-purple-700 text-white p-3 rounded-t-lg">
                <h3 className="text-xl font-bold">Service Integrations</h3>
              </div>
              <ul className="mt-2 space-y-2 p-2">
                <li className="flex items-center space-x-2">
                  <FaCreditCard
                    className="w-6 h-6"
                    style={{ color: "#4CAF50" }}
                  />{" "}
                  {/* Green */}
                  <span>Payment Gateway</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaVideo className="w-6 h-6" style={{ color: "#2196F3" }} />{" "}
                  {/* Blue */}
                  <span>Live & Video Streaming</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaComments
                    className="w-6 h-6"
                    style={{ color: "#FF9800" }}
                  />{" "}
                  {/* Orange */}
                  <span>Chat, Audio & Video Call</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaShoppingCart
                    className="w-6 h-6"
                    style={{ color: "#9C27B0" }}
                  />{" "}
                  {/* Purple */}
                  <span>In-App Purchase</span>
                </li>
                <li className="flex items-center space-x-2">
                  <GiVrHeadset
                    className="w-6 h-6"
                    style={{ color: "#FF5722" }}
                  />{" "}
                  {/* Deep Orange */}
                  <span>AR & VR Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
