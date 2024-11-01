import React from "react";
import logo from "./images/newlogo.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  const ecom = () => {
    navigate("/ecommerce");
  };
  const mobile = () => {
    navigate("/mobileapp");
  };
  const ui = () => {
    navigate("/ui-ux");
  };
  const digital = () => {
    navigate("/digitalmarketing");
  };
  const gps = () => {
    window.open("http://expertsolutionsgps.com", "_blank");
  };
  const clallan = () => {
    window.open("https://tripchallanbooks.tripchallanbook.in/", "_blank");
  };
  return (
    <>
      <footer className=" mx-auto p-6 flex flex-wrap justify-between space-y-6 md:space-y-0">
        {/* Logo and About Section */}
        <div className="w-full md:w-[40%] lg:w-[23%] flex flex-col items-center md:items-start m-1 p-2">
          <a href="/" className="mb-2">
            <img
              src={logo}
              className="w-36 h-20 mb-2 md:mb-4"
              alt="Company Logo"
            />
          </a>
          <p className="text-base  md:text-left">
            At <b>Trip Management System</b> we have customized offerings for
            different domains. These solutions enable the users to manage and
            monitor their assets effectively and profitably, as per their
            requirements, thereby increasing the business efficiency.
          </p>
          <h5 className="m-0  font-bold">Follow Us</h5>
          <div className="flex space-x-4 justify-center mt-4">
            <a
              href="https://www.facebook.com/"
              className="text-blue-800"
              target="_blank"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="https://x.com/"
              className="text-indigo-900"
              target="_blank"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="text-red-600"
              target="_blank"
            >
              <FaYoutube className="text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-pink-600"
              target="_blank"
            >
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-[40%] lg:w-[23%] m-1 p-2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold">Quick Links</h2>
          <ul className="pt-4 text-base space-y-2">
            <li>
              <a href="/" className="text-blue-700 font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-blue-700 font-bold">
                Company
              </a>
            </li>
            <li>
              <a href="/digitalmarketing" className="text-blue-700 font-bold">
                Services
              </a>
            </li>
            <li>
              <a href="/retail" className="text-blue-700 font-bold">
                Industries
              </a>
            </li>
            <li>
              <a href="/secommerce" className="text-blue-700 font-bold">
                Solutions
              </a>
            </li>
            <li>
              <a href="./contact" className="text-blue-700 font-bold">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="w-full md:w-[40%] lg:w-[23%] m-1 p-2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold">Services</h2>
          <ul className="pt-4 text-base space-y-2">
            <li
              className="text-blue-700 font-bold cursor-pointer"
              onClick={ecom}
            >
              Ecommerce
            </li>
            <li
              className="text-blue-700 font-bold cursor-pointer"
              onClick={mobile}
            >
              MobileApp
            </li>
            <li className="text-blue-700 font-bold cursor-pointer" onClick={ui}>
              UI/UX
            </li>
            <li
              className="text-blue-700 font-bold cursor-pointer"
              onClick={digital}
            >
              Digital Marketing
            </li>
            <li
              className="text-blue-700 font-bold cursor-pointer"
              onClick={gps}
            >
              Gps Tracking
            </li>
            <li
              className="text-blue-700 font-bold cursor-pointer"
              onClick={clallan}
            >
              Challan Book
            </li>
          </ul>
        </div>

        {/* Reach Us */}
        <div className="w-full md:w-[40%] lg:w-[23%] m-1 p-2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold pb-4">Reach Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.844317695037!2d85.83435087500952!3d20.25687828120627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a7255555555%3A0xb4da5c97fe15e672!2sEXPERT%20SOLUTIONS!5e1!3m2!1sen!2sin!4v1729942970690!5m2!1sen!2sin"
            style={{ border: 0 }}
            className="w-full h-64"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>

      <div className="p-2 bg-slate-700 text-center pt-3">
        <p className="text-lg text-white">
          Copyright ©{" "}
          <b>
            <a href="#" className="text-white">
              Trip-challan Book
            </a>
          </b>{" "}
          2024. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
