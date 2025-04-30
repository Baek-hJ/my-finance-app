import { useNavigate } from "react-router-dom";
import { useAudio } from "../context/AudioContext";

const Start = () => {
  const navigate = useNavigate();
  const audio = useAudio();
  const startSound = new Audio("/start-sound.mp3");

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  return (
    <div className="min-w-screen min-h-screen md:w-screen md:h-screen bg-[#DBE9E9] flex flex-col items-center justify-center">
      <img
        src="/folder.png"
        alt="Folder"
        className="h-[13rem] cursor-pointer m-[1rem]"
        onClick={() => {
          startSound.play();
          audio.play();
          navigate("/home");
        }}
      />
      <h1 className="text-5xl font-sans font-bold">my-finance-app</h1>
    </div>
  );
};

export default Start;
