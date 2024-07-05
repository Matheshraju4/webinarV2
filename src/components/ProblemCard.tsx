const ProblemCard = ({ text }: { text: string }) => {
  return (
    <div className="text-white  text-lg font-semibold border bg-gradient-to-r from-black to-red-800  rounded-xl my-2 border-red-300 shadow-xl p-3 px-4 flex flex-row gap-3 items-center justify-start w-full">
      <div className="grow-0 h-14 flex flex-col items-center justify-center">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      {text}
    </div>
  );
};

export default ProblemCard;
