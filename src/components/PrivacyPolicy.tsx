import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center md:flex-row p-5">
      <div
        onClick={() => {
          navigate("/privacypolicy");
        }}
        className="text-white underline  p-2 text-center hover:cursor-pointer"
      >
        Privacy Policy
      </div>
      <div
        onClick={() => {
          navigate("/TermsAndConditions");
        }}
        className="text-white underline  p-2 text-center hover:cursor-pointer"
      >
        Terms And Conditions
      </div>
      <div
        onClick={() => {
          navigate("/refundpolicy");
        }}
        className="text-white underline  p-2 text-center hover:cursor-pointer"
      >
        Refund Policy
      </div>
      <div
        onClick={() => {
          navigate("/contactus");
        }}
        className="text-white underline  p-2 text-center hover:cursor-pointer"
      >
        Contact Us
      </div>
    </div>
  );
};

export default PrivacyPolicy;
