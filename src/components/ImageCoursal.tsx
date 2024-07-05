import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Transparent from "./Transparent";
const content = [
  {
    image: "./Mohit_Nathan.jpg",
    name: "Mohit Nathan",
    city: "chennai",
    userimage: "./user1.jpg",
  },
  {
    image: "./Hirtvik_Arora.jpg",
    name: "Hirtvik Arora",
    city: "Hydrabad",
    userimage: "./user2.jpg",
  },
  {
    image: "./Gaurav_Kumar.jpg",
    name: "Gaurav Kumar",
    city: "Mumbai",
    userimage: "./user3.jpg",
  },
  {
    image: "./Ashwin.jpg",
    name: "Ashwin",
    city: "Hydrabad",
    userimage: "./user4.jpg",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handlePrevClick = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? content.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 1000);
  };

  const handleNextClick = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 500);
  };

  return (
    <div>
      <div className="relative w-full max-w-lg mx-auto">
        <img
          src={content[currentIndex].image}
          alt={`Slide ${currentIndex}`}
          className={`w-full h-auto rounded-xl transition-opacity duration-1000 ${
            fade ? "opacity-90" : "opacity-0"
          }`}
        />
        <div className="absolute left-0 right-0  bottom-0 text-black font-bold p-2 text-center bg-gradient-to-r from-lime-300 to-green-300 m-2 rounded-xl ">
          <Transparent
            name={content[currentIndex].name}
            img={content[currentIndex].userimage}
            address={content[currentIndex].city}
          />
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={handlePrevClick}
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 focus:outline-none"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextClick}
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 focus:outline-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
