import { useNavigate } from "react-router-dom";

const Button = ({
  gradient,
  navigateTo,
  text,
  lessPadding,
}: {
  gradient: boolean;
  navigateTo: string;
  text: string;
  lessPadding?: boolean;
}) => {
  let buttonClass = "";
  const navigate = useNavigate();
  switch (gradient) {
    case true:
      buttonClass =
        "bg-gradient-to-tr from-orange-500  to-red-500 text-white rounded-full px-16 font-bold text-shadow-2xl py-3 text-lg md:text-2xl";

      break;

    default:
      buttonClass =
        "bg-white  py-2 md:py-3 text-lg md:text-2xl  text-black rounded-full px-16 font-normal";
      break;
  }

  if (lessPadding === true && gradient === false) {
    buttonClass =
      "bg-white  py-2 md:py-3 text-lg md:text-2xl  text-black rounded-full px-10 font-normal";
  } else if (lessPadding === true && gradient === true) {
    buttonClass =
      "bg-gradient-to-tr from-orange-500  to-red-500 text-white rounded-full px-10 font-bold text-shadow-2xl py-3 text-lg md:text-2xl";
  }
  return (
    <div className="flex flex-col w-full items-center justify-center ">
      <button
        onClick={() => {
          navigate(navigateTo);
        }}
        className={buttonClass}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
