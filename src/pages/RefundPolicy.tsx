const RefundPolicy = () => {
  const refundPolicy = [
    {
      heading: "Program or Assignment Completion",
      subheading: "",
      description: [
        "You must have completed the entire program or assignment for which you are seeking a refund. We believe in the value of our content and want to ensure that you have had the opportunity to fully engage with it.",
      ],
    },
    {
      heading: "Proof of Completion",
      subheading: "",
      description: [
        "You will need to provide proof of completion. This can include certificates of completion, submission records, or any other documentation that demonstrates your participation and engagement with the program or assignment.",
      ],
    },
    {
      heading: "Within 30 Days",
      subheading: "",
      description: [
        "Refund requests must be made within 30 days from the date of completion of the program or assignment. After this period, we will not be able to process a refund.",
      ],
    },
    {
      heading: "How to Request a Refund",
      subheading: "",
      description: [
        "Contact Customer Support: Reach out to our customer support team via email at alagan@deltartstore.shop. Please provide your name, order number, and a detailed explanation of why you are requesting a refund.",
        "Review Process: Our customer support team will review your request which can take up to 10 business days and may reach out to you for additional information or clarification if necessary.",
        "Refund Approval: If your request meets the eligibility criteria, and it is approved, we will process your refund within 10-14 business days. You will receive an email notification once the refund has been issued.",
      ],
    },
    {
      heading: "Non-Refundable Items",
      subheading: "",
      description: [
        "Please note that the following items are non-refundable:",
        "Digital products and downloadable resources.",
        "Services that have been fully rendered.",
        "Services delivered outside the 30-day refund window.",
      ],
    },
    {
      heading: "Contact Information",
      subheading: "",
      description: [
        "If you have any questions or need further assistance regarding our refund policy, please contact us:",
        "Email: alagan@deltartstore.shop",
      ],
    },
    {
      heading: "Changes to the Refund Policy",
      subheading: "",
      description: [
        "We have the right to modify or update this refund policy at any time. Any changes will be effective immediately and will be posted on our website.",
      ],
    },
  ];
  return (
    <div className="text-white flex flex-col items-center justify-center p-2 md:px-20">
      <h1 className="text-2xl md:text-4xl font-bold">REFUNDS POLICY</h1>

      <h2 className="text-md md:text-xl text-center font-semibold">
        AT INDIAN DROPSHIPPING WE ARE COMMITTED TO PROVIDING OUR CLIENTS WITH
        HIGH-QUALITY COACHING SERVICES THAT EMPOWER THEM TO ACHIEVE THEIR GOALS
        AND ASPIRATIONS IN THE ONLINE WORLD. WE UNDERSTAND THAT SOMETIMES
        CIRCUMSTANCES MAY CHANGE, AND YOU MAY NEED TO REQUEST A REFUND FOR A
        PROGRAM OR ASSIGNMENT YOU HAVE PURCHASED FROM US. WE WANT TO MAKE THIS
        PROCESS AS TRANSPARENT AND STRAIGHTFORWARD AS POSSIBLE.{" "}
      </h2>
      <h3 className="text-lg md:text-xl font-semibold">REFUND ELIGIBILITY</h3>
      <h3 className="text-lg md:text-xl font-semibold">
        TO BE ELIGIBLE FOR A REFUND, YOU MUST MEET THE FOLLOWING CRITERIA:
      </h3>
      <ul className="p-2">
        {refundPolicy.map((content, index) => (
          <li key={index} className="p-2">
            <h1 className="text-xl md:text-2xl font-bold p-2">
              {content.heading}
            </h1>
            {content.description.map((value) => (
              <p className="text-md md:text-lg px-6">{value}</p>
            ))}
          </li>
        ))}
      </ul>
      <h3 className="text-lg md:text-xl font-semibold text-center">
        YOUR SATISFACTION IS OUR TOP PRIORITY, AND WE ARE DEDICATED TO ENSURING
        YOU RECEIVE THE BEST POSSIBLE COACHING SERVICES. IF YOU HAVE ANY
        CONCERNS OR ISSUES, PLEASE DON’T HESITATE TO REACH OUT TO US. WE
        APPRECIATE YOUR TRUST IN US AND ARE HERE TO ASSIST YOU EVERY STEP OF THE
        WAY.
      </h3>
    </div>
  );
};

export default RefundPolicy;
