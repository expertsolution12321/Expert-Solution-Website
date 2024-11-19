import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mt-4 text-sm md:text-base text-justify">
          Last Updated: <strong>November 19, 2024</strong>
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-indigo-600">Introduction</h2>
          <p className="text-gray-700 mt-2">
            Welcome to <strong>Expert Solution</strong>! Your privacy is
            important to us. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our
            application, <strong>Expert Solution</strong>. By using the app,
            you agree to the terms outlined here.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-indigo-600">
            Information We Collect
          </h2>
          <div className="mt-2">
            <h3 className="font-semibold text-gray-800">1. Personal Information</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Account Information: Name, email address, phone number, password.</li>
              <li>Travel Details: Trip origin, destination, travel dates, itinerary.</li>
              <li>Payment Details: Credit/debit card details, billing information (processed securely).</li>
              <li>Contact Preferences: Communication preferences (email, SMS, notifications).</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-800">2. Non-Personal Information</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Device Information: Device type, operating system, app version.</li>
              <li>Log Data: IP address, browser type, access times, and referring URLs.</li>
              <li>Location Data: Real-time location (GPS) for trip-related features.</li>
            </ul>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-indigo-600">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 mt-2">
            We use your data to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Facilitate trip bookings and manage itineraries.</li>
            <li>Provide customer support and respond to inquiries.</li>
            <li>Send transaction confirmations, reminders, and updates.</li>
            <li>Improve app performance through analytics.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-indigo-600">
            Sharing Your Information
          </h2>
          <p className="text-gray-700 mt-2">
            We do not sell your information. We share it only as necessary:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>With trip partners like airlines, hotels, and transport providers.</li>
            <li>With service providers like payment processors and analytics tools.</li>
            <li>To comply with legal obligations and enforce governmental requests.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-indigo-600">Your Rights</h2>
          <p className="text-gray-700 mt-2">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Access and update your personal data.</li>
            <li>Request data deletion where legally permissible.</li>
            <li>Opt-out of certain data uses (e.g., marketing).</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-indigo-600">
            Updates to This Privacy Policy
          </h2>
          <p className="text-gray-700 mt-2">
            We may update this policy periodically. We will notify you of
            significant changes through email or app notifications.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-indigo-600">Contact Us</h2>
          <p className="text-gray-700 mt-2">
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <ul className="list-none text-gray-700 mt-2 p-0">
            <li>
              <strong>Email:</strong>expertsolutionsbbsr@gmail.com
            </li>
            <li>
              <strong>Address:</strong> 78, Gautam Nagar, Bhubaneswar, Odisha 751014  <b className="text-red-500 ">or</b> EXPERT SOLUTIONS C,25, RAMKUND VIHAR, Samta Colony, Raipur, Chhattisgarh 492001
            </li>
            <li>
              <strong>Phone:</strong> +91 7509617777
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
