import React from "react";
import webapp from "../images/webapp.png";
import { useNavigate } from "react-router-dom";
import webbg from "../images/webbg.jpg";
import {
  FaCode,
  FaCloud,
  FaUserShield,
  FaHeadset,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";
import { FaFileCode, FaRecycle, FaUserFriends, FaWrench } from "react-icons/fa";
import webpro from "../images/webproject.png";
import bgmap from "../images/card-section.jpg";

export default function Webcms() {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };
  const more = () => {
    navigate("/webcms");
  };
  return (
    <>
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="text-white mt-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Web App Development Company
            </h2>
            <p className="mb-6">
              We at Trip Management System offer a custom range of mobile app
              development services which mainly focus on two locations i.e.
              India & USA. We offer services for both Android and iOS platforms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              <button className="flex items-center justify-center border border-white p-2 h-12 font-semibold rounded-full hover:bg-white hover:text-purple-800 transition duration-300">
                <FaUserFriends className="text-xl" />
                <span className="ml-1">Certified web experts</span>
              </button>

              <button className="flex items-center justify-center border border-white p-2 h-12 font-semibold rounded-full hover:bg-white hover:text-purple-800 transition duration-300">
                <FaRecycle className="text-xl" />
                <span className="ml-2">Agile Approach</span>
              </button>

              <button className="flex items-center w-auto border border-white p-2 h-12 font-semibold rounded-full hover:bg-white hover:text-purple-800 transition duration-300">
                <FaWrench className="text-xl pr-1" />
                <span className="">Purpose-BuildSolution</span>
              </button>

              <button className="flex items-center justify-center border text-center p-3 border-white  h-12 font-semibold rounded-full hover:bg-white hover:text-purple-800 transition duration-300">
                <FaHeadset className="text-xl " />
                <span className="">24/7 Extension support</span>
              </button>

              <button className="flex items-center justify-center border w-auto border-white p-3 h-12 font-semibold rounded-full hover:bg-white hover:text-purple-800 transition duration-300">
                <FaFileCode className="text-xl" />
                <span className="">Hassle-free Development</span>
              </button>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className=" p-8 rounded-lg">
            <img src={webapp} alt="" />
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center gap-8 justify-center bg-white p-8 md:p-16">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#000031] to-[#7f0f54] text-transparent bg-clip-text">
            Get a Robust Online Presence with Our Market-Ready Web App
            Development Solutions
          </h1>
          <p className="text-gray-600">
            At Trip Management System, we understand the importance of creating
            immersive web experiences to elevate your market value. Our team of
            dedicated web experts understands your unique business needs to
            customize web app development solutions for you. So, that your users
            get an immersive user experience.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md text-center">
            <div className="text-5xl mb-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] bg-clip-text text-transparent">
              <i className="fas fa-briefcase"></i>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#000031] to-[#7f0f54] bg-clip-text text-transparent">
              21+
            </h2>
            <p className="text-gray-500">Years of Experience</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md text-center">
            <div className="text-5xl mb-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] bg-clip-text text-transparent">
              <i className="fas fa-smile"></i>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#000031] to-[#7f0f54] bg-clip-text text-transparent">
              150+
            </h2>
            <p className="text-gray-500">Industry Experts</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md text-center">
            <div className="text-5xl mb-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] bg-clip-text text-transparent">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#000031] to-[#7f0f54] bg-clip-text text-transparent">
              95%
            </h2>
            <p className="text-gray-500">User Retention</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md text-center">
            <div className="text-5xl mb-2 bg-gradient-to-r from-[#000031] to-[#7f0f54] bg-clip-text text-transparent">
              <i className="fas fa-globe"></i>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#000031] to-[#7f0f54] bg-clip-text text-transparent">
              200+
            </h2>
            <p className="text-gray-500">Global Clients</p>
          </div>
        </div>
      </div>
      <div className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Web App Development Services We Offer
          </h2>
          <p className="mt-2 text-gray-600">
            Our dedicated team of web developers presents end-to-end robust web
            solutions to profit your business.
          </p>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {/* Custom Web App Development */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800">
                <FaCode className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                Custom Web App Development
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
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800">
                <FaTools className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                Open-Source Web App Development
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white">
                Our dedicated team of web experts ensures the building of
                feature-rich and fully functional web applications, without
                extra licensing fees.
              </p>
            </div>

            {/* E-commerce Web App Development */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800">
                <FaShoppingCart className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                E-commerce Web App Development
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white">
                Transform your eCommerce web presence with our streamlined web
                app development services for the dynamic marketplace.
              </p>
            </div>

            {/* SaaS Development */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800">
                <FaCloud className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                SaaS Development
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white">
                Our team is equipped with the latest tools and technologies for
                cloud-based applications to benefit your business with optimized
                costs and profits.
              </p>
            </div>

            {/* Web App Support and Maintenance Services */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800">
                <FaHeadset className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                Web App Support and Maintenance Services
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white">
                We ensure to offer the support even after the successful
                deployment, with 24/7 availability to address your queries and
                keep your application updated.
              </p>
            </div>
            {/* Web Portal Development */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800">
                <FaUserShield className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                Web Portal Development
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white">
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

          <div className="container text-black mt-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unless Tech Intelligence To offer Seamless UserExperience With our
              Web app Development
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
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-blue-700 text-white font-semibold rounded-full text-lg hover:from-blue-700 hover:to-red-500 transition duration-500"
              onClick={more}
            >
              Read More
            </button> */}
          </div>

          {/* Right Section */}
          <div className=" rounded-lg">
            <img src={webpro} alt="" className="rounded-lg w-full" />
          </div>
        </div>
      </section>
      <div className="bg-indigo-950 relative h-full p-6 sm:p-8 md:p-10 ">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 "
          style={{
            backgroundImage: `url(${webbg})`,
            backgroundColor: "rgba(0,0,0,0.6)",
            backgroundBlendMode: "multiply",
          }}
        />

        <h1 className="text-white  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative z-10 text-center m-2 p-2 leading-relaxed">
          Do you Want Custom{" "}
          <span className="text-orange-500 font-bold">
            Web App Development{" "}
          </span>
          For profitable Application
        </h1>

        <div className="text-center relative z-10 mt-4">
          <button
            onClick={contact}
            className="text-white bg-orange-500 hover:bg-orange-600 rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg inline-block "
          >
            Hire Experts Now
          </button>
        </div>
      </div>
    </>
  );
}
