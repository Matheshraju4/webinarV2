import { razorpaypaymentId } from "../lib/atom";
import { useRecoilValue } from "recoil";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const paymentId = useRecoilValue(razorpaypaymentId);

  if (localStorage.getItem("paymentId") || paymentId) {
    return (
      <div className=" text-white h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-gradient-to-r from-lime-500 to-green-500  w-full max-w-3xl text-black p-5 rounded-xl font-bold text-center md:text-3xl text-xl ">
          <p className="p-1 text-white ">
            Join this WhatsApp Group for more updates
          </p>
          <p className="md:text-lg text-md font-light"></p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <Button
            onClick={() =>
              navigate("https://chat.whatsapp.com/LAhlJlkxM5C56kWhb1hIQ2")
            }
            className="p-3 px-6 mt-3 bg-green-50 text-black rounded-xl"
          >
            Join Now
          </Button>
        </div>
      </div>
    );
  } else
    return (
      <>
        <div>CheckOut Failed </div>
      </>
    );
};

export default CheckOut;
