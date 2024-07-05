import { useNavigate } from "react-router-dom";

const ButtonW = ({
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
    <div className="flex flex-col w-full items-center justify-center px-2">
      <button
        onClick={() => navigate(navigateTo)}
        className="bg-white text-black  rounded-full px-5 font-normal text-shadow-2xl py-1 text-lg md:text-2xl w-full"
      >
        <p className="text-center font-bold">{text}</p>
        <p className="text-center text-md">{textsm}</p>
      </button>
    </div>
  );
};

export default ButtonW;
