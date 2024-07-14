import { ChevronDown, ChevronUp, Dot, Notebook } from "lucide-react";
import { useState } from "react";

interface WhatYoulearnCardProps {
  heading: string;
  subheading: string;
  liarray: string[];
}
const WhatYoulearnCard = (content: WhatYoulearnCardProps) => {
  const [direction, setdirection] = useState(false);

  return (
    <div className="border border-lime-800 rounded-xl max-w-3xl mt-2 overflow-hidden">
      <div className="w-full  bg-gradient-to-r from-green-900  to-black text-white py-4 text-lg p-2 flex flex-row  gap-3 items-center justify-between font-normal">
        <div className="flex flex-row gap-2 items-center justify-center">
          <div className="p-2 bg-lime-300 rounded-xl">
            <Notebook color="black" />
          </div>

          <div className="text-bold">{content.heading}</div>
        </div>

        {direction ? (
          <ChevronUp onClick={() => setdirection(!direction)} />
        ) : (
          <ChevronDown onClick={() => setdirection(!direction)} />
        )}
      </div>
      {direction && (
        <>
          <div className=" text-gray-100 text-sm  flex flex-col items-center justify-start p-4 pb-0 font-normal">
            {content.subheading}
          </div>

          <div className="p-2 flex flex-col  justify-start text-sm text-gray-100 font-thin  ">
            <ul>
              {content.liarray.map((li, index) => (
                <li className="flex flex-row gap-2" key={index}>
                  <Dot />
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default WhatYoulearnCard;
