import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCar, FaTools, FaUser } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import testimonial from "../images/testimonial.jpg";
import drivechoose from "../images/drivechoose.jpg";
import driveban from "../images/drivesol.jpg";
import { useNavigate } from "react-router-dom";
function Driversol() {
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

  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };
  return (
    <div className="w-full">
      {/* banner */}
      <section
        style={{
          backgroundImage: `url('${driveban}')`,
          backgroundSize: "cover",
          backgroundPosition: "center", // Center the image to keep the focus
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker for better text contrast
          backgroundBlendMode: "multiply",
        }}
        className="h-[450px] p-6 flex flex-col justify-center items-center text-center space-y-4"
      >
        <h1 className="text-5xl md:text-5xl text-white leading-tight tracking-wide drop-shadow-lg font-bold">
          Seamlessly Manage{" "}
          <span className="text-orange-500">Drivers and Vehicles</span> with Our
          All-in-One Solution
        </h1>

        <p className="text-white text-lg md:text-xl mt-3 drop-shadow-md">
          Optimize your fleet performance with our comprehensive fleet
          management software. Monitor vehicles, streamline logistics, and
          reduce operational costs—all from a single platform. This maintains
          the essence of the original message while using more concise language.
          It focuses on the benefit ("streamline") and the advanced nature of
          the solution.
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
            Comprehensive Features for Smarter Fleet Management
          </h2>
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition shadow-gray-300">
              <div class=" flex text-orange-500 text-4xl mb-4 justify-center items-center">
                <FaNoteSticky />
              </div>
              <h4 class="text-xl font-medium text-gray-700 mb-2">
                Driver Records Management
              </h4>
              <p class="text-gray-500">
                Store and manage driver details, certifications, and performance
                metrics securely in one place.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition shadow-gray-300">
              <div class=" flex text-blue-700 text-4xl mb-4 justify-center items-center">
                <FaTools />
              </div>
              <h4 class="text-xl font-medium text-gray-700 mb-2">
                Vehicle Maintenance Scheduling
              </h4>
              <p class="text-gray-500">
                Never miss a service date with automated reminders for routine
                checks and repairs.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition shadow-gray-300">
              <div class=" flex text-sky-500 text-4xl mb-4 justify-center items-center">
                <FaUser />
              </div>
              <h4 class="text-xl font-medium text-gray-700 mb-2">
                Driver Behavior Tracking
              </h4>
              <p class="text-gray-500">
                Monitor driving habits, reduce risks, and improve safety through
                telematics and reporting.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition shadow-gray-300">
              <div class=" flex text-red-600 text-4xl mb-4 justify-center items-center">
                <FaCar />
              </div>
              <h4 class="text-xl font-medium text-gray-700 mb-2">
                Vehicle History Logs
              </h4>
              <p class="text-gray-500">
                Keep detailed records of every vehicle’s usage, mileage, and
                maintenance history.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 py-12">
        <div class="container mx-auto px-4 lg:px-8">
          <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">
            Why Choose Our Driver and Vehicle Management Solution?
          </h2>

          <div class="flex flex-wrap items-center justify-center gap-4">
            <div class="w-full lg:w-2/5 mb-8 lg:mb-0">
              <ul class="space-y-6 p-0">
                <li className="bg-slate-200 px-4 py-1 rounded-md shadow-md shadow-gray-300 ">
                  <h4 class="text-xl font-medium  mb-2 text-black">
                    Reduce Operational Costs
                  </h4>
                  <p class="text-black">
                    Save time and money with automated processes and insights.
                  </p>
                </li>
                <li className="bg-slate-200 px-4 py-1 rounded-md shadow-md shadow-gray-300 ">
                  <h4 class="text-xl font-medium  mb-2 text-black">
                    Enhance Fleet Safety
                  </h4>
                  <p class="text-black">
                    Identify risky behaviors and maintain safer operations.
                  </p>
                </li>
                <li className="bg-slate-200 px-4 py-1 rounded-md shadow-md shadow-gray-300 ">
                  <h4 class="text-xl font-medium  mb-2 text-black">
                    Optimize Resource Usage
                  </h4>
                  <p class="text-black">
                    Ensure every driver and vehicle performs at their best.
                  </p>
                </li>
                <li className="bg-slate-200 px-4 py-1 rounded-md shadow-md shadow-gray-300 ">
                  <h4 class="text-xl font-medium  mb-2 text-black">
                    Stay Compliant
                  </h4>
                  <p class="text-black">
                    Avoid fines with up-to-date compliance tracking.
                  </p>
                </li>
              </ul>
            </div>

            <div class="w-full lg:w-2/5 flex justify-center ">
              <img
                src={drivechoose}
                alt="Why Choose Us"
                class="max-w-full h-auto rounded-lg"
              />
            </div>
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

export default Driversol;
