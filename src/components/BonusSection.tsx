import React from "react";
import BonusCard from "./BonusCard";
import Button from "./Button";

const BonusSection = () => {
  const content = [
    { content: "Exclusive Supplier List", price: "" },
    {
      content: "80+ lakhs sales every product using Product Research Guide",
      price: "",
    },
    { content: "Private Whatsapp Group Access", price: "" },
    {
      content: "50+ lakhs sales every month Pre-designed Marketing Templates",
      price: "",
    },
    { content: "Lifetime Access to Webinar Recording", price: "" },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="border border-lime-400 rounded-md  md:w-full p-4 "
        style={{ backgroundColor: "rgba(34, 197, 94, 0.3)" }}
      >
        <h1 className="text-white text-xl md:text-3xl text-center font-bold">
          And also enjoy the Bonuses worth ₹8000:
        </h1>
        <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 md:gap-4 md:p-4 w-full">
          {content.map((content, index) => (
            <BonusCard key={index} text={content.content} />
          ))}
        </div>

        <Button gradient={false} navigateTo="/userInfo" />
      </div>
    </div>
  );
};

export default BonusSection;
