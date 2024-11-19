import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import banner from "./images/banner.jpg";
import CarouselDemo from "./CarouselDemo";
import serv1 from "./images/ecom.jpg";
import serv2 from "./images/mobile.jpg";
import serv3 from "./images/uiux.jpg";
import serv4 from "./images/digital.png";
import about from "./images/aboutus.png";
import fleet from "./images/fleetmng.jpg";
import driver from "./images/driverbanner.jpg";
import load from "./images/loadover.png";
import expense from "./images/expensework.png";
import report from "./images/reportbanner.jpeg";
import group from "./images/group-banner.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "../../node_modules/swiper/swiper-bundle.min.css";
import "./flipcard.css";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
// changeend

const services = [
  {
    title: "E-commerce",
    description:
      "E-commerce continues to grow rapidly, evolving with advances in    technology like mobile shopping (m-commerce), voice-activated shopping (via devices like Amazon's Alexa), and the integration of social media platforms with shopping features.",
    image: serv1,
  },

  {
    title: "MobileApp",
    description:
      "Mobile apps continue to grow in importance as more people rely on their mobile devices for daily tasks, communication, entertainment, and business. The increasing integration of technologies like AI, machine learning, and augmented reality is expanding the potential of mobile apps even further.",
    image: serv2,
  },
  {
    title: "UI-UX",
    description:
      " UI and UX design are closely related disciplines in the field of digital product design, but they focus on different aspects of the  user’s interaction with a product or service. Together, they are critical for creating successful, user-friendly applications, websites, and digital experiences.",
    image: serv3,
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing is a powerful, versatile strategy for reaching and engaging customers in the digital age. It's wide range of tools and tactics allows businesses of all sizes to build brand awareness, drive traffic, and achieve measurable results.",
    image: serv4,
  },

  {
    title: "FleetManagement",
    description:
      "A fleet management system is a comprehensive tool designed to optimize the operation and oversight of vehicle fleets. It allows businesses to streamline everything from vehicle tracking and maintenance scheduling to fuel management and driver safety.",
    image: fleet,
  },

  {
    title: "Driver and Vahicle Management",
    description:
      "Our Driver and Vehicle Management System is a comprehensive, all-in-one solution designed to optimize and simplify the complex tasks involved in managing a fleet.",
    image: driver,
  },
  {
    title: "Load and Cargo Management",
    description:
      "Efficient load and cargo management is crucial for optimizing transportation logistics, minimizing delays, and ensuring the safe and timely delivery of goods. ",
    image: load,
  },

  {
    title: "Expenses and Billing Management",
    description:
      "Our comprehensive Driver and Vehicle Management System is designed to streamline the entire process of managing your fleet and driver operations.",
    image: expense,
  },

  {
    title: "Analytics & Reporting",
    description:
      "Uncover key trends, track performance, and make informed decisions with our comprehensive Analytics & Reporting tools. Visualize real-time data, customize dashboards, and gain valuable insights to drive growth and optimize your strategies effectively.",
    image: report,
  },

  {
    title: "Group Management",
    description:
      "Our Group Management System is designed to simplify team organization and enhance collaboration. This system provides an  all-in-one platform to manage teams effectively, allowing you to assign tasks, track progress, and ensure that projects are completed on time.",
    image: group,
  },
];

// Location address
const addresses = [
  {
    location: "78, Gautam Nagar, Bhubaneswar, Odisha 751014",
    mapLink:
      "https://www.google.com/maps?q=78,+Gautam+Nagar,+Bhubaneswar,+Odisha+751014",
  },
  {
    location:
      "EXPERT SOLUTIONS C,25, RAMKUND VIHAR, Samta Colony, Raipur, Chhattisgarh 492001",
    mapLink:
      "https://www.google.com/maps?q=EXPERT+SOLUTIONS+C,25,+RAMKUND+VIHAR,+Samta+Colony,+Raipur,+Chhattisgarh+492001",
  },
];

