import { SquareCheckBig } from "lucide-react";
const BonusCard = ({ text, price }: { text: string; price: string }) => {
  return (
    <div className="text-white  text-lg font-semibold border bg-gradient-to-r from-lime-700 to-green-700  rounded-xl my-2 border-lime-300 shadow-xl p-3 px-4 flex flex-row gap-3 items-center justify-start w-full relative">
      <div className="grow-0 h-14 flex flex-col items-center justify-center">
        <SquareCheckBig />
      </div>
      {text}
      {/* <Label price={price} /> */}
    </div>
  );
};

export default BonusCard;

function Label({ price }: { price: string }) {
  return (
    <div className=" text-sm font-normal rounded-xl px-4 bg-gradient-to-tr from-orange-500  to-red-500 absolute top-0 right-1 ">
      {price}
    </div>
  );
}
