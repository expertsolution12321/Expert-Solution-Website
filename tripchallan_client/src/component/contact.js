import { useState } from "react";
import axios from "axios";
import contact from "./images/contact.jpg";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
const formSubmitted = localStorage.getItem('formdone')
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
  const [businessType, setBusinessType] = useState("");
  const [vehicleQuantity, setVehicleQuantity] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState({});

// Form Validation

const validateForm = () => {
  const newErrors = {};

  if (!name) newErrors.name = "First name is required.";
  if (!lname) newErrors.lname = "Last name is required.";
  if (!email) {
    newErrors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = "Email is invalid.";
  }
  if (!phone) newErrors.phone = "Phone number is required.";
  else if (!/^\d{10}$/.test(phone)) {
    newErrors.phone = "Phone number must be 10 digits.";
  }
  if (!message) newErrors.message = "Message is required.";
  if (!address) newErrors.address = "Address is required.";
  if (businessType === "")
    newErrors.businessType = "Please select a business type.";

  if (businessType === "Transporter" || businessType === "Travels") {
    if (!vehicleQuantity)
      newErrors.vehicleQuantity = "Please enter the vehicle quantity.";
  }

  setError(newErrors);

  // Return true if no errors
  return Object.keys(newErrors).length === 0;
};

// ===================================
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
      alert(error.response.data.message);
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
      if (response.status === 200) {
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

    if (validateForm()) {
      // Proceed with form submission (e.g., API call)
      alert("Form submitted successfully!");
    }
  };



  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  // Reset
  const handleReset = async () => {
    setName("");
    setLname("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMessage("");
  };

  const call = () => {
    window.open("tel:+917509617777");
  };
  const emailcontact = () => {
    window.open("mailto:expertsolutionbbsr@gmail.com");
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
          <div className="pb-9">
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
          <div className="flex flex-col space-y-8 mt-11">
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
        {formSubmitted ?<p className="text-green-500 font-semibold text-lg">ThankYou For Your Response</p>:""}
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
                        placeholder="Enter First Name"
                        onChange={(e) => setName(e.target.value)}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 ${
                          error.name ? "border-red-500" : ""
                        }`}
                      />
                      {error.name && (
                        <p className="text-red-500 text-sm">{error.name}</p>
                      )}
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
                        placeholder="Enter Last Name"
                        onChange={(e) => setLname(e.target.value)}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 ${
                          error.lname ? "border-red-500" : ""
                        }`}
                      />
                      {error.lname && (
                        <p className="text-red-500 text-sm">{error.lname}</p>
                      )}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 ${
                          error.email ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your email"
                        required
                      />
                      {error.email && (
                        <p className="text-red-500 text-sm">{error.email}</p>
                      )}
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
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
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
                        placeholder="Enter Phone Number"
                        onChange={(e) => setPhone(e.target.value)}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 ${
                          error.phone ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {error.phone && (
                        <p className="text-red-500 text-sm">{error.phone}</p>
                      )}
                    </div>
                  </div>
                  {/* =============================== */}
                  <div className="sm:col-span-full">
                    <label
                      htmlFor="Business Type"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Business Type
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className={`block w-full rounded-md py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 mt-2 ${
                        error.businessType ? "border-red-500" : ""
                      }`}
                    >
                      <option value="">Select Business Type</option>
                      <option value="Company">Company</option>
                      <option value="Transporter">Transporter</option>
                      <option value="Travels">Travels</option>
                      <option value="Individual">Individual</option>
                    </select>
                    {error.businessType && (
                      <p className="text-red-500 text-sm">
                        {error.businessType}
                      </p>
                    )}
                  </div>

                  {(businessType === "Transporter" ||
                    businessType === "Travels") && (
                    <div className="sm:col-span-full">
                      <input
                        type="number"
                        value={vehicleQuantity}
                        onChange={(e) => setVehicleQuantity(e.target.value)}
                        placeholder="Enter Vehicle Quantity"
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 ${
                          error.vehicleQuantity ? "border-red-500" : ""
                        }`}
                      />
                      {error.vehicleQuantity && (
                        <p className="text-red-500 text-sm">
                          {error.vehicleQuantity}
                        </p>
                      )}
                    </div>
                  )}
                  {/* =============================== */}
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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 ${
                          error.message ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your message"
                      />
                      {error.message && (
                        <p className="text-red-500 text-sm">{error.message}</p>
                      )}
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
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 ${
                          error.address ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your address"
                      />
                      {error.address && (
                        <p className="text-red-500 text-sm">{error.address}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-4">
                <button
                  type="reset"
                  onClick={handleReset}
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
