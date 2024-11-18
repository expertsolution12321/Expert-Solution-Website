import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import expensesol from "../images/expense-banner.jpg";
import {
  FaRegMoneyBillAlt,
  FaFileInvoiceDollar,
  FaGlobe,
  FaChartBar,
  FaCheckCircle,
  FaPlug,
} from "react-icons/fa";
import { FaFileInvoice, FaEye, FaChartLine } from "react-icons/fa";
const features = [
  {
    icon: <FaRegMoneyBillAlt className="text-orange-500 text-4xl mb-4" />,
    title: "Expense Tracking",
    description:
      "Record and categorize expenses in real-time to stay organized and in control.",
  },
  {
    icon: <FaFileInvoiceDollar className="text-blue-700 text-4xl mb-4" />,
    title: "Automated Billing",
    description:
      "Generate invoices effortlessly and reduce manual errors for faster billing.",
  },
  {
    icon: <FaGlobe className="text-sky-500 text-4xl mb-4" />,
    title: "Multi-Currency Support",
    description:
      "Handle transactions globally with built-in currency conversion tools.",
  },
  {
    icon: <FaChartBar className="text-green-500 text-4xl mb-4" />,
    title: "Customizable Reports",
    description:
      "Gain actionable insights with detailed, exportable reports tailored to your needs.",
  },
  {
    icon: <FaCheckCircle className="text-red-600 text-4xl mb-4" />,
    title: "Approval Workflows",
    description:
      "Streamline approval processes to ensure faster and more efficient expense processing.",
  },
  {
    icon: <FaPlug className="text-purple-600 text-4xl mb-4" />,
    title: "Integration",
    description:
      "Seamlessly integrate with accounting software and payment gateways for a unified workflow.",
  },
];
const howItWorks = [
  {
    icon: <FaRegMoneyBillAlt className="text-green-500 text-4xl mb-4 " />,
    title: "Track Expenses",
    description: "Upload receipts, categorize expenses, and log payments.",
  },
  {
    icon: <FaFileInvoice className="text-blue-500 text-4xl mb-4" />,
    title: "Generate Bills",
    description: "Automatically generate invoices and send them to clients.",
  },
  {
    icon: <FaEye className="text-orange-500 text-4xl mb-4" />,
    title: "Monitor & Approve",
    description: "Review expenses and approvals in one dashboard.",
  },
  {
    icon: <FaChartLine className="text-purple-500 text-4xl mb-4" />,
    title: "Get Insights",
    description: "Analyze trends with customizable reports.",
  },
];

function Expensesol() {
  const navigate = useNavigate();
  const conatct = () => {
    navigate("/contact");
  };

  const [isAnnual, setIsAnnual] = useState(false);
  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  };

  const pricingPlans = [
    {
      title: "Basic Plan",
      description: "Perfect for freelancers",
      monthlyPrice: 10,
      annualPrice: 100, // Annual price is discounted
      features: ["Expense Tracking", "Basic Reporting"],
    },
    {
      title: "Professional Plan",
      description: "For growing businesses",
      monthlyPrice: 30,
      annualPrice: 300, // Annual price is discounted
      features: [
        "Advanced Expense Tracking",
        "Comprehensive Reporting",
        "Customizable Dashboards",
      ],
    },
    {
      title: "Enterprise Plan",
      description: "For large organizations",
      monthlyPrice: 60,
      annualPrice: 600, // Annual price is discounted
      features: [
        "All Features of Professional Plan",
        "Priority Support",
        "Dedicated Account Manager",
      ],
    },
  ];
  return (
    <>
      <div>
        {/* banner */}
        <section
          style={{
            backgroundImage: `url('${expensesol}')`,
            backgroundSize: "cover",
            backgroundPosition: "center", // Center the image to keep the focus
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker for better text contrast
            backgroundBlendMode: "multiply",
          }}
          className="h-[450px] p-6 flex flex-col justify-center items-center text-center space-y-4"
        >
          <h1 className="text-5xl md:text-5xl text-white leading-tight tracking-wide drop-shadow-lg font-bold">
            Simplify <br />
            <span className="text-orange-500">
              Expense Management and Billing <br />
            </span>{" "}
            with One Solution
          </h1>

          <p className="text-white text-lg md:text-xl mt-3 drop-shadow-md">
            Revolutionize your shipping operations with smart tools that ensure
            maximum efficiency, optimized load capacity, and reduced costs.
            Manage cargo like never before with real-time tracking and
            intelligent insights.
          </p>

          <button
            onClick={conatct}
            className="mt-4 px-3 py-2 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition-all"
          >
            Start Free Trial
          </button>
        </section>
        {/* card */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl text-gray-800 mb-8 font-bold">
              Powerful Features for Expense and Billing Efficiency
            </h2>
            {/* 3x2 Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition shadow-gray-300"
                >
                  <div className="flex justify-center items-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-medium text-gray-700 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Work */}
        <div className=" py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl text-gray-800 mb-8 font-bold">
              How It Works
            </h2>
            {/* Grid for cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="p-6  rounded-lg transition-all">
                  <div className="flex justify-center items-center mb-2">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-medium text-gray-700 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Pricing plan */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl text-gray-800 mb-8 font-bold">
              Our Pricing Plans
            </h2>

            {/* Toggle for monthly/annual pricing */}
            <div className="flex justify-center mb-8">
              <button
                className={`px-6 py-2 rounded-l-lg ${
                  !isAnnual
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={handleToggle}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-r-lg ${
                  isAnnual
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={handleToggle}
              >
                Annual
              </button>
            </div>

            {/* Pricing Plans */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <h3 className="text-2xl font-bold text-gray-700 mb-4">
                    {plan.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{plan.description}</p>

                  {/* Price based on toggle */}
                  <div className="text-3xl font-semibold text-gray-800 mb-4">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    <span className="text-lg text-gray-400">
                      {isAnnual ? "/year" : "/month"}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="list-disc list-inside mb-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-600 transition">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expensesol;
