import React from "react";

const MeetMentor = () => {
  const content = {
    name: "Vaibhav Sisinty",
    desgination: "Software Engineer",
    description:
      " Hey Folks, I’m Vaibhav Sisinty, and I’m super excited to be yourmentor for this workshop. Previously, I worked with Uber (India &LATAM), contributing to the company's growth from hundreds to millionsof daily trips. Then I contributed to business operations for unicorntravel startup Klook in India and the Middle East, achieving 5xbusiness growth within just 12 months. During the pandemic, I startedGrowthSchool and within 2 years, expanded the team to 170+ memberswith marquee investors like Sequoia and Owl Ventures investing over $5million into GrowthSchool. I’ve helped 100,000+ learners through myLinkedIn and Growth Hacking program. And, I’ve also helped more than 1million people leverage the power of Generative AI and ChatGPT.",
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-4xl  ">
        <h1 className="text-xl md:text-2xl font-semibold text-center text-white p-3">
          Meet Your Mentor
        </h1>
        <div className="flex flex-col items-center justify-center text-white  border border-lime-400 p-5 rounded-md overflow-hidden">
          <div className="w-56 h-56 bg-blue-500 relative rounded-full">
            <img
              src="./vite.svg"
              className="w-56 h-56 bg-blue-500 relative rounded-full"
            />
            <div className="absolute bottom-0 right-0 bg-black left-0 text-center ...">
              <p>{content.name}</p>
              <p>{content.desgination}</p>
            </div>
          </div>

          <div className="text-md md:text-lg font-thin text-center pt-3">
            {content.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetMentor;
