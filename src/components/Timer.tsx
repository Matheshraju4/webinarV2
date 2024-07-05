import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes]);

  return (
    <div className="p-2 pb-0 fixed bottom-0 w-full md:right-0 md:max-w-sm">
      <div className="  bg-gradient-to-br from-black to-red-900 flex flex-row gap-2 w-full text-white border border-red-800 rounded-xl p-2">
        <div className="flex flex-col gap-2 flex-1 items-center justify-center">
          <h1 className="text-md font-bold text-left">OFFER ENDS IN</h1>
          <div className="flex flex-row gap-4">
            <div>
              <div className="w-10 h-8 bg-slate-200 rounded-xl flex flex-col justify-center items-center text-xl font-bold text-black">
                00
              </div>
              <p className="text-center text-sm">Hours</p>
            </div>
            <div>
              <div className="w-10 h-8 bg-slate-200 rounded-xl flex flex-col justify-center items-center text-xl font-bold text-black">
                {minutes < 10 ? "0" + minutes : minutes}
              </div>
              <p className="text-center text-sm">Minutes</p>
            </div>
            <div>
              <div className="w-10 h-8 bg-slate-200 rounded-xl flex flex-col justify-center items-center text-xl font-bold text-black">
                {seconds < 10 ? "0" + seconds : seconds}
              </div>
              <p className="text-center text-sm">Seconds</p>
            </div>
          </div>
        </div>
        <div className="w-34 flex flex-col items-center justify-center">
          <button
            className="w-full bg-white text-black p-2 text-md rounded-xl mr-2 font-extrabold"
            onClick={() => {
              navigate("/userInfo");
            }}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
