import React, { useState } from "react";
import axios from "axios";

function Popup({ onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [vehicleQuantity, setVehicleQuantity] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Send OTP to phone
  const handleSendOtp = async () => {
    if (!email) {
      setError("Please enter a valid email address before sending OTP.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://expersolution.onrender.com/api/get",
        { email }
      );
      if (response.data) {
        setIsOtpSent(true);
      } else {
        setError(response.data.message || "Failed to send OTP.");
      }
    } catch (err) {
      setError(err.message || "Error occurred while sending OTP.");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://expersolution.onrender.com/api/validate",
        { email, otp }
      );

      if (response.data.success) {
        alert("OTP verified successfully!");
      } else {
        setError(response.data.message || "Invalid OTP.");
      }
    } catch (err) {
      setError(err.message || "Error occurred while verifying OTP.");
    } finally {
      setLoading(false);
    }
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    localStorage.setItem("formdone", true);
    try {
      const response = await axios.post(
        "https://expersolution.onrender.com/api/create",
        {
          name,
          email,
          phone,
          address,
          message,
          businessType,
          vehicleQuantity,
        }
      );

      if (response.data) {
        onSubmit({
          name,
          email,
          phone,
          address,
          message,
          businessType,
          vehicleQuantity,
        });
        onClose();
      } else {
        setError(response.data.message || "Failed to submit data.");
      }
    } catch (err) {
      setError(err.message || "Error occurred while submitting data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white rounded-lg w-full max-w-sm sm:max-w-md p-6 relative shadow-lg animate-fadeIn my-6 overflow-y-auto max-h-[80vh]">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center">
          Welcome! to <br /> EXPERT SOLUTIONS
        </h2>
        {error && (
          <p className="text-red-500 text-sm text-center mb-2">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 mb-2 transition-colors w-full"
            onClick={handleSendOtp}
            disabled={loading || isOtpSent}
          >
            {loading ? "Sending OTP..." : isOtpSent ? "OTP Sent" : "Send OTP"}
          </button>
          {isOtpSent && (
            <>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button
                type="button"
                className="bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 px-4 mb-2 transition-colors w-full"
                onClick={handleOtpSubmit}
                disabled={loading}
              >
                {loading ? "Verifying OTP..." : "Verify OTP"}
              </button>
            </>
          )}
          <input
            type="tel"
            className="border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <select
            className="border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            required
          >
            <option value="">Select Business Type</option>
            <option value="Company">Company</option>
            <option value="Transporter">Transporter</option>
            <option value="Travels">Travels</option>
            <option value="Individual">Individual</option>
          </select>
          {(businessType === "Transporter" || businessType === "Travels") && (
            <input
              type="number"
              className="border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              placeholder="Enter Your Vehicle Quantity"
              value={vehicleQuantity}
              onChange={(e) => setVehicleQuantity(e.target.value)}
              required
            />
          )}
          <textarea
            type="text"
            className="border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <textarea
            type="text"
            className="border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 px-4 transition-colors w-full"
            disabled={loading || !isOtpSent}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
