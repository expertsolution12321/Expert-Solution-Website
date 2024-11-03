import React from "react";
import mobapp from "../images/mobileapp.png";
import mobile from "../images/mobapp.png";
import searching from "../images/Searching.png";
import bgmap from "../images/card-section.jpg";
import note from "../images/signature.png";
import backgr from "../images/mappbg.png";

import { FaAppStore } from "react-icons/fa";
import { SiFlutter, SiIonic, SiXamarin } from "react-icons/si";
import {
  FaCreditCard,
  FaVideo,
  FaComments,
  FaShoppingCart,
} from "react-icons/fa";
import { GiVrHeadset } from "react-icons/gi";
// import { GrCertificate } from "react-icons/gr";
import {
  FaAppStoreIos,
  FaMobileAlt,
  FaSolarPanel,
  FaTools,
} from "react-icons/fa";

import {
  FaGlobe,
  FaHtml5,
  FaJava,
  FaMobile,
  FaRocket,
  FaSwift,
  FaThumbsUp,
  FaTrophy,
  FaWifi,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import {
  FaAndroid,
  FaApple,
  FaLaptop,
  FaReact,
  FaStickyNote,
  FaSpeakerDeck,
} from "react-icons/fa";
import cimg from "../images/c.png";
import { FaCartShopping, FaPhp } from "react-icons/fa6";

export default function Mobileapp() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="text-white mt-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mobile App Development Services
            </h2>
            <p className="mb-6">
              We at Trip Management system offer a custom range of mobile app
              development services which mainly focus on two locations i.e.
              India & USA. We offer services for both Android and iOS platforms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <button className="flex items-center justify-center border border-white py-2 px-2 rounded-lg hover:bg-white hover:text-purple-800 transition">
                <span className="material-icons-outlined">
                  <FaAndroid className="text-xl" />
                </span>
                <span className="ml-3">Android App</span>
              </button>
              <button className="flex items-center justify-center border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-purple-800 transition">
                <span className="material-icons-outlined">
                  <FaApple className="text-xl" />
                </span>
                <span className="ml-2">iOS App</span>
              </button>
              <button className="flex items-center justify-center border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-purple-800 transition">
                <span className="material-icons-outlined">
                  <FaReact className="text-xl" />
                </span>
                <span className="ml-2">React Native</span>
              </button>
              <button className="flex items-center justify-center border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-purple-800 transition">
                <span className="material-icons-outlined">
                  <FaStickyNote className="text-xl" />
                </span>
                <span className="ml-2">Hybrid Apps</span>
              </button>
              <button className="flex items-center justify-center border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-purple-800 transition">
                <span className="material-icons-outlined">
                  <FaLaptop className="text-xl" />
                </span>
                <span className="ml-2">Cross Platform</span>
              </button>
              <button className="flex items-center justify-center border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-purple-800 transition">
                <span className="material-icons-outlined">
                  <FaSpeakerDeck className="text-xl" />
                </span>
                <span className="ml-2">Flutter</span>
              </button>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className=" p-8 rounded-lg">
            <img src={mobapp} alt="" />
          </div>
        </div>
      </section>
      <section className=" w-full bg-white p-4 sm:p-6 md:p-8">
        <div className=" flex flex-col md:flex-row items-center justify-center max-w-[1280px] mx-auto ">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              A Technology Partnership With Expert solution Goes Beyond Your
              Mobile App Development
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
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center shadow-md shadow-gray-300">
              <FaGlobe className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                10+
              </h1>
              <span className="text-base font-semibold">Countries Served</span>
            </div>
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center shadow-md shadow-gray-300">
              <FaTrophy className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                15+
              </h1>
              <span className="text-base font-semibold">Award Won</span>
            </div>
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center shadow-md shadow-gray-300">
              <FaThumbsUp className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                150+
              </h1>
              <span className="text-base font-semibold">Happy Client</span>
            </div>
            <div className="h-[180px] w-[250px] border rounded-xl flex flex-col items-center p-4 text-center shadow-md shadow-gray-300">
              <FaRocket className="text-5xl text-white p-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] rounded-lg mb-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000031]">
                50+
              </h1>
              <span className="text-base font-semibold">App Delivered</span>
            </div>
          </div>
        </div>
      </section>
      <div
        className="py-10 bg-gray-50"
        style={{
          backgroundImage: `url(${backgr})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Mobile Application Development Services
          </h2>
          <p className="mt-2 text-gray-600">
            From Android and IOS to hybrid and PWAs,Your Offering Cover all
            Things Mobile ! and that is not all of it:Wheather its iot
            Apps,m-commerce or gamming app,You can count on us!
          </p>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {/* Custom Web App Development */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800 mx-auto">
                <FaAndroid className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                Android App Development
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white">
                We are sure to offer tailored solutions to fulfill your unique
                business needs. Our web app development services ensure
                scalable, usable web applications to present the desired
                outcomes.
              </p>
            </div>

            {/* Open-Source Web App Development */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800 mx-auto">
                <FaApple className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                ios App Development
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white">
                Our dedicated team of web experts ensures the building of
                feature-rich and fully functional web applications, without
                extra licensing fees.
              </p>
            </div>

            {/* E-commerce Web App Development */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800 mx-auto">
                <FaLaptop className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                Hybrid App Development
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white">
                Transform your eCommerce web presence with our streamlined web
                app development services for the dynamic marketplace.
              </p>
            </div>

            {/* SaaS Development */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800 mx-auto">
                <FaMobile className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                PWA Development
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white">
                Our team is equipped with the latest tools and technologies for
                cloud-based applications to benefit your business with optimized
                costs and profits.
              </p>
            </div>

            {/* Web App Support and Maintenance Services */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800 mx-auto">
                <FaWifi className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                IoT App
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white">
                We ensure to offer the support even after the successful
                deployment, with 24/7 availability to address your queries and
                keep your application updated.
              </p>
            </div>
            {/* Web Portal Development */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 mx-auto transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800">
                <FaCartShopping className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white text-center">
                M-Commerce App
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white text-center">
                Get a seamless connection between you and your customers with
                our web portal development solutions using the latest tech
                stack.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section
        className="bg-white py-10 px-4 bg-cover object-cover"
        style={{ backgroundImage: `url(${bgmap})` }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className=" rounded-lg">
            <img src={mobile} alt="mobile app image" />
          </div>

          {/* Right Section */}
          <div className="text-black mt-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mobile App Development that Runs in Every Platform
            </h2>
            <p className="mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.{" "}
            </p>
            {/* <button
              onClick={more}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-blue-700 text-white font-semibold rounded-full text-lg hover:from-blue-700 hover:to-red-500 transition duration-500"
            >
              Read More
            </button> */}
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
              <ul className="mt-2 space-y-2 p-2 cursor-pointer">
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
              <ul className="mt-2 space-y-2 p-2 cursor-pointer">
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
              <ul className="mt-2 space-y-2 p-2 cursor-pointer">
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
      <section
        className="bg-white py-10 px-4 object-fit bg-cover"
        style={{ backgroundImage: `url(${searching})` }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Left Section */}

          <div className="text-black mt-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Searching For Best Gps Tracking Services For Your Help ?
            </h2>
            <p className="mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.{" "}
            </p>
            <button
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-blue-700 text-white font-semibold rounded-full text-lg hover:from-blue-700 hover:to-red-500 transition duration-500"
              onClick={handleClick}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
