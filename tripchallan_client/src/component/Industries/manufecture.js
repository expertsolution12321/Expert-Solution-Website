import React from "react";
import manufecturepage from "../images/s1.jpg";
import manufecturepage1 from "../images/m.jpg";
import manufecturepage2 from "../images/img7.png";
import manufecturepage3 from "../images/img8.jpg";
import manufecturepage4 from "../images/img9.png";
import manufecturepage5 from "../images/project.png";
import manufecturepage14 from "../images/set.png";
import manufecturepage15 from "../images/javascript.png";
import manufecturepage16 from "../images/html.png";
import manufecturepage17 from "../images/tailwind.png";
import manufecturepage18 from "../images/nodejs.png";
import manufecturepage19 from "../images/express.png";
import manufecturepage20 from "../images/react.png";
import manufecturepage21 from "../images/mongodb.jpg";
import manufecturepage22 from "../images/sql.png";
import { useNavigate } from "react-router-dom";
import {
  FaIndustry,
  FaLightbulb,
  FaCog,
  FaArtstation,
  FaHandHoldingHeart,
  FaAccessibleIcon,
  FaAccusoft,
  FaAngellist,
  FaCheck,
  FaAngular,
  FaVuejs,
} from "react-icons/fa";
export default function Manufecture() {
  const navigate=useNavigate();
  const contact=()=>{
    navigate('/contact')
  }
  return (
    <>
      <div
        className="bg-indigo-950 p-8 sm:p-16 md:p-24 lg:p-44 relative flex flex-col items-center justify-center min-h-screen"
        style={{
          backgroundImage: `url(${manufecturepage})`,
          backgroundColor: "rgba(0,0,0,0.7)",
          backgroundBlendMode: "multiply",
        }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold relative z-10 text-center m-2 p-2">
          Elevating{" "}
          <span className="text-orange-500 font-bold">
            Manufacturing Operations
          </span>{" "}
          with IT Solutions
        </h1>
        <ul className="flex flex-col sm:flex-row gap-4 text-center relative z-10 mt-4">
          <li className="group hover:bg-white text-white border border-gray-50 p-2 rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg cursor-pointer">
            <FaLightbulb className="mr-2 text-lg sm:text-xl md:text-2xl text-yellow-400" />
            <span className="group-hover:text-black leading-5">Scalable Technology Integration</span>
          </li>
          <li className="group hover:bg-white text-white border border-gray-50 p-2 rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg cursor-pointer">
            <FaCog className="mr-2 text-lg sm:text-xl md:text-2xl text-red-600" />
            <span className="group-hover:text-black leading-5">Expertise With Technological Innovation</span>
          </li>
        </ul>

        <div className="text-center relative z-10 mt-6">
          <button
            onClick={contact}
            className="text-white bg-orange-500 hover:bg-orange-400  hover:text-black rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg transition-colors"
          >
            Request A Quote
          </button>
        </div>
      </div>

      {/* card */}
      <div className="container mx-auto mt-6 px-4 mb-8">
        <h2 className="flex justify-center font-bold mb-7 text-lg sm:text-xl md:text-2xl lg:text-3xl ">
          Our Manufacturing Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div className="border border-white shadow-lg  p-4  rounded cursor-pointer">
            <h3 className="text-indigo-900 text-lg flex items-center mb-2">
              <FaIndustry className="mr-2 text-2xl" />
              Industry-leading Professionals
            </h3>
            <p className="text-sm sm:text-base">
              Our success in the manufacturing industry is driven by
              professionals with knowledge, experience, and passion for every
              project. Our team is the foundation of our expertise, from
              engineers and technicians to quality control.
            </p>
          </div>
          <div className="border border-white shadow-lg  p-4  rounded cursor-pointer">
            <h3 className="text-indigo-900 text-lg flex items-center mb-2">
              <FaArtstation className="mr-2 text-2xl" />
              State-of-the-Art Facilities
            </h3>
            <p className="text-sm sm:text-base">
              Our manufacturing IT solutions are equipped with the latest
              technology. We invest in upgrading and expanding our
              infrastructure to ensure efficiency and production quality. We
              stay at the forefront of the industry with our commitment to
              modernization.
            </p>
          </div>
          <div className="border border-white shadow-lg  p-4  rounded cursor-pointer">
            <h3 className="text-indigo-900 text-lg flex items-center mb-2">
              <FaHandHoldingHeart className="mr-2 text-2xl" />
              Innovation at the Core
            </h3>
            <p className="text-sm sm:text-base">
              We thrive on pushing boundaries, embracing industry standards,
              quality, and finding creative solutions to complex challenges. We
              are at the forefront of innovation by developing groundbreaking
              products and optimizing manufacturing processes.
            </p>
          </div>
          <div className="border border-white shadow-lg  p-4  rounded cursor-pointer">
            <h3 className="text-indigo-900 text-lg flex items-center mb-2">
              <FaAccessibleIcon className="mr-2 text-2xl" />
              Quality Assurance
            </h3>
            <p className="text-sm sm:text-base">
              Our quality control measures are rigorous. We adhere to the
              highest standards, from materials sourcing to final inspection, to
              ensure that every product meets and exceeds expectations.
            </p>
          </div>
          <div className="border border-white shadow-lg  p-4  rounded cursor-pointer">
            <h3 className="text-indigo-900 text-lg flex items-center mb-2">
              <FaAccusoft className="mr-2 text-2xl" />
              Customization and Flexibility
            </h3>
            <p className="text-sm sm:text-base">
              Manufacturing software development services from OrangeMantra
              offers customization and flexibility in production. We tailor
              processes to specific requirements to ensure that unique needs are
              met with precision.
            </p>
          </div>
          <div className="border border-white shadow-lg  p-4  rounded cursor-pointer">
            <h3 className="text-indigo-900 text-lg flex items-center mb-2">
              <FaAngellist className="mr-2 text-2xl" />
              Comprehensive Solutions
            </h3>
            <p className="text-sm sm:text-base">
              We offer end-to-end manufacturing solutions, starting from
              concept, design, prototyping, production, to delivery. Our
              expertise spans across various industries, making us your trusted
              partner in manufacturing IT solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-800 relative">
        <div className=" container text-center grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 p-4">
          <div className="mt-5  bg-indigo-800">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Transforming Manufacturing Through Innovation
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              In the manufacturing world, staying competitive requires embracing
              innovation. Our IT solutions for the manufacturing industry offer
              a range of features designed to improve overall efficiency, reduce
              errors, and provide a competitive edge.
            </p>
            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-2">
              <li className="flex items-center px-4 py-2 m-2 border rounded-full bg-white shadow-md cursor-pointer">
                <FaCheck className="mr-2 text-green-500 text-lg md:text-xl" />
                <span className="text-base md:text-base lg:text-lg text-gray-800">
                  Efficient Inventory Management
                </span>
              </li>

              <li className="flex items-center px-4 py-2 m-2 border rounded-full bg-white shadow-md cursor-pointer">
                <FaCheck className="mr-2 text-green-500 text-lg md:text-xl" />
                <span className="text-sm md:text-base lg:text-lg text-gray-800">
                  Seamless Multichannel Integration
                </span>
              </li>

              <li className="flex items-center px-4 py-2 m-2 border rounded-full bg-white shadow-md cursor-pointer">
                <FaCheck className="mr-2 text-green-500 text-lg md:text-xl" />
                <span className="text-sm md:text-base lg:text-lg text-gray-800">
                  CRM Features
                </span>
              </li>

              <li className="flex items-center px-4 py-2 m-2 border rounded-full bg-white shadow-md cursor-pointer">
                <FaCheck className="mr-2 text-green-500 text-lg md:text-xl" />
                <span className="text-sm md:text-base lg:text-lg text-gray-800">
                  Analytics and Business Intelligence
                </span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={manufecturepage1}
              alt="Manufacturing Process"
              className="rounded w-full h-[200px]  object-cover"
            />
          </div>
        </div>
      </div>

      <div className=" mb-10 container">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl m-5">
          Tailored IT Solutions for Manufacturing Industry
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="rounded-3xl bg-slate-100 shadow-lg cursor-pointer">
            <img
              src={manufecturepage2}
              className="w-full h-[200px] rounded-t-3xl object-cover"
              alt="Automotive Manufacturing"
            />
            <h5 className="text-black text-base sm:text-lg p-2">
              Automotive Manufacturing
            </h5>
            <p className="text-sm sm:text-base p-2">
              Our manufacturing IT solutions enhance production efficiency and
              quality control in the automotive industry through automated
              processes and data-driven decision making.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-100 shadow-lg cursor-pointer">
            <img
              src={manufecturepage3}
              className="w-full h-[200px] rounded-t-3xl object-cover"
              alt="Food & Beverage Manufacturing"
            />
            <h5 className="text-black text-base sm:text-lg p-2">
              Food & Beverage Manufacturing
            </h5>
            <p className="text-sm sm:text-base p-2">
              Manufacturing IT solutions optimize food safety, traceability and
              production efficiency while adhering to industry regulations.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-100 shadow-lg cursor-pointer">
            <img
              src={manufecturepage4}
              className="w-full h-[200px] rounded-t-3xl object-cover"
              alt="Pharmaceutical Manufacturing"
            />
            <h5 className="text-black text-base sm:text-lg p-2">
              Pharmaceutical Manufacturing
            </h5>
            <p className="text-sm sm:text-base p-2">
              Manufacturing software developing services ensure regulatory
              compliance and quality control with IT solutions tailored to
              pharmaceutical manufacturing.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-100 shadow-lg cursor-pointer">
            <img
              src={manufecturepage5}
              className="w-full h-[200px] rounded-t-3xl object-cover"
              alt="Aerospace and Defence"
            />
            <h5 className="text-black text-base sm:text-lg p-2">
              Aerospace and Defence
            </h5>
            <p className="text-sm sm:text-base p-2">
              With our IT services for manufacturing industry, you can
              streamline complex manufacturing processes, manage supply chains,
              and enhance quality control in aerospace and defence.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-950 relative h-full p-6 sm:p-8 md:p-10 ">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 "
          style={{
            backgroundImage: `url(${manufecturepage14})`,
            backgroundColor: "rgba(0,0,0,0.6)",
            backgroundBlendMode: "multiply",
          }}
        />

        <h1 className="text-white  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative z-10 text-center m-2 p-2">
          Ready to Transform Your{" "}
          <span className="text-orange-500 font-bold">
            Manufacturing Operations
          </span>
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl text-center z-10 relative m-4">
          Discover How Our Advanced Technologies Can Revolutionize Your
          Operations
        </p>
        <div className="text-center relative z-10 mt-4">
          <button
            onClick={contact}
            className="text-white bg-orange-500 hover:bg-orange-600 rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg inline-block"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className=" container">
        <h3 className="text-center font-bold">Our Technology Toolbox</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
          <div className="border border-white shadow rounded-xl ">
            <h4 className="text-white bg-indigo-800 p-2 rounded-t-xl">
              Programming Languages
            </h4>
            <ul className="space-y-2 px-2 p-0">
              <li className="flex items-center cursor-pointer">
                <img
                  src={manufecturepage15}
                  className="w-6 h-6 mr-2"
                  alt="Javascript"
                />
                Javascript
              </li>
              <li className="flex items-center cursor-pointer">
                <img
                  src={manufecturepage16}
                  className="w-6 h-6 mr-2"
                  alt="HTML/CSS"
                />
                Html/CSS
              </li>
              <li className="flex items-center cursor-pointer">
                <img
                  src={manufecturepage17}
                  className="w-6 h-6 mr-2"
                  alt="Tailwind CSS"
                />
                Tailwind CSS
              </li>
              <li className="flex items-center cursor-pointer">
                <img
                  src={manufecturepage18}
                  className="w-6 h-6 mr-2"
                  alt="Node JS"
                />
                Node JS
              </li>
              <li className="flex items-center cursor-pointer">
                <img
                  src={manufecturepage19}
                  className="w-6 h-6 mr-2"
                  alt="Express JS"
                />
                Express JS
              </li>
            </ul>
          </div>
          <div className="border border-white shadow rounded-xl ">
            <h4 className="text-white bg-indigo-800 p-2 rounded-t-xl">
              Frameworks
            </h4>
            <ul className="space-y-2 px-2 p-0">
              <li className="flex items-center cursor-pointer">
                <img
                  src={manufecturepage20}
                  className="w-6 h-6 mr-2"
                  alt="React JS"
                />
                React JS
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
            <ul className="space-y-2 px-2 p-0">
              <li className="flex items-center cursor-pointer">
                <img
                  src={manufecturepage21}
                  className="w-6 h-6 mr-2"
                  alt="MongoDB"
                />
                MongoDB
              </li>
              <li className="flex items-center cursor-pointer">
                <img
                  src={manufecturepage22}
                  className="w-6 h-6 mr-2"
                  alt="SQL"
                />
                SQL
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
