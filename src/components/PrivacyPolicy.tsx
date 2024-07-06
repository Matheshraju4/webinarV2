import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/privacypolicy");
      }}
      className="text-white underline  p-4 text-center md:pb-16 pb-32 hover:cursor-pointer"
    >
      PrivacyPolicy
    </div>
  );
};

export default PrivacyPolicy;
