import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({
  gradient,
  navigateTo,
}: {
  gradient: boolean;
  navigateTo: string;
}) => {
  let buttonClass = "";
  const navigate = useNavigate();
  switch (gradient) {
    case true:
      buttonClass =
        "bg-gradient-to-r from-lime-400 to-green-600 text-white rounded-full px-16 font-bold text-shadow-2xl py-3 text-lg md:text-2xl";
      break;

    default:
      buttonClass =
        "bg-white   py-3 text-lg md:text-2xl  text-black rounded-full px-16 font-normal";
      break;
  }
  return (
    <div className="flex flex-col w-full items-center justify-center ">
      <button
        onClick={() => {
          navigate(navigateTo);
        }}
        className={buttonClass}
      >
        Register Now
      </button>
    </div>
  );
};

export default Button;
