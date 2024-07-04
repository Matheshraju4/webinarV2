import React from "react";
interface GetvalueCardProps {
  content: string;
  value: string;
}
const GetvalueCard = ({ content, value }: GetvalueCardProps) => {
  return (
    <div className=" max-w-3xl rounded-lg overflow-hidden border text-white border-lime-800 bg-gradient-to-r from-black  to-green-900 p-5 flex flex-row justify-left items-center gap-3">
      <div className="flex flex-col text-5xl gap-2 items-center justify-center font-bold p-2">
        {value}
      </div>

      <div className="text-md md:text-lg">{content}</div>
    </div>
  );
};

export default GetvalueCard;
