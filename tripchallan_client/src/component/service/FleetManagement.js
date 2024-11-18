import React from "react";
// import CarouselDemo from "../CarouselDemo";
import { useNavigate } from "react-router-dom";
import pic1 from "../images/retail.png";
import pic2 from "../images/aboutus1.png";

function FleetManagement() {
  const navigate=useNavigate();
  const contact=()=>{
    navigate("/contact")
  }
  return (
    <div className="w-full">
      {/* <section className="w-full"> */}
        {/* <CarouselDemo /> */}
      {/* </section> */}

      {/* Banner */}
      <section className="bg-black p-4 sm:p-8 md:p-16 lg:p-24 relative flex flex-col items-center justify-center h-auto sm:h-[500px] lg:h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${pic2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        />

        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold relative z-10 text-center m-2 p-2 leading-10">
          <span className="text-white font-bold ">
          Revolutionize Your 
            <span className="text-orange-500"> Fleet Operations</span>{" "}
          </span>
        </h1>

        <p className="flex flex-col sm:flex-row gap-2 text-center relative z-10 mt-4 text-white text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-8 lg:px-16">
        Optimize efficiency, ensure safety, and cut costs with our advanced Fleet Management System. Track vehicles in real-time, schedule maintenance seamlessly, and gain actionable insights with powerful analytics. Your complete solution for smarter, more efficient fleet operations.
        </p>

        <div className="relative z-10 mt-6 flex flex-wrap gap-4 justify-center">
          <button
            onClick={contact}
            className="text-white bg-orange-500 hover:bg-orange-600 rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg"
          >
            Connect Now
          </button>
        </div>
      </section>



      <div className="w-full  flex flex-col items-center justify-center md:flex-row my-5 px-3 ">
        <div className="flex max-w-[1280px] flex-col md:flex-row gap-8 sm:gap-20">
          <div className="w-full max-w-[580px] right-0 top-0 bottom-0 my-auto  rounded-2xl overflow-hidden">
            <img src={pic1} className=""  alt="pic1"/>
          </div>

          <div className="w-full self-center">
            <h1 className="font-bold text-5xl mb-6">Fuel Sensor</h1>
            <p className="font-medium text-base tracking-wider leading-relaxed">
              A fuel sensor is a device designed to accurately monitor and
              measure fuel levels in vehicles and storage tanks, providing
              real-time data to ensure efficient fuel management. Fuel sensors
              offer services like fuel level tracking, leak detection,
              consumption analysis, and theft prevention. By integrating with
              fleet management systems, they provide alerts for sudden drops in
              fuel, irregular usage, or unauthorized refueling. 
            </p>
          </div>
        </div>
      </div>
      <div className="w-full  flex flex-col items-center justify-center md:flex-row my-5 px-3">
        <div className="flex max-w-[1280px] flex-col md:flex-row gap-8 sm:gap-20 md:justify-between">
        <div className="w-full self-center">
            <h1 className="font-bold text-5xl mb-6">Gps Tracking</h1>
            <p className="font-medium text-base tracking-wider leading-relaxed">
              A fuel sensor is a device designed to accurately monitor and
              measure fuel levels in vehicles and storage tanks, providing
              real-time data to ensure efficient fuel management. Fuel sensors
              offer services like fuel level tracking, leak detection,
              consumption analysis, and theft prevention. By integrating with
              fleet management systems, they provide alerts for sudden drops in
              fuel, irregular usage, or unauthorized refueling. 
            </p>
          </div>
          <div className="w-full max-w-[580px] left-0 top-0 bottom-0 my-auto rounded-2xl overflow-hidden">
            <img src={pic2} className="" alt="pic2"/>
          </div>

          
        </div>
      </div>
      <div className="w-full  flex flex-col items-center justify-center md:flex-row my-5 px-3 ">
        <div className="flex max-w-[1280px] flex-col md:flex-row gap-8 sm:gap-20">
          <div className="w-full right-0 top-0 bottom-0 max-w-[580px] my-auto  rounded-2xl overflow-hidden">
            <img src={pic1} className="max-h-[520px]" alt="pic1"/>
          </div>

          <div className="w-full self-center">
            <h1 className="font-bold text-5xl mb-6">Billing Software</h1>
            <p className="font-medium text-base tracking-wider leading-relaxed">
              A fuel sensor is a device designed to accurately monitor and
              measure fuel levels in vehicles and storage tanks, providing
              real-time data to ensure efficient fuel management. Fuel sensors
              offer services like fuel level tracking, leak detection,
              consumption analysis, and theft prevention. By integrating with
              fleet management systems, they provide alerts for sudden drops in
              fuel, irregular usage, or unauthorized refueling. 
            </p>
          </div>
        </div>
      </div>
      <div className="w-full  flex flex-col items-center justify-center md:flex-row my-5 px-3">
        <div className="flex max-w-[1280px] flex-col md:flex-row gap-8 sm:gap-20 md:justify-between">
        <div className="w-full self-center">
            <h1 className="font-bold text-5xl mb-6">Sealing And Security Services</h1>
            <p className="font-medium text-base tracking-wider leading-relaxed">
              A fuel sensor is a device designed to accurately monitor and
              measure fuel levels in vehicles and storage tanks, providing
              real-time data to ensure efficient fuel management. Fuel sensors
              offer services like fuel level tracking, leak detection,
              consumption analysis, and theft prevention. By integrating with
              fleet management systems, they provide alerts for sudden drops in
              fuel, irregular usage, or unauthorized refueling. 
            </p>
          </div>
          <div className="w-full max-w-[580px] left-0 top-0 bottom-0 my-auto rounded-2xl overflow-hidden">
            <img src={pic2} className="" alt="pic"/>
          </div>

          
        </div>
      </div>
      
    </div>
  );
}

export default FleetManagement;
