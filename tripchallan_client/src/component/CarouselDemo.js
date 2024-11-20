import React from "react";
import Carousel from "./Carousel";
import bg1 from "./images/banner.jpg";
import banner from "./images/banner.jpg";
import pic from "./images/card3.png";
import mobile from "./images/mobileban.jpg";
import uiux from "./images/ui-ux-banner.jpg";
import digitalmark from "./images/digimarkban.jpg";
import fleet from "./images/flletsolution.png";
import driver from "./images/driverbanner.jpg";
import load from "./images/loadbanner.png";
import expense from "./images/expense-banner.jpg";
import report from "./images/reportbanner.jpeg";
import group from "./images/group-banner.jpg";
const CarouselDemo = () => {
  const carouselImages = [
    {
      src: banner,
      label: (
        <span>
          <span className="text-orange-500 leading-8"> Expert Solutions </span>
          for Seamless Trip Management
        </span>
      ),
      text: "Streamline your trip planning and execution with our expert trip management services. From route optimization to real-time tracking and comprehensive reporting. ",
    },
    {
      src: pic,
      label: (
        <span>
          <span className="text-orange-500 leading-8">E-commerce</span> Website
          Development That Matches Your Needs
        </span>
      ),
      text: "Streamline your trip planning and execution with our expert trip management services. From route optimization to real-time tracking and comprehensive reporting. ",
    },
    {
      src: mobile,
      label: (
        <span>
          Partnering with experts means more than
          <span className="text-orange-500">app development</span>
        </span>
      ),
      text: "The secret to winning the e-commerce game lies in having an online presence that matches the expectations of your audience and compels them to convert.",
    },
    {
      src: uiux,
      label: (
        <span>
          Top-Notch Website
          <span className="text-orange-500"> Prototype Services</span>
        </span>
      ),
      text: "EXPERT SOLUTIONS is dedicated to accomplishing your business objectives by offering the best prototype website design elements for your projects.",
    },
    {
      src: digitalmark,
      label: (
        <span>
          Elevate Your Brand with{" "}
          <span className="text-orange-500">Expert Digital Marketing</span>
        </span>
      ),
      text: "Optimize efficiency, ensure safety, and cut costs with our advanced Fleet Management System. ",
    },
    {
      src: fleet,
      label: (
        <span className="text-white font-bold ">
          Revolutionize Your
          <span className="text-orange-500"> Fleet Operations</span>{" "}
        </span>
      ),
      text: "Take your fleet management to the next level with cutting-edge technology and streamlined processes. ",
    },
    {
      src: driver,
      label: (
        <span className="text-white font-bold">
          <span className="text-orange-500">Driver & Vehicle</span> Management
          System
        </span>
      ),
      text: "Our comprehensive Driver and Vehicle Management System is designed to streamline the entire process of managing your fleet and driver operations. ",
    },
    {
      src: load,
      label: (
        <span className="text-white font-bold">
          Efficient, Safe, and{" "}
          <span className="text-orange-500">Trackable Cargo Solutions</span>
        </span>
      ),
      text: "Our Load and Cargo Management system streamlines the planning, tracking, and oversight of all cargo movements.",
    },
    {
      src: expense,
      label: (
        <span className="text-white font-bold">
          Streamline Finances with Our <br />
          <span className="text-orange-500">Billing Management System</span>
        </span>
      ),
      text: "Simplify and optimize your financial processes with our powerful billing management system. Automate invoicing, track payments in real-time, and generate detailed financial reports effortlessly.",
    },
    {
      src: report,
      label: (
        <span className="text-white font-bold">
          <span className="text-orange-500">Empower Your Business</span> with
          Insights
        </span>
      ),
      text: "Unlock the power of data-driven decision-making with actionable insights tailored for your business.Gain a deeper understanding of customer behavior and market trends."
    },
    {
      src: group,
      label: (
        <span className="text-white font-bold ">
          Empower Teams with Our{" "}
          <span className="text-orange-500">Group Management System</span>
        </span>
      ),
      text: "Our Group Management System streamlines team collaboration, task allocation, and communication, helping you manage projects seamlessly and ensure team accountability.",
    },
  ];

  return (
    <>
      <Carousel carouselImages={carouselImages} />
    </>
  );
};

export default CarouselDemo;
