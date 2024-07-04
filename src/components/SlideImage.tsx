import React from "react";
import ImageCarousel from "./ImageCoursal";

// Adjust the path as needed

const Carousel = () => {
  return (
    <div className=" flex  flex-col items-center justify-center px-5 gap-4 my-6">
      <h1 className="text-white text-2xl md:text-3xl text-center font-bold">
        DropShipping Potentials
      </h1>
      <ImageCarousel />
    </div>
  );
};

export default Carousel;
