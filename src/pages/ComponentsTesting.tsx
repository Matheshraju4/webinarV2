import BonusSection from "../components/BonusSection";
import Button from "../components/Button";
import Faq from "../components/Faq";
import GetTheseValue from "../components/GetTheseValue";
import MeetMentor from "../components/MeetMentor";
import RunningText from "../components/MovingHeader";
import PrivacyPolicy from "../components/PrivacyPolicy";
import ProblemSection from "../components/ProblemSection";
import RunningImages from "../components/RunningImages";
import Carousel from "../components/SlideImage";
import SmallCard from "../components/SmallCard";
import Text from "../components/Text";
import Timer from "../components/Timer";
import WhatYoulearn from "../components/TopWhatyoulearn";
import VideoPlayer from "../components/VideoPlayer";
import WorkShop from "../components/WorkShop";

const ComponentsTesting = () => {
  return (
    <div className=" h-full bg-black w-full md:px-20 relative">
      <RunningText text="Make Money While You Sleep with the Secrets of Indian Dropshipping!!" />
      <Text
        type="none"
        Text="Unlock the Proven Strategies for Indian Dropshipping to Make Six Figure Income Every Month by Launching your First or Next Dropshipping store in India."
      />
      <Text
        type="description"
        Text="1128+ Our participants untapped potential of E-commerce dropshipping in India's booming online market using Faceboook meta ads to make a sustainable six figure income stream through dropshipping in India"
      />

      <SmallCard date="March 1, 2023" time="10:00 AM" />
      <VideoPlayer />
      <Button
        gradient={true}
        navigateTo="/userInfo"
        text="BOOK MY SPOT NOW
        (Only ₹99)"
        lessPadding={true}
      />
      <WhatYoulearn />
      <Button
        gradient={false}
        navigateTo="/userInfo"
        text="JOIN THE INDIAN DROPSHIPPING WORKSHOP NOW
          (Only ₹99)"
        lessPadding={true}
      />
      <ProblemSection />
      <GetTheseValue />
      <Button
        gradient={false}
        navigateTo="/userInfo"
        text="JOIN THE INDIAN DROPSHIPPING WORKSHOP NOW (Only ₹99)"
        lessPadding={true}
      />
      <Carousel />
      <Button
        gradient={false}
        navigateTo="/userInfo"
        text="BOOK MY SPOT NOW
        (Only ₹99)"
      />
      <MeetMentor />

      <BonusSection />
      <Faq />
      <Button
        gradient={false}
        navigateTo="/userInfo"
        text="JOIN THE INDIAN DROPSHIPPING WORKSHOP NOW (Only ₹99)"
        lessPadding={true}
      />
      <PrivacyPolicy />
      <Timer />
    </div>
  );
};

export default ComponentsTesting;
