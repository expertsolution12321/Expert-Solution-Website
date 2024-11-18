import React from "react";
import mobapp from "../images/mobilesol.jpg";
import qrcode from "../images/qrcode.png";
import bgmap from "../images/card-section.jpg";
import backgr from "../images/mappbg.png";
import mspeed from "../images/mobilespeed.jpg";
import sol2 from "../images/sol2.jpg";
import tban from "../images/Tban.jpg";
import testimonial from "../images/testimonial.jpg";
import download from "../images/mdapp.png";
import { GiSteeringWheel } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaBell, FaChessQueen, FaMap, FaTrophy, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaTicket } from "react-icons/fa6";

export default function Mobileapp() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };

  const testimonials = [
    {
      text: "Managing 50+ vehicles was chaos until we found this app. It's been a lifesaver!",
      author: "- Rajesh K., Logistics Head",
    },
    {
      text: "Driver communication is now instant and effortless. We've seen a 30% productivity boost.",
      author: "- Priya M., Fleet Supervisor",
    },
    {
      text: "Tracking vehicle performance has never been easier. Highly recommended!",
      author: "- Ankit P., Operations Manager",
    },
    {
      text: "Real-time updates and analytics are game-changers for our fleet management.",
      author: "- Sunita R., Logistics Coordinator",
    },
    {
      text: "Cost tracking is so much more transparent now. A must-have tool for logistics!",
      author: "- Akash J., Financial Analyst",
    },
  ];

  return (
    <>
      <section
        className="py-6 md:py-8 px-4 md:px-6"
        style={{
          backgroundImage: `url('${mobapp}')`,
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,255,0.5)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="text-white mt-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Trip Management in Your Pocket
            </h2>
            <p className="mb-6">
              Imagine a world where managing your fleet, drivers, and trips is
              just a tap away. Our mobile app delivers the power to transform
              your logistics operations with ease and precision. It’s not just
              an app, it's your command center for success.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
          Why Our Mobile App Is the Ultimate Solution
        </h1>
        <div className="flex flex-col gap-y-8 max-w-[1280px] mx-auto">
          {/* Feature Item */}
          <article className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0">
              <img
                src={mspeed}
                alt="Illustration representing app speed and performance"
                className="w-[300px] h-[150px] rounded-lg shadow-lg shadow-slate-300"
              />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Built for Speed</h3>
              <p>
                Our mobile app is designed to deliver unparalleled performance,
                ensuring your operations run smoothly without delays. Whether
                you're tracking vehicles in real-time, scheduling trips, or
                accessing critical data, the app responds instantly to keep up
                with your fast-paced business needs.
              </p>
            </div>
          </article>
          {/* Feature Item */}
          <article className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0">
              <img
                src={sol2}
                alt="Illustration showing customization of app features"
                className="w-[300px] h-[150px] rounded-lg shadow-lg shadow-slate-300"
              />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Tailored for You</h3>
              <p>
                Our mobile app adapts to your unique business needs, providing a
                customizable and intuitive experience. Whether you're managing a
                single vehicle or an extensive fleet, the app offers features
                and settings designed to fit your operational style perfectly.
              </p>
            </div>
          </article>
          <article className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0">
              <img
                src={mspeed}
                alt="Illustration representing app speed and performance"
                className="w-[300px] h-[150px] rounded-lg shadow-lg shadow-slate-300"
              />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Insight-Driven</h3>
              <p>
                Our mobile app is designed to deliver unparalleled performance,
                ensuring your operations run smoothly without delays. Whether
                you're tracking vehicles in real-time, scheduling trips, or
                accessing critical data, the app responds instantly to keep up
                with your fast-paced business needs.
              </p>
            </div>
          </article>
          {/* Feature Item */}
          <article className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0">
              <img
                src={sol2}
                alt="Illustration showing customization of app features"
                className="w-[300px] h-[150px] rounded-lg shadow-lg shadow-slate-300"
              />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Offline Mode</h3>
              <p>
                Our mobile app adapts to your unique business needs, providing a
                customizable and intuitive experience. Whether you're managing a
                single vehicle or an extensive fleet, the app offers features
                and settings designed to fit your operational style perfectly.
              </p>
            </div>
          </article>
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
            Empower Your Business Like Never Before
          </h2>
          {/* <p className="mt-2 text-gray-600">
            From Android and IOS to hybrid and PWAs,Your Offering Cover all
            Things Mobile ! and that is not all of it: Wheather its iot Apps,
            m-commerce or gamming app,You can count on us!
          </p> */}

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Dynamic Route Mapping */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800 mx-auto">
                <FaMap className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                Dynamic Route Mapping
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white">
                Streamline your deliveries with cutting-edge AI-powered route
                optimization. Our advanced algorithms analyze real-time traffic,
                road conditions, and delivery priorities to design the most
                efficient routes for your fleet.
              </p>
            </div>

            {/* Open-Source Web App Development */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800 mx-auto">
                <FaTrophy className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                Driver Leaderboard
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
                <FaBell className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                Push Notifications
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white">
                Transform your eCommerce web presence with our streamlined web
                app development services for the dynamic marketplace.
              </p>
            </div>

            {/* SaaS Development */}
            <div className="group hover:text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-lg hover:rounded-br-lg duration-300 ease-out hover:bg-gradient-to-r from-[#000031] to-[#7f0f54]">
              <div className="flex items-center justify-center bg-purple-800 hover:bg-white text-white hover:text-purple-800 w-12 h-12 rounded-full mb-4 transition duration-300 group-hover:bg-red-700 group-hover:text-purple-800 mx-auto">
                <FaTicket className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                Expense Snapshots
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white">
                Our team is equipped with the latest tools and technologies for
                cloud-based applications to benefit your business with optimized
                costs and profits.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="p-8 bg-gray-100"
        style={{
          backgroundImage: `url(${tban})`,
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0,0.3)",
          backgroundBlendMode: "multiply",
        }}
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-white">
          The Right Tool for Every Stakeholder
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* For Managers */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center">
            <FaUser size={40} className="text-blue-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">For Managers</h4>
            <p className="text-gray-600">
              Track and analyze performance effortlessly.
            </p>
          </div>

          {/* For Drivers */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center">
            <GiSteeringWheel size={40} className="text-green-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">For Drivers</h4>
            <p className="text-gray-600">
              Navigate routes and record expenses on the go.
            </p>
          </div>

          {/* For Owners */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center">
            <FaChessQueen size={40} className="text-purple-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">For Owners</h4>
            <p className="text-gray-600">
              Gain visibility into every operational detail.
            </p>
          </div>
        </div>
      </div>
      <section
        className="bg-white py-5 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgmap})` }}
      >
        <h3 className="text-3xl text-center font-bold">
          Join the Revolution in Trip Management
        </h3>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src={qrcode}
              alt="mobile-app-image"
              className="w-60 h-60 object-contain rounded-lg shadow-md"
            />
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Scan The QR
              </button>
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Download Now
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
            <img
              src={download}
              alt="Download and free trial"
              className="w-full max-w-md object-contain"
            />
            <button className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
              Request Your Free Trial
            </button>
          </div>
        </div>
      </section>

      <section
        className="p-8 bg-gray-100"
        style={{
          backgroundImage: `url('${testimonial}')`,
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "multiply",
        }}
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-white">
          What Our Users Say
        </h3>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="w-full max-w-3xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(255,255,255,0.3)] shadow-md rounded-lg p-6 text-center">
                <p className="text-black italic mb-4">"{testimonial.text}"</p>
                <h5 className="text-blue-600 font-semibold">
                  {testimonial.author}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
