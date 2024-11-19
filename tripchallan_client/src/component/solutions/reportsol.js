import React from "react";
import { useNavigate } from "react-router-dom";
import reportban from "../images/reportbanner.jpeg";

const features = [
  {
    title: "Customizable Dashboards",
    description:
      "Create dashboards tailored to your needs, allowing stakeholders to focus on the metrics that matter most to their departments.",
    icon: "fas fa-tachometer-alt",
  },
  {
    title: "Real-time Analytics",
    description:
      "Stay ahead of the curve with live data updates, enabling immediate insights into performance and quick adjustments to strategy.",
    icon: "fas fa-sync-alt",
  },
  {
    title: "Automated Reports",
    description:
      "Save time with automated reporting, delivered directly to your inbox or dashboard at set intervals.",
    icon: "fas fa-chart-line",
  },
  {
    title: "Advanced Data Visualization",
    description:
      "Present complex data in easy-to-understand charts, graphs, and heatmaps to communicate insights effectively to all teams.",
    icon: "fas fa-chart-pie",
  },
  {
    title: "Predictive Analytics",
    description:
      "Leverage machine learning algorithms to predict future trends and outcomes, helping you make proactive decisions.",
    icon: "fas fa-brain",
  },
];

const benefits = [
  {
    title: "Informed Decision-Making",
    description:
      "Access reliable, data-driven insights to guide decisions, reduce risks, and optimize business strategies.",
    icon: "fas fa-lightbulb",
  },
  {
    title: "Increased Efficiency",
    description:
      "Streamline workflows with automated data collection and reporting, saving time for more critical business activities.",
    icon: "fas fa-cogs",
  },
  {
    title: "Enhanced Collaboration",
    description:
      "With a shared platform for accessing reports and data, teams can work together more effectively to meet objectives.",
    icon: "fas fa-users",
  },
  {
    title: "Actionable Insights",
    description:
      "Move beyond raw data—our solution helps translate information into actionable insights that drive measurable results.",
    icon: "fas fa-chart-line",
  },
];

const industries = [
  {
    title: "E-commerce & Retail",
    description:
      "Track customer behavior, sales performance, and inventory levels to improve conversion rates and optimize supply chains.",
    icon: "fas fa-shopping-cart",
  },
  {
    title: "Healthcare",
    description:
      "Analyze patient data, clinical performance, and operational metrics to enhance care quality and reduce costs.",
    icon: "fas fa-hospital",
  },
  {
    title: "Finance",
    description:
      "Monitor key financial metrics, forecast trends, and ensure compliance with real-time insights into financial health.",
    icon: "fas fa-dollar-sign",
  },
  {
    title: "Manufacturing",
    description:
      "Leverage operational data to improve production processes, reduce downtime, and ensure quality control.",
    icon: "fas fa-industry",
  },
  {
    title: "Marketing",
    description:
      "Measure campaign performance, customer engagement, and ROI to make data-driven marketing decisions.",
    icon: "fas fa-bullhorn",
  },
];

function Reportsol() {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };
  return (
    <>
      {/* Banner */}
      <section
        style={{
          backgroundImage: `url('${reportban}')`,
          backgroundSize: "cover",
          backgroundPosition: "center", // Center the image to keep the focus
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker for better text contrast
          backgroundBlendMode: "multiply",
        }}
        className="h-[450px] p-6 flex flex-col justify-center items-center text-center space-y-4"
      >
        <h1 className="text-5xl md:text-5xl text-white leading-tight tracking-wide drop-shadow-lg font-bold">
          Transform Data Into Actionable Insights{" "}
        </h1>

        <p className="text-white text-lg md:text-xl mt-3 drop-shadow-md">
          Unlock the power of your data with our comprehensive analytics and
          reporting solutions. Designed for businesses looking to optimize
          performance, track key metrics, and drive decision-making, our
          solutions provide deep insights into customer behavior, operational
          efficiency, and business growth. With real-time reporting, intuitive
          dashboards, and data visualization, we make data accessible and
          actionable for every level of your organization.
        </p>

        <button
          onClick={contact}
          className="mt-4 px-3 py-2 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition-all"
        >
          Start Free Trial
        </button>
      </section>
      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Powerful Features to Drive Success
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <div className="flex justify-center mb-6">
                  <i className={`${feature.icon} text-4xl text-blue-500`}></i>
                </div>
                <h3 className="text-xl font-medium text-gray-800 text-center mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benifits */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Why Choose Our Analytics & Reporting Solution?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <div className="flex justify-center mb-6">
                  <i className={`${benefit.icon} text-4xl text-blue-500`}></i>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Industry Specific */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Industry-Specific Insights
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <div className="w-24 h-24 flex items-center justify-center bg-blue-500 rounded-full mb-6">
                  <i className={`${industry.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Reportsol;
