const MeetMentor = () => {
  const content = {
    name: "Tamilalagan",
    designation: "",
    description: [
      "Hello, I'm Tamilalagan, and I'm thrilled to be your mentor for this workshop!",
      "My journey has been anything but conventional. Despite being a below-average student in school, I've always had big dreams and an insatiable curiosity to try new things.",
      "However, my path has often been paved with failures, especially in my early attempts at making money through trading, cryptocurrencies, and content creation.",
      "After 12th grade, I faced immense family pressure to prepare for NEET/JEE exams, leading me to take several years off. During this challenging period, I stumbled upon the concept of ecommerce dropshipping—a business model where you run an online store without holding inventory.",
      "My initial attempts were met with failures and financial losses. Determined to succeed, I took a step back to thoroughly analyze the business model.",
      "I realized that my strategies were not aligned with what works in the Indian marketplace. With renewed focus, I sought guidance from various mentors and learned proven strategies tailored for India.",
      "These strategies transformed my approach and allowed me to achieve a significant amount of success, ultimately leading to a financially free life.",
      "I’m here to share my strategies and techniques that have worked for me. Let's see in the workshop to make money from dropshipping.",
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center md:py-5">
      <div className="max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-white p-3">
          Meet Your Mentor
        </h1>
        <div className="flex flex-col items-center justify-center text-white border border-lime-800 p-4 rounded-xl overflow-hidden">
          <div className="w-56 h-56 bg-blue-500 relative rounded-full">
            <img
              src="./mentor.jpg"
              className="w-56 h-56 bg-blue-500 relative rounded-full"
            />
            <div className="absolute bottom-0 right-0 bg-black left-0 text-center">
              <p>{content.name}</p>
              <p>{content.designation}</p>
            </div>
          </div>

          <div className="text-md md:text-lg font-thin text-center pt-3">
            {content.description.map((point, index) => (
              <p
                key={index}
                className={index === 0 ? "font-semibold mb-1" : "mb-1"}
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetMentor;
