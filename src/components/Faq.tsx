import React from "react";
import Faqcard from "./Faqcard";
import Button from "./Button";
const faqData = [
  {
    question: "What is dropshipping, and how to start in India?",
    answer:
      "Dropshipping is an e-commerce business where you can sell products directly to the customer from the supplier without storing inventory at your place.",
  },
  {
    question: "What do I need to start dropshipping in India?",
    answer: "You need a laptop/PC and a good internet connection.",
  },
  {
    question: "Do I need space to store inventory?",
    answer:
      "No, you can ship products directly from the supplier to the customer.",
  },
  {
    question: "Can I do dropshipping part-time?",
    answer:
      "Yes, you can start part-time and switch to full-time according to your needs.",
  },
  {
    question: "How long does it take to make money?",
    answer:
      "You can start making money from the beginning and increase according to your cash flow.",
  },
  {
    question: "Is dropshipping working in India?",
    answer:
      "Yes, it's been working since 2023 and is slowly booming in the Indian marketplace.",
  },
  {
    question: "I made the payment but didn't receive the email?",
    answer:
      "Please write to alagan@deltartstore.shop and our awesome support team will get back to you within 6 hours.",
  },
  {
    question: "What is the time zone?",
    answer: "PST (Pacific Standard Time).",
  },
];

const Faq = () => {
  return (
    <div className=" p-5 flex flex-col items-center justify-center bg-black ">
      <h1 className="text-xl md:text-2xl font-semibold text-center text-white p-3 ">
        Frequently Asked Questions
      </h1>
      <div className="w-full flex flex-col items-center justify-center gap-3 md:grid md:grid-cols-2">
        {faqData.map((content, index) => (
          <Faqcard question={content.question} answer={content.answer} />
        ))}
      </div>

      <div
        className="w-full  max-w-4xl text-white p-5 rounded-lg mt-2 flex flex-col items-center justify-center gap-3 border border-lime-500"
        style={{ backgroundColor: "rgba(34, 197, 94, 0.3)" }}
      >
        <h1 className="text-xl md:text-2xl font-semibold w-full text-white p-3 text-left ">
          Still Not Convinced?
        </h1>
        <p>
          We take data security seriously. Our platform uses advanced encryption
          and security measures to protect your information and ensure your data
          is safe with us.
        </p>
        <Button gradient={false} />
      </div>
    </div>
  );
};

export default Faq;
