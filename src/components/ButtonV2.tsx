import { useNavigate } from "react-router-dom";

const ButtonV2 = ({
  text,
  textsm,
  navigateTo,
}: {
  text: string;
  textsm?: string;
  navigateTo: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full items-center justify-center px-6">
      <button
        onClick={() => navigate(navigateTo)}
        className="bg-gradient-to-br  from-red-500 from-40% to-yellow-500 text-white rounded-full px-10 font-normal text-shadow-2xl py-1 text-lg md:text-2xl w-full"
      >
        <p className="text-center font-bold">{text}</p>
        <p className="text-center text-md">{textsm}</p>
      </button>
    </div>
  );
};

export default ButtonV2;
