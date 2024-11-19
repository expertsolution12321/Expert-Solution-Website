import React from "react";
import logo from "./images/logo1.png";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "QuickLink",
    list: ["Home", "Company", "Services", "Solutions", "Contact Us"],
  },
  {
    title: "Services",
    list: [
      "E-commerce",
      "Mobile App",
      "UI-UX",
      "Digital Marketing",
      "Fleet Management",
    ],
  },
  {
    title: "Solutions",
    list: [
      "Analytics & Report",
      "Expense & Billing",
      "Load & Cargo",
      "Driver & Vehicle",
      "Group Management",
    ],
  },
  { title: "Legal", list: ["Privacy Policy", "Terms and Condition"] },
];

const FooterNew = ({ theme = "dark" }) => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  const socialLinks = {
    facebook: "https://www.facebook.com/",
    twitter: "https://x.com/",
    youtube: "https://www.youtube.com/",
    github: "https://github.com/",
    instagram: "https://www.instagram.com/",
  };

  const openSocial = (url) => {
    window.open(url, "_blank");
  };
  const handleService = (item) => {
    switch (item) {
      case "Home":
        navigate("/");
        break;
      case "Company":
        navigate("/about");
        break;
      case "Services":
        navigate("/ecommerce");
        break;
      case "Industries":
        navigate("/manufecture");
        break;
      case "Solutions":
        navigate("/secommerce");
        break;
      case "Contact Us":
        navigate("/contact");
        break;
      case "E-commerce":
        navigate("/secommerce");
        break;
      case "Mobile App":
        navigate("/mobileapp");
        break;
      case "UI-UX":
        navigate("/ui-ux");
        break;
      case "Digital Marketing":
        navigate("/digitalmarketing");
        break;
      case "Fleet Management":
        navigate("/fleetmanagement");
        break;
      case "Analytics & Report":
        navigate("/analytics-report");
        break;
      case "Expense & Billing":
        navigate("/expense");
        break;
      case "Load & Cargo":
        navigate("/load");
        break;
      case "Driver & Vehicle":
        navigate("/driver");
        break;
      case "Group Management":
        navigate("/groupmng");
        break;
      default:
    }
    window.scrollTo(0, 0);
  };
  return (
    <div
      className={`w-full px-4 pt-4 md:pt-20 text-xs sm:text-sm ${
        theme === "dark"
          ? "bg-gray-800 text-gray-100"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 px-4 md:px-12 py-4">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <img
            src={logo}
            className="w-36 h-20 mb-2 md:mb-4 cursor-pointer"
            alt="Company Logo"
            onClick={home}
          />
          <p className="text-base leading-relaxed md:text-left">
            At <b>Expert Solutions</b>, we have customized offerings for
            different domains. These solutions enable users to manage and
            monitor their assets effectively, increasing business efficiency.
          </p>
          <div className="flex gap-4 mt-4 text-lg">
            {Object.entries(socialLinks).map(([name, url]) => (
              <button
                key={name}
                onClick={() => openSocial(url)}
                aria-label={name}
              >
                <i className={`fa-brands fa-${name}`}></i>
              </button>
            ))}
          </div>
        </div>

        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 w-full md:w-2/3 lg:w-3/4 justify-center">
          {data.map(({ title, list }, idx) => (
            <div key={idx}>
              <h5
                className={` text-xl font-bold mb-3 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {title}
              </h5>
              <ul className="flex flex-col gap-3 p-0">
                {list.map((item, idx) => (
                  <li
                    key={idx}
                    className=" cursor-pointer "
                    onClick={() => handleService(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.844317695037!2d85.83435087500952!3d20.25687828120627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a7255555555%3A0xb4da5c97fe15e672!2sEXPERT%20SOLUTIONS!5e1!3m2!1sen!2sin!4v1729942970690!5m2!1sen!2sin"
          style={{ border: 0 }}
          className="w-full h-[300px]"
          title="office-location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div
        className={`mt-4 sm:mt-16 border-t py-3 text-center text-lg ${
          theme === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      >
        &copy; 2024 <b>Trip Management System</b>, Inc. All rights reserved
      </div>
    </div>
  );
};

export default FooterNew;
