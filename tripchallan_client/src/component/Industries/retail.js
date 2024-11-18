import React from "react";
import retailpage from "../images/retail.png";
import retailpage1 from "../images/m.jpg";
import retailpage2 from "../images/img7.png";
import retailpage3 from "../images/img8.jpg";
import retailpage4 from "../images/img9.png";
import retailpage5 from "../images/project.png";
import cardsec from "../images/card-section.jpg";
import techbg from "../images/techbg.jpeg";
import { useNavigate } from "react-router-dom";
import {
  FaCheck,
  FaIcons,
  FaUserFriends,
  FaInnosoft,
  FaWarehouse,
  FaTable,
  FaDigitalOcean,
} from "react-icons/fa";
import { FaFreeCodeCamp, FaInvision, FaMobile } from "react-icons/fa6";
export default function Retail() {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="bg-indigo-950 p-8 sm:p-16 md:p-24 lg:p-44 relative flex flex-col items-center justify-center  lg:h-[400px] xl:h-[400px] text-white"
      style={{
        backgroundImage: `url(${retailpage})`,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "multiply",
        backgroundSize:"cover"
      }}

      >

        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10 text-center m-2 p-2">
          Retail Management Software Solutions to Strengthen Your Company
        </h1>

        <ul className="flex flex-col sm:flex-row gap-4 text-center relative w-auto">
          <li className="group text-white border border-t-gray-50 px-3 py-3 h-14 rounded-full flex items-center w-auto text-lg font-semibold hover:bg-white hover:text-black transition duration-300 cursor-pointer">
            <FaIcons className="text-2xl  sm:text-3xl lg:text-4xl mr-2 group-hover:fill-red-600 " />
            <span className="group-hover:text-black leading-5">
              Multichannel Integration
            </span>
          </li>

          <li className="group text-white border border-t-gray-50 px-3 py-3 h-14 rounded-full flex items-center w-auto text-lg font-semibold hover:bg-white hover:text-black transition duration-300 cursor-pointer">
            <FaUserFriends className="text-2xl  sm:text-3xl lg:text-4xl mr-2 sm:m-0 group-hover:fill-blue-700 " />
            <span className="group-hover:text-black leading-4">
              User-Friendly Interface and Accessibility
            </span>
          </li>
        </ul>

        <div className="text-center relative z-10 items-center flex flex-col sm:flex-row">
          <button
            onClick={contact}
            className="text-white bg-orange-500 rounded-full px-3 py-2 font-semibold hover:bg-orange-600 transition duration-300"
          >
            Request A Quote
          </button>
        </div>
      </div>

      <div
        className=" mb-10"
        style={{
          backgroundImage: `url(${cardsec})`,
        }}
      >
        <h2 className="flex justify-center text-3xl md:text-5xl font-bold text-center mx-5 mt-7">
          Retail Management Software Solutions: Empowering Retail Excellence,
          Every Step of the Way
        </h2>
        <p className="text-center text-lg md:text-xl mx-5 p-5">
          Trip Challan Book is aware of the difficulties that retail
          establishments must overcome. With a range of all-inclusive solutions
          to improve every facet of your retail operations, our{" "}
          <strong>Store Management Software</strong> services are built to
          tackle these issues head-on.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="border border-white shadow m-3 p-3 rounded bg-white">
            <h3 className="text-indigo-900 text-lg flex items-center gap-2">
              <FaInnosoft className="text-4xl text-orange-500" />
              Inventory Management
            </h3>
            <p>
              Effectively oversee and regulate your stock with accuracy. Our
              Retail inventory management software guarantees real-time
              visibility, reducing the likelihood of stockouts and overstocks
              and maximizing order fulfillment.
            </p>
          </div>
          <div className="border border-white shadow m-3 p-3 rounded bg-white">
            <h3 className="text-indigo-900 text-lg flex items-center gap-2">
              <FaWarehouse className="text-4xl text-blue-500" />
              Warehouses Management
            </h3>
            <p>
              Optimize the efficiency of your warehouse operations by
              streamlining them. Our warehouse management system assists in
              planning, monitoring, and optimizing warehouse operations.
            </p>
          </div>
          <div className="border border-white shadow m-3 p-3 rounded bg-white">
            <h3 className="text-indigo-900 text-lg flex items-center gap-2">
              <FaTable className="text-4xl text-green-500" />
              Scheduling of Production
            </h3>
            <p>
              Use our manufacturing Planning module to streamline your
              manufacturing procedures. Arrange, plan, and oversee production
              processes for the best use of available resources.
            </p>
          </div>
          <div className="border border-white shadow m-3 p-3 rounded bg-white">
            <h3 className="text-indigo-900 text-lg flex items-center gap-2">
              <FaFreeCodeCamp className="text-4xl text-teal-500" />
              Forecasting Demand
            </h3>
            <p>
              With the help of our demand forecasting tools, we can accurately
              predict market demand. Utilize data analytics to forecast trends
              and consumer preferences.
            </p>
          </div>
          <div className="border border-white shadow m-3 p-3 rounded bg-white">
            <h3 className="text-indigo-900 text-lg flex items-center gap-2">
              <FaDigitalOcean className="text-4xl text-purple-500" />
              Engagement of Digital Customers
            </h3>
            <p>
              With our digital customer engagement solutions, improve customer
              interactions. Construct individualized experiences and cultivate
              client loyalty.
            </p>
          </div>
          <div className="border border-white shadow m-3 p-3 rounded bg-white">
            <h3 className="text-indigo-900 text-lg flex items-center gap-2">
              <FaMobile className="text-4xl text-red-500" />
              Mobile Apps for Retail
            </h3>
            <p>
              With our retail mobile apps, stay in touch with your consumers
              while on the road. Increase consumer satisfaction with tailored
              offers.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-800 relative">
        <div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="bg-indigo-800">
            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl mb-4">
              Our Retail Management System Services to Boost Your Retail
              Experience
            </h3>
            <p className="text-slate-300 text-base md:text-lg lg:text-xl mb-6">
              At Trip Challan Book, we believe that smooth operations and
              effective management are fundamental to a successful retail
              business. Our <strong>Retail Management System Services</strong>{" "}
              are designed to empower your company.
            </p>
            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-2">
              <li className="flex items-center px-4 py-2 m-2 border rounded-full bg-white shadow-md cursor-pointer ">
                <FaCheck className="mr-2 text-green-500 text-lg md:text-xl" />
                <span className="text-base md:text-base lg:text-lg text-gray-800">
                  Efficient Inventory Management
                </span>
              </li>

              <li className="flex items-center px-4 py-2 m-2 border rounded-full bg-white shadow-md cursor-pointer ">
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
          <div className="flex justify-center items-center">
            <img
              src={retailpage1}
              alt="Retail Management"
              className="rounded w-full max-w-[400px] h-auto md:w-[350px] lg:w-[400px] relative z-150"
            />
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row items-center bg-cover bg-center p-6"
        style={{
          backgroundImage: `url(${techbg})`,
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="flex-1 p-6">
          <div className="max-w-xl  rounded-lg p-6 md:p-8 rigth-0 md:mx-0">
            <h2 className="text-white text-3xl  mb-4 font-bold">
              Discover how Trip Management System Revolutionizes Retail
              Operations with its Adaptability to Diverse Business Needs
            </h2>
            <button
              onClick={contact}
              className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300"
            >
              Start Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
