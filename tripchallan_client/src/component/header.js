import { useState, useRef, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./images/newlogo1.svg";
import sql from "./images/sql.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaSortDown } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import { FaJs, FaHtml5, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    window.open("https://tripchallanbooks.tripchallanbook.in/", "_blank");
    setMobileMenuOpen(false);
  };
  const contact = () => {
    navigate("/contact");
    setMobileMenuOpen(false);
  };
  const home = () => {
    navigate("/");
    setMobileMenuOpen(false);
  };
  const handleNavigationService = (e) => {
    const id = e.target.id;
    switch (id) {
      case "ecommerce":
        navigate("/ecommerce");
        break;
      case "mobileapp":
        navigate("/mobileapp");
        break;
      case "uiux":
        navigate("/ui-ux");
        break;
      case "digitalmarketing":
        navigate("/digitalmarketing");
        break;
      case "gpssupplier":
        navigate("/gpssupplier");
        break;
      case "taxiservices":
        navigate("/taxiservices");
        break;
      case "fleet":
        navigate("/fleetmanagement");
        break;
      case "driver":
        navigate("/driver");
        break;
      case "billing":
        navigate("/expense");
        break;
      case "load":
        navigate("/load");
        break;
      case "report":
        navigate("/analytics-report");
        break;
      case "group":
        navigate("/groupmng");
        break;
      default:
    }
    setMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleNavigationCompany = (e) => {
    const cid = e.target.id;

    switch (cid) {
      case "about":
        navigate("/about");
        break;
      case "companyClient":
        navigate("/client");
        break;
      case "socialmedia":
        navigate("/socialmedia");
        break;
      default:
    }
    setMobileMenuOpen(false);
    setIsCompanyOpen(false);
  };

  const handleNavigationIndustries = (e) => {
    const id = e.target.id;
    switch (id) {
      case "manufecture":
        navigate("/manufecture");
        break;
      case "retail":
        navigate("/retail");
        break;
      case "technology":
        navigate("/technology");
        break;
      case "transportation":
        navigate("/transportation");
        break;
      default:
    }
    setMobileMenuOpen(false);
    setIsIndustriesOpen(false);
  };

  const handleNavigationSolution = (e) => {
    const id = e.target.id;
    switch (id) {
      case "secommerce":
        navigate("/secommerce");
        break;
      case "smobileapp":
        navigate("/smobileapp");
        break;
      case "webcms":
        navigate("/webcms");
        break;
      case "fleet":
        navigate("/fleetmanagement");
        break;
      case "driver":
        navigate("/driver");
        break;
      case "billing":
        navigate("/expense");
        break;
      case "load":
        navigate("/load");
        break;
      case "report":
        navigate("/analytics-report");
        break;
      case "group":
        navigate("/groupmng");
        break;
      default:
    }
    setMobileMenuOpen(false);
    setIsSolutionOpen(false);
  };
  const handleNavigationTechnology = (e) => {
    const id = e.target.id;
    switch (id) {
      case "javascript":
        window.open("https://www.w3schools.com/js/DEFAULT.asp", "_blank");
        break;
      case "html":
        window.open("https://www.w3schools.com/html/html_css.asp", "_blank");
        break;
      case "tailwind":
        window.open("https://tailwindcss.com/", "_blank");
        break;
      case "react":
        window.open("https://react.dev/", "_blank");
        break;
      case "node":
        window.open("https://nodejs.org/en", "_blank");
        break;
      case "express":
        window.open("https://expressjs.com/", "_blank");
        break;
      case "database":
        window.open(
          "https://www.oracle.com/database/what-is-database/",
          "_blank"
        );
        break;
      case "sql":
        window.open("https://www.w3schools.com/sql/", "_blank");
        break;
      case "mongodb":
        window.open("https://www.mongodb.com/", "_blank");
        break;
      default:
    }
    setMobileMenuOpen(false);
    setIsTechnologyOpen(false);
  };
  // const handleNavigationProduct = (e) => {
  //   const id = e.target.id;
  //   switch (id) {
  //     case "challan":
  //       window.open("https://tripchallanbooks.tripchallanbook.in/", "_blank");
  //       break;
  //     case "gps":
  //       window.open("http://expertsolutionsgps.com", "_blank");
  //       break;
  //     default:
  //   }
  //   setMobileMenuOpen(false);
  // };

  //Menu bar Dropdown
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isTechnologyOpen, setIsTechnologyOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const technologyRef = useRef(false);
  const servicesRef = useRef(false);
  const industriesRef = useRef(false);
  const solutionRef = useRef(false);
  const companyRef = useRef(false);
  const productRef = useRef(false);

  const handleToggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsIndustriesOpen(false);
    setIsTechnologyOpen(false);
    setIsServicesOpen(false);
    setIsProductOpen(false);
    setIsSolutionOpen(false);
  };
  const handleToggleTechnology = () => {
    setIsTechnologyOpen(!isTechnologyOpen);
    setIsServicesOpen(false);
    setIsIndustriesOpen(false);
    setIsSolutionOpen(false);
    setIsProductOpen(false);
    setIsCompanyOpen(false);
  };

  const handleToggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsTechnologyOpen(false);
    setIsIndustriesOpen(false);
    setIsSolutionOpen(false);
    setIsProductOpen(false);
    setIsCompanyOpen(false);
  };

  const handleToggleIndustries = () => {
    setIsIndustriesOpen(!isIndustriesOpen);
    setIsTechnologyOpen(false);
    setIsServicesOpen(false);
    setIsSolutionOpen(false);
    setIsProductOpen(false);
    setIsCompanyOpen(false);
  };
  const handleToggleProduct = () => {
    setIsProductOpen(!isProductOpen);
    setIsIndustriesOpen(false);
    setIsTechnologyOpen(false);
    setIsServicesOpen(false);
    setIsSolutionOpen(false);
    setIsCompanyOpen(false);
  };
  const handleToggleSolution = () => {
    setIsSolutionOpen(!isSolutionOpen);
    setIsIndustriesOpen(false);
    setIsTechnologyOpen(false);
    setIsServicesOpen(false);
    setIsProductOpen(false);
    setIsCompanyOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      technologyRef.current &&
      !technologyRef.current.contains(event.target)
    ) {
      setIsTechnologyOpen(false);
    }
    if (servicesRef.current && !servicesRef.current.contains(event.target)) {
      setIsServicesOpen(false);
    }
    if (
      industriesRef.current &&
      !industriesRef.current.contains(event.target)
    ) {
      setIsIndustriesOpen(false);
    }
    if (solutionRef.current && !solutionRef.current.contains(event.target)) {
      setIsSolutionOpen(false);
    }
    if (companyRef.current && !companyRef.current.contains(event.target)) {
      setIsCompanyOpen(false);
      console.log(event.target);
    }
    if (productRef.current && !productRef.current.contains(event.target)) {
      setIsProductOpen(false);
      console.log(event.target);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //end
  return (
    <>
      <header className="sticky top-0 bg-white z-50 shadow-md">
        {" "}
        {/* Make header sticky */}
        <nav
          aria-label="Global"
          className=" flex w-full items-center  justify-between"
        >
          <div className="flex ">
            <img
              alt="Logo"
              src={logo}
              className=" cursor-pointer h-20"
              onClick={home}
            />
          </div>
          <div className="flex mr-4">
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <ul className="flex p-0  space-x-4">
                <li className="px-3 ">
                  <button
                    onClick={home}
                    className="text-[17px] font-semibold leading-6 text-gray-900 cursor-pointer"
                  >
                    Home
                  </button>
                </li>

                {/* Company */}
                <li className="relative group px-3 flex">
                  <a
                    // onClick={handleToggleCompany}
                    className="text-[17px] font-semibold leading-6 text-gray-900 cursor-pointer "
                  >
                    Company{" "}
                  </a>
                  <span className="inline-block ml-1 transition-all group-hover:rotate-180 pt-1">
                    <FaSortDown />
                  </span>

                  <ul
                    className={`absolute hidden  mt-2 w-48 p-0 bg-white shadow-lg rounded-lg transform transition-all duration-300 group-hover:block top-4  left-10 flex-col space-y-5

                    `}
                  >
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationCompany}
                      id="about"
                    >
                      About Us
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationCompany}
                      id="companyClient"
                    >
                      Client
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationCompany}
                      id="socialmedia"
                    >
                      Social Media
                    </li>
                  </ul>
                </li>

                {/* Technology */}
                <li className="relative group px-3 flex">
                  <a
                    onClick={handleToggleTechnology}
                    className="text-[17px] font-semibold leading-6 text-black cursor-pointer"
                  >
                    Technology{" "}
                  </a>
                  <span className="inline-block ml-1 transition-all group-hover:rotate-180 pt-1">
                    <FaSortDown />
                  </span>

                  <ul
                    className={`absolute hidden  mt-2 w-48 p-0 bg-white shadow-lg rounded-lg transform transition-all duration-300 group-hover:block top-4  left-10 flex-col space-y-5`}
                  >
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                      onClick={handleNavigationTechnology}
                      id="javascript"
                    >
                      <FaJs className="mr-2 text-yellow-500" />
                      JavaScript
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                      onClick={handleNavigationTechnology}
                      id="html"
                    >
                      <FaHtml5 className="mr-2 text-orange-600" />
                      HTML/CSS
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                      onClick={handleNavigationTechnology}
                      id="tailwind"
                    >
                      <SiTailwindcss className="mr-2 text-teal-500" />
                      Tailwind CSS
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                      onClick={handleNavigationTechnology}
                      id="react"
                    >
                      <FaReact className="mr-2 text-blue-500" />
                      React.js
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                      onClick={handleNavigationTechnology}
                      id="node"
                    >
                      <FaNodeJs className="mr-2 text-green-600" />
                      Node.js
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                      onClick={handleNavigationTechnology}
                      id="express"
                    >
                      <SiExpress className="mr-2 text-gray-800" />
                      Express.js
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                      onClick={handleNavigationTechnology}
                      id="database"
                    >
                      <FaDatabase className="mr-2 text-indigo-600" />
                      Database
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                      onClick={handleNavigationTechnology}
                      id="sql"
                    >
                      <img src={sql} className="mr-2 text-blue-700 h-5" />
                      SQL
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                      onClick={handleNavigationTechnology}
                      id="mongodb"
                    >
                      <SiMongodb className="mr-2 text-green-600" />
                      MongoDB
                    </li>
                  </ul>
                </li>
                {/* Services */}
                <li
                  className="relative group px-3 flex"
                  // ref={servicesRef}
                  // id="services"
                >
                  <a
                    // onClick={handleToggleServices}
                    className="text-[17px] font-semibold leading-6 text-gray-900 cursor-pointer"
                  >
                    Services{" "}
                  </a>
                  <span className="inline-block ml-1 transition-all group-hover:rotate-180 pt-1">
                    <FaSortDown />
                  </span>

                  <ul
                    className={`absolute hidden mt-2 w-48 p-0 bg-white shadow-lg rounded-lg transform transition-all  duration-300 group-hover:block top-4  left-10 flex-col space-y-5
                      `}
                  >
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationService}
                      id="ecommerce"
                    >
                      E-commerce
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationService}
                      id="mobileapp"
                    >
                      Mobile App
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationService}
                      id="uiux"
                    >
                      UI/Ux
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationService}
                      id="digitalmarketing"
                    >
                      Digital Marketing
                    </li>

                    {/* ======================== */}
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationService}
                      id="fleet"
                    >
                      Fleet Management
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationService}
                      id="driver"
                    >
                      Driver & Vahicle Management
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationService}
                      id="load"
                    >
                      Load and Cargo Management
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationService}
                      id="billing"
                    >
                      Expance & Billing Management
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationService}
                      id="report"
                    >
                      Analytics & Reporting
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationService}
                      id="group"
                    >
                      Group Management
                    </li>
                    {/* ======================== */}
                  </ul>
                </li>
                {/* Industry */}
                <li
                  className="relative group px-3 flex"
                  // ref={industriesRef}
                  // id="industry"
                >
                  <a
                    // onClick={handleToggleIndustries}
                    className="text-[17px] font-semibold leading-6 text-gray-900 cursor-pointer"
                  >
                    Industries{" "}
                  </a>
                  <span className="inline-block ml-1 transition-all group-hover:rotate-180 pt-1">
                    <FaSortDown />
                  </span>

                  <ul
                    className={`absolute hidden  mt-2 w-48 p-0 bg-white shadow-lg rounded-lg transform transition-all duration-300 group-hover:block top-4  left-10 flex-col space-y-5 `}
                  >
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationIndustries}
                      id="retail"
                    >
                      Retail
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationIndustries}
                      id="technology"
                    >
                      Technology
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationIndustries}
                      id="transportation"
                    >
                      Transportation
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationIndustries}
                      id="manufecture"
                    >
                      Manufacture
                    </li>
                  </ul>
                </li>
                {/* Solution */}
                <li
                  className="relative group px-3 flex"
                  // ref={solutionRef}
                  // id="solution"
                >
                  <a
                    // onClick={handleToggleSolution}
                    className="text-[17px] font-semibold leading-6 text-gray-900 cursor-pointer"
                  >
                    Solutions{" "}
                  </a>
                  <span className="inline-block ml-1 transition-all group-hover:rotate-180 pt-1">
                    <FaSortDown />
                  </span>

                  <ul
                    className={`absolute hidden  mt-2 w-48 p-0 bg-white shadow-lg rounded-lg transform transition-all duration-300 group-hover:block left-10 top-4 `}
                  >
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationSolution}
                      id="secommerce"
                    >
                      E-commerce Solutions
                    </li>

                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationSolution}
                      id="smobileapp"
                    >
                      Mobile App
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationSolution}
                      id="webcms"
                    >
                      Web and CMS
                    </li>
                    {/* ==================== */}
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationSolution}
                      id="fleet"
                    >
                      Fleet Management
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationSolution}
                      id="driver"
                    >
                      Driver & Vahicle Management
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationSolution}
                      id="load"
                    >
                      Load and Cargo Management
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationSolution}
                      id="billing"
                    >
                      Expance & Billing Management
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationSolution}
                      id="report"
                    >
                      Analytics & Reporting
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                      onClick={handleNavigationSolution}
                      id="group"
                    >
                      Group Management
                    </li>
                    {/* ==================== */}
                  </ul>
                </li>

                {/* Contact Us */}
                <li className="px-3">
                  <button
                    onClick={contact}
                    className="text-[17px] font-semibold leading-6 text-gray-900"
                  >
                    Contact Us
                  </button>
                </li>
                {/* <li className="px-3">
              <button
                onClick={handleClick}
                className="text-sm font-bold leading-6 text-blue-600 border-2 border-sky-900 px-3 py-2 rounded-full cursor-pointer"
             >
                SignIn
                </button>
              </li> */}
              </ul>
            </div>

            <button
              onClick={handleClick}
              className=" hidden  lg:flex lg:flex-1 lg:justify-end ml-2 -mt-3 px-4 text-lg font-semibold leading-6 text-blue-600 border-2 border-sky-700  rounded-full cursor-pointer hover:bg-blue-600 hover:text-white  items-center"
            >
              SignIn
            </button>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button onClick={home} className="-m-1.5 p-1.5">
                <img alt="Logo" src={logo} className="h-8 w-auto" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <button
                    onClick={home}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </button>

                  {/* Company Dropdown */}
                  <div className="relative">
                    <a
                      onClick={handleToggleCompany}
                      className="text-base font-semibold leading-6 text-gray-900 cursor-pointer block"
                    >
                      Company{" "}
                      <span className="inline-block ml-1">
                        <FaSortDown />
                      </span>
                    </a>
                    <ul
                      className={`relative mt-2 w-full p-0 bg-white shadow-lg rounded-lg transition-all duration-300 ${
                        isCompanyOpen
                          ? "opacity-100"
                          : "hidden h-0 overflow-hidden"
                      }`}
                    >
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationCompany}
                        id="about"
                      >
                        About Us
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationCompany}
                        id="companyClient"
                      >
                        Client
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationCompany}
                        id="socialmedia"
                      >
                        Socialmedia
                      </li>
                    </ul>
                  </div>

                  {/* Technology Dropdown */}
                  <div className="relative">
                    <a
                      onClick={handleToggleTechnology}
                      className="text-base font-semibold leading-6 text-gray-900 cursor-pointer"
                    >
                      Technology{" "}
                      <span className="inline-block ml-1">
                        <FaSortDown />
                      </span>
                    </a>
                    <ul
                      className={`relative mt-2 w-full bg-white shadow-lg p-0 rounded-lg transition-all duration-300 ${
                        isTechnologyOpen
                          ? "opacity-100"
                          : "hidden h-0 overflow-hidden"
                      }`}
                    >
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                        onClick={handleNavigationTechnology}
                        id="javascript"
                      >
                        <FaJs className="mr-2 text-yellow-500" />
                        JavaScript
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                        onClick={handleNavigationTechnology}
                        id="html"
                      >
                        <FaHtml5 className="mr-2 text-orange-600" />
                        HTML/CSS
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                        onClick={handleNavigationTechnology}
                        id="tailwind"
                      >
                        <SiTailwindcss className="mr-2 text-teal-500" />
                        Tailwind CSS
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                        onClick={handleNavigationTechnology}
                        id="react"
                      >
                        <FaReact className="mr-2 text-blue-500" />
                        React.js
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                        onClick={handleNavigationTechnology}
                        id="node"
                      >
                        <FaNodeJs className="mr-2 text-green-600" />
                        Node.js
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                        onClick={handleNavigationTechnology}
                        id="express"
                      >
                        <SiExpress className="mr-2 text-gray-800" />
                        Express.js
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                        onClick={handleNavigationTechnology}
                        id="database"
                      >
                        <FaDatabase className="mr-2 text-indigo-600" />
                        Database
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                        onClick={handleNavigationTechnology}
                        id="sql"
                      >
                        <img src={sql} className="mr-2 text-blue-700 h-5" />
                        SQL
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer flex items-center"
                        onClick={handleNavigationTechnology}
                        id="mongodb"
                      >
                        <SiMongodb className="mr-2 text-green-600" />
                        MongoDB
                      </li>
                    </ul>
                  </div>

                  {/* Services Dropdown */}
                  <div className="relative">
                    <a
                      onClick={handleToggleServices}
                      className="text-base font-semibold leading-6 text-gray-900 cursor-pointer"
                    >
                      Services{" "}
                      <span className="inline-block ml-1">
                        <FaSortDown />
                      </span>
                    </a>
                    <ul
                      className={`relative mt-2 w-full p-0 bg-white shadow-lg rounded-lg transition-all duration-300 ${
                        isServicesOpen
                          ? "opacity-100"
                          : "hidden h-0 overflow-hidden"
                      }`}
                    >
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationService}
                        id="ecommerce"
                      >
                        Ecommerce
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationService}
                        id="mobileapp"
                      >
                        MobileApp
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationService}
                        id="uiux"
                      >
                        UI/Ux
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationService}
                        id="digitalmarketing"
                      >
                        Digital marketing
                      </li>
                      {/* ======================== */}
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationService}
                        id="felet"
                      >
                        Fleet Management
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationService}
                        id="driver"
                      >
                        Driver & Vahicle Management
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationService}
                        id="load"
                      >
                        Load and Cargo Management
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationService}
                        id="billing"
                      >
                        Expance & Billing Management
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationService}
                        id="report"
                      >
                        Analytics & Reporting
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationService}
                        id="group"
                      >
                        Group Management
                      </li>
                      {/* ======================== */}
                    </ul>
                  </div>
                  {/* Industries  Dropdown*/}
                  <div className="relative">
                    <a
                      onClick={handleToggleIndustries}
                      className="text-base font-semibold leading-6 text-gray-900 cursor-pointer"
                    >
                      Industries{" "}
                      <span className="inline-block ml-1">
                        <FaSortDown />
                      </span>
                    </a>
                    <ul
                      className={`relative mt-2 w-full p-0 bg-white shadow-lg rounded-lg transition-all duration-300 ${
                        isIndustriesOpen
                          ? "opacity-100"
                          : "hidden h-0 overflow-hidden"
                      }`}
                    >
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationIndustries}
                        id="retail"
                      >
                        Retail
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationIndustries}
                        id="technology"
                      >
                        Technology
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationIndustries}
                        id="transportation"
                      >
                        Transportation
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationIndustries}
                        id="manufecture"
                      >
                        Manufecture
                      </li>
                    </ul>
                  </div>
                  {/* Solutions */}
                  <div className="relative">
                    <a
                      onClick={handleToggleSolution}
                      className="text-base font-semibold  leading-6 text-gray-900 cursor-pointer"
                    >
                      Solutions{" "}
                      <span className="inline-block ml-1">
                        <FaSortDown />
                      </span>
                    </a>
                    <ul
                      className={`relative mt-2 w-full p-0 bg-white shadow-lg rounded-lg transition-all duration-300 ${
                        isSolutionOpen
                          ? "opacity-100"
                          : "hidden h-0 overflow-hidden"
                      }`}
                    >
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationSolution}
                        id="secommerce"
                      >
                        Ecommerce
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationSolution}
                        id="smobileapp"
                      >
                        MobileApp
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationSolution}
                        id="webcms"
                      >
                        Web and CMS
                      </li>
                      {/* ===================== */}
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationSolution}
                        id="felet"
                      >
                        Fleet Management
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationSolution}
                        id="driver"
                      >
                        Driver & Vahicle Management
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationSolution}
                        id="load"
                      >
                        Load and Cargo Management
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationSolution}
                        id="billing"
                      >
                        Expance & Billing Management
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationSolution}
                        id="report"
                      >
                        Analytics & Reporting
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationSolution}
                        id="group"
                      >
                        Group Management
                      </li>
                      {/* ======================== */}
                    </ul>
                  </div>
                  {/* Product */}
                  {/* <div className="relative">
                    <a
                      onClick={handleToggleProduct}
                      className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
                    >
                      Product{" "}
                      <span className="inline-block ml-1">
                        <FaSortDown />
                      </span>
                    </a>
                    <ul
                      className={`relative mt-2 w-full p-0 bg-white shadow-lg rounded-lg transition-all duration-300 ${
                        isProductOpen
                          ? "opacity-100"
                          : "hidden h-0 overflow-hidden"
                      }`}
                    >
                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationProduct}
                        id="challan"
                      >
                        Challan Book
                      </li>

                      <li
                        className="px-4 py-2 hover:bg-gray-200 hover:border-b-2 hover:border-orange-500 m-2 cursor-pointer"
                        onClick={handleNavigationProduct}
                        id="gps"
                      >
                        GpsTracking System
                      </li>
                    </ul>
                  </div> */}
                  {/* contact Us */}
                  <div className="-mx-4 block rounded-lg px-3 py-2 text-base font-semibold  text-gray-900 hover:bg-gray-50">
                    <button
                      onClick={contact}
                      className=" text-gray-900 hover:bg-gray-50"
                    >
                      Contact Us
                    </button>
                  </div>
                  <div className="-mx-4 block  px-3 py-2 text-base font-semibold  text-gray-900 hover:bg-gray-50 border-t-2">
                    <button
                      onClick={handleClick}
                      className="  text-gray-900 hover:bg-gray-50 "
                    >
                      SignIn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
