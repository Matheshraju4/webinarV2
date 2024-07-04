import { SquareCheckBig } from "lucide-react";
const BonusCard = ({ text }: { text: string }) => {
  return (
    <div className="text-white  text-lg font-semibold border bg-gradient-to-r from-lime-700 to-green-700  rounded-md my-2 border-lime-300 shadow-xl p-3 px-4 flex flex-row gap-3 items-center justify-start w-full">
      <div className="grow-0 h-14 flex flex-col items-center justify-center">
        <SquareCheckBig />
      </div>
      {text}
    </div>
  );
};

export default BonusCard;
