import React from "react";
import { useState } from "react";
// import { Facebook } from 'react-icons';
// import { IonIcon } from 'react-iicons';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Field, Label, Switch } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import img from "./images/logo.png";
import banner from "./images/banner.jpg";
import serv1 from "./images/gps.png";
import serv2 from "./images/alert.jpg";
import serv3 from "./images/Backup.jpg";
import serv4 from "./images/facility.jpeg";
import about from "./images/aboutus.png";
import contact from "./images/contact.jpg";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaMailchimp,
  FaTwitter,
  FaVoicemail,
  FaYoutube,
} from "react-icons/fa";
import {
  FaLocationDot,
  FaMapLocation,
  FaPhoenixSquadron,
  FaPhone,
} from "react-icons/fa6";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  return (
    <>
      <header className="sticky top-0 bg-white z-50 shadow-md">
        {" "}
        {/* Make header sticky */}
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img alt="Logo" src={img} className="h-20 w-auto" />
            </a>
          </div>
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
            <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </a>
            <a
              href="./About"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              About Us
            </a>
            <a
              href="./Services"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Services
            </a>
            <a
              href="./gallery"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Gallery
            </a>
            <a
              href="./contact"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact Us
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <span>
              <a
                href="./SignIn"
                className="text-sm font-bold leading-6 text-blue-600 border-2 border-sky-900 px-3 py-2 rounded-full"
              >
                SignIn
              </a>
              <button
                href="SignUp"
                className="text-sm font-bold leading-6 text-blue-600 ml-2 border px-3 py-2 bg-sky-900  rounded-full"
              >
                <a href="./signup" className="text-white">
                  SignUp
                </a>
              </button>
            </span>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img alt="Logo" src={img} className="h-8 w-auto" />
              </a>
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
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </a>
                  <a
                    href="./About"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About Us
                  </a>
                  <a
                    href="./Services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Services
                  </a>
                  <a
                    href="./Gallery"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Gallery
                  </a>
                  <a
                    href="./contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: `url('${banner}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust color and opacity as needed
        }}
        className="relative isolate h-96 md:h-[32rem] flex items-center justify-center overflow-hidden bg-cover bg-center w-full"
      >
        <div className="absolute inset-0 flex flex-col items-center text-center px-4 md:px-8 space-y-4 mt-24">
          <h1 className="text-3xl md:text-6xl font-mono font-bold text-white">
            About Us
          </h1>
          <p className="text-xl md:text-xl text-white max-w-2xl font-bold">
            <a href="/" className="text-white">
              Home
            </a>
          </p>
        </div>
      </div>

      {/* Section Start */}

      <div id="about_Us">
        {/* <div>
        <h2 className='flex text-4xl font-mono font-bold text-black text-center m-4 justify-center'>
            About Us
        </h2>
    </div> */}
        <div className="flex flex-col md:flex-row h-auto p-4 md:justify-center md:m-10">
          {/* Section for Text */}
          <div className="w-full md:w-2/5 p-2 pt-20 md:mr-2">
            <h3 className="text-2xl md:text-3xl text-red-600 font-bold pb-4">
              India Best Gps Tracking Services Company
            </h3>
            <p className="text-base md:text-xl pb-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            <button className="text-white font-bold bg-sky-900 py-2 px-4 rounded-full">
              Read More
            </button>
          </div>

          {/* Section for Image */}
          <div className="w-full md:w-2/5 p-2 md:ml-2">
            <img src={about} alt="About Page Images" className="w-full" />
          </div>
        </div>
      </div>

      {/* Footer Start */}
      <footer className="w-full flex flex-wrap p-6 m-auto justify-center ">
        <div className="w-full md:w-1/5  flex flex-col items-start m-1 p-2">
          <a href="/">
            <img src={img} className="w-48 mb-4" />
          </a>
          <p className="text-sm">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available.
          </p>
          <div className="flex mt-8">
            <a href="#">
              <FaFacebook className="text-2xl md:text-4xl mr-4 text-blue-800" />
            </a>
            <a href="#">
              <FaTwitter className="text-2xl md:text-4xl mr-4 text-indigo-900" />
            </a>
            <a href="#">
              <FaYoutube className="text-2xl md:text-4xl mr-4 text-red-600" />
            </a>
            <a href="#">
              <FaInstagram className="text-2xl md:text-4xl mr-4 text-pink-600" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/5  m-1 mt-3 p-2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">Quick Links</h2>
          <ul className="pt-4 text-lg space-y-2">
            <li>
              <a href="#" className="text-blue-700 font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="./about" className="text-blue-700 font-bold">
                About Us
              </a>
            </li>
            <li>
              <a href="./Services" className="text-blue-700 font-bold">
                Services
              </a>
            </li>
            <li>
              <a href="./Gallery" className="text-blue-700 font-bold">
                Gallery
              </a>
            </li>
            <li>
              <a href="./contact" className="text-blue-700 font-bold">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/5  m-1  mt-3 p-2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">Services</h2>
          <ul className="pt-4 text-lg space-y-2">
            <li>
              <a href="#" className="text-blue-700 font-bold">
                GpgTracking
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-bold">
                DataBackUp
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-bold">
                Security Alert
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-bold">
                24/7 Services
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 font-bold">
                Mobile App Access
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/5  m-1 p-2 text-center">
          <h2 className="text-2xl md:text-3xl font-bold pb-4">Reach Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.835086667974!2d85.83567077500946!3d20.257281081206035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a7255555555%3A0xb4da5c97fe15e672!2sEXPERT%20SOLUTIONS!5e1!3m2!1sen!2sin!4v1725531129388!5m2!1sen!2sin"
            style={{ border: 0 }}
            className="w-full h-64"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>

      <div className="p-2 bg-slate-700 text-center">
        <p className="text-lg text-white">
          Copyright ©{" "}
          <b>
            <a href="#" className="text-white">
              Expert Solution
            </a>
          </b>{" "}
          2024. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
