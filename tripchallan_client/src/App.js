import "./App.css";

import React from "react";
import Login from "./component/signIn";
import SignUp from "./component/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
import Services from "./component/services";
import Contact from "./component/contact";
import Footer from "./component/footer";

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

function App() {
  return (
    <>
      {/* <Homepage /> */}
      <Router>
        <Header/>
        <Routes>
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<Homepage />} />

          <Route path="/Services" element={<Services />} />
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
          <Route path="/digitalmarketing" element={<Digital />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/gpssupplier" element={<Gpssupplier />} />
          <Route path="/mobileapp" element={<Mobileapp />} />
          <Route path="/taxiservices" element={<Taxiserv />} />
          <Route path="/ui-ux" element={<Ui />} />

          {/* Solutions */}
          <Route path="/secommerce" element={<SEcommerce />} />
          <Route path="/Smobileapp" element={<SMobile />} />
          <Route path="/webcms" element={<Web />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
