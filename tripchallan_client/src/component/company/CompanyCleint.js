import React from "react";
import service from "../images/service.jpg";
//import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import clientPage1 from "../images/img1.png";
import clientPage2 from "../images/img5.png";
import clientPage3 from "../images/img5.png";
import clientPage4 from "../images/img1.png";
import clientPage5 from "../images/img5.png";

import clientPage6 from "../images/img1.png";
import clientPage7 from "../images/img1.png";
import clientPage8 from "../images/img5.png";
import clientPage9 from "../images/img1.png";
import clientPage10 from "../images/img5.png";
export default function Client() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${service}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        className="relative isolate h-96 md:h-[32rem] flex items-center justify-center overflow-hidden bg-cover bg-center w-full"
      >
        <div className="absolute inset-0 flex flex-col items-center text-center px-4 md:px-8 space-y-4 mt-24">
          <h1 className="text-3xl md:text-3xl font-mono font-bold text-white">
            OUR PROJECT
          </h1>
          <p className="text-center  text-white max-w-2xl ">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available.
          </p>
        </div>
      </div>
    </>
  );
}
