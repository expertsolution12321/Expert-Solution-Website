import { useState } from "react";
import axios from "axios";
import contact from "./images/contact.jpg";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

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

export default function Contact() {
  const [otp, setOtp] = useState("");
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpResponse, setOtpResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Send OTP
  const handleVerifyEmail = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://expersolution.onrender.com/api/get",
        { email }
      );
      if (response.status === 200) {
        setOtpSent(true);
        setOtpResponse(response.data.message);
        setIsOtpVisible(true);
        alert("OTP sent successfully!");
      } else {
        alert("Failed to send OTP.");
      }
    } catch (error) {
      alert("Error sending OTP.");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://expersolution.onrender.com/api/validate",
        { otp, email }
      );
      if (response.status === 200 && response.data.success) {
        setOtpVerified(true);
        alert("OTP Verified!");
      } else {
        alert("Invalid OTP. Try again.");
      }
    } catch (error) {
      alert("Error verifying OTP.");
    } finally {
      setLoading(false);
    }
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpVerified) {
      alert("Please verify the OTP first.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://expersolution.onrender.com/api/create",
        {
          firstName: name,
          lastName: lname,
          email: email,
          phoneNumber: phone,
          address: address,
          message: message,
        }
      );
      if (response.status === 200) {
        setSuccessMessage("Form submitted successfully!");
        alert("Form submitted successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form.");
    } finally {
      setLoading(false);
    }
  };
  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
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
          backgroundColor: "rgba(0, 0, 0, 0.5)",
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
              A Expert Solutions is a digital solution designed to streamline
              and automate the process of managing travel and transportation
              logistics.
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
                href="mailto:expertsolutionsbbsr@gmail.com"
                className="font-bold w-72 md:w-80 text-white hover:underline"
              >
                expertsolutionsbbsr@gmail.com
              </a>
            </div>

            {/* Location Section */}
            {addresses.map((address, index) => (
              <div
                key={index}
                className="inline-flex space-x-2 items-center p-4 md:p-6 w-full md:w-auto bg-[#111a51] rounded-md shadow-lg shadow-blue-500/50"
              >
                <FaLocationDot className="text-xl md:text-2xl w-8 md:w-10 text-white" />
                <button
                  onClick={() => handleButtonClick(address.mapLink)}
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
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
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

                  <div className="sm:col-span-3 ">
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
                  {/* Email Section */}
                  <div className="sm:col-span-full">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2 flex items-center space-x-2">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                        required
                      />
                      <button
                        onClick={handleVerifyEmail}
                        className="bg-indigo-600 text-white px-4 py-1 rounded-md focus:outline-none hover:bg-indigo-700"
                      >
                        Send OTP
                      </button>
                    </div>

                    {isOtpVisible && !otpVerified && (
                      <div className="mt-4">
                        <label
                          htmlFor="otp"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          OTP
                        </label>
                        <div className="mt-2 flex items-center space-x-2">
                          <input
                            type="text"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter OTP"
                            required
                          />
                          <button
                            onClick={handleVerifyOtp}
                            className="bg-green-600 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-green-700"
                          >
                            Verify OTP
                          </button>
                        </div>
                      </div>
                    )}

                    {otpVerified && (
                      <div className="mt-4">
                        <p className="text-sm text-green-600">
                          OTP Verified! You can now proceed.
                        </p>
                      </div>
                    )}
                  </div>
                  {/* Other Fields */}
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
                  {/* Other Fields */}
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
