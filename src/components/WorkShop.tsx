import { Check } from "lucide-react";
import React from "react";
import Button from "./Button";

const WorkShop = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center">
      <h1 className="text-white text-xl md:text-3xl text-center m-4">
        ChatGpt for Marketers Workshop
      </h1>
      <div className="border border-lime-400 rounded-xl max-w-3xl">
        <div
          className="flex flex-col items-center justify-center p-4"
          style={{ backgroundColor: "rgba(34, 197, 94, 0.3)" }} // bg-green-700 with 40% opacity
        >
          <h1 className="text-white text-xl md:text-3xl text-center m-4 mb-2 font-bold">
            $299
          </h1>
          <h2 className="text-white text-lg md:text-2xl text-center ">
            $999 (30% off)
          </h2>
          <div className="text-white text-md md:text-lg text-center font-light p-4">
            <h1>
              Register now and get our bestselling workshop at 100% that
              includes:
            </h1>
            <ul className="  p-4">
              <li className="flex flex-row gap-3">
                {" "}
                <Check />
                ₹3500 worth of course content on leveraging AI & ChatGPT as a
                marketer
              </li>
              <li className="flex flex-row gap-3">
                {" "}
                <Check />
                ₹2500 in bonuses to help you become an AI-powered marketer
              </li>
              <li className="flex flex-row gap-3">
                <Check />
                ₹800 access pass to a global community of marketers and
                AI-enthusiasts
              </li>
            </ul>
          </div>
          <Button gradient={false} />
        </div>
      </div>
    </div>
  );
};

export default WorkShop;
