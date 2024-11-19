import React from "react";
import service from "../images/service.jpg";

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
          <h1 className="text-3xl md:text-3xl font-mono font-bold text-white m-0">
            OUR PROJECT
          </h1>
          <p className="text-white">
            ( Trusted by Industry Leaders and Trailblazers )
          </p>
          <p className="text-center  text-white max-w-2xl ">
            We’re proud to serve a diverse range of clients who rely on our Expert Solutions to streamline their logistics and enhance their
            travel experiences. From small businesses to large corporations, our
            clients span various industries including logistics, transportation,
            corporate travel, and field services each with unique needs and
            challenges.
          </p>
        </div>
      </div>
    </>
  );
}
