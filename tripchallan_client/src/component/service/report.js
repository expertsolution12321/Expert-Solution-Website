import React from "react";
import reportban from "../images/reportbanner.jpeg";
import rptkey from "../images/reportkey.jpg";
import bgimg from "../images/card-section.jpg"
import { useNavigate } from "react-router-dom";
import { FaChartBar, FaChartLine, FaLaptopCode } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { useState } from "react";
function Report() {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{
        backgroundImage:`url(${bgimg})`,
        backgroundRepeat:"repeat",
        backgroundPosition:"fixed",
        backgroundSize:"30%"
        }}>
      {/* banner Page */}
      <div className="bg-black p-8 sm:p-16 lg:p-32 xl:p-44 relative flex flex-col items-center justify-center  lg:h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${reportban})` }}
        />

        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10 text-center m-2 p-2">
          <span className="text-white font-bold">
            <span className="text-orange-500">Empower Your Business </span>
            with Data-Driven Insights
          </span>
        </h1>

        <p className="flex flex-col sm:flex-row gap-4 text-center relative z-10 mt-4 text-white text-xl">
          Uncover key trends, track performance, and make informed decisions
          with our comprehensive Analytics & Reporting tools. Visualize
          real-time data, customize dashboards, and gain valuable insights to
          drive growth and optimize your strategies effectively.
        </p>

        {/* Call to Action Button */}
        <div className="text-center relative z-10 mt-6">
          <button
            onClick={contact}
            className="text-white bg-orange-500 hover:bg-orange-600 rounded-full px-6 py-2 text-sm sm:text-base md:text-lg"
          >
            Connect Now
          </button>
        </div>
      </div>
      {/* Overview */}
      <section className="text-center p-6">
        <h2 className="font-bold mb-4">Overview</h2>
        <p className="text-lg mb-6">
          Analytics & Reporting provides a powerful framework for tracking,
          analyzing, and understanding key metrics that influence business
          performance. By gathering data on customer behavior, operational
          trends, and financial outcomes, Analytics & Reporting.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-xs shadow-md flex flex-col items-center">
            <FaChartBar className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gain Visibility</h3>
            <p className="text-gray-600 text-sm mb-4">
              Understand how users interact with products, services, and online
              platforms to identify strengths and areas for improvement.
            </p>
            <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Read More
            </button>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-xs shadow-md flex flex-col items-center">
            <FaLaptopCode className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Make Data-Driven Decisions
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Use insights from data to guide strategic actions, optimize
              resources, and enhance customer satisfaction.
            </p>
            <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Read More
            </button>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-xs shadow-md flex flex-col items-center">
            <FaCheckToSlot className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Measure Success</h3>
            <p className="text-gray-600 text-sm mb-4">
              Track KPIs and metrics to monitor the effectiveness of strategies
              and campaigns, allowing for timely adjustments to maximize impact.
            </p>
            <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Read More
            </button>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-xs shadow-md flex flex-col items-center">
            <FaChartLine className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Identify Trends and Patterns
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Analyze historical data to uncover patterns that can help predict
              future outcomes, assisting in proactive planning and forecasting.
            </p>
            <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Read More
            </button>
          </div>
        </div>
      </section>
      {/* KeyPoints */}
      <section className="p-4 ">
        <h2 className="font-bold text-blue-950 text-2xl md:text-3xl mb-4">
          Key Metrics and KPIs
        </h2>
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <ul className="w-full lg:w-1/2 space-y-6 mt-5 list-disc ">
            <li>
              <h4 className="text-xl font-semibold text-gray-800">
                Traffic and Usage Reports
              </h4>
              <p className="text-gray-600">
                Details on page views, user sessions, and engagement levels.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-800">
                Conversion Rates
              </h4>
              <p className="text-gray-600">
                Insights on user actions and goal completion.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-800">
                Revenue & Sales Metrics
              </h4>
              <p className="text-gray-600">
                Breakdown of revenue generation, sales trends, and
                profitability.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-800">
                Customer Behavior Analytics
              </h4>
              <p className="text-gray-600">
                Data on user journey, bounce rate, and time spent.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-800">
              Customer Satisfaction Score (CSAT):
              </h4>
              <p className="text-gray-600">
              Collected through surveys, CSAT gauges user satisfaction based on a specific experience.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-800">
              Net Promoter Score (NPS):
              </h4>
              <p className="text-gray-600">
              NPS measures user loyalty by asking how likely users are to recommend the product to others.
              </p>
            </li>
          </ul>
          <img
            src={rptkey}
            alt="Key Metrics and KPIs"
            className="w-full lg:w-1/2 rounded-md shadow-md"
          />
        </div>
      </section>
      {/* FAQ */}
      <section className="p-6">
        <h2 className="font-bold text-blue-950 text-2xl md:text-3xl mb-4">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-4">
          {[
            {
              question:
                "What are KPIs and why are they important in analytics?",
              answer:
                "KPIs (Key Performance Indicators) are measurable values that help businesses understand how effectively they are achieving their goals. KPIs are crucial because they provide insights into performance, guide decision-making, and help track progress over time.",
            },
            {
              question:
                "How do I track customer behavior with analytics tools?",
              answer:
                "Analytics tools can track customer behavior by monitoring actions such as page views, time spent on pages, bounce rates, click-through rates, and conversion rates. These metrics help businesses identify patterns in user engagement and improve customer experience.",
            },
            {
              question: "How do I identify trends and patterns in my data?",
              answer:
                "Identifying trends and patterns involves analyzing historical data over time to find recurring behaviors or outcomes. Advanced tools like data visualization (charts, graphs) and statistical models can help you spot these patterns, allowing for better forecasting and strategic decisions.",
            },
            {
              question: "Can I generate customized reports in analytics tools?",
              answer:
                "Yes, most analytics platforms allow users to create customized reports based on specific KPIs, time frames, and other relevant criteria. These reports can be tailored to track the most important metrics for your business, making it easier to monitor performance.",
            },
            {
              question:
                "What’s the difference between traffic reports and conversion reports?",
              answer:
                "Traffic reports focus on the volume of visitors, including page views, sessions, and sources of traffic. Conversion reports, on the other hand, track how many visitors complete a desired action, such as making a purchase or signing up for a service. Both types of reports are essential for understanding different aspects of user behavior.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full p-5 text-left font-semibold text-xl text-gray-800 flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span className="ml-2 text-gray-600">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-5 text-gray-600 border-t">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Report;
