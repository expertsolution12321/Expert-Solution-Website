import React from "react";
import "../flipcard.css";
import { GrCertificate } from "react-icons/gr";
import {
  FaMoneyBill,
  FaNetworkWired,
  FaThumbsUp,
  FaVideo,
} from "react-icons/fa";
import { BiHappyBeaming } from "react-icons/bi";
import { RiMailSettingsFill } from "react-icons/ri";
import { FaSistrix, FaFrog, FaChartArea, FaPaintBrush } from "react-icons/fa";
import {
  FaSearch,
  FaChartLine,
  FaShareAlt,
  FaUserShield,
  FaEnvelope,
  FaGoogle,
} from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
export default function Digitalmark() {
  const tools = [
    {
      name: "Semrush",
      description:
        "An all-in-one digital marketing tool to perform a comprehensive technical SEO audit and improve SEO strategy for better business outcomes and growth.",
      icon: <FaSistrix className="h-12 w-12 text-orange-500" />,
    },
    {
      name: "Ahrefs",
      description:
        "Exclusively designed for digital marketers, this software contains tools for site audits, competitor analysis, keyword research, link building, and rank tracking.",
      icon: <FaChartLine className="h-12 w-12 text-blue-500" />,
    },
    {
      name: "Google Analytics",
      description:
        "The premier choice of digital marketing experts as it provides a ton of actionable insights into how your audience is engaging with your website and applications.",
      icon: <FaGoogle className="h-12 w-12 text-orange-600" />,
    },
    {
      name: "Screaming Frog SEO",
      description:
        "A user-friendly SEO crawling tool that provides useful SEO-related information about your site that you can use to tweak your SEO strategy.",
      icon: <FaFrog className="h-12 w-12 text-green-500" />,
    },
    {
      name: "Google Trends",
      description:
        "A tool that helps us provide the best digital marketing service to identify trends and popular search queries in Google Search across various locations and languages.",
      icon: <FaChartArea className="h-12 w-12 text-blue-600" />,
    },
    {
      name: "Canva",
      description:
        "A great tool for designing professional-looking graphics. It offers a vast collection of templates that can be used to create social posts, infographics, CTA buttons, etc.",
      icon: <FaPaintBrush className="h-12 w-12 text-purple-500" />,
    },
  ];

  const services = [
    {
      icon: <FaSearch className="text-blue-800" />,
      title: "Search Engine Optimization",
      description:
        "Attain the required website traffic and ranking on the Search Engine Page Results (SERP).Our SEO services are not just relevant for adding most searched keywords but further increase leads and conversion rates extensively.",
    },
    {
      icon: <FaMobile className="text-pink-700" />,
      title: "Social Media Marketing",
      description:
        "Drive engagement and reach with our social media strategies, designed to connect with your audience and boost brand visibility.",
    },
    {
      icon: <FaMoneyBill className="text-orange-500" />,
      title: "Paid Marketing Campaigns",
      description:
        "Boost your business visibility and reach through targeted paid campaigns. Our strategic approach ensures your ads are displayed to the right audience, maximizing conversions and delivering measurable results.",
    },
    {
      icon: <FaVideo className="text-red-600" />,
      title: "Content Marketing",
      description:
        "Engage and educate your audience with valuable, high-quality content. Our content marketing services help build brand authority, foster customer loyalty, and drive organic traffic to fuel your business growth.",
    },
    {
      icon: <FaNetworkWired className="text-yellow-400" />,
      title: "Online Reputation Management",
      description:
        "Protect and enhance your brand’s online image with our comprehensive reputation management services. We monitor, respond to, and influence customer perception, ensuring your brand is trusted and valued in the digital landscape.",
    },
    {
      icon: <FaChartLine className="text-cyan-400" />,
      title: "Conversion Rate Optimization",
      description:
        "Maximize the impact of your digital presence by improving your website’s user experience and functionality. Our Conversion Rate Optimization (CRO) services focus on turning visitors into loyal customers, increasing lead generation, and boosting overall revenue.",
    },
  ];
  return (
    <div className="w-full">
      <section className="w-full bg-[#3e1572]   ">
        <div className=" container flex flex-col max-w-[1440px]  md:flex-row items-center justify-center mx-auto p-8 space-x-8 ">
          <div className="text-white w-full ">
            <h1 className="font-bold text-5xl mb-6">
              Digital Marketing Services
            </h1>
            <p className="font-medium text-base tracking-wider leading-relaxed">
              {" "}
              Attain a top brand position with strategic &amp; best digital
              marketing services in India from industry leaders.Trip challan
              Book is one of the leading digital marketing companies you can
              trust on. Get comprehensive services package in one place.
            </p>
            <ul className="flex flex-wrap mt-3 p-0 gap-2">
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center hover:bg-white hover:text-black justify-center">
                <FaSearch className="mr-2 text-blue-500" />
                SEO
              </li>
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center hover:bg-white hover:text-black justify-center">
                <FaChartLine className="mr-2 text-green-500" />
                PPC
              </li>
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center hover:bg-white hover:text-black justify-center">
                <FaShareAlt className="mr-2 text-purple-500" />
                SMO
              </li>
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center hover:bg-white hover:text-black justify-center">
                <FaUserShield className="mr-2 text-red-500" />
                ORM
              </li>
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center hover:bg-white hover:text-black justify-center">
                <FaEnvelope className="mr-2 text-orange-500" />
                Email Marketing
              </li>
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center hover:bg-white hover:text-black justify-center">
                <FaGoogle className="mr-2 text-indigo-500" />
                Google Analytics
              </li>
            </ul>
          </div>
          <div className=" w-full  mx-0 my-16">
            <div className="max-w-[450px] mx-auto bg-[#ffffff] flex flex-col items-center justify-center px-3 py-4 rounded-lg">
              <h1 className="mb-4 text-2xl">Digital marketing</h1>
              <form className="w-full flex flex-col items-center justify-center">
                <input
                  className="block w-full px-3 py-2 bg-[#f4f4f4] mb-2 rounded-lg"
                  placeholder="Full Name*"
                />
                <input
                  className="block w-full px-3 py-2 bg-[#f4f4f4] mb-2 rounded-lg"
                  placeholder="Business Email Address*"
                />
                <input
                  className="block w-full px-3 py-2 bg-[#f4f4f4] mb-2 rounded-lg"
                  placeholder="Full Name*"
                />
                <input
                  className="block w-full px-3 py-2 bg-[#f4f4f4] mb-2 rounded-lg"
                  placeholder="Phone Number*"
                />
                <textarea
                  className="block w-full px-3 py-2 bg-[#f4f4f4] border-0 rounded-md"
                  placeholder="messages*"
                />
                <button className="w-full px-6 py-2 mt-10 bg-[#ef5523] text-white rounded-full hover:bg-[#ff6e3e]">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#ffff] flex  p-8 ">
        <div className=" container flex flex-col md:flex-row items-center justify-center max-w-[1280px] mx-auto ">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-semibold mb-4 ">
              Get Significant Boost to Your Business with Digital Marketing
              Company
            </h1>
            <p className="text-base font-normal ">
              Trip Management System is the right strategic digital marketing
              agency to provide you with a solution that brings the desired
              digital presence to your business. We empower your digital
              marketing website to get desired engagement, sales, and overall
              revenue across different platforms.
              <br />
              From lead generation and brand awareness to customer acquisition
              and retention, our digital marketing company does it all for you.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap items-center justify-center gap-4">
            <div className=" h-[200px] w-[250px] border rounded-xl flex flex-col p-4 shadow-md shadow-gray-300 ">
              <GrCertificate className=" text-5xl text-white p-2 bg-[#3e1572] rounded-lg" />
              <h1 className="  text-5xl  font-bold text-[#3e1572]">10+</h1>
              <span className="text-base font-semibold">
                years of Experience
              </span>
            </div>
            <div className=" h-[200px] w-[250px] border rounded-xl flex flex-col p-4 shadow-md shadow-gray-300 ">
              <FaThumbsUp className="text-5xl text-white p-2 bg-[#3e1572] rounded-lg" />
              <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold text-[#3e1572]">
                50+
              </h1>
              <span className="text-base font-semibold">
                Global Top Brands & Enterprises Served
              </span>
            </div>
            <div className=" h-[200px] w-[250px] border rounded-xl flex flex-col p-4 shadow-md shadow-gray-300 ">
              <RiMailSettingsFill className="text-5xl text-white p-2 bg-[#3e1572] rounded-lg" />
              <h1 className="text-5xl font-bold text-[#3e1572]">300+</h1>
              <span className="text-base font-semibold">
                Industry-best tech professionals
              </span>
            </div>
            <div className=" h-[200px] w-[250px] border rounded-xl flex flex-col p-4 shadow-md shadow-gray-300 ">
              <BiHappyBeaming className="text-5xl text-white p-2 bg-[#3e1572] rounded-lg" />
              <h1 className="text-5xl font-bold text-[#3e1572]">100+</h1>
              <span className="text-base font-semibold">Happy Clients</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-50 py-4">
        <div className="container max-w-[1440px] mx-auto p-8">
          <h1 className="text-center text-4xl font-semibold mb-10">
            360-Degree Digital Marketing Services for Companies of All Kinds
          </h1>
          <div className="w-full flex flex-wrap justify-center items-center gap-4 p-8 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="group w-full md:w-1/3 lg:w-1/4 perspective"
              >
                <div className="relative w-full text-center transform-style-preserve transition-transform duration-1000 h-[250px]">
                  <div className="card-front absolute inset-0 bg-white flex flex-col items-center p-6 shadow-lg rounded-xl transform-style-preserve backface-hidden h-auto">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h2 className="text-2xl font-semibold">{service.title}</h2>
                  </div>
                  <div className="card-back absolute inset-0 bg-[#3e1572] text-white flex flex-col items-center p-6 shadow-lg rounded-xl transform rotate-y-180 backface-hidden ">
                    <p className="h-auto">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Popular Tools that Power Our Digital Marketing Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our digital marketing agency makes best use of latest tools &
            technologies to get your business goals. For developing digital
            marketing websites we incorporate trending technologies that help
            your platform to perform better resulting in an increase in traffic
            on your website.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center">{tool.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 text-center mt-4">
                {tool.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 text-center font-semibold">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
