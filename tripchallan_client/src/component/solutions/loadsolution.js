import React from "react";
import loadsol from "../images/loadbanner.png";
import { useNavigate } from "react-router-dom";
import {
  FaGooglePlusSquare,
  FaLightbulb,
  FaTruckLoading,
} from "react-icons/fa";
import { FaSquareWebAwesomeStroke } from "react-icons/fa6";
import testimonial from "../images/testimonial.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
function Loadsolution() {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };
  const phases = [
    {
      phase: "Phase 1",
      title: "Input Cargo Details",
      description:
        "Upload shipment details, including weight, dimensions, and destination.",
      bgColor: "bg-purple-500",
    },
    {
      phase: "Phase 2",
      title: "Plan Load Distribution",
      description: "The system generates the most efficient loading plan.",
      bgColor: "bg-pink-500",
    },
    {
      phase: "Phase 3",
      title: "Track Cargo in Transit",
      description: "Get real-time updates on cargo location and status.",
      bgColor: "bg-orange-500",
    },
    {
      phase: "Phase 4",
      title: "Analyze Performance",
      description: "Access post-delivery reports to improve future operations.",
      bgColor: "bg-green-500",
    },
  ];
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
    <div>
      {/* banner */}
      <section
        style={{
          backgroundImage: `url('${loadsol}')`,
          backgroundSize: "cover",
          backgroundPosition: "center", // Center the image to keep the focus
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker for better text contrast
          backgroundBlendMode: "multiply",
        }}
        className="h-[450px] p-6 flex flex-col justify-center items-center text-center space-y-4"
      >
        <h1 className="text-5xl md:text-5xl text-white leading-tight tracking-wide drop-shadow-lg font-bold">
          Transform Your Logistics with Intelligent <br />
          <span className="text-orange-500">Load and Cargo Management</span>
        </h1>

        <p className="text-white text-lg md:text-xl mt-3 drop-shadow-md">
          Revolutionize your shipping operations with smart tools that ensure
          maximum efficiency, optimized load capacity, and reduced costs. Manage
          cargo like never before with real-time tracking and intelligent
          insights.
        </p>

        <button
          onClick={contact}
          className="mt-4 px-3 py-2 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition-all"
        >
          Start Free Trial
        </button>
      </section>
      <div class="bg-gray-50 py-12">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl  text-gray-800 mb-8 font-bold">
            Powerful Features for Load and Cargo Efficiency
          </h2>
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition shadow-gray-300">
              <div class=" flex text-orange-500 text-4xl mb-4 justify-center items-center">
                <FaTruckLoading />
              </div>
              <h4 class="text-xl font-medium text-gray-700 mb-2">
                Load Optimization
              </h4>
              <p class="text-gray-500">
                Maximize vehicle capacity by intelligently planning how goods
                are packed and loaded.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition shadow-gray-300">
              <div class=" flex text-blue-700 text-4xl mb-4 justify-center items-center">
                <FaGooglePlusSquare />
              </div>
              <h4 class="text-xl font-medium text-gray-700 mb-2">
                Cargo Tracking
              </h4>
              <p class="text-gray-500">
                Stay informed with live tracking of every shipment from origin
                to destination.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition shadow-gray-300">
              <div class=" flex text-sky-500 text-4xl mb-4 justify-center items-center">
                <FaLightbulb />
              </div>
              <h4 class="text-xl font-medium text-gray-700 mb-2">
                Route Planning Integration
              </h4>
              <p class="text-gray-500">
                Combine load management with route optimization for the fastest
                and safest deliveries.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition shadow-gray-300">
              <div class=" flex text-red-600 text-4xl mb-4 justify-center items-center">
                <FaSquareWebAwesomeStroke />
              </div>
              <h4 class="text-xl font-medium text-gray-700 mb-2">
                Damage Prevention Insights
              </h4>
              <p class="text-gray-500">
                Identify risky packing methods and avoid cargo damage with
                advanced analytics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* work */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-20">
            How It Works: From Planning to Delivery
          </h2>
          <div className="flex flex-wrap justify-center gap-14 ">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative p-6 w-full max-w-xs rounded-lg shadow-md text-white ${phase.bgColor}`}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-lg bg-white text-gray-800 shadow-md p-5 font-semibold">
                  {phase.phase}
                </div>
                <h4 className="text-xl font-semibold mt-10">{phase.title}</h4>
                <p className="mt-4">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
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
                <h5 className="text-blue-900 font-semibold">
                  {testimonial.author}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Loadsolution;
