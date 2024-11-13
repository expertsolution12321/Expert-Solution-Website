import React from "react";
import grpbanner from "../images/group-banner.jpg";
import grpover from "../images/grpoverview.jpg";
import grpkey from "../images/grpkey.png";
import grpwork from "../images/grpwork.jpg";
import bgpatt from "../images/card-section.jpg";
import { useNavigate } from "react-router-dom";
function Groupmng() {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${bgpatt})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "fixed",
        backgroundSize: "30%",
      }}
    >
      {/* Banner */}
      <section className="bg-black p-4 sm:p-8 md:p-16 lg:p-24 relative flex flex-col items-center justify-center h-auto sm:h-[500px] lg:h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${grpbanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        />

        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold relative z-10 text-center m-2 p-2">
          <span className="text-white font-bold">
            Efficiently Organize and Empower Your Teams with Our{" "}
            <span className="text-orange-500">Group Management System</span>{" "}
          </span>
        </h1>

        <p className="flex flex-col sm:flex-row gap-2 text-center relative z-10 mt-4 text-white text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-8 lg:px-16">
          Our Group Management System streamlines team collaboration, task
          allocation, and communication, helping you manage projects seamlessly
          and ensure team accountability. With features like real-time updates,
          automated notifications, and robust analytics, you can create a
          structured workflow, keep everyone aligned with organizational goals,
          and drive productivity across all levels.
        </p>

        <div className="relative z-10 mt-6 flex flex-wrap gap-4 justify-center">
          <button
            onClick={contact}
            className="text-white bg-orange-500 rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg"
          >
            Connect Now
          </button>
        </div>
      </section>
      {/* OverView Of Group Management System */}
      <section className="flex flex-col sm:flex-row h-auto sm:h-[500px]">
        <div className="left w-full sm:w-1/2 p-3">
          <h1 className="text-orange-600 font-bold text-3xl sm:text-4xl">
            Overview
          </h1>
          <p className="text-base sm:text-lg font-semibold mt-2">
            Our Group Management System is designed to simplify team
            organization and enhance collaboration. This system provides an
            all-in-one platform to manage teams effectively, allowing you to
            assign tasks, track progress, and ensure that projects are completed
            on time. Whether managing small teams or large departments, our
            Group Management System helps create a seamless, transparent, and
            structured workflow that drives productivity.
          </p>
          <p className="text-base sm:text-lg font-semibold mt-2">
            With customizable team settings, automated updates, and integrated
            communication tools, our system is tailored to meet the dynamic
            needs of any organization. Through a centralized dashboard, team
            leads can monitor key metrics, receive alerts, and make data-driven
            decisions to optimize performance.
          </p>
        </div>
        <div className="right w-full sm:w-1/2 p-3 flex justify-center items-center mt-4 sm:mt-0">
          <img
            src={grpover}
            alt="Group Management System Overview"
            className="w-full h-auto max-h-[400px] sm:max-h-[500px] rounded-md"
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="flex flex-col sm:flex-row">
        <div className="right w-full sm:w-1/2 p-4 flex items-center justify-center">
          <img
            src={grpkey}
            alt="Driver and Vehicle Management System Overview"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="left w-full sm:w-1/2 p-6">
          <h1 className="text-orange-600 font-bold text-4xl mb-4">
            Key Features
            <hr className="border-t-2 border-orange-600 mt-2 mb-4" />
          </h1>

          <ul className="space-y-6">
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Group Creation and Structure
                </h4>
                <p className="text-gray-700">
                  Describe how users can create groups, assign a hierarchy, and
                  structure team roles, making it easy to define tasks and
                  accountability.
                </p>
              </div>
            </li>
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Task Assignment and Tracking
                </h4>
                <p className="text-gray-700">
                  Highlight the feature for assigning tasks to group members
                  with progress tracking, deadlines, and performance insights.
                </p>
              </div>
            </li>
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Automated Notifications and Reminders
                </h4>
                <p className="text-gray-700">
                  Outline the automated notification feature, which sends
                  reminders to members regarding meetings, task deadlines, and
                  updates, ensuring timely communication.
                </p>
              </div>
            </li>
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Real-Time Communication Tools:
                </h4>
                <p className="text-gray-700">
                  Describe tools like group messaging, video calls, and chat
                  functions that support real-time communication for instant
                  coordination and problem-solving.
                </p>
              </div>
            </li>
            <li className="list-disc">
              <div className="pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Group Analytics and Reports
                </h4>
                <p className="text-gray-700">
                  Describe the reporting tools available for leaders to view
                  group productivity metrics, member performance, task
                  completion rates, and communication effectiveness.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Work */}
      <section className="flex flex-col md:flex-row p-4">
        <div className="left w-full md:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-2  md:mt-0">
          {[
            {
              title: "Group Setup and User Roles",
              description:
                "Describe how admins can set up groups, assign specific roles to members, and outline group objectives.",
            },
            {
              title: "Task Assignment and Workflow",
              description:
                "Walk through the steps of assigning tasks within groups, tracking the workflow, and updating task status.",
            },
            {
              title: "Collaborative Workspace ",
              description:
                "Explain how members can use a collaborative workspace with real-time messaging, video, and resource sharing.",
            },
            {
              title: " Communication",
              description:
                "Explain how members can use a collaborative workspace with real-time messaging, video, and resource sharing.",
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
        <div className="right w-full md:w-1/2 flex ml-3 items-center justify-center mt-2 ">
          <img
            src={grpwork}
            alt="Expenses and Billing Management"
            className="w-full h-[500px] rounded-md"
          />
        </div>
      </section>
    </div>
  );
}

export default Groupmng;
