import "./App.css";

import React from "react";
import Login from "./component/signIn";
import SignUp from "./component/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
// import Services from "./component/services";
import Contact from "./component/contact";
import Footer from "./component/footer";
import ServiceRoute from "./component/ServiceRoute";

// Company
import About from "./component/company/about";
import Social from "./component/company/socialmedia";
import CompanyCleint from "./component/company/CompanyCleint";

//Industries
import Manufec from "./component/Industries/manufecture";
import Retail from "./component/Industries/retail";
import Tech from "./component/Industries/technology";
import Trans from "./component/Industries/transport";

//Services
import Digital from "./component/service/Digitalmark";
import Ecommerce from "./component/service/Ecommerce";
import Gpssupplier from "./component/service/gpssupplier";
import Mobileapp from "./component/solutions/mobileapp";
import Taxiserv from "./component/service/Taxiservices";
import Ui from "./component/service/UI-UX";

// solutions
import SEcommerce from "./component/solutions/ecommerce";
import SMobile from "./component/solutions/mobileapp";
import Web from "./component/solutions/webcms";
import Header from "./component/header";
import Drivervehicle from "./component/service/Driver&vehicle";
import Expense from "./component/service/expense";
import Groupmng from "./component/service/groupmang";
import FleetManagement from "./component/service/FleetManagement";
import Load from "./component/service/load";
import Report from "./component/service/report";
import Footernew from "./component/Footernew";
import FooterNew from "./component/Footernew";
// Function to check if it's the user's first visit
function checkFirstVisit() {
  // Check if the 'firstVisit' cookie exists
  const firstVisitCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("firstVisit="));

  // If the cookie doesn't exist, it's the first visit
  if (!firstVisitCookie) {
    // Mark the visit with a cookie (1 year expiration)
    document.cookie =
      "firstVisit=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
    return true; // It's the first visit
  }

  // If the cookie exists, it's not the first visit
  return false;
}

// This function can be called when the page loads
window.onload = function () {
  if (checkFirstVisit()) {
    console.log("Welcome, first-time visitor!");
    // You can show a first-time user message or do anything special for first-time visitors
    alert("Welcome to our website! It looks like it’s your first visit.");
  } else {
    console.log("Welcome back!");
    // Handle returning visitors here (you could show different content)
  }
};
function App() {
  return (
    <>
      {/* <Homepage /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<Homepage />} />

          {/* <Route path="/Services" element={<Services />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path='/example'   element={<Example/>} /> */}
          <Route path="/footer" element={<Footer />} />

          {/* Company */}
          <Route path="/about" element={<About />} />
          <Route path="/client" element={<CompanyCleint />} />
          <Route path="/socialmedia" element={<Social />} />

          {/*  industries */}
          <Route path="/manufecture" element={<Manufec />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/technology" element={<Tech />} />
          <Route path="/transportation" element={<Trans />} />

          {/* Services */}
          <Route
            path="/digitalmarketing"
            element={<ServiceRoute element={<Digital />} />}
          />
          <Route
            path="/ecommerce"
            element={<ServiceRoute element={<Ecommerce />} />}
          />
          <Route
            path="/gpssupplier"
            element={<ServiceRoute element={<Gpssupplier />} />}
          />
          <Route
            path="/mobileapp"
            element={<ServiceRoute element={<Mobileapp />} />}
          />
          <Route
            path="/taxiservices"
            element={<ServiceRoute element={<Taxiserv />} />}
          />
          <Route path="/ui-ux" element={<ServiceRoute element={<Ui />} />} />
          <Route
            path="/fleetmanagement"
            element={<ServiceRoute element={<FleetManagement />} />}
          />
          <Route
            path="/driver"
            element={<ServiceRoute element={<Drivervehicle />} />}
          />
          <Route path="/load" element={<ServiceRoute element={<Load />} />} />
          <Route
            path="/expense"
            element={<ServiceRoute element={<Expense />} />}
          />
          <Route
            path="/analytics-report"
            element={<ServiceRoute element={<Report />} />}
          />
          <Route
            path="/groupmng"
            element={<ServiceRoute element={<Groupmng />} />}
          />
          {/* Solutions */}
          <Route path="/secommerce" element={<SEcommerce />} />
          <Route path="/Smobileapp" element={<SMobile />} />
          <Route path="/webcms" element={<Web />} />



          {/* <Route path="" element={<FooterNew />} /> */}
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
