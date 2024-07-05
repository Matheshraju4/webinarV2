import Button from "./Button";
import ProblemCard from "./ProblemCard";

const ProblemSection = () => {
  const content = [
    { content: "Exclusive Supplier List", price: "" },
    {
      content: "80+ lakhs sales every product using Product Research Guide",
      price: "",
    },
    { content: "Private Whatsapp Group Access", price: "" },
    {
      content: "50+ lakhs sales every month Pre-designed Marketing Templates",
      price: "",
    },
    { content: "Lifetime Access to Webinar Recording", price: "" },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="w-full bg-gradient-to-br from-black to-red-900 rounded-xl border border-red-800 p-4 "
        style={{ backgroundColor: "rgba(34, 197, 94, 0.3)" }}
      >
        <h1 className="text-white text-xl md:text-3xl text-center font-bold">
          Problems You may face
        </h1>
        <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 md:gap-4 md:p-4 w-full">
          {content.map((content, index) => (
            <ProblemCard key={index} text={content.content} />
          ))}
        </div>

        <Button
          gradient={false}
          navigateTo="/userInfo"
          text="BOOK MY SPOT NOW "
          text2="(Only ₹99)"
        />
      </div>
    </div>
  );
};

export default ProblemSection;
