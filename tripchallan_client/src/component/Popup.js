import React, { useState } from "react";

function Popup({ onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [vehicleQuantity, setVehicleQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone, businessType, vehicleQuantity });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white rounded-lg w-full max-w-sm sm:max-w-md p-6 relative shadow-lg animate-fadeIn">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center">
          Welcome ! to <br/> Trip Management System
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            className="border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <select
            className="border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
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
              className="border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              placeholder="Enter Your Vehicle Quantity"
              value={vehicleQuantity}
              onChange={(e) => setVehicleQuantity(e.target.value)}
              required
            />
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 transition-colors w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
