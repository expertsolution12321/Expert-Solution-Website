import { useState } from "react";
import axios from "axios";
// import {
//   ArrowPathIcon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
// } from "@heroicons/react/24/outline";

import contact from "./images/contact.jpg";
import { FaEnvelope } from "react-icons/fa";
import {
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

import {} from "@headlessui/react";
// changeend

// const products = [
//   {
//     name: "Analytics",
//     description: "Get a better understanding of your traffic",
//     href: "#",
//     icon: ChartPieIcon,
//   },
//   {
//     name: "Engagement",
//     description: "Speak directly to your customers",
//     href: "#",
//     icon: CursorArrowRaysIcon,
//   },
//   {
//     name: "Security",
//     description: "Your customers’ data will be safe and secure",
//     href: "#",
//     icon: FingerPrintIcon,
//   },
//   {
//     name: "Integrations",
//     description: "Connect with third-party tools",
//     href: "#",
//     icon: SquaresPlusIcon,
//   },
//   {
//     name: "Automations",
//     description: "Build strategic funnels that will convert",
//     href: "#",
//     icon: ArrowPathIcon,
//   },
// ];

export default function Contact() {
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
      await axios.post("http://192.168.29.87:5000/contact/create", {
        firstName: name,
        lastName: lname,
        email: email,
        phoneNumber: phone,
        address: address,
        message: message,
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
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: `url('${contact}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust color and opacity as needed
        }}
        className="relative isolate h-56 md:h-[25rem] flex items-center justify-center overflow-hidden bg-cover bg-center w-full"
      >
        <div className="absolute inset-0 flex flex-col items-center text-center px-4 md:px-8 space-y-4 mt-24">
          <h1 className="text-3xl md:text-6xl font-mono font-bold text-white">
            Contact Us
          </h1>
          <p className="text-2xl md:text-xl text-white max-w-2xl font-bold">
            <a href="/" className="text-orange-500 text-2xl">
              Home
            </a>
          </p>
        </div>
      </div>

      {/* Contact Us Part */}
      <div className="flex flex-col md:flex-row h-auto p-4 md:space-y-0 space-y-8 justify-center">
        {/* Get In Touch Section */}
        <div className="w-full md:w-2/5 h-auto p-2 pt-10 md:mr-2 justify-between">
          <div className="pb-6">
            <h2 className="font-bold text-2xl md:text-4xl tracking-wide">
              Get In Touch
            </h2>
            <p className="pt-8 text-base md:text-xl leading-6">
              A Trip Management System is a digital solution designed to
              streamline and automate the process of managing travel and
              transportation logistics. It enables users, especially businesses
              in the transportation and logistics sector, to efficiently plan,
              track, and document trips for vehicles and drivers.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            {/* Phone Section */}
            <div className="inline-flex space-x-2 items-center p-4 md:p-6 w-full md:w-auto bg-[#111a51] rounded-md shadow-lg shadow-blue-500/50">
              <FaPhone className="text-xl md:text-2xl w-8 md:w-10 text-white" />
              <a
                href="tel:+917509617777"
                className="font-bold w-72 md:w-80 text-white hover:underline"
              >
                +91 7509617777
              </a>
            </div>

            {/* Email Section */}
            <div className="inline-flex space-x-2 items-center p-4 md:p-6 w-full md:w-auto bg-[#111a51] rounded-md shadow-lg shadow-blue-500/50">
              <FaEnvelope className="text-xl md:text-2xl w-8 md:w-10 text-white" />
              <a
                href="mailto:expertsolution@gmail.com"
                className="font-bold w-72 md:w-80 text-white hover:underline"
              >
                expertsolutionsbbsr@gmail.com
              </a>
            </div>

            {/* Location Section */}
            <div className="inline-flex space-x-2 items-center p-4 md:p-6 w-full md:w-auto bg-[#111a51] rounded-md shadow-lg shadow-blue-500/50">
              <FaLocationDot className="text-xl md:text-2xl w-8 md:w-10 text-white" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=78+Gautam+Nagar+St,+Bapuji+Nagar,+Bhubaneswar,+Odisha+751014"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold w-72 md:w-80 text-white hover:underline"
              >
                78, Gautam Nagar St., Bapuji Nagar, Bhubaneswar, Odisha 751014 <br/>
                c-25 Ramkund Vihar Colony, samta colony(Near Vivekanand Ashram), Raipur.
              </a>
            </div>
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
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="reset"
                  className="text-md font-semibold leading-6 bg-red-600 text-white rounded-md px-3 py-2.5 w-28 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-200 hover:bg-red-500"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-4 py-2.5 text-md w-aut font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
