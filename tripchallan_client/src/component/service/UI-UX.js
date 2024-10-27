import React from "react";
import { GrCertificate } from "react-icons/gr";
import { FaThumbsUp } from "react-icons/fa";
import { BiHappyBeaming } from "react-icons/bi";
import { RiMailSettingsFill } from "react-icons/ri";
import { FaFigma, FaUsers, FaHeadset } from "react-icons/fa";
import pic from "../images/social4.jpeg";

export default function UIUX() {
  return (
    <div className="w-full">
      <section
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(90, 3, 56, 0.8), rgba(0, 0, 49, 0.8)), url(${pic})`,
        }}
      >
        <div className=" container flex flex-col max-w-[1440px]  md:flex-row items-center justify-center mx-auto p-8 space-x-8 ">
          <div className="text-white w-full ">
            <h1 className="font-bold text-5xl mb-6">
              {" "}
              Top-Notch Website Prototype Services{" "}
            </h1>
            <p className="font-medium text-base tracking-wider leading-relaxed">
              {" "}
              OrangeMantra is dedicated to accomplishing your business
              objectives by offering the best prototype website design elements
              for your projects.{" "}
            </p>

            <ul className="flex flex-wrap mt-3 p-0 gap-2">
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center justify-center">
                <FaFigma className="mr-2 text-purple-500 text-xl" />
                Dashboard prototype Figma improvisation
              </li>
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center justify-center">
                <FaUsers className="mr-2 text-blue-500 text-xl" />
                Expert team of developers
              </li>
              <li className="px-3 py-2 border rounded-full font-bold mr-2 flex items-center justify-center">
                <FaHeadset className="mr-2 text-green-500 text-xl" />
                24/7 support on post-launch projects
              </li>
            </ul>
          </div>
          <div className=" w-full  mx-0 my-16">
            <div className="max-w-[450px] mx-auto bg-[#ffffff] flex flex-col items-center justify-center  pb-4 rounded-lg overflow-hidden">
              <h1 className="mb-4 text-2xl bg-gradient-to-r from-[#590338] to-[#000031] w-full text-center text-white p-4">
                Contact Us
              </h1>
              <div className="w-full px-3">
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
                  <input
                    className="block w-full px-3 py-2 bg-[#f4f4f4]  rounded-md"
                    placeholder="messages*"
                  />
                  <button className="w-full px-6 py-2 mt-10 bg-gradient-to-r from-[#590338] to-[#000031] text-white rounded-full">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#ffff] flex  p-8 ">
        <div className="container flex flex-col md:flex-row items-center justify-center max-w-[1280px] mx-auto ">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-semibold mb-4 ">
              {" "}
              Transform Your Business with Our Website Prototype Services
            </h1>
            <p className="text-base font-normal ">
              {" "}
              We, at OrangeMantra, leverage you to upscale your business by
              offering the best website prototype services. Our team consists of
              skilled professionals with a shared commitment to delivering
              high-quality website prototypes. With a wealth of experience in
              and prototyping tools, we bring your visions to life.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap items-center justify-center gap-2">
            <div className=" h-[200px] w-[250px] border rounded-xl flex flex-col p-4 ">
              <BiHappyBeaming className="text-5xl text-white p-2 bg-gradient-to-r from-[#7f0f54] to-[#000031] rounded-lg" />
              <h1 className="  text-5xl  font-bold text-[000031]">100+</h1>
              <span className="text-base font-semibold">Happy Clients</span>
            </div>
            <div className=" h-[200px] w-[250px] border rounded-xl flex flex-col p-4 ">
              <FaThumbsUp className="text-5xl text-white p-2 bg-gradient-to-r from-[#7f0f54] to-[#000031] rounded-lg" />
              <h1 className="text-5xl font-bold text-[000031]">250+</h1>
              <span className="text-base font-semibold">
                {" "}
                Global Top Brands & Enterprises Served{" "}
              </span>
            </div>
            <div className=" h-[200px] w-[250px] border rounded-xl flex flex-col p-4 ">
              <RiMailSettingsFill className="text-5xl text-white p-2 bg-gradient-to-r from-[#7f0f54] to-[#000031] rounded-lg" />
              <h1 className="text-5xl font-bold text-[000031]">90%</h1>
              <span className="text-base font-semibold">Customers NPS</span>
            </div>
            <div className=" h-[200px] w-[250px] border rounded-xl flex flex-col p-4 ">
              <BiHappyBeaming className="text-5xl text-white p-2 bg-gradient-to-r from-[#7f0f54] to-[#000031] rounded-lg" />
              <h1 className="text-5xl font-bold text-[000031]">400+</h1>
              <span className="text-base font-semibold">
                {" "}
                Industry-best tech professionals{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-50 py-4 ">
        <div className=" container w-full max-w-[1440px] mx-auto p-8">
          <h1 className="text-center text-4xl font-semibold mb-10">
            Range of Website Prototype Services We Offer{" "}
          </h1>
          <p className="text-center text-base font-medium text-gray-700 mb-12">
            As your value-driven digital marketing agency in India, we are here
            to meet all your brand’s advertising needs with our expert-level
            services. Our extensive services for your digital marketing website
            will allow you to grow your business immensely.{" "}
          </p>
          <div className="w-full flex flex-wrap  justify-center items-center gap-4 p-8">
            <div className="group  w-full md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-300 ease-out hover:bg-gradient-to-r from-[#7f0f54] to-[#000031] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className=" text-white mx-auto  text-5xl fill-white  p-2 bg-gradient-to-r from-[#7f0f54] to-[#000031] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-2xl font-semibold mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce{" "}
              </h1>
              <p className="text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered eCommerce
                solutions that provide your customer with immersive services.
              </p>
            </div>
            <div className="group  w-full md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-300 ease-out hover:bg-gradient-to-r from-[#7f0f54] to-[#000031] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className=" text-white mx-auto  text-5xl fill-white  p-2 bg-gradient-to-r from-[#7f0f54] to-[#000031] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-2xl font-semibold mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce{" "}
              </h1>
              <p className="text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered eCommerce
                solutions that provide your customer with immersive services.
              </p>
            </div>
            <div className="group  w-full md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-300 ease-out hover:bg-gradient-to-r from-[#7f0f54] to-[#000031] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className=" text-white mx-auto  text-5xl fill-white  p-2 bg-gradient-to-r from-[#7f0f54] to-[#000031] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-2xl font-semibold mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce{" "}
              </h1>
              <p className="text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered eCommerce
                solutions that provide your customer with immersive services.
              </p>
            </div>
            <div className="group  w-full md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-300 ease-out hover:bg-gradient-to-r from-[#7f0f54] to-[#000031] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className=" text-white mx-auto  text-5xl fill-white  p-2 bg-gradient-to-r from-[#7f0f54] to-[#000031] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-2xl font-semibold mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce{" "}
              </h1>
              <p className="text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered eCommerce
                solutions that provide your customer with immersive services.
              </p>
            </div>
            <div className="group  w-full md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-300 ease-out hover:bg-gradient-to-r from-[#7f0f54] to-[#000031] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className=" text-white mx-auto  text-5xl fill-white  p-2 bg-gradient-to-r from-[#7f0f54] to-[#000031] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:fill-[#3e1572]" />
              <h1 className="text-2xl font-semibold mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce{" "}
              </h1>
              <p className="text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered eCommerce
                solutions that provide your customer with immersive services.
              </p>
            </div>
            <div className="group  w-full md:w-1/3 lg:w-1/4 border flex flex-col p-4 rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-xl transition-all duration-300 ease-out hover:bg-gradient-to-r from-[#7f0f54] to-[#000031] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl">
              <BiHappyBeaming className=" text-white mx-auto  text-5xl fill-white  p-2 bg-gradient-to-r from-[#7f0f54] to-[#000031] rounded-lg transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white  group-hover:fill-[#3e1572]" />
              <h1 className="text-2xl font-semibold mb-3 text-center group-hover:text-white">
                Cloud & Headless Commerce{" "}
              </h1>
              <p className="text-base text-center font-medium text-gray-600 group-hover:text-white">
                Highly scalable, secure, and super fast cloud-powered eCommerce
                solutions that provide your customer with immersive services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full p-4"></section>
    </div>
  );
}
