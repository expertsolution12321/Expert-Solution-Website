import React from "react";
import bgimg from "../images/card-section.jpg"
import loadban from "../images/loadbanner.png";
import overview from "../images/loadover.png";
import loadkey from "../images/loadkey.png";
import work from "../images/load.png";
import efficiency from "../images/efficacy.png";
import safety from "../images/safety.png";
import cost from "../images/reduce-cost.png";
import decision from "../images/decision-making.png";
import loadbeni from "../images/loadbenefit.png";
import { useNavigate } from "react-router-dom";
function Load() {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };
  return (
    <div style={{
      backgroundImage: `url(${bgimg})`,
      backgroundRepeat: "repeat",
      backgroundPosition: "fixed",
      backgroundSize: "30%",
    }}>
      {/* banner Page */}
      <div className="bg-black p-8 sm:p-16 lg:p-32 xl:p-44 relative flex flex-col items-center justify-center lg:h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${loadban})` }}
        />

        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10 text-center m-2 p-2">
          <span className="text-white font-bold">
            Efficient, Safe, and{" "}
            <span className="text-orange-500">Trackable Cargo Solutions {' '}</span> 
            for Your Business Needs
          </span>
        </h1>

        <p className="flex flex-col sm:flex-row gap-4 text-center relative z-10 mt-4 text-white text-lg ">
          Our Load and Cargo Management system streamlines the planning,
          tracking, and oversight of all cargo movements. This solution ensures
          every load is optimized for safety and efficiency, minimizing downtime
          and maximizing profitability. Real-time tracking, comprehensive
          reporting, and automated load balancing empower your team to handle
          cargo with precision and ease, whether managing single loads or
          large-scale operations.
        </p>

        {/* Call to Action Button */}
        <div className="text-center relative z-10 mt-6">
          <button
            onClick={contact}
            className="text-white bg-orange-500 rounded-full px-6 py-2 text-sm sm:text-base md:text-lg hover:bg-orange-600 transition-all duration-300"
          >
            Connect Now
          </button>
        </div>
      </div>

      {/* Overview */}
      <section className="flex flex-col sm:flex-row">
        <div className="left w-full sm:w-1/2 p-3">
          <h1 className="text-orange-600 font-bold text-4xl">Overview</h1>
          <p className="text-lg font-semibold mt-2">
            The Load and Cargo Management module is a comprehensive solution
            designed to optimize logistics and streamline the entire cargo
            handling process, from initial dispatch to final delivery. This
            system provides essential tools for organizing, tracking, and
            managing cargo efficiently, improving the flow of goods across
            various stages.
          </p>
          <p className="text-lg font-semibold mt-2">
            With features like real-time load tracking, cargo categorization,
            driver and vehicle assignments, and route optimization, this module
            enhances operational transparency, reduces manual errors, and
            supports compliance with industry regulations. Key performance
            analytics and customizable reporting give teams valuable insights
            into logistics operations, helping to identify areas for improvement
            and increase overall efficiency.
          </p>
        </div>
        <div className="right w-full sm:w-1/2 p-3 flex items-center">
          <img
            src={overview}
            alt="Driver and Vehicle Management System Overview"
            className="w-full h-auto rounded-md "
          />
        </div>
      </section>
      {/* Key Features */}
      <section className="flex flex-col sm:flex-row">
        <div className="right w-full sm:w-1/2 p-4 flex items-center justify-center">
          <img
            src={loadkey}
            alt="load and cargo management"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="left w-full sm:w-1/2 p-6">
          <h1 className="text-orange-600 font-bold text-4xl mb-4">
            Key Features
            <hr className="border-t-2 border-orange-600 mt-2 mb-4" />
          </h1>

          <ul className="space-y-6">
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Real-Time Load Tracking
                </h4>
                <p className="text-gray-700">
                  This feature enables users to monitor cargo movement at every
                  stage, providing transparency on load status, estimated time
                  of arrival (ETA), and potential delays.
                </p>
              </div>
            </li>
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Cargo Categorization and Weight Documentation
                </h4>
                <p className="text-gray-700">
                  Simplify the process of categorizing cargo types and
                  documenting load weights to ensure compliance with
                  transportation regulations and optimize vehicle capacity.
                </p>
              </div>
            </li>
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Driver and Vehicle Assignment
                </h4>
                <p className="text-gray-700">
                  Streamline driver and vehicle allocation for specific loads,
                  ensuring that resources are appropriately matched to cargo
                  requirements, optimizing safety, and maximizing efficiency.
                </p>
              </div>
            </li>
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Loading and Unloading Management
                </h4>
                <p className="text-gray-700">
                  Track the loading and unloading process, capturing critical
                  details like time, date, and location. This feature helps
                  manage schedules and reduce turnaround times, ensuring timely
                  pickups and deliveries.
                </p>
              </div>
            </li>
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Document Management and Compliance
                </h4>
                <p className="text-gray-700">
                  Store essential documents, including shipping manifests,
                  inspection reports, and permits, in one place to ensure
                  compliance and quick access to paperwork during audits or
                  inspections.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* How It Work */}
      <section className="p-0 sm:p-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-4 p-2 m-0">
          How Does It Work?
        </h2>
        <img
          src={work}
          alt="How the Driver and Vehicle Management System works"
          className="w-full h-auto rounded-md"
        />
      </section>
      {/* Benifits Of Using Our Management */}
      <section
        className="p-6"
        style={{
          backgroundImage: `url('${loadbeni}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <div className="left w-full sm:w-1/2 p-3">
          <h1 className="text-white font-bold text-4xl mb-6">
            Benefits of Using Our Management System
          </h1>
          <ul className="space-y-4 p-0">
            <li>
              <div className="flex items-center space-x-4">
                <img
                  src={efficiency}
                  alt="Improved Efficiency"
                  className="w-12 h-12 rounded-full border-2 border-white  p-1 bg-yellow-400"
                />
                <h4 className="bg-sky-200 text-lg font-semibold px-4 py-2 rounded-md ">
                  Improved Efficiency
                </h4>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4">
                <img
                  src={cost}
                  alt="Enhanced Safety and Compliance"
                  className="w-12 h-12 rounded-full border-2 border-white  p-1 bg-yellow-400"
                />
                <h4 className="bg-sky-200 text-lg font-semibold px-4 py-2 rounded-md ">
                  Reduced Operational Costs
                </h4>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4">
                <img
                  src={safety}
                  alt="Reduced Operational Costs"
                  className="w-12 h-12 rounded-full border-2 border-white  p-1 bg-yellow-400"
                />
                <h4 className="bg-sky-200 text-lg font-semibold px-4 py-2 rounded-md ">
                  Enhanced Customer Satisfaction
                </h4>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4">
                <img
                  src={decision}
                  alt="Better Decision-Making with Data"
                  className="w-12 h-12 rounded-full border-2 border-white  p-1 bg-yellow-400"
                />
                <h4 className="bg-sky-200 text-lg font-semibold px-4 py-2 rounded-md ">
                  Better Compliance and Safety Standards
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Load;
