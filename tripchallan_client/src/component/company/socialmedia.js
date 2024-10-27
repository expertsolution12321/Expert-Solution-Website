import React from "react";

import social from "../images/social.jpg";
import social1 from "../images/fleet.jpg";
// import social2 from "../images/social1.jpeg";
import social2 from "../images/social3.jpeg";
import social3 from "../images/social3.jpg";
// import social4 from "../images/social4.jpg";
// import social4 from "../images/social5.jpg";
import social4 from "../images/social4.png";
import social5 from "../images/social5.jpg";
import social6 from "../images/social4.jpeg";

export default function socilamedia() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${social}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
        className="relative isolate h-80 sm:h-96 md:h-[32rem] flex items-center justify-center overflow-hidden bg-cover bg-center w-full"
      >
        <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-tight">
            Safety First, Protect Your Fleet with Advanced Tracking!
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white mt-4 md:mt-6">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of the text.
          </p>
        </div>
      </div>

      <div className="bg-cyan-300 text-center text-black py-6 px-4 ">
        <div className="container">
          <h1 className="text-black font-bold text-3xl md:text-3xl text-center w-full mb-8">
            Categories
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category Item 1 */}
            <div className="flex flex-col items-center border rounded-lg p-2 bg-white shadow-md">
              <img
                src={social1}
                alt="social1 images"
                className=" w-full h-[250px] object-cover rounded-md "
              />
              <p className="text-xl text-red-700 font-bold mt-2 text-center px-2">
                Fleet Management and Transforming Supply Chain
              </p>
              <p className="text-base text-black text-center mt-2 px-4">
                Introduction: Supply chain operations face numerous challenges,
                from real-time tracking to cost optimization.
              </p>
            </div>

            {/* Category Item 2 */}
            <div className="flex flex-col items-center border rounded-lg p-2 bg-white shadow-md">
              <img
                src={social2}
                alt="social2 images"
                className=" w-full h-[250px] object-cover rounded-md "
              />
              <p className="text-xl text-red-700 font-bold mt-2 text-center px-2">
                Gps Tracking and Route Optimization
              </p>
              <p className="text-base text-black text-center mt-2 px-4">
                Introduction: Supply chain operations face numerous challenges,
                from real-time tracking to cost optimization.
              </p>
            </div>

            {/* Category Item 3 */}
            <div className="flex flex-col items-center border rounded-lg p-2 bg-white shadow-md">
              <img
                src={social3}
                alt="social3 images"
                className=" w-full h-[250px] object-cover rounded-md "
              />
              <p className="text-xl text-red-700 font-bold mt-2 text-center px-2">
                UserFriendly Controled With Mobile App
              </p>
              <p className="text-base text-black text-center mt-2 px-4">
                Introduction: Supply chain operations face numerous challenges,
                from real-time tracking to cost optimization.
              </p>
            </div>

            {/* Category Item 4 */}
            <div className="flex flex-col items-center border rounded-lg p-2 bg-white shadow-md">
              <img
                src={social4}
                alt="social4 images"
                className=" w-full h-[250px] object-cover rounded-md "
              />
              <p className="text-xl text-red-700 font-bold mt-2 text-center px-2">
                Trusted By the Client
              </p>
              <p className="text-base text-black text-center mt-2 px-4">
                Introduction: Supply chain operations face numerous challenges,
                from real-time tracking to cost optimization.
              </p>
            </div>

            {/* Category Item 5 */}
            <div className="flex flex-col items-center border rounded-lg p-2 bg-white shadow-md">
              <img
                src={social5}
                alt="social5 images"
                className=" w-full h-[250px] object-cover rounded-md "
              />
              <p className="text-xl text-red-700 font-bold mt-2 text-center px-2">
                Warrenty and Safety Product
              </p>
              <p className="text-base text-black text-center mt-2 px-4">
                Introduction: Supply chain operations face numerous challenges,
                from real-time tracking to cost optimization.
              </p>
            </div>

            {/* Category Item 6 */}
            <div className="flex flex-col items-center border rounded-lg p-2 bg-white shadow-md">
              <img
                src={social6}
                alt="social7 images"
                className=" w-full h-[250px] object-cover rounded-md "
              />
              <p className="text-xl text-red-700 font-bold mt-2 text-center px-2">
                24/7 services with High Security
              </p>
              <p className="text-base text-black text-center mt-2 px-4">
                Introduction: Supply chain operations face numerous challenges,
                from real-time tracking to cost optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
