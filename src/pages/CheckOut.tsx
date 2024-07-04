import React from "react";
import { razorpaypaymentId } from "../lib/atom";
import { useRecoilState } from "recoil";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const [paymentId, setpaymentId] = useRecoilState(razorpaypaymentId);
  if (localStorage.getItem("paymentId") || paymentId) {
    return (
      <div className=" text-white h-screen flex flex-col items-center justify-center">
        <div className="bg-green-50  w-full max-w-3xl text-black p-5 rounded-xl font-bold text-center text-3xl ">
          <p className="p-1"> CheckOut Successfull</p>
          <p className="text-lg font-light">
            Join this WhatsApp Group for more updates
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <Button
            onClick={() => navigate("/dashboard")}
            className="p-3 mt-3 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl"
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