function Homepage() {
  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const navigate = useNavigate();
  const handleNavigate = (title) => {
    switch (title) {
      case "E-commerce":
        navigate("/ecommerce");
        break;
      case "MobileApp":
        navigate("/mobileapp");
        break;
      case "UI-UX":
        navigate("/ui-ux");
        break;
      case "Digital Marketing":
        navigate("/digitalmarketing");
        break;
      case "FleetManagement":
        navigate("/fleetmanagement");
        break;
      case "Driver and Vahicle Management":
        navigate("/driver");
        break;
      case "Load and Cargo Management":
        navigate("/load");
        break;
      case "Expenses and Billing Management":
        navigate("/expense");
        break;
      case "Analytics & Reporting":
        navigate("/analytics-report");
        break;
      case "Group Management":
        navigate("/groupmng");
        break;
      default:
    }
    window.scrollTo(0, 0);
  };

  const call = () => {
    window.open("tel:+917509617777");
  };
  const emailcontact = () => {
    window.open("mailto:expertsolution@gmail.com");
  };
  const location = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=78+Gautam+Nagar+St,+Bapuji+Nagar,+Bhubaneswar,+Odisha+751014",
      "_blank"
    );
  };
  // ==========================
  // Form Submitted function
  // ==========================
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://expersolution.onrender.com/api/create", {
        firstName: name,
        lastName: lname,
        email: email,
        phoneNumber: phone,
        address: address,
        Message: message,
      });

      setSuccessMessage("Form submitted successfully!");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
      alert("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <>
      {/* Banner  */}
      <section className="w-full">
        <CarouselDemo />
      </section>

      {/* About US Start */}
      <div id="about_Us" className="p-4 ">
        <div>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-black text-center m-0">
            About Us
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-center h-auto md:p-6 gap-4 md:gap-8">
          {/* Section for Text */}
          <div className="w-full md:w-1/2 p-2 md:mr-4 pt-6 md:pt-0">
            <h3 className="text-xl md:text-3xl text-red-600 font-bold pb-4">
              Welcome to Our{" "}
              <span className="text-green-500">Expert Solutions</span>
            </h3>
            <p className="text-sm md:text-base pb-4">
              All our solutions are customized & designed to meet the specific
              needs and challenges of your business. Our software solutions help
              increase productivity, improve efficiency, reduce overall cost and
              enhance performance & competitiveness.
              <br />
              We have an installed base of 1 Lac+ Vehicles, provide service
              across 150 locations, 24/7 Helpline, with complete integration to
              SAP/Oracle/ERP systems & multiple Vendor configurations.
            </p>
            {/* <button
              className="text-white hover:text-white font-bold bg-[#111a51] py-2 px-4 rounded-full hover:translate-x-3 transition-all duration-300 ease-out "
              onClick={handleClick}
            >
              Read More
            </button> */}
          </div>

          {/* Section for Image */}
          <div className="w-full md:w-1/2 p-2">
            <img
              src={about}
              alt="About Page Images"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* services */}
      <div className="h-auto p-10 bg-slate-200" id="Services">
        <h3 className="flex text-4xl font-mono font-bold text-black justify-center items-center text-center border-green-300">
          Services
        </h3>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="flip-card h-auto w-full  bg-white rounded-xl shadow-md shadow-sky-500 cursor-pointer m-2"
                onClick={() => handleNavigate(service.title)}
              >
                <div className="flip-card-inner h-[240px]">
                  <div className="flip-card-front">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-60 w-full rounded-lg"
                    />
                  </div>
                  <div className="flip-card-back flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg bg-gradient-to-b from-sky-50 via-sky-300 to-sky-400">
                    <h3 className="text-lg md:text-2xl font-bold mt-1 text-center ">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base mt-1 font-medium text-center">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*Contact US Start  */}
      <div className="flex flex-col md:flex-row h-auto p-4 md:space-y-0 space-y-8 justify-center">
        {/* Get In Touch Section */}
        <div className="w-full md:w-2/5 h-auto p-2 pt-10 md:mr-2 justify-between">
          <div className="pb-6">
            <h2 className="font-bold text-2xl md:text-4xl tracking-wide">
              Get In Touch
            </h2>
            <p className="pt-8 text-base md:text-lg leading-6">
              Expert Solutions is a digital solution designed to streamline and
              automate the process of managing travel and transportation
              logistics. It enables users, especially businesses in the
              transportation and logistics sector, to efficiently plan, track,
              and document trips for vehicles and drivers
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            {/* Phone Section */}
            <div className="inline-flex space-x-2 items-center p-4 md:p-6 w-full md:w-auto bg-[#111a51] rounded-md shadow-lg shadow-blue-500/50">
              <FaPhone className="text-xl md:text-2xl w-8 md:w-10 text-white" />
              <button
                onClick={call}
                className="font-bold w-72 md:w-80 text-white"
              >
                +91 7509617777
              </button>
            </div>

            {/* Email Section */}
            <div className="inline-flex space-x-2 items-center p-4 md:p-6 w-full md:w-auto bg-[#111a51] rounded-md shadow-lg shadow-blue-500/50">
              <FaEnvelope className="text-xl md:text-2xl w-8 md:w-10 text-white " />
              <button
                onClick={emailcontact}
                className="font-bold w-72 md:w-80 text-white"
              >
                expertsolutionsbbsr@gmail.com
              </button>
            </div>

            {/* Location Section */}
            {addresses.map((address, index) => (
              <div
                key={index}
                className="inline-flex space-x-2 items-center p-4 md:p-6 w-full md:w-auto bg-[#111a51] rounded-md shadow-lg shadow-blue-500/50"
              >
                <FaLocationDot className="text-xl md:text-2xl w-8 md:w-10 text-white" />
                <button
                  onClick={() => handleButtonClick(address.mapLink)} // Call function on click
                  className="font-bold w-72 md:w-80 text-white"
                >
                  {address.location}
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Us Form Section */}
        <div className="w-full md:w-2/5 p-2 md:ml-2 pt-10">
          <form onSubmit={handleSubmit}>
            <div className="space-y-12">
              <div>
                <h1 className="leading-7 text-gray-900 text-2xl md:text-4xl font-bold">
                  Contact Us
                </h1>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-full">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-full">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone number
                    </label>
                    <div className="relative mt-2.5">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Address
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-4">
                <button
                  type="reset"
                  className="text-md font-semibold leading-6 bg-red-600 text-white rounded-md px-3 py-2.5 w-28 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-200 hover:bg-red-500"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-green-500 px-4 py-2.5 text-md w-aut font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Homepage;
