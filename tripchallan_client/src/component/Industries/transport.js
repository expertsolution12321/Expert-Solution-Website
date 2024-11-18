import React from "react";
// import transportpage from '../images/s1.jpg'
import transportpage from "../images/transban.jpg";
import transec from "../images/trans1.jpg";
import ware from "../images/ware.jpg";
import tracking from "../images/tracking.jpg";
import logis from "../images/Logis.jpg";
import analyst from "../images/bi.jpg";
import technologypage15 from "../images/javascript.png";
import technologypage16 from "../images/html.png";
import technologypage17 from "../images/tailwind.png";
import technologypage18 from "../images/nodejs.png";
// import technologypage19 from "../images/express.png";
import technologypage20 from "../images/react.png";
import technologypage21 from "../images/mongodb.jpg";
import technologypage22 from "../images/sql.png";
// import transban from "../images/transban.png";
import { useNavigate } from "react-router-dom";
import {
  FaLightbulb,
  FaCog,
  FaCheck,
  FaAngular,
  FaVuejs,
} from "react-icons/fa";
const Card = ({ icon, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <div className="flex items-center mb-4">
      <div className="text-purple-600 text-3xl mr-4">{icon}</div>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Transport() {
  const serviceData = [
    {
      icon: "🚗",
      title: "Connected & Internet Cars",
      description:
        "Our transportation software services drive connected cars with a specialized IoT system with integrated features of vehicle diagnostics, fuel efficiency, and enhanced safety for user satisfaction from the automotive services.",
    },
    {
      icon: "🔌",
      title: "EV Charging Software",
      description:
        "You will get advanced and smart white-label EV charging software solutions. These IT services for the transportation industry empower vehicles to unlock hidden opportunities for the next-gen automotive transportation industry.",
    },
    {
      icon: "🚲",
      title: "Smart Bikes",
      description:
        "Get the robust all-in-one rider information systems for your transportation services. So, you can offer simplicity, safety, and reliability to two-wheeler navigation. Plus, you can get a seamless and smart experience to the user and the prospects.",
    },
    {
      icon: "📡",
      title: "Telematics",
      description:
        "Innovative and tech-forward telematics solutions to enhance the connected network of users. And helps to empower brands to track key parameters such as vehicle condition, fuel usage, insurance details, and traffic for better optimization.",
    },
    {
      icon: "🤖",
      title: "Autonomous & ADAS",
      description:
        "We ensure to offer advanced applications to prospects and users. It will help to adapt, automate, and enhance the in-vehicle systems to enable autonomous and assisted driving to help your users in transportation.",
    },
    {
      icon: "🧠",
      title: "AI & Machine Learning",
      description:
        "Smart automotive solutions help in recognizing and analyzing the patterns of human behavior for future uses. It enables data-driven decisions to assist different situations to the users with the best next-gen solutions for the industry.",
    },
  ];
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="bg-indigo-950 p-8 sm:p-16 md:p-24 lg:p-44 relative flex flex-col items-center justify-center  lg:h-[500px] xl:h-[500px] text-white" 
      style={{ 
        backgroundImage: `url(${transportpage})`,
        backgroundSize:"cover",
        backgroundColor:"rgba(0,0,0,0.6)",
        backgroundBlendMode:"multiply"
        }}>
        {/* <img
          className="absolute inset-0 bg-cover bg-center opacity-20"
          
        /> */}

        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold relative z-10 text-center m-2 p-2">
          Transportation{" "}
          <span className="text-orange-500 font-bold">Software</span> Services
        </h1>

        <ul className="flex flex-col sm:flex-row gap-4 text-center relative z-10 mt-4">
          <li className="group text-white border border-gray-50 p-2 rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl hover:bg-white">
            <FaLightbulb className="mr-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-300 " />
            <span className="group-hover:text-black leading-5">
              Streamline Logistic Process
            </span>
          </li>
          <li className="group text-white border border-gray-50 p-2 rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl hover:bg-white">
            <FaCog className="mr-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-pink-600 " />
            <span className="group-hover:text-black leading-5">
              Quality Transportation Solution
            </span>
          </li>
        </ul>

        <div className="text-center relative z-10 mt-6">
          <button
            onClick={contact}
            className="bg-orange-500  terounded-full px-4 sm:px-6 py-2 text-white text-sm sm:text-base md:text-lg hover:bg-orange-600 transition duration-300 rounded-full"
          >
            Request A Quote
          </button>
        </div>
      </div>

      <div>
        <h2 className="flex justify-center font-bold m-5 text-4xl">
          Our next-gen automotive Expertise{" "}
        </h2>
        <div className="max-w-7xl mx-auto p-4">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
            {serviceData.map((service, index) => (
              <Card
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-indigo-800 relative">
        <div className="text-center grid grid-cols-1 md:grid-cols-2  gap-2 container ">
          <div className="mt-4 bg-indigo-800">
            <h3 className="text-white text-4xl font-bold ">
              Get The tech-driven IT service For The Transportation History
            </h3>
            <p className="text-slate-300 mt-4">
              At Trip Management System, we believe that smooth operations and
              effective management are fundamental to a successful retail
              business. Our <strong>Retail Management System Services</strong>{" "}
              are designed to empower your company.
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
          <img
            src={transec}
            className="rounded w-full relative z-150 h-full items-center sm:mb-4  md:mb-5 "
            alt="Transportation Services"
          />
        </div>
      </div>

      <div className="container mb-6">
        <h2 className="text-center m-5">
          Our Value Driven Transportaion Software Solution take business to next
          level
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl bg-slate-100 shadow-lg cursor-pointer">
            <img src={ware} className="w-full rounded-t-lg h-[250px] " alt="Warehouse img" />
            <h5 className="text-black p-2">Warehouse management Software</h5>
            <p className="px-2">
              Our manufacturing IT solutions enhance production efficiency and
              quality control in the automotive industry.
            </p>
          </div>
          <div className="rounded-xl bg-slate-100 shadow-lg cursor-pointer">
            <img src={logis} className="w-full rounded-t-lg h-[250px]" alt="Logistic"/>
            <h5 className="text-black p-2">Logistic visibility Software</h5>
            <p className="px-2">
              Manufacturing IT solutions optimize food safety and production
              efficiency while adhering to regulations.
            </p>
          </div>
          <div className="rounded-xl bg-slate-100 shadow-lg cursor-pointer">
            <img src={tracking} className="w-full rounded-t-lg h-[250px]" alt="tracking"/>
            <h5 className="text-black p-2">End to End Tracking Services</h5>
            <p className="px-2">
              Software developing services ensure regulatory compliance and
              quality control.
            </p>
          </div>
          <div className="rounded-xl bg-slate-100 shadow-lg cursor-pointer">
            <img src={analyst} className="w-full rounded-t-lg h-[250px]" alt="analyst"/>
            <h5 className="text-black p-2">Business Intelligence Analysis</h5>
            <p className="px-2">
              Streamline complex manufacturing processes and manage supply
              chains.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 container">
        <h3 className="text-center text-4xl font-bold">Our Tech stack</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
          <div className="border border-white shadow rounded-xl ">
            <h4 className="text-white bg-indigo-800 p-2 rounded-t-xl">
              Programming Languages
            </h4>
            <ul className="space-y-2 p-0 px-2">
              <li className="flex items-center cursor-pointer">
                <img
                  src={technologypage15}
                  className="w-6 h-6 mr-2"
                  alt="Javascript"
                />
                Javascript
              </li>
              <li className="flex items-center cursor-pointer">
                <img
                  src={technologypage16}
                  className="w-6 h-6 mr-2"
                  alt="HTML/CSS"
                />
                Html/CSS
              </li>
              <li className="flex items-center cursor-pointer">
                <img
                  src={technologypage17}
                  className="w-6 h-6 mr-2"
                  alt="Tailwind CSS"
                />
                Tailwind CSS
              </li>
              <li className="flex items-center cursor-pointer">
                <img
                  src={technologypage18}
                  className="w-6 h-6 mr-2"
                  alt="Node JS"
                />
                Node JS
              </li>
            </ul>
          </div>
          <div className="border border-white shadow rounded-xl ">
            <h4 className="text-white bg-indigo-800 p-2 rounded-t-xl">
              Frameworks
            </h4>
            <ul className="space-y-2 p-0 px-2">
              <li className="flex items-center cursor-pointer">
                <img
                  src={technologypage20}
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
            <ul className="space-y-2 p-0 px-2">
              <li className="flex items-center cursor-pointer">
                <img
                  src={technologypage21}
                  className="w-6 h-6 mr-2"
                  alt="MongoDB"
                />
                MongoDB
              </li>
              <li className="flex items-center cursor-pointer">
                <img
                  src={technologypage22}
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
