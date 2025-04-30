import { useEffect, useState } from "react";
import { useAudio } from "../context/AudioContext";

const Layout = () => {
  const audio = useAudio();
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [audio]);

  return (
    <div className="grid justify-end p-4">
      <img
        width="36"
        height="36"
        src={isPlaying ? "/play.png" : "/pause.png"}
        alt="Music Control"
        className="color-[#CFDCDC] cursor-pointer"
        onClick={toggleAudio}
      />
    </div>
  );
};

export default Layout;
