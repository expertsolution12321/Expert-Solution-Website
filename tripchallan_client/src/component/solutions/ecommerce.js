import React from "react";
import banimg from "../images/ecomban.png";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import card5 from "../images/card5.png";
import card6 from "../images/card6.png";
import card7 from "../images/card-section.jpg";
import { useNavigate } from "react-router-dom";
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

      {/* Card section */}
      <section
        className="py-16 px-4 bg-gray-100 object-cover size-full"
        style={{ backgroundImage: `url(${card7})` }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">
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
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
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
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
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
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
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
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
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
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
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
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
