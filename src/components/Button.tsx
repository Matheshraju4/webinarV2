import { useNavigate } from "react-router-dom";

const Button = ({
  gradient,
  navigateTo,
  text,
  text2,
  lessPadding,
}: {
  gradient: boolean;
  navigateTo: string;
  text: string;
  text2?: string;
  lessPadding?: boolean;
}) => {
  let buttonClass = "";
  const navigate = useNavigate();
  switch (gradient) {
    case true:
      buttonClass =
        "bg-gradient-to-tr from-orange-500  to-red-500 text-white rounded-3xl px-16 font-bold text-shadow-2xl py-1 text-lg md:text-2xl";

      break;

    default:
      buttonClass =
        "bg-white  py-2 md:py-1 text-lg md:text-2xl font-bold text-black rounded-3xl px-16 ";
      break;
  }

  if (lessPadding === true && gradient === false) {
    buttonClass =
      "bg-white  py-2 md:py-1 text-lg md:text-2xl font-semibold text-black rounded-3xl px-5 font-normal";
  } else if (lessPadding === true && gradient === true) {
    buttonClass =
      "bg-gradient-to-tr from-orange-500  to-red-500 text-white rounded-3xl px-5 md:px-16 font-bold text-shadow-2xl py-1 text-lg md:text-2xl flex flex-col items-center justify-center";
  }
  return (
    <div className="flex flex-col w-full items-center justify-center px-3">
      <button
        onClick={() => {
          navigate(navigateTo);
        }}
        className={buttonClass}
      >
        {text}
        <p className="font-normal text-md">{text2}</p>
      </button>
    </div>
  );
};

export default Button;
