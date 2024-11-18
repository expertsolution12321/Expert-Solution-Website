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
      text: "Streamline your trip planning and execution with our expert trip management services. From route optimization to real-time tracking and comprehensive reporting, we provide everything you need to enhance efficiency, reduce costs, and ensure timely deliveries. ",
    },
    {
      src: pic,
      label: (
        <span>
          <span className="text-orange-500 leading-8">E-commerce</span> Website
          Development That Matches Your Needs
        </span>
      ),
      text: "Streamline your trip planning and execution with our expert trip management services. From route optimization to real-time tracking and comprehensive reporting, we provide everything you need to enhance efficiency, reduce costs, and ensure timely deliveries. ",
    },
    {
      src: mobile,
      label:
        "A Technology Partnership With Expert solution Goes Beyond Your Mobile App Development ",
      text: "The secret to winning the e-commerce game lies in having an online presence that matches the expectations of your audience and compels them to convert. And it calls for eCommerce website development expertise laser-focused on UX. To attract the desired audience, you need an e-commerce store that is visually stunning and conversion-focused.",
    },
    {
      src: uiux,
      label: "Top-Notch Website Prototype Services",
      text: "Trip Management System is dedicated to accomplishing your business objectives by offering the best prototype website design elements for your projects.",
    },
    {
      src: digitalmark,
      label: (
        <span>
          Elevate Your Brand with
          <span className="text-orange-500 leading-8">
            {" "}
            Expert Digital Marketing{" "}
          </span>
          Solutions
        </span>
      ),
      text: "Optimize efficiency, ensure safety, and cut costs with our advanced Fleet Management System. Track vehicles in real-time, schedule maintenance seamlessly, and gain actionable insights with powerful analytics. Your complete solution for smarter, more efficient fleet operations.",
    },
    {
      src: fleet,
      label: (
        <span className="text-white font-bold ">
          Revolutionize Your
          <span className="text-orange-500"> Fleet Operations</span>{" "}
        </span>
      ),
      text: "The secret to winning the e-commerce game lies in having an online presence that matches the expectations of your audience and compels them to convert. And it calls for eCommerce website development expertise laser-focused on UX. To attract the desired audience, you need an e-commerce store that is visually stunning and conversion-focused.",
    },
    {
      src: driver,
      label:(
        <span className="text-white font-bold">
            <span className="text-orange-500">Driver & Vehicle</span> Management
            System
          </span>
      ),
      text: "Our comprehensive Driver and Vehicle Management System is designed to streamline the entire process of managing your fleet and driver operations. This system provides a centralized platform to keep track of vehicle maintenance, driver assignments, compliance, and safety measures, helping you operate efficiently and safely.",
    },
    {
      src: load,
      label: (
        <span className="text-white font-bold">
            Efficient, Safe, and{" "}
            <span className="text-orange-500">Trackable Cargo Solutions {' '}</span> 
            for Your Business Needs
          </span>
      ),
      text: "Our Load and Cargo Management system streamlines the planning, tracking, and oversight of all cargo movements. This solution ensures every load is optimized for safety and efficiency, minimizing downtime and maximizing profitability. Real-time tracking, comprehensive reporting, and automated load balancing empower your team to handle cargo with precision and ease, whether managing single loads or large-scale operations.",
    },
    {
      src: expense,
      label: (
        <span className="text-white font-bold">
            Streamline Your Finances with Our{" "}
            <br/>
            <span className="text-orange-500">Expenses and Billing Management System</span>
          </span>
      ),
      text: "Our comprehensive Driver and Vehicle Management System is designed to streamline the entire process of managing your fleet and driver operations. This system provides a centralized platform to keep track of vehicle maintenance, driver assignments, compliance, and safety measures, helping you operate efficiently and safely.",
    },
    {
      src: report,
      label: (
        <span className="text-white font-bold">
            <span className="text-orange-500">Empower Your Business </span>
            with Data-Driven Insights
          </span>
      ),
      text: "Uncover key trends, track performance, and make informed decisions with our comprehensive Analytics & Reporting tools. Visualize real-time data, customize dashboards, and gain valuable insights to drive growth and optimize your strategies effectively.",
    },
    {
      src: group,
      label: (
        <span className="text-white font-bold ">
            Efficiently Organize and Empower Your Teams with Our<br/>
            <span className="text-orange-500">Group Management System</span>{" "}
          </span>
      ),
      text: "Our Group Management System streamlines team collaboration, task allocation, and communication, helping you manage projects seamlessly and ensure team accountability. With features like real-time updates, automated notifications, and robust analytics, you can create a structured workflow, keep everyone aligned with organizational goals, and drive productivity across all levels.",
    }
  ];

  return (
    <>
      <Carousel carouselImages={carouselImages} />
    </>
  );
};

export default CarouselDemo;
