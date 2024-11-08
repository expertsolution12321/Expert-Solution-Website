import React from "react";

import social from "../images/social.jpg";
import social1 from "../images/fleet.jpg";
import social2 from "../images/social3.jpeg";
import social3 from "../images/social3.jpg";
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
          <h1 className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight m-0">
            Connect with Us
          </h1>
          <p className="text-white font-semibold">
            ( Stay Updated, Get Inspired, Join the Conversation )
          </p>
          <p className="text-xs sm:text-sm md:text-base text-white mt-4 md:mt-6">
            Follow us on social media to stay connected and learn more about how
            we’re transforming the world of trip and logistics management. We
            regularly share updates, tips, industry insights, and client success
            stories across our platforms to keep our community informed and
            inspired.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 text-center text-black py-6 px-4 pt-9">
        <div className="">
          <h1 className="text-black font-bold text-3xl md:text-3xl text-center w-full mb-8">
            Categories
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Category Item 1 */}
            <div className="flex flex-col items-center border rounded-lg p-2 bg-white shadow-md shadow-gray-300">
              <img
                src={social1}
                alt="social1 images"
                className=" w-full h-[250px] object-cover rounded-md "
              />
              <p className="text-xl text-red-700 font-bold mt-2 text-center px-2">
                Fleet Management and Transforming Supply Chain
              </p>
              <p className="text-base text-black text-center mt-2 px-4">
                Efficiently monitor and control your transportation assets with
                our Fleet Management solutions. Track vehicle locations in
                real-time, optimize routes, reduce fuel costs, and ensure timely
                maintenance to maximize fleet productivity.
              </p>
            </div>

            {/* Category Item 2 */}
            <div className="flex flex-col items-center border rounded-lg p-2 bg-white shadow-md shadow-gray-300">
              <img
                src={social2}
                alt="social2 images"
                className=" w-full h-[250px] object-cover rounded-md "
              />
              <p className="text-xl text-red-700 font-bold mt-2 text-center px-2">
                Gps Tracking and Route Optimization
              </p>
              <p className="text-base text-black text-center mt-2 px-4">
                Optimize delivery routes to reduce travel time and fuel costs,
                enhancing efficiency and ensuring timely deliveries for
                increased customer satisfaction
              </p>
            </div>

            {/* Category Item 3 */}
            <div className="flex flex-col items-center border rounded-lg p-2 bg-white shadow-md shadow-gray-300">
              <img
                src={social3}
                alt="social3 images"
                className=" w-full h-[250px] object-cover rounded-md "
              />
              <p className="text-xl text-red-700 font-bold mt-2 text-center px-2">
                UserFriendly Controled With Mobile App
              </p>
              <p className="text-base text-black text-center mt-2 px-4">
                User-Friendly Controlled with Mobile App refers to a system or
                device that can be easily operated and managed through a mobile
                application.
              </p>
            </div>

            {/* Category Item 4 */}
            <div className="flex flex-col items-center border rounded-lg p-2 bg-white shadow-md shadow-gray-300">
              <img
                src={social4}
                alt="social4 images"
                className=" w-full h-[250px] object-cover rounded-md "
              />
              <p className="text-xl text-red-700 font-bold mt-2 text-center px-2">
                Trusted By the Client
              </p>
              <p className="text-base text-black text-center mt-2 px-4">
                Trusted by the Client signifies a strong reputation or
                reliability established through positive relationships and
                consistent performance in delivering products or services.
              </p>
            </div>

            {/* Category Item 5 */}
            <div className="flex flex-col items-center border rounded-lg p-2 bg-white shadow-md shadow-gray-300">
              <img
                src={social5}
                alt="social5 images"
                className=" w-full h-[250px] object-cover rounded-md "
              />
              <p className="text-xl text-red-700 font-bold mt-2 text-center px-2">
                Warrenty and Safety Product
              </p>
              <p className="text-base text-black text-center mt-2 px-4">
                Warranty and Safety Product refers to items that come with a
                guarantee from the manufacturer, ensuring that they will
                function as intended for a specified period. This warranty
                provides customers with confidence in the product's quality and
                reliability.
              </p>
            </div>

            {/* Category Item 6 */}
            <div className="flex flex-col items-center border rounded-lg p-2 bg-white shadow-md shadow-gray-300">
              <img
                src={social6}
                alt="social7 images"
                className=" w-full h-[250px] object-cover rounded-md "
              />
              <p className="text-xl text-red-700 font-bold mt-2 text-center px-2">
                24/7 services with High Security
              </p>
              <p className="text-base text-black text-center mt-2 px-4">
                24/7 Services with High Security refers to round-the-clock
                availability of services combined with robust security measures.
                This ensures that customers can access support or assistance at
                any time, day or night, while also safeguarding their
                information and assets from potential threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
