import React, { useEffect, useState } from "react";

const Carousel = ({ carouselImages }) => {
  const [carouselItem, setCarouselItem] = useState(0);
  const numCarouselItems = carouselImages.length;
  const changeToPrevious = () => {
    setCarouselItem(Math.max(carouselItem - 1, 0));
  };
  const changeToNext = () => {
    setCarouselItem(Math.min(carouselItem + 1, numCarouselItems - 1));
  };
  const changeToGivenItem = (i) => {
    setCarouselItem(i);
  };

  const indicatorClasses = (i) =>
    `w-8 h-1.5 transition duration-500 ${
      carouselItem == i ? "bg-white" : "bg-gray-500  scale-75"
    }`;
  const imagesContainerStyle = { width: `${numCarouselItems}00%` };
  const imgContainerstyle = (index) =>
    index == 0
      ? {
          width: `${100 / numCarouselItems}%`,
          marginLeft: `-${(carouselItem * 100) / numCarouselItems}%`,
        }
      : {
          width: `${100 / numCarouselItems}%`,
        };

  useEffect(() => {
    const id = window.setInterval(() => {
      setCarouselItem((carouselItem) => (carouselItem + 1) % numCarouselItems);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <div className="relative  h-[50vh] w-[100%] overflow-hidden m-auto ">
        <button
          onClick={changeToPrevious}
          className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-4 border-0 text-center font-bold bg-gray-500 opacity-30 hover:opacity-60 z-10"
        >
          <span>
            <i className="fa-solid fa-angle-left"></i>
          </span>
        </button>
        <button
          onClick={changeToNext}
          className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-4 border-0 text-center font-bold bg-gray-500 opacity-30 hover:opacity-60 z-10"
        >
          <span>
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </button>

        <div className="z-10 absolute left-0 right-0 bottom-0 flex justify-center gap-4 p-0 mb-4">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              className={indicatorClasses(i)}
              onClick={() => changeToGivenItem(i)}
            ></button>
          ))}
        </div>

        <div className="flex relative h-full" style={imagesContainerStyle}>
          {carouselImages.map((carouselImg, i) => (
            <div
              key={i}
              className="relative h-full transition-all brightness-50 "
              style={imgContainerstyle(i)}
            >
              <img
                src={carouselImg.src}
                className="block w-full h-full object-cover "
                alt="..."
              />
            </div>
          ))}
        </div>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-white">
          <h1 className="font-bold text-5xl mb-6">Fleet Management System</h1>
          <p className="font-medium text-base tracking-wider leading-relaxed">
            A fleet management system is a comprehensive tool designed to
            optimize the operation and oversight of vehicle fleets. It allows
            businesses to streamline everything from vehicle tracking and
            maintenance scheduling to fuel management and driver safety. By
            using real-time data, a fleet management system can monitor vehicle
            locations, analyze route efficiency, and improve asset utilization,
            reducing costs and increasing productivity. In
            short, a fleet management system provides the insights and control
            necessary to drive smarter, safer, and more efficient fleet
            operations.
          </p>
        </div>
      </div>
    </>
  );
};

export default Carousel;
