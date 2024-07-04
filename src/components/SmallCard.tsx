import React from "react";
import { Calendar, Clock4, Timer } from "lucide-react";
interface SmallCardProps {
  date: string;
  time: string;
}

const SmallCard = ({ date, time }: SmallCardProps) => {
  return (
    <div className="w-full flex flex-row gap-5 items-center justify-center py-4">
      <div className=" px-6 py-1 text-md font-extralight text-center text-white  rounded-md  bg-lime-800 flex flex-row gap-2 items-center justify-center border border-lime-700 md:text-xl">
        <Calendar strokeWidth={1.5} size={20} /> <div>{date}</div>
      </div>
      <div className="px-6 py-1 text-md font-extralight text-center text-white  rounded-md  bg-lime-800 flex flex-row gap-2 items-center justify-center border border-lime-700 md:text-xl">
        <Clock4 strokeWidth={1.5} size={20} /> <div>{time}</div>
      </div>
    </div>
  );
};

export default SmallCard;
