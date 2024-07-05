import GetvalueCard from "./GetValueCard";

const GetTheseValue = () => {
  const GetTheseValue = [
    {
      value: "1",
      content:
        "Got an insight about Indian dropshipping and start your dropshipping business in less than 3 days - GUARANTEED!",
    },
    {
      value: "2",
      content:
        "Instantly boost your dropshipping business revenue by 2x-3x without adding any extra expenses.",
    },
    {
      value: "3",
      content:
        "Make money from anywhere & anytime you need a laptop and strong internet connection.",
    },
    {
      value: "4",
      content:
        "Step-by-step framework to build a dropshipping store you want that brings you a flow of sales.",
    },
    {
      value: "5",
      content:
        "Build a passive income more than your 9-5 job (Consistent and Applying principles learned in this webinar to make six figures).",
    },
    {
      value: "6",
      content:
        "Don’t need inventory & warehouse to start an Indian dropshipping business.",
    },
  ];

  return (
    <div className="flex bg-black flex-col items-center justify-center  px-2 py-5 md:py-10">
      <h1 className="text-white font-bold text-center  text-xl md:text-4xl p-3 px-5 py-5">
        YOU CAN GET THESE VALUES AFTER THIS WORKSHOP
      </h1>
      <div className=" flex-col items-center justify-center md:grid md:grid-cols-2 gap-3 w-full">
        {GetTheseValue.map((content) => (
          <GetvalueCard content={content.content} value={content.value} />
        ))}
      </div>
    </div>
  );
};

export default GetTheseValue;
