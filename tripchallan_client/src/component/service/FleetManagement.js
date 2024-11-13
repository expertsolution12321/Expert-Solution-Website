import React from "react";
import CarouselDemo from "../CarouselDemo";
import pic1 from "../images/retail.png";
import pic2 from "../images/aboutus1.png";

function FleetManagement() {
  return (
    <div className="w-full">
      <section className="w-full">
        <CarouselDemo />
      </section>
      <div className="w-full  flex flex-col items-center justify-center md:flex-row my-5 px-3 ">
        <div className="flex max-w-[1280px] flex-col md:flex-row gap-8 sm:gap-20">
          <div className="w-full max-w-[580px] right-0 top-0 bottom-0 my-auto  rounded-2xl overflow-hidden">
            <img src={pic1} className="" />
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
            <img src={pic2} className="" />
          </div>

          
        </div>
      </div>
      <div className="w-full  flex flex-col items-center justify-center md:flex-row my-5 px-3 ">
        <div className="flex max-w-[1280px] flex-col md:flex-row gap-8 sm:gap-20">
          <div className="w-full right-0 top-0 bottom-0 max-w-[580px] my-auto  rounded-2xl overflow-hidden">
            <img src={pic1} className="max-h-[520px]" />
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
            <img src={pic2} className="" />
          </div>

          
        </div>
      </div>
      
    </div>
  );
}

export default FleetManagement;
