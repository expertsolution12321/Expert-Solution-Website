import React from "react";
import { useNavigate } from "react-router-dom";
import aboutban from "../images/aboutban.jpg";
import Aboutpage0 from "../images/aboutus.png";
import img1 from "../images/group1.png";
import img2 from "../images/group2.png";
import img3 from "../images/group3.png";
import img4 from "../images/group4.png";
import bgimg from "../images/back.png";
import missionImage from "../images/mission.jpg";
import mishead from "../images/mission1.png";
import visionImage from "../images/vission.jpg";
import vishead from "../images/Vision1.png";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${aboutban}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundRepeat: "no-repeat",
        }}
        className="relative isolate h-96 md:h-[32rem] flex items-center justify-center overflow-hidden bg-cover bg-center w-full"
      >
        <div className="flex flex-col  items-center p-4  mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center capitalize mb-4">
            Welcome to Our{" "}
            <span className="text-orange-500">Trip Management System</span>
          </h1>
          <p className="text-white text-lg">
            {" "}
            ( Streamlining Your Journeys, Simplifying Your Operations )
          </p>
          {/* <p className="text-lg text-white text-center font-semibold mb-6">
          We understand the complexities of managing trips, logistics, and travel plans. Our platform is designed to provide a seamless, end-to-end solution for individuals and organizations looking to manage their journeys efficiently. With powerful tools for planning, tracking, and documenting trips, we make every aspect of trip management easier and more reliable.
          </p> */}
          <div>
            <button
              onClick={handleClick}
              className="px-6 py-2 text-white bg-orange-600 rounded-full hover:bg-orange-500 transition duration-300 font-semibold cursor-pointer"
            >
              Lets Collaborate
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row h-auto p-4 md:justify-center ">
        <div className="w-full mt-5  p-2 pt-20 sm:mt-0 md:mr-4">
          <h1 className="text-4xl md:text-3xl text-orange-600 font-bold pb-4">
            Your Trusted Partner in{" "}
            <span className="text-green-500">Trip Management</span>
          </h1>
          <p className="text-base md:text-xl pb-4">
            All our solutions are customized & designed to meet the specific
            needs and challenges of your business. Our software solutions help
            increase productivity, improve efficiency, reduce overall cost and
            enhance performance & competitiveness.
            <br />
            We have an installed base of 1 Lac+ Vehicles, provide service across
            150 locations, 24/7 Helpline, with complete integration to
            SAP/Oracle/ERP systems & multiple Vendor configurations.
            <br />
            Trip Challan Book is committed to driving innovation, delivering
            exceptional solutions, and fostering long-term partnerships with
            clients. We're ready to meet today's business needs in the digital
            world by focusing on customers. We provide top-notch software and
            hardware solutions for all your businesses.
          </p>
        </div>

        <div className="w-full  p-2 md:ml-4">
          <img src={Aboutpage0} alt="About Page" className="w-full h-auto" />
        </div>
      </div>

      <div className="" style={{ backgroundImage: `url(${bgimg})` }}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <div className="flex flex-col items-center justify-center p-4">
            <h3 className="text-4xl text-orange-500 text-center font-bold mb-2">
              Core Values
            </h3>
            <p className="text-white mb-2">
              Our trip management system is built on a foundation of
              <b> reliability, efficiency, and safety</b>, ensuring smooth,
              cost-effective, and secure operations. We prioritize transparency
              to build trust through open communication, and innovation to stay
              competitive with the latest technology. With a customer-centric
              approach, we focus on meeting user needs, while promoting
              sustainability through eco-friendly practices. Our commitment to
              accountability means we take responsibility for all actions,
              fostering trust and credibility among all users.
            </p>
            {/* <p className="font-bold text-white mb-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <p className="mb-2 text-white">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p> */}
          </div>

          <div className="flex flex-col">
            {/* Reliability */}
            <div className=" flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 p-4">
                <img
                  src={img1}
                  alt="Continuous Learning"
                  className="w-15 h-15 md:w-20 md:h-20"
                />
              </div>
              <div className="flex-1 mt-3">
                <h3 className="text-white text-xl font-bold">Reliability</h3>
                <p className="text-white">
                  Ensure accurate and consistent trip information to build trust
                  and reliability for all users. Reliable data and support
                  enable seamless trip planning and execution.
                </p>
              </div>
            </div>

            {/* Transparency */}
            <div className=" flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 p-4">
                <img
                  src={img2}
                  alt="Transparency"
                  className="w-15 h-15 md:w-20 md:h-20"
                />
              </div>
              <div className="flex-1 mt-3">
                <h3 className="text-white text-xl font-bold">Efficiency</h3>
                <p className="text-white">
                  Client-provider relationships that are built around
                  transparency always yield the best results.
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className=" flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 p-4">
                <img
                  src={img3}
                  alt="Safety"
                  className="w-15 h-15 md:w-20 md:h-20"
                />
              </div>
              <div className="flex-1 mt-3">
                <h3 className="text-white text-xl font-bold">Safety</h3>
                <p className="text-white">
                  Prioritize the safety of drivers, cargo, and passengers.
                  Implement safety checks, compliance with regulations, and
                  provide clear protocols to ensure safe and secure trips.
                </p>
              </div>
            </div>

            {/* Accountability */}
            <div className=" flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 p-4">
                <img
                  src={img4}
                  alt="Accountability"
                  className="w-15 h-15 md:w-20 md:h-20"
                />
              </div>
              <div className="flex-1 mt-3">
                <h3 className="text-white text-xl font-bold">Accountability</h3>
                <p className="text-white">
                  Take responsibility for every aspect of the trip management
                  process. Accountability builds credibility and ensures that
                  any issues are resolved promptly and effectively.
                </p>
              </div>
            </div>

            {/* Transparency */}
            <div className=" flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 p-4">
                <img
                  src={img1}
                  alt="Transparency"
                  className="w-15 h-15 md:w-20 md:h-20"
                />
              </div>
              <div className="flex-1 mt-3">
                <h3 className="text-white text-xl font-bold">Transparency</h3>
                <p className="text-white">
                  Offer clear and accessible information on routes, schedules,
                  and costs. Transparent communication fosters trust with
                  clients, drivers, and partners, making collaboration easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white py-7 px-4   md:px-10">
        <div className=" mx-auto space-y-8">
          {/* Mission Section */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <img
              src={missionImage}
              alt="Mission"
              className="w-full md:w-1/2 rounded-lg shadow-lg object-cover "
            />
            <div className="text-left  md:ml-6 ">
              <img src={mishead} alt="Mission Header" className=" w-24 " />
              <h2 className="text-2xl text-orange-600 font-bold ">Mission</h2>
              <p className="font-semibold">
                ( Empowering Journeys with Efficiency, Safety, and Innovation )
              </p>
              <p className="text-gray-700">
                Our mission is to revolutionize the way trips are managed by
                providing a reliable, comprehensive platform that simplifies
                logistics and enhances every travel experience. We aim to
                empower individuals and organizations to make informed
                decisions, streamline operations, and prioritize safety. Through
                continuous innovation and a commitment to user satisfaction, we
                strive to set new standards for excellence in trip and logistics
                management, making every journey smoother, safer, and more
                efficient.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className=" bg-white py-3 px-4 md:px-10">
        <div className=" mx-auto space-y-8">
          {/* Vision Section */}
          <div className="flex flex-col-reverse md:flex-row-reverse items-center space-y-8 md:space-y-0 ">
            {/* Vision Image */}
            <img
              src={visionImage}
              alt="Vision"
              className="w-full md:w-1/2 rounded-xl object-cover pl-0 md:pl-5 "
            />

            {/* Vision Text Section */}
            <div className="text-right md:ml-6 ml-0 mr-5 md:px-0">
              <img
                src={vishead}
                alt="Vision Header"
                className="w-24 ml-auto "
              />
              <h2 className="text-2xl text-orange-600 font-bold mb-2">
                Vision
              </h2>
              <p className="font-semibold">
                ( Shaping the Future of Seamless Travel and Logistics )
              </p>
              <p className="text-gray-700">
                We envision a world where every journey whether personal or
                professional is effortlessly managed and optimized through
                technology. Our goal is to be the leading platform for trip
                management, known for delivering unparalleled efficiency,
                safety, and user satisfaction. We aspire to empower our users
                with tools that turn complex logistics into simple, stress-free
                experiences, setting new benchmarks in the travel and logistics
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" mt-5 bg-gray-200  mx-auto p-4">
        <h1 className="mt-5 text-4xl font-bold mb-4 text-center w-full">Our partner</h1>
        <p className="text xl text-center w-full text-black">Strategic partnerships with tech titans for delivering top-notch,future-ready solution</p>
        <div className="grid grid-cols-2 bg-cyan-200 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          <img className="w-full h-auto rounded-lg border  border-gray-300" src={Aboutpage1} alt="img1" />
          <img className="w-full h-auto rounded-lg border border-gray-300" src={Aboutpage2} alt="img2" />
          <img className="w-full h-auto rounded-lg border border-gray-300" src={Aboutpage3} alt="img3" />
          <img className="w-full h-auto rounded-lg border border-gray-300" src={Aboutpage4} alt="img4" />
          <img className="w-full h-auto rounded-lg border border-gray-300" src={Aboutpage5} alt="img5" />
          <img className="w-full h-auto rounded-lg border border-gray-300" src={Aboutpage6} alt="img6" />
          <img className="w-full h-auto rounded-lg border border-gray-300" src={Aboutpage7} alt="img7" />
          <img className="w-full h-auto rounded-lg border border-gray-300" src={Aboutpage8} alt="img8" />
          <img className="w-full h-auto rounded-lg border border-gray-300" src={Aboutpage9} alt="img9" />
          <img className="w-full h-auto rounded-lg border border-gray-300" src={Aboutpage10} alt="img10" />
        </div>
      </div> */}
    </>
  );
};

export default About;
