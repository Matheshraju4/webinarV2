import WhatYoulearnCard from "./WhatYoulearnCard";

const WhatYoulearn = () => {
  const content = [
    {
      heading: "Top 3 Magic Methods - Winning Product Strategies",
      subheading:
        "Unlock the magic methods to find a winning product for your Indian Dropshipping Store (Using free tools and Organic Methods).",
      liarray: [],
    },
    {
      heading: "30+ Lakh Sales Dropshipping Store Framework",
      subheading:
        "Learn step-by-step how to build a successful dropshipping store website for the Indian Marketplace to make a minimum of 30+ lakh sales every month (Using free themes).",
      liarray: [],
    },
    {
      heading: "Facebook Ads for Skyrocket Sales",
      subheading: "Leveraging Facebook meta ads to make 8-12 ROAS every day.",
      liarray: [],
    },
    {
      heading: "Secret Editing Format for Dropshipping Facebook Ads",
      subheading:
        "Learn the secret editing technique to create a unique Facebook ad creative that helps to make 2+ lakh sales every day.",
      liarray: [],
    },
    {
      heading: "Killer Strategies <1% Indian Dropshippers Know",
      subheading:
        "5 Proven strategies to succeed in Indian Dropshipping (These strategies are used by less than 1% of Indian dropshippers).",
      liarray: [],
    },
  ];

  return (
    <div className="mt-5  p-4 px-2">
      <h1 className="text-xl md:text-2xl font-bold text-center text-white p-5 ">
        Here’s What You’ll Learn in the 3-Hour Workshop
        <div className="flex md:grid md:grid-cols-2 flex-col gap-5 items-center justify-center">
          {content.map((content, index) => (
            <WhatYoulearnCard
              heading={content.heading}
              subheading={content.subheading}
              liarray={content.liarray}
            />
          ))}
        </div>
      </h1>
    </div>
  );
};

export default WhatYoulearn;
