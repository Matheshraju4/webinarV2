import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import BonusSection from "../components/BonusSection";
import Button from "../components/Button";
import Faq from "../components/Faq";
import GetTheseValue from "../components/GetTheseValue";
import MeetMentor from "../components/MeetMentor";
import RunningText from "../components/MovingHeader";
import PrivacyPolicy from "../components/PrivacyPolicy";
import ProblemSection from "../components/ProblemSection";

import Carousel from "../components/SlideImage";
import SmallCard from "../components/SmallCard";
import Text from "../components/Text";
import Timer from "../components/Timer";
import WhatYoulearn from "../components/TopWhatyoulearn";
import VideoPlayer from "../components/VideoPlayer";

const ComponentsTesting = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full bg-black w-full md:px-20 relative">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        <>
          <RunningText text="Make Money While You Sleep with the Secrets of Indian Dropshipping!!" />
          <Text
            type="none"
            Text="Unlock the Proven Strategies for Indian Dropshipping to Make Six Figure Income Every Month. "
          />
          <Text
            type="description"
            Text="1128+ Our participants untapped potential of E-commerce dropshipping in India's booming online market using Faceboook meta ads to make a sustainable six figure income stream through dropshipping in India"
          />
          <SmallCard date="Jul 13, 2024" time="7:30 PM" />
          <VideoPlayer />
          {/* <ButtonV2
            text="BOOK MY SPOT NOW"
            textsm="(Only ₹99)"
            navigateTo="/userInfo"
          /> */}
          <Button
            gradient={false}
            navigateTo="/userInfo"
            text="BOOK MY SPOT NOW "
            text2="(Only ₹99)"
          />
          <WhatYoulearn />
          {/* <ButtonW
            text="JOIN THE INDIAN DROPSHIPPING WORKSHOP NOW "
            textsm="(Only ₹99)"
            navigateTo="/userInfo"
          /> */}
          <Button
            gradient={false}
            navigateTo="/userInfo"
            text="JOIN THE INDIAN DROPSHIPPING WORKSHOP NOW"
            lessPadding={true}
            text2="(Only ₹99)"
          />
          <ProblemSection />
          <GetTheseValue />
          <Button
            gradient={false}
            navigateTo="/userInfo"
            text="JOIN THE INDIAN DROPSHIPPING WORKSHOP NOW "
            lessPadding={true}
            text2="(Only ₹99)"
          />
          <Carousel />
          <Button
            gradient={false}
            navigateTo="/userInfo"
            text="BOOK MY SPOT NOW "
            text2="(Only ₹99)"
          />

          <BonusSection />
          <MeetMentor />
          <Faq />
          <Button
            gradient={false}
            navigateTo="/userInfo"
            text="JOIN THE INDIAN DROPSHIPPING WORKSHOP NOW "
            lessPadding={true}
            text2="(Only ₹99)"
          />
          <PrivacyPolicy />

          <Timer />
        </>
      )}
    </div>
  );
};

export default ComponentsTesting;
