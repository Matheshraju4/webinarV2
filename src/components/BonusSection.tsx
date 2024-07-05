import BonusCard from "./BonusCard";
import Button from "./Button";

const BonusSection = () => {
  const content = [
    { content: "Exclusive Supplier List", price: "₹5,000" },
    {
      content: "80+ lakhs sales every product using Product Research Guide",
      price: "₹9,000",
    },
    { content: "Private Whatsapp Group Access", price: "₹2,500" },
    {
      content: "50+ lakhs sales every month Pre-designed Marketing Templates",
      price: "₹6,000",
    },
    { content: "Lifetime Access to Webinar Recording", price: "₹1,500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="border border-lime-400 rounded-xl  md:w-full p-4 "
        style={{ backgroundColor: "rgba(34, 197, 94, 0.3)" }}
      >
        <h1 className="text-white text-xl md:text-3xl text-center font-bold">
          And also enjoy the Bonuses worth ₹8000:
        </h1>
        <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 md:gap-4 md:p-4 w-full">
          {content.map((content, index) => (
            <BonusCard
              key={index}
              text={content.content}
              price={content.price}
            />
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

export default BonusSection;
