import React from "react";
import driverbanner from "../images/driverbanner.jpg";
import overview from "../images/fleet.png";
import keyf from "../images/key.jpg";
import work from "../images/work.png";
import efficiency from "../images/efficacy.png";
import safety from "../images/safety.png";
import cost from "../images/reduce-cost.png";
import decision from "../images/decision-making.png";
import benbanner from "../images/benifitbanner.png";
import { useNavigate } from "react-router-dom";
function Drivervehicle() {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };
  return (
    <div>
      {/* banner Page */}
      <div className="bg-black p-8 sm:p-16 lg:p-32 xl:p-44 relative flex flex-col items-center justify-center lg:h-[500px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${driverbanner})` }}
        />

        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10 text-center m-2 p-2">
          <span className="text-white font-bold">
            <span className="text-orange-500">Driver & Vehicle</span> Management
            System
          </span>
        </h1>

        <p className="flex flex-col sm:flex-row gap-4 text-center relative z-10 mt-4 text-white text-xl">
          Our comprehensive Driver and Vehicle Management System is designed to
          streamline the entire process of managing your fleet and driver
          operations. This system provides a centralized platform to keep track
          of vehicle maintenance, driver assignments, compliance, and safety
          measures, helping you operate efficiently and safely.
        </p>

        {/* Call to Action Button */}
        <div className="text-center relative z-10 mt-6">
          <button
            onClick={contact}
            className="text-white bg-orange-500 rounded-full px-6 py-2 text-sm sm:text-base md:text-lg"
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
            Our Driver and Vehicle Management System is a comprehensive,
            all-in-one solution designed to optimize and simplify the complex
            tasks involved in managing a fleet. Whether you operate a few
            vehicles or an extensive fleet, our system provides a centralized
            platform to manage drivers, vehicles, routes, and compliance
            requirements effectively.
          </p>
          <p className="text-lg font-semibold mt-2">
            With features that include real-time tracking, automated maintenance
            reminders, driver profiles, and compliance alerts, the system helps
            businesses streamline operations, reduce costs, and improve safety.
            Designed with user-friendliness in mind, the platform integrates
            advanced functionalities with an intuitive interface, making it
            accessible for businesses of all sizes.
          </p>
        </div>
        <div className="right w-full sm:w-1/2 p-3">
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
            src={keyf}
            alt="Driver and Vehicle Management System Overview"
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
                  Driver Profile Management
                </h4>
                <p className="text-gray-700">
                  Outline how the system helps manage driver profiles, training
                  records, and certification tracking.
                </p>
              </div>
            </li>
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Vehicle Maintenance Scheduling
                </h4>
                <p className="text-gray-700">
                  Describe the automated scheduling for preventive maintenance
                  and tracking for repairs to extend vehicle lifespan.
                </p>
              </div>
            </li>
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Real-Time GPS Tracking
                </h4>
                <p className="text-gray-700">
                  Explain how the system provides real-time tracking for
                  efficient route management and tracking vehicle locations.
                </p>
              </div>
            </li>
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Fuel and Expense Monitoring
                </h4>
                <p className="text-gray-700">
                  Mention how fuel consumption, mileage, and other expenses are
                  tracked to optimize cost management.
                </p>
              </div>
            </li>
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Compliance & Reporting
                </h4>
                <p className="text-gray-700">
                  Detail compliance management tools that help track license and
                  registration status, ensuring regulatory compliance.
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
          backgroundImage: `url('${benbanner}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <div className="left w-full sm:w-1/2 p-3">
          <h1 className="text-orange-600 font-bold text-4xl mb-6">
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
                <h4 className="bg-sky-200 text-lg font-semibold px-4 py-2 rounded-md">
                  Improved Efficiency
                </h4>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4">
                <img
                  src={safety}
                  alt="Enhanced Safety and Compliance"
                  className="w-12 h-12 rounded-full border-2 border-white  p-1 bg-yellow-400"
                />
                <h4 className="bg-sky-200 text-lg font-semibold px-4 py-2 rounded-md">
                  Enhanced Safety and Compliance
                </h4>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4">
                <img
                  src={cost}
                  alt="Reduced Operational Costs"
                  className="w-12 h-12 rounded-full border-2 border-white  p-1 bg-yellow-400"
                />
                <h4 className="bg-sky-200 text-lg font-semibold px-4 py-2 rounded-md">
                  Reduced Operational Costs
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
                <h4 className="bg-sky-200 text-lg font-semibold px-4 py-2 rounded-md">
                  Better Decision-Making with Data
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Drivervehicle;
