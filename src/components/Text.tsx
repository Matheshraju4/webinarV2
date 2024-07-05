const Text = ({
  Text,
  type,
}: {
  Text: string;
  type: "description" | "none";
}) => {
  let className;
  switch (type) {
    case "description":
      className =
        "text-lg  text-white text-center px-3 font-light m-3 mb-5 md:text-2xl";
      break;

    default:
      className =
        "text-2xl font-semibold text-white text-center px-3 pt-10 p-4 pb-2 md:text-5xl";

      break;
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className={className}>
        <p>{Text}</p>
      </div>
    </div>
  );
};

export default Text;
