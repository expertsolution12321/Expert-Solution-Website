import React from "react";
import fleetsol from "../images/flletsolution.png";
import choose from "../images/wch.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaBell, FaGlobeAsia } from "react-icons/fa";
import { FaChartLine, FaLocationDot } from "react-icons/fa6";
import testimonial from "../images/testimonial.jpg";
function Fleetsolution() {
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
      <div className="w-full">
        <section
          style={{
            backgroundImage: `url('${fleetsol}')`,
            backgroundSize: "cover",
            backgroundPosition: "center", // Center the image to keep the focus
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker for better text contrast
            backgroundBlendMode: "multiply",
          }}
          className="h-[450px] p-6 flex flex-col justify-center items-center text-center space-y-4"
        >
          <h1 className="text-5xl md:text-5xl text-white leading-tight tracking-wide drop-shadow-lg font-bold">
            Simplify Your{" "}
            <span className="text-orange-500">Fleet Operations</span> with Our
            Cutting-Edge Solution
          </h1>

          <p className="text-white text-lg md:text-xl mt-3 drop-shadow-md">
            Optimize your fleet performance with our comprehensive fleet
            management software. Monitor vehicles, streamline logistics, and
            reduce operational costs—all from a single platform. This maintains
            the essence of the original message while using more concise
            language. It focuses on the benefit ("streamline") and the advanced
            nature of the solution.
          </p>

          <button className="mt-4 px-3 py-2 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all">
            Start Free Trial
          </button>
        </section>

        <div class="bg-gray-50 py-12">
          <div class="container mx-auto text-center">
            <h2 class="text-3xl  text-gray-800 mb-8 font-bold">
              Key Features to Empower Your Fleet Management
            </h2>
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition shadow-gray-300">
                <div class=" flex text-orange-500 text-4xl mb-4 justify-center items-center">
                  <FaLocationDot />
                </div>
                <h4 class="text-xl font-medium text-gray-700 mb-2">
                  Real-Time Tracking
                </h4>
                <p class="text-gray-500">
                  Get precise vehicle locations and ensure timely deliveries
                  with our live GPS tracking.
                </p>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition shadow-gray-300">
                <div class=" flex text-blue-700 text-4xl mb-4 justify-center items-center">
                  <FaGlobeAsia />
                </div>
                <h4 class="text-xl font-medium text-gray-700 mb-2">
                  Route Optimization
                </h4>
                <p class="text-gray-500">
                  Reduce fuel costs and enhance productivity with intelligent
                  route planning.
                </p>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition shadow-gray-300">
                <div class=" flex text-sky-500 text-4xl mb-4 justify-center items-center">
                  <FaChartLine />
                </div>
                <h4 class="text-xl font-medium text-gray-700 mb-2">
                  Driver Performance Monitoring
                </h4>
                <p class="text-gray-500">
                  Track driver behavior, ensure safety, and improve
                  accountability.
                </p>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition shadow-gray-300">
                <div class=" flex text-red-600 text-4xl mb-4 justify-center items-center">
                  <FaBell />
                </div>
                <h4 class="text-xl font-medium text-gray-700 mb-2">
                  Maintenance Alerts
                </h4>
                <p class="text-gray-500">
                  Schedule preventive maintenance to avoid unexpected downtimes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 py-12">
          <div class="container mx-auto px-4 lg:px-8">
            <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">
              Why Choose Our Fleet Management Solution?
            </h2>

            <div class="flex flex-wrap items-center justify-center gap-4">
              <div class="w-full lg:w-2/5 mb-8 lg:mb-0">
                <ul class="space-y-6 p-0">
                  <li className="bg-slate-200 px-4 py-1 rounded-md shadow-md shadow-gray-300 ">
                    <h4 class="text-xl font-medium  mb-2 text-black">
                      Save Cost
                    </h4>
                    <p class="text-black">
                      Cut operational expenses with data-driven insights.
                    </p>
                  </li>
                  <li className="bg-slate-200 px-4 py-1 rounded-md shadow-md shadow-gray-300 ">
                    <h4 class="text-xl font-medium  mb-2 text-black">
                      Boost Productivity
                    </h4>
                    <p class="text-black">
                      Minimize idle time and maximize resource utilization.
                    </p>
                  </li>
                  <li className="bg-slate-200 px-4 py-1 rounded-md shadow-md shadow-gray-300 ">
                    <h4 class="text-xl font-medium  mb-2 text-black">
                      Ensure Safety
                    </h4>
                    <p class="text-black">
                      Keep drivers safe with alerts and compliance tracking.
                    </p>
                  </li>
                  <li className="bg-slate-200 px-4 py-1 rounded-md shadow-md shadow-gray-300 ">
                    <h4 class="text-xl font-medium  mb-2 text-black">
                      Enhance Customer Satisfaction
                    </h4>
                    <p class="text-black">
                      Ensure on-time deliveries with seamless planning.
                    </p>
                  </li>
                </ul>
              </div>

              <div class="w-full lg:w-2/5 flex justify-center">
                <img
                  src={choose}
                  alt="Why Choose Us"
                  class="max-w-full h-auto "
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
    </>
  );
}

export default Fleetsolution;
