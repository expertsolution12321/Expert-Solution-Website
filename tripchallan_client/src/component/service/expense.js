import React from "react";
import expensebanner from "../images/expense-banner.jpg";
import billoverview from "../images/billoverview.jpg";
import billingkey from "../images/billingkey.png";
import bilbenifit from "../images/bilbenifits.png";
import expwork from "../images/expensework.png";
import { useNavigate } from "react-router-dom";
function Expense() {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };
  return (
    <div>
      {/* Banner */}
      <div className="bg-black p-4 sm:p-8 md:p-16 lg:p-24 relative flex flex-col items-center justify-center h-auto sm:h-[500px] lg:h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${expensebanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        />

        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold relative z-10 text-center m-2 p-2">
          <span className="text-white font-bold">
            Streamline Your Finances with Our{" "}
            <span className="text-orange-500">Expenses and Billing</span>{" "}
            Management System
          </span>
        </h1>

        <p className="flex flex-col sm:flex-row gap-2 text-center relative z-10 mt-4 text-white text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-8 lg:px-16">
          Our comprehensive Driver and Vehicle Management System is designed to
          streamline the entire process of managing your fleet and driver
          operations. This system provides a centralized platform to keep track
          of vehicle maintenance, driver assignments, compliance, and safety
          measures, helping you operate efficiently and safely.
        </p>

        <div className="relative z-10 mt-6 flex flex-wrap gap-4 justify-center">
          <button
            onClick={contact}
            className="text-white bg-orange-500 rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg"
          >
            Connect Now
          </button>
          <button
            onClick={contact}
            className="text-white bg-orange-500 rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg"
          >
            Explore Features
          </button>
        </div>
      </div>
      {/* Overview */}
      <section className="flex flex-col sm:flex-row p-4 sm:p-8 lg:p-16">
        <div className="left w-full sm:w-1/2 p-3">
          <h1 className="text-orange-600 font-bold text-3xl sm:text-4xl lg:text-5xl">
            Overview of Expenses and Billing Management
          </h1>
          <p className="text-[17px]  font-semibold mt-4 text-gray-700">
            The Expenses and Billing Management system is designed to simplify
            and streamline the financial processes that are crucial for any
            business, especially those with operational, transport, or
            fleet-related needs. This system provides a centralized platform to
            track and manage expenses, automate billing cycles, and enhance
            financial transparency, making it easier to control costs and
            maintain efficient cash flow.
          </p>
          <p className="text-[17px] font-semibold mt-4 text-gray-700">
            With features like real-time expense tracking, automated invoicing,
            and detailed reporting, businesses can monitor their finances
            accurately, reduce administrative tasks, and ensure that every
            transaction is accounted for. The system is user-friendly and
            integrates easily with accounting software, providing an all-in-one
            solution for managing both routine expenses and complex billing
            needs.
          </p>
        </div>

        <div className="right w-full sm:w-1/2 flex justify-center items-center">
          <img
            src={billoverview}
            alt="Driver and Vehicle Management System Overview"
            className="w-full h-auto rounded-md"
          />
        </div>
      </section>

      {/* keyfeatures */}
      <section className="flex flex-col sm:flex-row bg-indigo-600">
        <div className="right w-full sm:w-1/2 p-4 flex items-center justify-center">
          <img
            src={billingkey}
            alt="Driver and Vehicle Management System Overview"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="left w-full sm:w-1/2 p-6">
          <h1 className="text-white font-bold text-4xl mb-4">
            Key Features
            <hr className="border-t-2 border-white mt-2 mb-4" />
          </h1>

          <ul className="space-y-6 text-white">
            <li className=" list-disc">
              <div className="pl-4 ">
                <h4 className="text-xl  text-yellow-300 font-bold">
                  Expense Tracking
                </h4>
                <p className="text-white">
                  Explain how the system allows real-time tracking of all
                  business expenses, including fuel, repairs, lodging, meals,
                  and other operational costs.
                </p>
              </div>
            </li>
            <li className=" list-disc">
              <div className="pl-4 ">
                <h4 className="text-xl  text-yellow-300 font-bold">
                  Automated Billing
                </h4>
                <p className="text-white">
                  Describe the automation of billing cycles, invoicing, and
                  payment reminders to reduce manual work and ensure timely
                  collections.
                </p>
              </div>
            </li>
            <li className=" list-disc">
              <div className="pl-4 ">
                <h4 className="text-xl  text-yellow-300 font-bold">
                  Multi-Currency and Tax Support:
                </h4>
                <p className="text-white">
                  Mention the flexibility to handle multiple currencies and tax
                  regulations, making it ideal for businesses operating in
                  different regions.
                </p>
              </div>
            </li>
            <li className=" list-disc">
              <div className="pl-4 ">
                <h4 className="text-xl  text-yellow-300 font-bold">
                  Receipt Uploads and Documentation
                </h4>
                <p className="text-white">
                  Detail how users can upload receipts and related documentation
                  for better record-keeping and future reference.
                </p>
              </div>
            </li>
            <li className=" list-disc">
              <div className="pl-4 ">
                <h4 className="text-xl  text-yellow-300 font-bold">
                  Expense Categorization
                </h4>
                <p className="text-white">
                  Explain the categorization of expenses, which aids in
                  financial analysis and reporting by dividing costs into
                  categories like fuel, maintenance, etc.
                </p>
              </div>
            </li>
            <li className=" list-disc">
              <div className="pl-4 ">
                <h4 className="text-xl  text-yellow-300 font-bold">
                  Reports and Analytics
                </h4>
                <p className="text-white">
                  Outline the reporting and analytics tools for generating
                  insights into spending trends, helping businesses make
                  data-driven decisions.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Benifits */}
      <section className="h-[500px]">
        <img
          src={bilbenifit}
          alt="How the Driver and Vehicle Management System works"
          className="w-full h-[500px]"
        />
      </section>
      {/* WORK */}
      <section className="flex flex-col md:flex-row p-4">
        <div className="left w-full md:w-1/2 flex mr-4 items-center justify-center mt-2 ">
          <img
            src={expwork}
            alt="Expenses and Billing Management"
            className="w-full h-[500px] rounded-md"
          />
        </div>

        <div className="right w-full md:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-2 mt-2  md:mt-0">
          {[
            {
              title: "Tracking Expenses",
              description:
                "Step-by-step explanation of how expenses are logged in real-time, categorized, and associated with specific business activities or drivers.",
            },
            {
              title: "Billing Process",
              description:
                "Describe how invoices are generated automatically based on predefined rates or contractual agreements and sent to clients.",
            },
            {
              title: "Payment Tracking",
              description:
                "Outline the payment process, including reminders for outstanding payments and recording of received payments, ensuring a smooth billing lifecycle.",
            },
            {
              title: "Generating Reports",
              description:
                "Detail how users can generate custom reports to analyze expenses and billing data over specific periods or by category.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="card bg-gray-800  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                {item.title}
              </h3>
              <p className="mb-4 text-black">{item.description}</p>
              <button className="px-4 py-2 bg-orange-500 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors text-white">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Expense;
