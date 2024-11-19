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
    }, 2000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <div className="relative  h-[70vh] w-[100%] overflow-hidden m-auto">
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
              className="relative h-full transition-all"
              style={imgContainerstyle(i)}
            >
              {/* Image */}
              <img
                src={carouselImg.src}
                className="block w-full h-full object-cover"
                alt={carouselImg.label}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
                <h5 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-2">
                  {carouselImg.label}
                </h5>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
                  {carouselImg.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
