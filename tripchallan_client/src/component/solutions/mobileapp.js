import React from "react";
import mobapp from "../images/mobileapp.png";
import mobile from "../images/mapp.png";
import searching from "../images/Searching.png";
import bgmap from "../images/card-section.jpg";
import { useNavigate } from "react-router-dom";
import {
  FaAndroid,
  FaApple,
  FaLaptop,
  FaReact,
  FaStickyNote,
  FaSpeakerDeck,
} from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";


export default function Mobileapp() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  const more = () => {
    navigate("/mobileapp");
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
              We at Trip Challan Book offer a custom range of mobile app
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
            <button
              onClick={more}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-blue-700 text-white font-semibold rounded-full text-lg hover:from-blue-700 hover:to-red-500 transition duration-500"
            >
              Read More
            </button>
          </div>
        </div>
      </section>
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
