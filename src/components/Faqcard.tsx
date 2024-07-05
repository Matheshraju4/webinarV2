import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FaqcardProps {
  question: string;
  answer: string;
}
const Faqcard = ({ question, answer }: FaqcardProps) => {
  const [direction, setdirection] = useState(false);
  return (
    <div className="w-full">
      <div className="text-white text-lg font-light border border-gray-700 rounded-xl  overflow-hidden  w-full p-4 ">
        <div className="flex flex-row justify-between items-center">
          <p className="pb-3">{question}</p>

          {direction ? (
            <ChevronUp onClick={() => setdirection(!direction)} />
          ) : (
            <ChevronDown onClick={() => setdirection(!direction)} />
          )}
        </div>
        {direction && <p className="text-gray-400">{answer}</p>}
      </div>
    </div>
  );
};

export default Faqcard;
