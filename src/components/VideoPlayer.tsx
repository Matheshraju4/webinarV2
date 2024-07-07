import { useState } from "react";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
import { ClipLoader } from "react-spinners";

const VideoPlayer = () => {
  const [loading, setLoading] = useState(true);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 648px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 649px) and (max-width: 1024px)",
  });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1025px)" });

  let playerWidth, playerHeight;
  if (isSmallScreen) {
    playerWidth = "100%";
    playerHeight = "200px";
  } else if (isMediumScreen) {
    playerWidth = "600px";
    playerHeight = "300px";
  } else if (isLargeScreen) {
    playerWidth = "800px";
    playerHeight = "450px";
  }

  return (
    <div className="flex flex-col justify-center items-center m-3">
      {loading && (
        <div className="flex justify-center items-center">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      )}
      <ReactPlayer
        width={playerWidth}
        height={playerHeight}
        url="https://vimeo.com/979864842"
        controls={true}
        pip={true}
        onReady={() => setLoading(false)}
      />
    </div>
  );
};

export default VideoPlayer;
